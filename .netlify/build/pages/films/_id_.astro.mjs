import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { b as oneFilm, c as getInviteForFilm, I as IconClock } from '../../chunks/icon-clock_CwXpFSuf.mjs';
import { c as createSvgComponent, $ as $$Layout } from '../../chunks/Layout_YhIJHJAB.mjs';
import { I as IconFlagFr } from '../../chunks/flag-fr_DNxk-qZ5.mjs';
import { I as IconCategory } from '../../chunks/icon-category_trSaBTyt.mjs';
export { renderers } from '../../renderers.mjs';

const IconDirector = createSvgComponent({"meta":{"src":"/_astro/icon-director.Cm-QJRgG.svg","width":32,"height":32,"format":"svg"},"attributes":{"mode":"inline","width":"32","height":"32","viewBox":"0 0 32 32","fill":"none"},"children":"\n<path d=\"M27 31H5C3.9 31 3 30.1 3 29V16H29V29C29 30.1 28.1 31 27 31Z\" stroke=\"black\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M23.5 1.10014L2.80002 8.70014C1.80002 9.10014 1.20002 10.2001 1.60002 11.3001L3.00002 15.0001L27.4 6.10014L26 2.30014C25.7 1.30014 24.5 0.800137 23.5 1.10014Z\" stroke=\"black\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M3 21H29\" stroke=\"black\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const IconProjection = createSvgComponent({"meta":{"src":"/_astro/icon-projection.CzI3xsQ0.svg","width":61,"height":61,"format":"svg"},"attributes":{"mode":"inline","width":"61","height":"61","viewBox":"0 0 61 61","fill":"none"},"children":"\n<path d=\"M8.31006 23.4229H53.3101M18.3101 8.42285V13.4229M43.3101 8.42285V13.4229M25.8101 35.9229L30.8101 30.9229M30.8101 30.9229L35.8101 35.9229M30.8101 30.9229V45.9229M16.3101 53.4229H45.3101C48.1103 53.4229 49.5106 53.4229 50.5801 52.8779C51.5208 52.3986 52.2858 51.6336 52.7651 50.6929C53.3101 49.6234 53.3101 48.2231 53.3101 45.4228V21.4229C53.3101 18.6226 53.3101 17.2225 52.7651 16.1529C52.2858 15.2121 51.5208 14.4472 50.5801 13.9678C49.5106 13.4229 48.1103 13.4229 45.3101 13.4229H16.3101C13.5098 13.4229 12.1097 13.4229 11.0401 13.9678C10.0993 14.4472 9.33438 15.2121 8.85503 16.1529C8.31006 17.2225 8.31006 18.6226 8.31006 21.4229V45.4228C8.31006 48.2231 8.31006 49.6234 8.85503 50.6929C9.33438 51.6336 10.0993 52.3986 11.0401 52.8779C12.1097 53.4229 13.5098 53.4229 16.3101 53.4229Z\" stroke=\"black\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const IconProduction = createSvgComponent({"meta":{"src":"/_astro/icon-production.CU6pNbOC.svg","width":61,"height":61,"format":"svg"},"attributes":{"mode":"inline","width":"61","height":"61","viewBox":"0 0 61 61","fill":"none"},"children":"\n<path d=\"M42.7564 28.1416C35.8529 28.1416 30.2564 33.7381 30.2564 40.6416C30.2564 47.5451 35.8529 53.1416 42.7564 53.1416C49.6599 53.1416 55.2564 47.5451 55.2564 40.6416C55.2564 33.7381 49.6599 28.1416 42.7564 28.1416ZM42.7564 28.1416V23.1416M42.7564 23.1416V21.1416C42.7564 18.3414 42.7564 16.9412 42.2114 15.8717C41.7322 14.9308 40.9672 14.1659 40.0264 13.6866C38.9569 13.1416 37.5567 13.1416 34.7564 13.1416H13.2564C10.4562 13.1416 9.05601 13.1416 7.98646 13.6866C7.04563 14.1659 6.28073 14.9308 5.80138 15.8717C5.25641 16.9412 5.25641 18.3414 5.25641 21.1416V23.1416M42.7564 23.1416H5.25641M5.25641 23.1416V40.1416C5.25641 42.9419 5.25641 44.3421 5.80138 45.4116C6.28073 46.3524 7.04563 47.1174 7.98646 47.5966C9.05601 48.1416 10.4562 48.1416 13.2564 48.1416H32.7564M12.7564 8.1416V13.1416M35.2564 8.1416V13.1416M37.7564 40.6416H42.7564M42.7564 40.6416H47.7564M42.7564 40.6416V35.6416M42.7564 40.6416V45.6416\" stroke=\"black\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await oneFilm(id);
  if (!film) {
    console.error(`Film with id ${id} not found`);
    return Astro2.redirect("/films");
  }
  const inviteAssocie = await getInviteForFilm(id);
  const embedUrl = `https://www.youtube.com/embed/${film.bande_annonce_film.split("v=")[1]}`;
  const title = film.titre_film;
  const description = `D\xE9couvrez "${film.titre_film}", un film de ${film.realisateurs} projet\xE9 le ${new Date(film.date_projection_film).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })} au festival.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-30"> <!-- Navigation et Actions --> <div class="flex justify-between items-center mb-6 py-2"> <a href="/films" class="text-gray-600 flex items-center gap-2"> <span class="text-red-600 font-semibold text-sm">←</span> <span class="text-red-600 font-semibold">Back to list</span> </a> </div> <!-- Titre --> <div class="mb-6"> <h1 class="text-2xl lg:text-3xl font-semibold mb-1">${film.titre_film}</h1> </div> <!-- Container principal pour l'image et les informations --> <div class="flex flex-col md:flex-row gap-8 pb-8"> <!-- Image principale --> <div class="mb-8 md:mb-0 max-w-md mx-auto"> <img${addAttribute(film.imageUrl, "src")}${addAttribute(`${film.titre_film} - Poster`, "alt")} class="w-full object-contain rounded-lg shadow-lg"> </div> <!-- Caractéristiques et Description --> <div class="flex-1"> <!-- Caractéristiques principales --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-white rounded-lg border border-orange-100 mb-8"> <!-- Durée du film --> <div> <p class="text-gray-600 text-sm mb-2">Durée du film</p> <div class="flex items-center gap-2"> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result2, "IconClock", IconClock, { "class": "w-8 h-8" })} </div> <span class="font-semibold">${film.duree_film}</span> </div> </div> <!-- Langue --> <div> <p class="text-gray-600 text-sm mb-2">Langue</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconFlagFr", IconFlagFr, { "class": "w-8 h-8" })} <span class="font-semibold">${film.langue_film}</span> </div> </div> <!-- Réalisateur --> <div> <p class="text-gray-600 text-sm mb-2">Réalisateur</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconDirector", IconDirector, { "class": "w-8 h-8" })} <span class="font-semibold">${film.realisateurs}</span> </div> </div> <!-- Catégorie --> <div> <p class="text-gray-600 text-sm mb-2">Catégorie</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconCategory", IconCategory, { "class": "w-6 h-6" })} <span class="font-semibold">${film.categorie_film}</span> </div> </div> <!-- Date de parution --> <div> <p class="text-gray-600 text-sm mb-1">Date de parution</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconProduction", IconProduction, { "class": "w-6 h-6" })} <span class="font-semibold"> ${new Date(film.date_parution_film).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </span> </div> </div> <!-- Date de projection --> <div> <p class="text-gray-600 text-sm mb-1">Date de projection</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "IconProjection", IconProjection, { "class": "w-6 h-6" })} <span class="font-semibold"> ${new Date(film.date_projection_film).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </span> </div> </div> </div> <!-- Description --> <div> <h2 class="text-md xl:text-xl font-semibold mb-4">À propos du film</h2> <div class="text-gray-600 space-y-4">${unescapeHTML(film.synopsis_film)}</div> </div> </div> </div> <!-- Bande-annonce --> <div class="my-8"> <h2 class="text-xl lg:text-4xl font-semibold mb-15">Trailer</h2> ${film.bande_annonce_film ? renderTemplate`<div class="aspect-w-16 aspect-h-9"> <iframe class="rounded-4xl" width="100%" height="315"${addAttribute(embedUrl, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>` : renderTemplate`<p class="text-red-600">Désolé, la bande-annonce n'est pas disponible.</p>`} </div> <!-- Liste des acteurs --> ${film.liste_acteurs && film.liste_acteurs.length > 0 && renderTemplate`<div class="my-8"> <h2 class="text-xl font-semibold mb-4">Liste des acteurs</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"> ${film.liste_acteurs.split(",").map((acteur, index) => renderTemplate`<div${addAttribute(index, "key")} class="bg-(--color-yellow) p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"> <p class="text-gray-800 font-bold text-center">${acteur.trim()}</p> </div>`)} </div> </div>`} <!-- Invité associé --> ${inviteAssocie && renderTemplate`<div class="my-8 max-w-md mx-auto"> <h2 class="text-xl font-semibold mb-4 text-center">Invité Associé</h2> <a${addAttribute(`/invites/${inviteAssocie.id}`, "href")} class="flex items-center gap-4 p-4 bg-white rounded-4xl border border-orange-100 hover:bg-gray-50 transition-colors"> ${inviteAssocie.photoUrl && renderTemplate`<img${addAttribute(inviteAssocie.photoUrl, "src")}${addAttribute(`Photo de ${inviteAssocie.nom_invite} ${inviteAssocie.prenom_invite}`, "alt")} class="w-36 h-36 lg:w-48 lg:h-48 object-cover rounded-full">`} <div> <p class="font-semibold text-lg">${inviteAssocie.nom_invite} ${inviteAssocie.prenom_invite}</p> <p class="text-gray-600">${inviteAssocie.role_invite}</p> </div> </a> </div>`} </main> ` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/[id].astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/[id].astro";
const $$url = "/films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
