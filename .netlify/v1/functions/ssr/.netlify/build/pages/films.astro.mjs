import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, e as renderScript } from '../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_YhIJHJAB.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_C9XF1IgN.mjs';
import { I as IconFlagFr } from '../chunks/flag-fr_DNxk-qZ5.mjs';
import { I as IconClock, d as getFilms } from '../chunks/icon-clock_CwXpFSuf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardFilm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFilm;
  const { ...film } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-72 md:w-84 lg:w-72 xl:w-72 2xl:w-84 rounded-lg overflow-hidden shadow-sm bg-white mx-auto"> <article> <a${addAttribute(`/films/${film.id}`, "href")}> ${film.imageUrl ? renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "class": "w-full h-auto object-cover rounded-t-lg", "width": 500, "height": 700, "src": film.imageUrl, "alt": `${film.film_name} - Affiche` })}` : renderTemplate`<div class="h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-lg">
No image available
</div>`} </a> <div class="px-6 py-4"> <p class="text-gray-600 text-sm mb-2"> <span> ${new Date(film.date_projection_film).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })} </span> </p><div class="flex items-center mb-2"> <h3 class="font-bold text-xl mr-2"> <a${addAttribute(`/films/${film.id}`, "href")} class="text-gray-900 hover:text-gray-700"> ${film.titre_film} </a> </h3> <p class="text-sm font-medium text-white bg-(--color-orange) px-2 py-1 rounded"> ${film.categorie_film} </p> </div> <hr class="border-t border-gray-200 my-2"> <p class="text-gray-600 text-md mb-2 flex flex-wrap gap-4"> <span class="flex items-center"> ${renderComponent($$result, "IconClock", IconClock, { "class": "w-6 h-6 mr-1" })} ${film.duree_film} </span> <span class="flex items-center"> ${renderComponent($$result, "IconFlagFr", IconFlagFr, { "class": "w-6 h-6 mr-1" })} ${film.langue_film} </span> </p> </div> </article> </div>`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/components/CardFilm.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const films = await getFilms();
  const uniqueCategories = [...new Set(films.map((film) => film.categorie_film))];
  const genreFilters = ["Tous les films", ...uniqueCategories];
  const { searchParams } = Astro2.url;
  const activeGenre = searchParams.get("genre") || "Tous les films";
  const filteredFilms = activeGenre === "Tous les films" ? films : films.filter((film) => film.categorie_film === activeGenre);
  const countByGenre = {
    "Tous les films": films.length
  };
  uniqueCategories.forEach((category) => {
    countByGenre[category] = films.filter((film) => film.categorie_film === category).length;
  });
  const title = "Programmation des films";
  const description = "D\xE9couvrez les films projet\xE9s lors de la prochaine \xE9dition du festival.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-30"> <div class="container mx-auto px-4"> <h1 class="text-3xl lg:text-6xl font-bold text-center mb-8">Programmation des films</h1> <!-- Filtres de catégorie --> <div class="flex flex-wrap justify-center gap-3 mb-10"> ${genreFilters.map((genre) => renderTemplate`<a${addAttribute(`?genre=${encodeURIComponent(genre)}`, "href")}${addAttribute(`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 filter-button ${activeGenre === genre ? "bg-(--color-orange) text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`, "class")}${addAttribute(genre, "data-genre")}> ${genre} (${countByGenre[genre] || 0})
</a>`)} </div> <!-- Résultat de recherche --> <p class="text-center text-gray-600 mb-8"> ${activeGenre === "Tous les films" ? `Affichage de tous les films (${filteredFilms.length})` : `Affichage des films de cat\xE9gorie "${activeGenre}" (${filteredFilms.length})`} </p> <!-- Grille des cartes de films --> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-16"> ${filteredFilms.length > 0 ? filteredFilms.map((film) => renderTemplate`${renderComponent($$result2, "Card", $$CardFilm, { ...film, "class": "w-full mx-auto max-w-xs md:max-w-none h-full flex flex-col justify-end" })}`) : renderTemplate`<p class="text-center text-gray-500 col-span-full">Aucun film ne correspond à cette catégorie.</p>`} </div> </div> </div> ${renderScript($$result2, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/index.astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/index.astro";
const $$url = "/films";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
