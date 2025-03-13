import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { o as oneActivite, g as getInviteForActivite, I as IconClock } from '../../chunks/icon-clock_CwXpFSuf.mjs';
import { c as createSvgComponent, $ as $$Layout } from '../../chunks/Layout_YhIJHJAB.mjs';
import { I as IconHouse } from '../../chunks/icon-house_BOKPkaOZ.mjs';
import { I as IconCategory } from '../../chunks/icon-category_trSaBTyt.mjs';
export { renderers } from '../../renderers.mjs';

const IconCalendar = createSvgComponent({"meta":{"src":"/_astro/icon-calendar.hIiECV0I.svg","width":61,"height":61,"format":"svg"},"attributes":{"mode":"inline","width":"61","height":"61","viewBox":"0 0 61 61","fill":"none"},"children":"\n<path d=\"M7.78784 23.0547H52.7878M22.7878 38.0547L27.7878 43.0547L37.7878 33.0547M17.7878 8.05469V13.0547M42.7878 8.05469V13.0547M15.7878 53.0547H44.7878C47.5881 53.0547 48.9883 53.0547 50.0578 52.5097C50.9986 52.0304 51.7636 51.2654 52.2428 50.3247C52.7878 49.2552 52.7878 47.8549 52.7878 45.0547V21.0547C52.7878 18.2544 52.7878 16.8543 52.2428 15.7847C51.7636 14.8439 50.9986 14.079 50.0578 13.5997C48.9883 13.0547 47.5881 13.0547 44.7878 13.0547H15.7878C12.9876 13.0547 11.5874 13.0547 10.5179 13.5997C9.57707 14.079 8.81217 14.8439 8.33282 15.7847C7.78784 16.8543 7.78784 18.2544 7.78784 21.0547V45.0547C7.78784 47.8549 7.78784 49.2552 8.33282 50.3247C8.81217 51.2654 9.57707 52.0304 10.5179 52.5097C11.5874 53.0547 12.9876 53.0547 15.7878 53.0547Z\" stroke=\"black\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const activite = await oneActivite(id);
  if (!activite) {
    console.error(`Activit\xE9 with id ${id} not found`);
    return Astro2.redirect("/activites");
  }
  const inviteAssocie = await getInviteForActivite(id);
  function formatDuree(duree) {
    const minutes = parseInt(duree, 10);
    if (isNaN(minutes)) return "Non sp\xE9cifi\xE9";
    const heures = Math.floor(minutes / 60);
    const reste = minutes % 60;
    return heures > 0 ? `${heures}h${reste > 0 ? reste : ""}` : `${reste} min`;
  }
  const title = activite.titre_activite;
  const description = `D\xE9couvrez "${activite.titre_activite}", ayant lieu le ${new Date(activite.date_activite).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })} au festival.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-30"> <!-- Navigation et Actions --> <div class="flex justify-between items-center mb-6 py-2"> <a href="/activites" class="text-gray-600 flex items-center gap-2"> <span class="text-red-600 font-semibold text-sm">←</span> <span class="text-red-600 font-semibold">Retour à la liste</span> </a> </div> <!-- Titre --> <div class="mb-6"> <h1 class="text-2xl lg:text-3xl font-semibold mb-1">${activite.titre_activite}</h1> </div> <!-- Container principal pour les informations --> <div class="flex flex-col md:flex-row gap-8 pb-8"> <!-- Caractéristiques et Description --> <div class="flex-1"> <!-- Caractéristiques principales --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-white rounded-lg border border-orange-100 mb-8"> <!-- Date de l'activité --> <div> <p class="text-gray-600 text-sm mb-1">Date de l'activité</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconCalendar", IconCalendar, { "class": "w-6 h-6" })} <span class="font-semibold"> ${new Date(activite.date_activite).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })} </span> </div> </div> <!-- Lieu --> <div> <p class="text-gray-600 text-sm mb-2">Lieu</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconHouse", IconHouse, { "class": "w-8 h-8" })} <span class="font-semibold">${activite.lieu_activite}</span> </div> </div> <!-- Durée --> ${activite.duree_activite && renderTemplate`<div> <p class="text-gray-600 text-sm mb-2">Durée</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconClock", IconClock, { "class": "w-8 h-8" })} <span class="font-semibold">${formatDuree(activite.duree_activite)} </span> </div> </div>`} <!-- Catégorie --> <div> <p class="text-gray-600 text-sm mb-2">Catégorie</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconCategory", IconCategory, { "class": "w-6 h-6" })} <span class="font-semibold">${activite.categorie_activite}</span> </div> </div> </div> <!-- Description --> <div> <h2 class="text-md xl:text-xl font-semibold mb-4">À propos de l'activité</h2> <div class="text-gray-600 space-y-4">${unescapeHTML(activite.description_activite)}</div> </div> </div> </div> <!-- Images supplémentaires --> ${activite.imageUrls && activite.imageUrls.length > 0 && renderTemplate`<div class="my-8"> <h2 class="text-xl font-semibold mb-4">Galerie photos</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${activite.imageUrls.map((imgUrl, index) => renderTemplate`<img${addAttribute(index, "key")}${addAttribute(imgUrl, "src")}${addAttribute(`Image ${index + 1} de ${activite.titre_activite}`, "alt")} class="w-full h-64 object-cover rounded-lg shadow hover:shadow-lg transition-shadow">`)} </div> </div>`} <!-- Participants --> ${activite.liste_participants && activite.liste_participants.length > 0 && renderTemplate`<div class="my-8"> <h2 class="text-xl font-semibold mb-4">Liste des participants</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"> ${activite.liste_participants.split(",").map((participant, index) => renderTemplate`<div${addAttribute(index, "key")} class="bg-(--color-yellow) p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"> <p class="text-gray-800 font-bold text-center">${participant.trim()}</p> </div>`)} </div> </div>`} <!-- Invité associé --> ${inviteAssocie && renderTemplate`<div class="my-8 max-w-md mx-auto"> <h2 class="text-xl font-semibold mb-4 text-center">Invité Associé</h2> <a${addAttribute(`/invites/${inviteAssocie.id}`, "href")} class="flex items-center gap-4 p-4 bg-white rounded-4xl border border-orange-100 hover:bg-gray-50 transition-colors"> ${inviteAssocie.photoUrl && renderTemplate`<img${addAttribute(inviteAssocie.photoUrl, "src")}${addAttribute(`Photo de ${inviteAssocie.nom_invite} ${inviteAssocie.prenom_invite}`, "alt")} class="w-36 h-36 lg:w-48 lg:h-48 object-cover rounded-full">`} <div> <p class="font-semibold text-lg">${inviteAssocie.nom_invite} ${inviteAssocie.prenom_invite}</p> <p class="text-gray-600">${inviteAssocie.role_invite}</p> </div> </a> </div>`} </main> ` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/[id].astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/[id].astro";
const $$url = "/activites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
