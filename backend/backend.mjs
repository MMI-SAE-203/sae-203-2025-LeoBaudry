// backend.mjs
import PocketBase from 'pocketbase';
// const pb = new PocketBase('http://127.0.0.1:8090') ; POUR LE DEV LOCAL
const pb = new PocketBase('https://pb-sae-203.leo-baudry.fr');

// 1. Tous les films triés par date de projection
export async function allFilmsSortedByProjectionDate() {
  return await pb.collection('Film').getFullList({
    sort: 'date_projection_film'
  });
}

// 2. Toutes les activités triées par date
export async function allActivitesSortedByDate() {
  return await pb.collection('Activite').getFullList({
    sort: 'date_activite'
  });
}

// 3. Tous les acteurs / réalisateurs triés alphabétiquement par nom_invite
export async function allInvitesSortedAlpha() {
    return await pb.collection('Invites').getFullList({
      sort: 'nom_invite', // Tri par nom_invite
      filter: 'role_invite="Acteur" || role_invite="Réalisateur"' // Filtre pour ne récupérer que les acteurs et réalisateurs
    });
  }
  
// 4. Infos d’un film par ID
export async function filmById(id) {
  return await pb.collection('Film').getOne(id);
}

// 5. Infos d’une activité par ID
export async function activiteById(id) {
  return await pb.collection('Activite').getOne(id);
}

// 6. Infos d’un acteur / réalisateur par ID
export async function inviteById(id) {
    const invite = await pb.collection('Invites').getOne(id);
  
    // Vérifie si l'invité est un acteur ou un réalisateur
    if (invite.role_invite === "Acteur" || invite.role_invite === "Réalisateur") {
      return invite; 
    } else {
      // si ce n'est pas un acteur ou un réalisateur
      return null;
    }
  }

// 7. Activités d’un animateur par son ID
export async function activitesByInviteId(inviteId) {
  return await pb.collection('Activite').getFullList({
    filter: `invite = "${inviteId}"`
  });
}

// 8. Activités d’un animateur par son nom
export async function activitesByInviteNom(nom) {
    const invite = await pb.collection('Invites').getFirstListItem(`nom_invite="${nom}"`);
    if (!invite) {
      throw new Error(`Aucun animateur trouvé avec le nom ${nom}`);
    }
    return await pb.collection('Activite').getFullList({
      filter: `invite = "${invite.id}"`
    });
  }



// 9. Ajouter ou modifier les informations d’un film, activité ou invité
export async function modifyAnyRecord(collection, id, data) {
    const record = await pb.collection(collection).update(id, data);
    return record;
}


// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //


export const getFilms = async (collection = "film") => {
  try {
    const films = await pb.collection(collection).getFullList();
    const updatedFilms = films.map((film) => ({
      ...film,
      imageUrl: film.affiche_film ? pb.files.getURL(film, film.affiche_film) : null,    }));
    return updatedFilms;
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
    return [];
  }
};


// ----------------------------------------------------------------------------- //

export const oneFilm = async (id) => {
  try {
    const film = await pb.collection("film").getOne(id);
    
    // Assurez-vous de récupérer l'URL correcte pour l'affiche
    const imageUrl = pb.files.getURL(film, film.affiche_film, { thumb: "1024x1024" });
    const imageUrls = film.film_img ? film.film_img.map(img => pb.files.getURL(film, img)) : [];
    
    return {
      ...film,
      imageUrls,  
      imageUrl,  // Utilisez l'URL de l'affiche ici
    };
  } catch (error) {
    console.error("Erreur lors de la récupération du film :", error);
    return null;
  }
};

// ----------------------------------------------------------------------------- //

export const getInviteForFilm = async (filmId) => {
  try {
    if (!filmId) return null;
    
    // D'abord récupérer le film pour obtenir l'ID de l'invité
    const film = await pb.collection("Film").getOne(filmId);  // "film" au lieu de "Films"
    
    if (!film.invite_associe) return null;
    
    // Ensuite récupérer les informations de l'invité
    const invite = await pb.collection("Invites").getOne(film.invite_associe);
    
    // Récupération de l'URL de la photo de l'invité
    const photoUrl = invite.photo_invite 
      ? pb.files.getURL(invite, invite.photo_invite) 
      : null;
    
    return {
      ...invite,
      photoUrl
    };
  } catch (error) {
    console.error("Erreur lors de la récupération de l'invité associé au film :", error);
    return null;
  }
};
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //


export const getInvites = async (collection = "Invites") => {
  try {
    const invites = await pb.collection(collection).getFullList();
    const updatedInvites = invites.map((invite) => ({
      ...invite,
      photoUrl: invite.photo_invite ? pb.files.getURL(invite, invite.photo_invite) : null,

    }));
    return updatedInvites;
  } catch (error) {
    console.error("Erreur lors de la récupération des invités :", error);
    return [];
  }
};

// ----------------------------------------------------------------------------- //

  export const oneInvite = async (id) => {
    try {
      const invite = await pb.collection("Invites").getOne(id);
      
      // Récupération de l'URL de la photo
      const photoUrl = invite.photo_invite ? pb.files.getURL(invite, invite.photo_invite, { thumb: "1024x1024" }) : null;
      
      return {
        ...invite,
        photoUrl,
      };
    } catch (error) {
      console.error("Erreur lors de la récupération de l'invité :", error);
      return null;
    }
  };

  // ----------------------------------------------------------------------------- //


  export const getInviteContenuAssocie = async (inviteId) => {
    try {
      
      // Récupérer les films associés
      const filterFilm = `invite_associe = "${inviteId}"`;
      
      const filmsAssocies = await pb.collection("Film").getList(1, 50, {
        filter: filterFilm,
      });
            
      // Formater les films avec leurs URLs d'images
      const films = filmsAssocies.items.map(film => ({
        id: film.id,
        titre: film.titre_film,
        date: film.date_projection_film,
        imageUrl: film.affiche_film ? pb.files.getURL(film, film.affiche_film) : null,
        type: "film"
      }));
      
      // Récupérer les activités associées
      const filterActivite = `invite_associe = "${inviteId}"`;
      
      const activitesAssociees = await pb.collection("Activite").getList(1, 50, {
        filter: filterActivite,
      });

      // Formater les activités avec leurs URLs d'images
      const activites = activitesAssociees.items.map(activite => ({
        id: activite.id,
        titre: activite.titre_activite,
        date: activite.date_activite,
        imageUrl: activite.image_activite ? pb.files.getURL(activite, activite.image_activite) : null,
        type: "activite"
      }));
      
      const result = [...films, ...activites];
      console.log(`Total associated content: ${result.length}`);
      return result;
      
    } catch (error) {
      console.error("Erreur lors de la récupération des contenus associés :", error);
      // Log more detailed error information
      if (error.response) {
        console.error("Error response data:", error.response);
      }
      if (error.originalError) {
        console.error("Original error:", error.originalError);
      }
      return [];
    }
  };

  // ----------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------- //


  export const getActivites = async (collection = "Activite") => {
    try {
      const activites = await pb.collection(collection).getFullList();
      const updatedActivites = activites.map((activite) => ({
        ...activite,
        imageUrl: activite.image_activite ? pb.files.getURL(activite, activite.image_activite) : null,
      }));
      return updatedActivites;
    } catch (error) {
      console.error("Erreur lors de la récupération des activités :", error);
      return [];
    }
  };
  
  // ----------------------------------------------------------------------------- //
  
  export const oneActivite = async (id) => {
    try {
      const activite = await pb.collection("Activite").getOne(id);
      
      // Assurez-vous de récupérer l'URL correcte pour l'image principale
      const imageUrl = pb.files.getURL(activite, activite.image_activite, { thumb: "1024x1024" });
      const imageUrls = activite.activite_img ? activite.activite_img.map(img => pb.files.getURL(activite, img)) : [];
      
      return {
        ...activite,
        imageUrls,  
        imageUrl,  // Utilisez l'URL de l'image principale ici
      };
    } catch (error) {
      console.error("Erreur lors de la récupération de l'activité :", error);
      return null;
    }
  };

  // ----------------------------------------------------------------------------- //

  export const getInviteForActivite = async (activiteId) => {
    try {
      if (!activiteId) return null;
      
      // D'abord récupérer l'activité pour obtenir l'ID de l'invité
      const activite = await pb.collection("Activite").getOne(activiteId);
      
      if (!activite.invite_associe) return null;
      
      // Ensuite récupérer les informations de l'invité
      const invite = await pb.collection("Invites").getOne(activite.invite_associe);
      
      // Récupération de l'URL de la photo de l'invité
      const photoUrl = invite.photo_invite 
        ? pb.files.getURL(invite, invite.photo_invite) 
        : null;
      
      return {
        ...invite,
        photoUrl
      };
    } catch (error) {
      console.error("Erreur lors de la récupération de l'invité associé à l'activité :", error);
      return null;
    }
  };