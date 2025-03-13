import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { e as oneInvite, f as getInviteContenuAssocie, I as IconClock } from '../../chunks/icon-clock_CwXpFSuf.mjs';
import { $ as $$Layout } from '../../chunks/Layout_YhIJHJAB.mjs';
import { I as IconHouse } from '../../chunks/icon-house_BOKPkaOZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invite = await oneInvite(id);
  const contenusAssocies = await getInviteContenuAssocie(id);
  if (!invite) {
    console.error(`Invit\xE9 with id ${id} not found`);
    return Astro2.redirect("/invites");
  }
  const title = invite.prenom_invite + " " + invite.nom_invite;
  const description = `D\xE9couvrez "${invite.prenom_invite + " " + invite.nom_invite}" pendant ce festival !`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-30"> <!-- Navigation et Actions --> <div class="flex justify-between items-center mb-6 py-2"> <a href="/invites" class="text-gray-600 flex items-center gap-2"> <span class="text-red-600 font-semibold text-sm">←</span> <span class="text-red-600 font-semibold">Retour à la liste</span> </a> </div> <!-- Titre --> <div class="mb-6"> <h1 class="text-2xl lg:text-3xl font-semibold mb-1">${invite.prenom_invite} ${invite.nom_invite}</h1> <p class="text-gray-600 text-lg">${invite.role_invite}</p> </div> <!-- Container principal pour l'image et les informations --> <div class="flex flex-col lg:flex-row gap-8 pb-8"> <!-- Image principale --> <div class="mb-8 md:mb-0 max-w-md mx-auto"> ${invite.photoUrl ? renderTemplate`<img${addAttribute(invite.photoUrl, "src")}${addAttribute(`${invite.prenom_invite} ${invite.nom_invite} - Photo`, "alt")} class="w-full object-contain rounded-lg shadow-lg">` : renderTemplate`<div class="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-lg"> <span>Aucune photo disponible</span> </div>`} </div> <!-- Caractéristiques et Description --> <div class="flex-1"> <!-- Caractéristiques principales --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-white rounded-lg border border-orange-100 mb-8"> <!-- Lieu de naissance --> <div> <p class="text-gray-600 text-sm mb-2">Lieu de naissance</p> <div class="flex items-center gap-2"> <div> ${renderComponent($$result2, "IconHouse", IconHouse, { "class": "w-8 h-8" })} </div> <span class="font-semibold">${invite.ville_invite}</span> </div> </div> <!-- Date de naissance --> <div> <p class="text-gray-600 text-sm mb-2">Date de naissance</p> <div class="flex items-center gap-2"> <div> ${renderComponent($$result2, "IconClock", IconClock, { "class": "w-8 h-8" })} </div> <span class="font-semibold"> ${invite.date_naissance_invite ? new Date(invite.date_naissance_invite).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }) : "Non sp\xE9cifi\xE9e"} </span> </div> </div> </div> <!-- Biographie --> <div> <h2 class="text-md xl:text-xl font-semibold mb-4">Biographie</h2> <div class="text-gray-600 space-y-4">${unescapeHTML(invite.biographie_invite)}</div> </div> </div> </div> <!-- Contenus associés --> <!-- Films associés --> ${contenusAssocies.filter((contenu) => contenu.type === "film").length > 0 && renderTemplate`<div class="lg:my-12"> <h2 class="text-2xl lg:text-3xl font-semibold mb-6 border-b border-orange-200 pb-2">
Films associés
</h2> <div class="flex flex-wrap justify-center gap-8"> ${contenusAssocies.filter((contenu) => contenu.type === "film").map((film) => renderTemplate`<a${addAttribute(`/films/${film.id}`, "href")} class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full max-w-sm w-full"> <div class="relative aspect-[2/3] w-full overflow-hidden"> ${film.imageUrl ? renderTemplate`<img${addAttribute(film.imageUrl, "src")}${addAttribute(`Affiche du film ${film.titre}`, "alt")} class="w-full h-full object-cover">` : renderTemplate`<div class="w-full h-full bg-gray-200 flex items-center justify-center"> <span class="text-gray-500 italic">Affiche non disponible</span> </div>`} <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"> <span class="text-white text-sm p-4 font-medium">Voir le détail</span> </div> </div> <div class="p-4 flex-grow flex flex-col justify-between"> <div> <h3 class="font-bold text-lg mb-2 line-clamp-2">${film.titre}</h3> <div class="flex items-center mb-3"> <span class="inline-block bg-red-100 text-red-800 rounded-full px-3 py-1 text-xs font-semibold mr-2">
Film
</span> ${film.date && renderTemplate`<time class="text-gray-600 text-sm"> ${new Date(film.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </time>`} </div> </div> <div class="text-red-600 text-sm font-medium flex items-center mt-2"> <span class="mr-1">Projection</span> <span class="text-xs">→</span> </div> </div> </a>`)} </div> </div>`} <!-- Activités associées --> ${contenusAssocies.filter((contenu) => contenu.type === "activite").length > 0 && renderTemplate`<div class="my-12"> <h2 class="text-2xl lg:text-3xl font-semibold mb-6 border-b border-blue-200 pb-2">
Activités associées
</h2> <div class="flex flex-wrap justify-center gap-6"> ${contenusAssocies.filter((contenu) => contenu.type === "activite").map((activite) => renderTemplate`<a${addAttribute(`/activites/${activite.id}`, "href")} class="bg-white rounded-lg border border-blue-100 overflow-hidden hover:border-blue-300 transition-all duration-300 flex flex-col h-full max-w-md w-full"> <div class="p-5"> <div class="flex justify-between items-start mb-4"> <h3 class="font-bold text-xl text-blue-800">${activite.titre}</h3> <span class="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold">
Activité
</span> </div> ${activite.date && renderTemplate`<div class="flex items-center mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <time class="text-gray-700"> ${new Date(activite.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </time> </div>`} <div class="flex items-center justify-between mt-4 pt-4 border-t border-blue-50"> <div class="flex items-center text-blue-600"> <span class="font-medium">Voir les détails</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </div> <div class="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> </div> </div> </a>`)} </div> </div>`} </main> ` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/[id].astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
