import { c as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_C-8D-Q8x.mjs';
export { renderers } from '../renderers.mjs';

const imgHero = new Proxy({"src":"/_astro/festival-02.7kStPE99.webp","width":6720,"height":4480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/assets/img/festival-02.webp";
							}
							
							return target[name];
						}
					});

const $$Informations = createComponent(($$result, $$props, $$slots) => {
  const title = "Informations pratiques";
  const subTitle = "Tout savoir sur le festival";
  const subTitle2 = "De l'organisation au d\xE9placement en passant par les tarifs.";
  const description = "\xAB \xC7a va Trai'ler ! \xBB accueille des festivaliers enthousiastes et cin\xE9philes, afin de partager ensemble leur amour du septi\xE8me art et de la course \xE0 pied.";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "description": description, "subTitle": subTitle, "subTitle2": subTitle2, "src": imgHero, "alt": "Informations sur le festival", "classContent": "" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Infos Pratiques</h1> <h2 class="text-2xl text-gray-800 max-w-3xl mx-auto">Tout ce que vous devez savoir pour profiter au mieux de l'événement.</h2> </div> <div> <p class="text-2xl pb-20">Le festival “Ça va trai'ler” se déroulera au cœur du parc de la Douce, un espace naturel et convivial situé à Belfort, en Bourgogne Franche-Comté.
        Que vous soyez amateur de grands espaces ou de lieux chargés d'histoire, ce cadre unique allie parfaitement nature et culture, offrant un décor idéal 
        pour une immersion totale dans le cinéma et le sport.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"> <div class="space-y-6"> <h2 class="text-3xl font-bold text-gray-900 mb-6">Tarifs</h2> <h3 class="text-xl font-semibold text-gray-900">Festival Gratuit</h3> <p>Le festival est entièrement gratuit ! Nous encourageons cependant les dons et le bénévolat pour soutenir l'événement et sa pérennité.</p> <h3 class="text-xl font-semibold text-gray-900">Options de Soutien</h3> <p>Vous pouvez contribuer à l'événement par des dons ou en vous inscrivant comme bénévole. Plus d'infos sur notre page dédiée aux bénévoles et aux dons.</p> <div class="mt-6"> <a href="/billetterie" class="inline-block bg-(--color-orange) hover:bg-(--color-red) text-white font-medium py-2 px-4 rounded-lg transition-colors">
Accéder à la billetterie
</a> </div> </div> <div class="space-y-6"> <h2 class="text-3xl font-bold text-gray-900 mb-6">Lieux</h2> <h3 class="text-xl font-semibold text-gray-900">Parc de la Douce</h3> <p>Le festival se déroule principalement au Parc de la Douce, à Belfort, France. C'est un lieu magnifique et accessible où se mêleront cinéma et nature.</p> <address class="not-italic"> <a href="https://www.google.com/maps?q=Parc+de+la+Douce,+Rue+Georges+Pompidou,+90000+Belfort,+France" target="_blank" rel="noopener noreferrer"> <strong>Parc de la Douce</strong><br>
Rue Georges Pompidou<br>
90000 Belfort, France
</a> </address> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"> <div class="space-y-6"> <h2 class="text-3xl font-bold text-gray-900 mb-6">Hébergement</h2> <h3 class="text-xl font-semibold text-gray-900">Hôtels</h3> <p>Nous avons sélectionné plusieurs hôtels proches du festival pour un séjour confortable :</p> <ul class="list-disc ml-5"> <li>Hôtel X - 5 min à pied du Parc de la Douce</li> <li>Hôtel Y - Idéal pour les familles</li> </ul> <h3 class="text-xl font-semibold text-gray-900">Camping</h3> <p>Pour les amoureux de la nature, un camping est situé à proximité du Parc de la Douce.</p> <p><strong>Camping Z</strong> - Un cadre naturel avec de nombreuses installations.</p> </div> <div class="space-y-6"> <h2 class="text-3xl font-bold text-gray-900 mb-6">Transport</h2> <h3 class="text-xl font-semibold text-gray-900">Accès en Transports en commun</h3> <p>Des bus et des trains desservent régulièrement Belfort. Depuis la gare, des navettes gratuites vous conduiront directement 
          au festival. Consultez les horaires et arrêts de bus en ligne ! </p> <h3 class="text-xl font-semibold text-gray-900">Accès en Voiture</h3> <p>Suivez les panneaux dès votre arrivée à Belfort. 
          Le site est facilement accessible en voiture. Des parkings gratuits seront mis à disposition à proximité du lieu. 
          Suivez les indications pour rejoindre le parc, et n'oubliez pas de covoiturer pour limiter votre empreinte écologique !</p> <h3 class="text-xl font-semibold text-gray-900">Covoiturage</h3> <p>Le site encourage les mobilités douces ! Profitez des pistes cyclables qui entourent la ville pour venir à vélo. 
          Un espace sécurisé pour les vélos sera mis à disposition.</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"> <div class="space-y-6"> <h2 id="faq" class="text-3xl font-bold text-gray-900 mb-6">FAQ</h2> <h3 class="text-xl font-semibold text-gray-900">Q: Le festival est-il accessible aux personnes handicapées ?</h3> <p>Oui, toutes nos installations sont accessibles aux personnes à mobilité réduite.</p> <h3 class="text-xl font-semibold text-gray-900">Q: Puis-je amener mes enfants ?</h3> <p>Le festival est familial et adapté à tous les âges ! Des activités pour enfants sont également prévues.</p> <h3 class="text-xl font-semibold text-gray-900">Q: Y a-t-il des options de restauration ?</h3> <p>Oui, nous avons des food trucks avec une large gamme de repas pour tous les goûts.</p> <h3 class="text-xl font-semibold text-gray-900">Q: Que faire en cas de mauvais temps ?</h3> <p>Le festival se maintiendra en intérieur dans ce cas, avec des projections et des activités adaptées.</p> </div> </div> </div> <div class="w-full h-80"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.942626469028!2d6.831895676926195!3d47.63040557119205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47923c7d58b56a03%3A0x4685f1b0576de9c2!2sParc%20de%20la%20Douce!5e1!3m2!1sfr!2sfr!4v1741836108831!5m2!1sfr!2sfr" class="w-full h-full" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe> </div> ` })}` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/informations.astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/informations.astro";
const $$url = "/informations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Informations,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
