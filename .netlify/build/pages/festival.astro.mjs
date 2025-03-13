import { c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_D_u7r7lG.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_C-8D-Q8x.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_C9XF1IgN.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const imgHero = new Proxy({"src":"/_astro/festival-01.DZyNhW3a.webp","width":1173,"height":750,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/assets/img/festival-01.webp";
							}
							
							return target[name];
						}
					});

const imgArbre = new Proxy({"src":"/_astro/arbre_main.CE0OD-gs.webp","width":786,"height":362,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/assets/img/arbre_main.webp";
							}
							
							return target[name];
						}
					});

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Conteneur principal centré avec largeur max, padding top et bottom ajoutés, et bords arrondis -->${maybeRenderHead()}<div class="w-full flex justify-center"> <div class="max-w-[900px] w-full px-[15px] lg:px-0 mx-auto"> <div x-data="{            
        slides: [
          {
            imgSrc: '/assets/img/photo_caroussel_1.webp',
            imgAlt: 'Image description for slide 1'
          },
          {
            imgSrc: '/assets/img/photo_caroussel_2.webp',
            imgAlt: 'Image description for slide 2'
          },
          {
            imgSrc: '/assets/img/photo_caroussel_3.webp',
            imgAlt: 'Image description for slide 3'
          },
          {
            imgSrc: '/assets/img/photo_caroussel_4.webp',
            imgAlt: 'Image description for slide 4'
          },
          {
            imgSrc: '/assets/img/photo_caroussel_5.webp',
            imgAlt: 'Image description for slide 5'
          }
        ],            
        currentSlideIndex: 1,
        previous() {                
            if (this.currentSlideIndex > 1) {                    
                this.currentSlideIndex = this.currentSlideIndex - 1                
            } else {   
                // If it's the first slide, go to the last slide           
                this.currentSlideIndex = this.slides.length                
            }            
        },            
        next() {                
            if (this.currentSlideIndex < this.slides.length) {                    
                this.currentSlideIndex = this.currentSlideIndex + 1                
            } else {                 
                // If it's the last slide, go to the first slide    
                this.currentSlideIndex = 1                
            }            
        },        
    }" class="relative w-full overflow-hidden pt-6 pb-6 rounded-lg"> <button type="button" class="absolute left-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-surface/40 p-2 text-on-surface transition hover:bg-surface/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:outline-offset-0 dark:bg-surface-dark/40 dark:text-on-surface-dark dark:hover:bg-surface-dark/60 dark:focus-visible:outline-primary-dark" aria-label="previous slide" x-on:click="previous()"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="3" class="size-5 md:size-6 pr-0.5" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path> </svg> </button> <button type="button" class="absolute right-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-surface/40 p-2 text-on-surface transition hover:bg-surface/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:outline-offset-0 dark:bg-surface-dark/40 dark:text-on-surface-dark dark:hover:bg-surface-dark/60 dark:focus-visible:outline-primary-dark" aria-label="next slide" x-on:click="next()"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="3" class="size-5 md:size-6 pl-0.5" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path> </svg> </button> <div class="relative min-h-[50svh] w-full rounded-lg overflow-hidden"> <template x-for="(slide, index) in slides"> <div x-show="currentSlideIndex == index + 1" class="absolute inset-0" x-transition.opacity.duration.1000ms> <img class="absolute w-full h-full inset-0 object-cover rounded-lg text-on-surface dark:text-on-surface-dark" :src="slide.imgSrc" :alt="slide.imgAlt"> </div> </template> </div> <div class="absolute rounded-radius bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-4 md:gap-3 bg-surface/75 px-1.5 py-1 md:px-2 dark:bg-surface-dark/75" role="group" aria-label="slides"> <template x-for="(slide, index) in slides"> <button class="size-2 rounded-full transition bg-on-surface dark:bg-on-surface-dark" x-on:click="currentSlideIndex = index + 1" :class="[currentSlideIndex === index + 1 ? 'bg-on-surface dark:bg-on-surface-dark' : 'bg-on-surface/50 dark:bg-on-surface-dark/50']" :aria-label="'slide ' + (index + 1)"></button> </template> </div> </div> </div> </div>`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/components/Carousel.astro", void 0);

const $$Festival = createComponent(($$result, $$props, $$slots) => {
  const title = "Le festival";
  const subTitle = "Du 21 au 25 avril 2025";
  const subTitle2 = "L'alliance du trail et de la cin\xE9matographie.";
  const description = "\xAB \xC7a va Trai'ler ! \xBB accueille des festivaliers enthousiastes et cin\xE9philes, afin de partager ensemble leur amour du septi\xE8me art et de la course \xE0 pied.";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "description": description, "subTitle": subTitle, "subTitle2": subTitle2, "src": imgHero, "alt": "Le Festival", "classContent": "" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ça va trai'ler</h1> <h2 class="text-2xl text-gray-800 max-w-3xl mx-auto">Le festival qui unit le cinéma et le sport</h2> </div> <div class="mb-16"> <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Nos origines</h2> <div class="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"> <p class="mb-4">Créé par une équipe de passionnés de sport et de cinéma, "Ça va trai'ler" est né de l'envie de connecter deux mondes, qui stimulent la créativité et l'énergie.</p> <p>L'idée est de combiner l'exploration visuelle des courts-métrages avec l'effort physique, tout en offrant aux participants une expérience riche en émotions, et en découvertes.</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <div class="rounded-lg shadow p-8 hover:shadow-lg hover:bg-(--color-red) transition-all duration-300 ease-in-out"> <h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2">Objectifs</h2> <ul class="space-y-2 ml-5 list-disc text-gray-800"> <li>Valoriser l'inclusivité et l'accessibilité</li> <li>Permettre la rencontre entre deux mondes opposés</li> <li>Promouvoir le dépassement de soi</li> <li>Encourager les activités en famille</li> </ul> </div> <div class="rounded-lg shadow p-8 hover:shadow-lg hover:bg-(--color-orange) transition-all duration-300 ease-in-out"> <h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2">L'équipe</h2> <div class="space-y-4"> <p>Notre équipe est composée de réalisateurs, athlètes et organisateurs événementiels passionnés.</p> <p>Ensemble, nous partageons la vision d'un festival qui unit culture et performance physique, et qui repousse les limites de l'expérience audiovisuelle en plein air.</p> </div> </div> <div class="rounded-lg shadow p-8 hover:shadow-lg hover:bg-(--color-yellow) transition-all duration-300 ease-in-out"> <h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2">Engagements écologiques et sociaux</h2> <div class="space-y-4"> <p>Nous avons à cœur d'organiser un festival écoresponsable.</p> <p>Nous utilisons des matériaux recyclés, privilégions les circuits courts pour la restauration et encourageons l'usage de transports en commun.</p> <p>En outre, toutes les activités et projections sont accessibles aux personnes à mobilité réduite.</p> </div> </div> </div> <div class="mb-16"> ${renderComponent($$result3, "Carousel", $$Carousel, {})} </div> <div class="mb-16"> <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Pourquoi participer ?</h2> <div class="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"> <p class="mb-4">Participer à "Ça va trai'ler" c'est vivre une expérience nouvelle et unique.</p> <p class="mb-4">C'est l'occasion de voir des courts-métrages inspirants tout en s'engageant activement dans des activités physiques accessibles à tous.</p> <p class="mb-4">Que vous soyez amateur de trail, de cinéma ou simplement à la recherche d'une aventure différente, ce festival est fait pour vous.</p> <p>C'est aussi une excellente façon de booster le milieu événementiel local, autour de chez vous !</p> </div> </div> <div class="mb-16"> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nos valeurs</h2> <div class="mb-12 max-w-4xl mx-auto"> <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Inclusivité et accessibilité</h3> <div class="text-lg text-gray-700 leading-relaxed"> <p class="mb-3">Nous croyons que le sport et le cinéma doivent être accessibles à tous.</p> <p class="mb-3">C'est pourquoi <em>"Ça va trai'ler"</em> propose des projections et des activités sportives adaptées à tous les publics, y compris aux personnes à mobilité réduite.</p> <p>Nous offrons des espaces conviviaux où chacun, des enfants aux seniors, peut participer activement, quelles que soient ses capacités.</p> </div> </div> <div class="mb-12 max-w-4xl mx-auto"> <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Dépassement de soi</h3> <div class="text-lg text-gray-700 leading-relaxed"> <p class="mb-3">Le dépassement de soi est au cœur de l'expérience du festival.</p> <p class="mb-3">Que ce soit dans les courts-métrages projetés ou les activités sportives organisées, nous voulons inspirer chacun à aller au-delà de ses limites.</p> <p>Chaque participant, cinéphile ou athlète, peut trouver dans notre festival une source de motivation et de persévérance.</p> </div> </div> <div class="mb-12 max-w-4xl mx-auto"> <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Innovation et Créativité</h3> <div class="text-lg text-gray-700 leading-relaxed"> <p class="mb-3">Nous croyons que l'innovation est la clé pour repousser les frontières du cinéma et du sport.</p> <p class="mb-3">"Ça va trai'ler" intègre des technologies immersives et utilise des technologies de pointes, comme les écrans larges LED, pour offrir une expérience unique.</p> <p>Notre festival est également un tremplin pour les jeunes cinéastes et sportifs qui réinventent leurs disciplines avec créativité et audace.</p> </div> </div> <div class="mb-12 max-w-4xl mx-auto"> <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Respect de l'Environnement</h3> <div class="text-lg text-gray-700 leading-relaxed"> <p class="mb-3">L'environnement est une priorité pour nous. En tant que festival en plein air, nous nous engageons à minimiser notre empreinte écologique.</p> <p class="mb-3">Cela se traduit par des initiatives écoresponsables comme l'utilisation de matériaux recyclables, la gestion raisonnée des déchets et la promotion de modes de transport doux.</p> <p>Nous voulons protéger la nature tout en célébrant la culture.</p> </div> </div> <div class="max-w-4xl mx-auto"> <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Partage et Communauté</h3> <div class="text-lg text-gray-700 leading-relaxed"> <p class="mb-3">Notre festival est plus qu'un simple festival : c'est une communauté.</p> <p class="mb-3">Notre événement est conçu pour favoriser le partage, qu'il s'agisse d'échanges entre cinéastes, sportifs, ou visiteurs.</p> <p class="mb-3">Nous créons un environnement où les participants peuvent se rencontrer, discuter, et tisser des liens autour de passions communes.</p> <p>Le festival est un espace de partage intergénérationnel où chacun peut apprendre de l'autre.</p> </div> </div> </div> <div class="max-w-4xl mx-auto text-center"> <blockquote class="text-lg italic text-gray-700 px-8 py-6 border-l-4 border-(--color-red) bg-gray-50">
"Nos valeurs sont le reflet de notre vision d'un festival inclusif, innovant et respectueux de la nature. Rejoignez-nous pour une 
          expérience inoubliable où le cinéma et le sport se rencontrent dans un cadre unique, guidé par des principes forts. 
          Ensemble, célébrons le dépassement de soi, le partage et la créativité."
</blockquote> </div> </div> <div class="flex justify-end items-center my-12"> ${renderComponent($$result3, "Picture", $$Picture, { "src": imgArbre, "alt": "Pousse dans une main", "class": "max-h-128 w-auto object-contain", "widths": [300, 600], "sizes": "(max-width: 767px) 300px, 600px" })} </div> ` })}` })}`;
}, "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/festival.astro", void 0);

const $$file = "C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/festival.astro";
const $$url = "/festival";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Festival,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
