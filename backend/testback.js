import { 
    allFilmsSortedByProjectionDate, 
    allActivitesSortedByDate, 
    allInvitesSortedAlpha, 
    filmById, 
    activiteById, 
    inviteById, 
    activitesByInviteId, 
    activitesByInviteNom, 
    modifyAnyRecord, 
    findUserByEmail,
    loginWithEmail,
    testUsersCollection
    } 
    from "./backend.mjs";

  
//   // Test pour obtenir tous les films triés par date de projection --- FONCTIONNE

//   try {
//     const films = await allFilmsSortedByProjectionDate();
//     console.log("Films triés par date de projection :", JSON.stringify(films, null, 2));
//   } catch (e) {
//     console.error('Erreur lors de la récupération des films triés par date de projection :', e);
//   }
  


//   // Test pour obtenir toutes les activités triées par date --- FONCTIONNE 

//   try {
//     const activites = await allActivitesSortedByDate();
//     console.log("Activités triées par date :", JSON.stringify(activites, null, 2));
//   } catch (e) {
//     console.error('Erreur lors de la récupération des activités triées par date :', e);
//   }
  


//   // Test pour obtenir tous les acteurs / réalisateurs triés par ordre alphabétique --- FONCTIONNE

//   try {
//     const invites = await allInvitesSortedAlpha();
//     console.log("Invités triés alphabétiquement :", JSON.stringify(invites, null, 2));
//   } catch (e) {
//     console.error('Erreur lors de la récupération des invités triés alphabétiquement :', e);
//   }


  
//    // Test pour obtenir les informations d'un film par ID --- FONCTIONNE

//   try {
//     const film = await filmById('i626b931p4pm235'); // Remplacer par un ID valide
//     console.log("Film avec ID :", JSON.stringify(film, null, 2));
//   } catch (e) {
//     console.error('Erreur lors de la récupération du film par ID :', e);
//   }
  



  // Test pour obtenir les informations d'une activité par ID --- FONCTIONNE

//   try {
//     const activite = await activiteById('3n60l24lcx2kb62'); // Remplacer par un ID valide
//     console.log("Activité avec ID :", JSON.stringify(activite, null, 2));
//   } catch (e) {
//     console.error('Erreur lors de la récupération de l\'activité par ID :', e);
//   }
  



//   // Test pour obtenir les informations d'un acteur / réalisateur par ID --- FONCTIONNE

//   try {
//     const invite = await inviteById('aitetc8myd8spxa'); // ID
//     if (invite) {
//       // Si l'invité est trouvé et est acteur ou réalisateur
//       console.log("Invité avec ID :", JSON.stringify(invite, null, 2));
//     } else {
//       // Si l'invité n'est ni acteur ni réalisateur
//       console.log("Cet invité n'est ni un acteur ni un réalisateur.");
//     }
//   } catch (e) {
//     // autre erreur
//     console.error('Erreur lors de la récupération de l\'invité par ID :', e);
//   }
  



//   // Test pour obtenir toutes les activités d'un animateur par son ID --- FONCTIONNE

//   try {
//     const activitesAnimateur = await activitesByInviteId('aitetc8myd8spxa'); // ID animateur
//     console.log("Activités de l'animateur avec ID :", JSON.stringify(activitesAnimateur, null, 2));
//   } catch (e) {
//     console.error('Erreur lors de la récupération des activités de l\'animateur par ID :', e);
//   }
  


// // Test pour obtenir toutes les activités d'un animateur par son nom --- FONCTIONNE

// try {
//     const activitesAnimateurNom = await activitesByInviteNom('PERIER'); // nom valide
//     console.log("Activités de l'animateur avec nom :", JSON.stringify(activitesAnimateurNom, null, 2));
//   } catch (e) {
//     console.error('Erreur lors de la récupération des activités de l\'animateur par nom :', e);
//   }



// // Test pour modifier un film (en utilisant l'ID existant)
// try {
//     const data = { 
//         titre_film: "TEST-FILM" // Les données à mettre à jour
//     };
//     const records = await modifyAnyRecord("Film", "xl81ao88muzvlud", data); // 1ere entrée : collection à modifier, 2e entrée : ID de l'entrée à modifier.
//     console.log(records); // Affiche les données modifiées
// } catch (error) {
//     console.error("Erreur lors de la modification de l'enregistrement : ", error);
// }


// ----------------------------------------------------------------------------- //

