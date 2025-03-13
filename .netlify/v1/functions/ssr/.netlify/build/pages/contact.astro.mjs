import { c as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_C-8D-Q8x.mjs';
import { I as IconFacebook, a as IconInstagram, b as IconTwitter, d as IconYoutube, e as IconTiktok } from '../chunks/Layout_YhIJHJAB.mjs';
export { renderers } from '../renderers.mjs';

const imgHero = new Proxy({"src":"/_astro/contact-01.BWoTtZNg.webp","width":5760,"height":3840,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/assets/img/contact-01.webp";
							}
							
							return target[name];
						}
					});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact";
  const subTitle = "Rentrer en contact avec l'\xE9quipe";
  const subTitle2 = "Pour toute question ou demande d'information.";
  const description = "\xAB \xC7a va Trai'ler ! \xBB accueille des festivaliers enthousiastes et cin\xE9philes, afin de partager ensemble leur amour du septi\xE8me art et de la course \xE0 pied.";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "description": description, "subTitle": subTitle, "subTitle2": subTitle2, "src": imgHero, "alt": "Page contact", "classContent": "" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-12"> <h2 class="text-3xl font-bold text-center mb-12 max-w-3xl mx-auto">Des doutes, des hésitations, des questions ? Vous êtes à l'endroit parfait pour nous poser vos questions !</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <div class="bg-white p-6 rounded-2xl shadow-md text-center hover:bg-red-300 transition-all duration-300"> <h3 class="text-xl font-semibold mb-4">Questions fréquentes</h3> <p>Consultez notre <a href="/informations#faq" class="text-(--color-red) transition-colors hover:text-(--color-orange)" onclick="document.querySelector('#faq').scrollIntoView({behavior: 'smooth'}); return false;">FAQ</a> pour trouver rapidement des réponses à vos interrogations.</p> </div> <div class="bg-white p-6 rounded-2xl shadow-md text-center hover:bg-orange-300 transition-all duration-300"> <h3 class="text-xl font-semibold mb-4">Support technique</h3> <p>Besoin d'aide pour votre inscription ou réservation ? Notre équipe est là pour vous.</p> </div> <div class="bg-white p-6 rounded-2xl shadow-md text-center hover:bg-yellow-300 transition-all duration-300"> <h3 class="text-xl font-semibold mb-4">Informations pratiques</h3> <p>Renseignements sur les horaires, l'accès et les services disponibles pendant le festival.</p> </div> </div> <h3 class="text-3xl font-bold text-center mb-8">Formulaire de Contact</h3> <form action="#" method="POST" class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"> <div class="mb-4"> <label for="name" class="block text-sm font-medium text-gray-700">Nom</label> <input type="text" id="name" name="name" required class="mt-1 p-3 w-full border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 p-3 w-full border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="subject" class="block text-sm font-medium text-gray-700">Sujet</label> <input type="text" id="subject" name="subject" required class="mt-1 p-3 w-full border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="message" class="block text-sm font-medium text-gray-700">Message</label> <textarea id="message" name="message" rows="4" required class="mt-1 p-3 w-full border border-gray-300 rounded-md"></textarea> </div> <button type="submit" class="w-full bg-(--color-orange) text-white py-3 rounded-md hover:bg-(--color-red)">Envoyer</button> </form> </div> <div class="container mx-auto px-4 py-12"> <h2 class="text-3xl font-bold text-center mb-8">Coordonnées</h2> <div class="text-center space-y-4"> <p><strong>Email :</strong> <a href="mailto:contact@festival-trailer.com" class="text-(--color-red)">contact@festival-tailer.com</a></p> <p><strong>Téléphone :</strong> <a href="tel:+33123456789" class="text-(--color-red)">+33 1 23 45 67 89</a></p> <address class="not-italic"> <a href="https://www.google.com/maps?q=Parc+de+la+Douce,+Rue+Georges+Pompidou,+90000+Belfort,+France" target="_blank" rel="noopener noreferrer"> <strong>Parc de la Douce</strong><br>
Rue Georges Pompidou<br>
90000 Belfort, France
</a> </address> </div> </div> <div class="container mx-auto px-4 py-12"> <h2 class="text-3xl font-bold text-center mb-8">Suivez-nous</h2> <div class="flex justify-center gap-8 flex-wrap"> <a href="https://www.facebook.com/" target="_blank" class="flex flex-col items-center hover:scale-110 transition-transform"> <div class="w-12 h-12 flex items-center justify-center"> ${renderComponent($$result3, "IconFacebook", IconFacebook, { "class": "stroke-blue-600 w-8 h-8" })} </div> <span>Facebook</span> </a> <a href="https://www.instagram.com/" target="_blank" class="flex flex-col items-center hover:scale-110 transition-transform"> <div class="w-12 h-12 flex items-center justify-center"> ${renderComponent($$result3, "IconInstagram", IconInstagram, { "class": "stroke-pink-500 w-8 h-8" })} </div> <span>Instagram</span> </a> <a href="https://www.twitter.com/" target="_blank" class="flex flex-col items-center hover:scale-110 transition-transform"> <div class="w-12 h-12 flex items-center justify-center"> ${renderComponent($$result3, "IconTwitter", IconTwitter, { "class": "stroke-blue-400 w-8 h-8" })} </div> <span>Twitter</span> </a> <a href="https://www.youtube.com/" target="_blank" class="flex flex-col items-center hover:scale-110 transition-transform"> <div class="w-12 h-12 flex items-center justify-center"> ${renderComponent($$result3, "IconYoutube", IconYoutube, { "class": "stroke-red-600 w-8 h-8" })} </div> <span>Youtube</span> </a> <a href="https://www.tiktok.com/" target="_blank" class="flex flex-col items-center hover:scale-110 transition-transform"> <div class="w-12 h-12 flex items-center justify-center"> ${renderComponent($$result3, "IconTiktok", IconTiktok, { "class": "stroke-black text-c hover:stroke-pink-500 w-8 h-8" })} </div> <span>TikTok</span> </a> </div> </div> ` })}` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/contact.astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
