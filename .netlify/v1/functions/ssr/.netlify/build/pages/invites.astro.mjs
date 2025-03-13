import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, u as unescapeHTML, b as renderTemplate, e as renderScript } from '../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_YhIJHJAB.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_C9XF1IgN.mjs';
import { I as IconClock, h as getInvites } from '../chunks/icon-clock_CwXpFSuf.mjs';
import { I as IconHouse } from '../chunks/icon-house_BOKPkaOZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { ...invite } = Astro2.props;
  const roleColors = {
    "Acteur": "bg-red-100 text-red-800",
    "R\xE9alisateur": "bg-orange-100 text-orange-800",
    "Animateur": "bg-blue-100 text-blue-800"
  };
  const formatBiographie = (bio) => {
    if (!bio) return "";
    const replacements = {
      "&eacute;": "\xE9",
      "&egrave;": "\xE8"
    };
    let formattedBio = bio;
    Object.entries(replacements).forEach(([entity, char]) => {
      formattedBio = formattedBio.split(entity).join(char);
    });
    if (formattedBio.length > 140) {
      const lastSpace = formattedBio.substring(0, 140).lastIndexOf(" ");
      const cutoffPoint = lastSpace > 0 ? lastSpace : 140;
      formattedBio = formattedBio.substring(0, cutoffPoint) + "...";
    }
    return formattedBio;
  };
  return renderTemplate`${maybeRenderHead()}<div class="w-72 md:w-84 lg:w-72 xl:w-72 2xl:w-84 rounded-lg overflow-hidden shadow-sm bg-white mx-auto"> <article> <a${addAttribute(`/invites/${invite.id}`, "href")}> ${invite.photoUrl ? renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "class": "w-full h-56 object-cover rounded-t-lg", "width": 400, "height": 500, "src": invite.photoUrl, "alt": `${invite.prenom_invite} ${invite.nom_invite} - Photo` })}` : renderTemplate`<div class="h-56 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-lg">
Aucune photo disponible
</div>`} </a> <div class="px-6 py-4"> <h3 class="font-bold text-xl mb-2"> <a${addAttribute(`/invites/${invite.id}`, "href")} class="text-gray-900 hover:text-gray-700"> ${invite.prenom_invite} ${invite.nom_invite} </a> </h3> <p class="text-gray-700 text-sm mb-3"> <span${addAttribute(`inline-block ${roleColors[invite.role_invite] || "bg-gray-100 text-gray-800"} rounded-full px-3 py-1 text-sm font-semibold mr-2`, "class")}> ${invite.role_invite} </span> </p> <hr class="border-t border-gray-200 my-2"> <p class="text-gray-600 text-sm mb-2"> <span class="flex items-center"> ${renderComponent($$result, "IconHouse", IconHouse, { "class": "w-5 h-5 mr-1" })} <span>Né à ${invite.ville_invite}</span> </span> ${invite.date_naissance_invite && renderTemplate`<span class="flex items-center mt-1"> ${renderComponent($$result, "IconClock", IconClock, { "class": "w-5 h-5 mr-1" })} <span>
le ${new Date(invite.date_naissance_invite).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </span> </span>`} </p> <p class="text-gray-700 text-sm line-clamp-3">${unescapeHTML(formatBiographie(invite.biographie_invite))}</p> </div> </article> </div>`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/components/CardInvite.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const invites = await getInvites();
  const uniqueRoles = [...new Set(invites.map((invite) => invite.role_invite))];
  const roles = ["Tous", ...uniqueRoles];
  const { searchParams } = Astro2.url;
  const activeRole = searchParams.get("role") || "Tous";
  const invitesFiltered = activeRole === "Tous" ? invites : invites.filter((invite) => invite.role_invite === activeRole);
  const countByRole = {
    "Tous": invites.length
  };
  uniqueRoles.forEach((r) => {
    countByRole[r] = invites.filter((invite) => invite.role_invite === r).length;
  });
  const roleColorMap = {
    "Tous": "var(--color-red)",
    "R\xE9alisateur": "var(--color-orange)",
    "Acteur": "var(--color-yellow)",
    "Animateur": "var(--color-blue)"
  };
  function getRoleBgStyle(role, isActive) {
    if (!isActive) return "";
    const color = roleColorMap[role] || "var(--color-red)";
    return `background-color: ${color}; color: white;`;
  }
  const title = "Liste des invit\xE9s";
  const description = "D\xE9couvrez les films projet\xE9s lors de la prochaine \xE9dition du festival.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-30"> <div class="container mx-auto px-4"> <h1 class="text-3xl lg:text-6xl font-bold text-center mb-8">Nos invités</h1> <!-- Filtres de rôle --> <div class="flex flex-wrap justify-center gap-3 mb-10"> ${roles.map((roleOption) => renderTemplate`<a${addAttribute(`?role=${encodeURIComponent(roleOption)}`, "href")}${addAttribute(`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 filter-button ${activeRole === roleOption ? "" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`, "class")}${addAttribute(roleOption, "data-role")}${addAttribute(getRoleBgStyle(roleOption, activeRole === roleOption), "style")}> ${roleOption} (${countByRole[roleOption] || 0})
</a>`)} </div> <!-- Résultat de recherche --> <p class="text-center text-gray-600 mb-8"> ${activeRole === "Tous" ? `Affichage de tous les invit\xE9s (${invitesFiltered.length})` : `Affichage des invit\xE9s de type "${activeRole}" (${invitesFiltered.length})`} </p> <!-- Grille des cartes d'invités --> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-16"> ${invitesFiltered.length > 0 ? invitesFiltered.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite, "class": "w-full mx-auto max-w-xs md:max-w-none h-full flex flex-col justify-end" })}`) : renderTemplate`<p class="text-center text-gray-500 col-span-full">Aucun invité ne correspond à ce filtre.</p>`} </div> </div> </div> ${renderScript($$result2, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/index.astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/index.astro";
const $$url = "/invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
