import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, e as renderScript } from '../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_YhIJHJAB.mjs';
import { I as IconHouse } from '../chunks/icon-house_BOKPkaOZ.mjs';
import { I as IconClock, a as getActivites } from '../chunks/icon-clock_CwXpFSuf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardActivite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardActivite;
  const { ...activite } = Astro2.props;
  function formatDuree(duree) {
    const minutes = parseInt(duree, 10);
    if (isNaN(minutes)) return "Non sp\xE9cifi\xE9";
    const heures = Math.floor(minutes / 60);
    const reste = minutes % 60;
    return heures > 0 ? `${heures}h${reste > 0 ? reste : ""}` : `${reste} min`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="w-72 md:w-84 lg:w-72 xl:w-72 2xl:w-84 rounded-lg overflow-hidden shadow-sm bg-white mx-auto"> <article> <div class="px-6 py-4"> <p class="text-gray-600 text-sm mb-2"> <span> ${new Date(activite.date_activite).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })} </span> </p> <div class="flex items-center mb-2"> <h3 class="font-bold text-xl mr-2"> <a${addAttribute(`/activites/${activite.id}`, "href")} class="text-gray-900 hover:text-gray-700"> ${activite.titre_activite} </a> </h3> <p class="text-sm font-medium text-white bg-orange-500 px-2 py-1 rounded"> ${activite.categorie_activite} </p> </div> <hr class="border-t border-gray-200 mb-5"> <p class="text-gray-600 text-md mb-2 flex flex-wrap gap-4"> <span class="flex items-center"> ${renderComponent($$result, "IconClock", IconClock, { "class": "w-6 h-6 mr-1" })} ${formatDuree(activite.duree_activite)} </span> <span class="flex items-center"> ${renderComponent($$result, "IconHouse", IconHouse, { "class": "w-6 h-6 mr-1" })} ${activite.lieu_activite || "Non sp\xE9cifi\xE9"} </span> </p> </div> </article> </div>`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/components/CardActivite.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const activites = await getActivites();
  const uniqueCategories = [...new Set(activites.map((activite) => activite.categorie_activite))];
  const categorieFilters = ["Toutes les activit\xE9s", ...uniqueCategories];
  const { searchParams } = Astro2.url;
  const activeCategorie = searchParams.get("categorie") || "Toutes les activit\xE9s";
  const filteredActivites = activeCategorie === "Toutes les activit\xE9s" ? activites : activites.filter((activite) => activite.categorie_activite === activeCategorie);
  const countByCategorie = {
    "Toutes les activit\xE9s": activites.length
  };
  uniqueCategories.forEach((category) => {
    countByCategorie[category] = activites.filter((activite) => activite.categorie_activite === category).length;
  });
  const title = "Programmation des activit\xE9s";
  const description = `D\xE9couvrez les activit\xE9s propos\xE9es lors de la prochaine \xE9dition du festival.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-30"> <div class="container mx-auto px-4"> <h1 class="text-3xl lg:text-6xl font-bold text-center mb-8">Programmation des activités</h1> <!-- Filtres de catégorie --> <div class="flex flex-wrap justify-center gap-3 mb-10"> ${categorieFilters.map((categorie) => renderTemplate`<a${addAttribute(`?categorie=${encodeURIComponent(categorie)}`, "href")}${addAttribute(`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 filter-button ${activeCategorie === categorie ? "bg-(--color-orange) text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`, "class")}${addAttribute(categorie, "data-categorie")}> ${categorie} (${countByCategorie[categorie] || 0})
</a>`)} </div> <!-- Résultat de recherche --> <p class="text-center text-gray-600 mb-8"> ${activeCategorie === "Toutes les activit\xE9s" ? `Affichage de toutes les activit\xE9s (${filteredActivites.length})` : `Affichage des activit\xE9s de cat\xE9gorie "${activeCategorie}" (${filteredActivites.length})`} </p> <!-- Grille des cartes d'activités --> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-16"> ${filteredActivites.length > 0 ? filteredActivites.map((activite) => renderTemplate`${renderComponent($$result2, "Card", $$CardActivite, { ...activite, "class": "w-full mx-auto max-w-xs md:max-w-none h-full flex flex-col justify-end" })}`) : renderTemplate`<p class="text-center text-gray-500 col-span-full">Aucune activité ne correspond à cette catégorie.</p>`} </div> </div> </div> ${renderScript($$result2, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/index.astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/index.astro";
const $$url = "/activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
