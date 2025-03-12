// backend.mjs
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090') ;

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
      return invite; // Retourne l'invité si c'est un acteur ou un réalisateur
    } else {
      // Retourne null si ce n'est pas un acteur ou un réalisateur
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
      imageUrl: film.affiche_film ? pb.files.getUrl(film, film.affiche_film) : null, // Utilisation de 'affiche_film'
    }));
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
    const imageUrl = pb.files.getUrl(film, film.affiche_film, { thumb: "1024x1024" });
    
    const imageUrls = film.film_img ? film.film_img.map(img => pb.files.getUrl(film, img)) : [];
    
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
