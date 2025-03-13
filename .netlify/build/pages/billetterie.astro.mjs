import { c as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, e as renderScript } from '../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_C-8D-Q8x.mjs';
export { renderers } from '../renderers.mjs';

const imgHero = new Proxy({"src":"/_astro/billetterie-01.W1CYcRqr.webp","width":6720,"height":4480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/assets/img/billetterie-01.webp";
							}
							
							return target[name];
						}
					});

const $$Billetterie = createComponent(($$result, $$props, $$slots) => {
  const title = "Billetterie";
  const subTitle = "C'est gratuit !";
  const subTitle2 = "Mais on ne dit jamais non \xE0 un peu d'aide...";
  const description = "R\xE9servez votre place pour notre festival gratuit et d\xE9couvrez comment soutenir l'\xE9v\xE9nement";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "description": description, "subTitle": subTitle, "subTitle2": subTitle2, "src": imgHero, "alt": "Billetterie Fictive", "classContent": "" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<header class="bg-gradient-to-r from-yellow-400 to-orange-300 text-white py-12"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl font-bold mb-2">C'est gratuit pour tous !</h1> <p class="text-xl">Et c'est ici que ça se passe...</p> </div> </header>  <section class="py-10 container mx-auto px-4"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden"> <div class="p-6 border-b border-gray-200"> <h2 class="text-2xl font-bold text-center mb-4">Réservez votre place</h2> <p class="text-gray-600 text-center mb-4">Le festival est gratuit mais une réservation est nécessaire.</p> </div> <form class="p-6 space-y-4"> <div> <label for="nom" class="block text-sm font-medium text-gray-700 mb-1">Nom</label> <input type="text" id="nom" name="nom" class="w-full px-3 py-2 border border-gray-300 rounded-md" required> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label> <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" required> </div> <div> <label for="participants" class="block text-sm font-medium text-gray-700 mb-1">Nombre de personnes</label> <select id="participants" name="participants" class="w-full px-3 py-2 border border-gray-300 rounded-md"> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> </select> </div> <div class="pt-2"> <button type="submit" class="w-full bg-(--color-red) text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
Confirmer ma réservation
</button> </div> </form> </div> </section>  <section class="py-10 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-8">Devenez bénévole</h2> <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6"> <p class="text-gray-700 mb-6">
Rejoignez notre équipe de bénévoles pour vivre le festival de l'intérieur ! 
                          Nous recherchons des personnes dynamiques pour différentes missions : accueil, 
                          logistique, assistance aux artistes et bien plus.
</p> <div class="flex justify-center"> <a href="/billetterie" class="bg-(--color-red) text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
Postuler comme bénévole
</a> </div> </div> </div> </section>  <section class="py-10 bg-gradient-to-r from-yellow-100 to-orange-200"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-8">Soutenez notre festival</h2> <div class="max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-md p-6"> <p class="text-gray-700 mb-6">
Notre festival est gratuit grâce au soutien de nos donateurs. 
                          Chaque contribution, quelle que soit sa taille, nous aide à maintenir 
                          cette gratuité et à améliorer l'expérience pour tous.
</p> <div class="grid grid-cols-3 gap-3 mb-6"> <button class="bg-white border border-gray-300 rounded-md py-2 hover:bg-red-100 transition-colors">5€</button> <button class="bg-white border border-gray-300 rounded-md py-2 hover:bg-orange-100 transition-colors">10€</button> <button class="bg-white border border-gray-300 rounded-md py-2 hover:bg-yellow-100 transition-colors">20€</button> </div> <div class="flex justify-center"> <a href="/billetterie" class="bg-(--color-blue) text-white py-2 px-6 rounded-md hover:bg-cyan-400 transition-colors">
Faire un don
</a> </div> </div> </div> </section> ${renderScript($$result3, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/billetterie.astro?astro&type=script&index=0&lang.ts")} ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "LayoutWithHero", $$LayoutWithHero, {})}` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/billetterie.astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/billetterie.astro";
const $$url = "/billetterie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Billetterie,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
