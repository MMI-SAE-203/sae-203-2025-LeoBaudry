import PocketBase from 'pocketbase';
import { c as createSvgComponent } from './Layout_YhIJHJAB.mjs';

// backend.mjs
// const pb = new PocketBase('http://127.0.0.1:8090') ;
const pb = new PocketBase('https://pb-sae-203.leo-baudry.fr:443');


// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //


const getFilms = async (collection = "film") => {
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

const oneFilm = async (id) => {
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

const getInviteForFilm = async (filmId) => {
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


const getInvites = async (collection = "Invites") => {
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

  const oneInvite = async (id) => {
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


  const getInviteContenuAssocie = async (inviteId) => {
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


  const getActivites = async (collection = "Activite") => {
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
  
  const oneActivite = async (id) => {
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

  const getInviteForActivite = async (activiteId) => {
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

const IconClock = createSvgComponent({"meta":{"src":"/_astro/icon-clock.Bzx7cYDP.svg","width":60,"height":60,"format":"svg"},"attributes":{"mode":"inline","width":"60","height":"60","viewBox":"0 0 60 60","fill":"none"},"children":"\n<path d=\"M30 17.5V30L36.25 26.25M52.5 30C52.5 42.4265 42.4265 52.5 30 52.5C17.5736 52.5 7.5 42.4265 7.5 30C7.5 17.5736 17.5736 7.5 30 7.5C42.4265 7.5 52.5 17.5736 52.5 30Z\" stroke=\"black\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

export { IconClock as I, getActivites as a, oneFilm as b, getInviteForFilm as c, getFilms as d, oneInvite as e, getInviteContenuAssocie as f, getInviteForActivite as g, getInvites as h, oneActivite as o };
