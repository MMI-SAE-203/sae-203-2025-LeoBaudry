import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot, F as Fragment } from './astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_YhIJHJAB.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from './_astro_assets_C9XF1IgN.mjs';

const $$Astro = createAstro();
const $$LayoutWithHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutWithHero;
  const {
    title,
    description,
    subTitle,
    subTitle2,
    src,
    alt,
    classContent = "main-content max-w-2xl mx-6 my-16  lg:mx-auto *:space-y-6"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grille grid h-screen grid-rows-[4fr_1fr] relative lg:grid-rows-[4fr_1fr]"> <div class="my-12 space-y-8 self-end text-white z-[2] col-span-8"> <h1 class="lg:text-8xl">${title}</h1> ${subTitle && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="font-DMSans text-xl lg:text-3xl font-bold uppercase">${subTitle}</h2> <h3 class="font-DMSans text-lg lg:text-2xl font-bold">${subTitle2}</h3> ` })}`} </div> ${renderComponent($$result2, "Picture", $$Picture, { "pictureAttributes": { class: "duotone !absolute inset-0 object-cover z-[-1]" }, "formats": ["avif", "webp"], "src": src, "alt": alt, "widths": [540, 1024, src.width], "sizes": `(max-width: 540px) 540px, (max-width: 1024px) 1024px, ${src.width}px` })} </div> <div${addAttribute(classContent, "class")}> ${renderSlot($$result2, $$slots["content"])} </div> ` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/layouts/LayoutWithHero.astro", void 0);

export { $$LayoutWithHero as $ };
