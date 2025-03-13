import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_D_u7r7lG.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/","cacheDir":"file:///C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/node_modules/.astro/","outDir":"file:///C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/dist/","srcDir":"file:///C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/","publicDir":"file:///C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/public/","buildClientDir":"file:///C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/dist/","buildServerDir":"file:///C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/activites/[id]","isIndex":false,"type":"page","pattern":"^\\/activites\\/([^/]+?)\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/activites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/activites","isIndex":true,"type":"page","pattern":"^\\/activites\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activites/index.astro","pathname":"/activites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/billetterie","isIndex":false,"type":"page","pattern":"^\\/billetterie\\/?$","segments":[[{"content":"billetterie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/billetterie.astro","pathname":"/billetterie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/festival","isIndex":false,"type":"page","pattern":"^\\/festival\\/?$","segments":[[{"content":"festival","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/festival.astro","pathname":"/festival","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/films/[id]","isIndex":false,"type":"page","pattern":"^\\/films\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/films/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/films","isIndex":true,"type":"page","pattern":"^\\/films\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/films/index.astro","pathname":"/films","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/informations","isIndex":false,"type":"page","pattern":"^\\/informations\\/?$","segments":[[{"content":"informations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/informations.astro","pathname":"/informations","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/invites/[id]","isIndex":false,"type":"page","pattern":"^\\/invites\\/([^/]+?)\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/invites","isIndex":true,"type":"page","pattern":"^\\/invites\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invites/index.astro","pathname":"/invites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/billetterie.BPmQ_tAy.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/billetterie.astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/festival.astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/informations.astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/activites/[id]@_@astro":"pages/activites/_id_.astro.mjs","\u0000@astro-page:src/pages/activites/index@_@astro":"pages/activites.astro.mjs","\u0000@astro-page:src/pages/billetterie@_@astro":"pages/billetterie.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/festival@_@astro":"pages/festival.astro.mjs","\u0000@astro-page:src/pages/films/[id]@_@astro":"pages/films/_id_.astro.mjs","\u0000@astro-page:src/pages/films/index@_@astro":"pages/films.astro.mjs","\u0000@astro-page:src/pages/informations@_@astro":"pages/informations.astro.mjs","\u0000@astro-page:src/pages/invites/[id]@_@astro":"pages/invites/_id_.astro.mjs","\u0000@astro-page:src/pages/invites/index@_@astro":"pages/invites.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DzmDWyeb.mjs","C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CcScG2lV.mjs","C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/billetterie.astro?astro&type=script&index=0&lang.ts":"_astro/billetterie.astro_astro_type_script_index_0_lang.DkS__F1Y.js","C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.IDg706x9.js","C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B7DeJ-AB.js","C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DkYN6Z_J.js","C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.qTnFT6Zc.js","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/billetterie.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\"form\");e&&e.addEventListener(\"submit\",t=>{t.preventDefault(),alert(\"Merci pour votre réservation !\")})});"],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/activites/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{console.log(\"Script de filtrage d'activités initialisé\");const r=new URL(window.location.href).searchParams.get(\"categorie\")||\"Toutes les activités\";console.log(\"Catégorie active:\",r),document.querySelectorAll(\".filter-button\").forEach(o=>{o.addEventListener(\"click\",i=>{i.preventDefault();const e=o.getAttribute(\"data-categorie\");console.log(\"Filtre de catégorie cliqué:\",e);const t=new URL(window.location.href);e===\"Toutes les activités\"?t.searchParams.delete(\"categorie\"):t.searchParams.set(\"categorie\",e),window.location.href=t.toString()})})});"],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/films/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{console.log(\"Script de filtrage de films initialisé\");const r=new URL(window.location.href).searchParams.get(\"genre\")||\"Tous les films\";console.log(\"Genre actif:\",r),document.querySelectorAll(\".filter-button\").forEach(n=>{n.addEventListener(\"click\",o=>{o.preventDefault();const e=n.getAttribute(\"data-genre\");console.log(\"Filtre de genre cliqué:\",e);const t=new URL(window.location.href);e===\"Tous les films\"?t.searchParams.delete(\"genre\"):t.searchParams.set(\"genre\",e),window.location.href=t.toString()})})});"],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/pages/invites/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{console.log(\"Script de filtrage initialisé\");const r=new URL(window.location.href).searchParams.get(\"role\")||\"Tous\";console.log(\"Rôle actif:\",r),document.querySelectorAll(\".filter-button\").forEach(o=>{o.addEventListener(\"click\",l=>{l.preventDefault();const e=o.getAttribute(\"data-role\");console.log(\"Filtre cliqué:\",e);const t=new URL(window.location.href);e===\"Tous\"?t.searchParams.delete(\"role\"):t.searchParams.set(\"role\",e),window.location.href=t.toString()})})});"],["C:/Users/leoba/Documents/GitHub/sae-203-2025-LeoBaudry/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"#menu-btn\"),l=document.querySelector(\"#menu\"),c=document.body;t&&l&&t.addEventListener(\"click\",()=>{const e=t.getAttribute(\"aria-expanded\")===\"true\";t.setAttribute(\"aria-expanded\",String(!e)),l.setAttribute(\"aria-hidden\",String(e)),c.classList.toggle(\"noscroll\",!e)});const o=document.querySelector(\"#header\");let r=window.scrollY,i=!1;const d=205;function a(){const e=window.scrollY;e>r&&e>d?o.classList.add(\"-translate-y-full\"):o.classList.remove(\"-translate-y-full\"),r=e,i=!1}window.addEventListener(\"scroll\",()=>{i||(window.requestAnimationFrame(a),i=!0)});document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelectorAll(\".group > div > a\");window.innerWidth<1024&&e.forEach(n=>{n.nextElementSibling&&n.addEventListener(\"click\",s=>{window.innerWidth<1024&&(s.preventDefault(),n.nextElementSibling.classList.toggle(\"hidden\"))})})});"]],"assets":["/_astro/ISFF.DvfZ6_E9.webp","/_astro/decathlon.CmuWnXYo.webp","/_astro/logo-vectoriel-ville-de-belfort.Dfi5UeNX.webp","/_astro/icon-facebook-white.DTZtHv8_.svg","/_astro/icon-instagram-white.CeN22xh4.svg","/_astro/est_republicain.DZoS-zoF.webp","/_astro/icon-youtube-white.MiidPN7Q.svg","/_astro/icon-twitter-white.DvynblxT.svg","/_astro/icon-tiktok-white.8rUGvhBp.svg","/_astro/hero-homepage.C52XaM2K.webp","/_astro/contact-01.BWoTtZNg.webp","/_astro/icon-house.N7e3Fqm2.svg","/_astro/icon-clock.Bzx7cYDP.svg","/_astro/icon-category.DXHrnhLw.svg","/_astro/icon-calendar.hIiECV0I.svg","/_astro/flag-fr.B6HdQirC.svg","/_astro/icon-director.Cm-QJRgG.svg","/_astro/icon-projection.CzI3xsQ0.svg","/_astro/festival-02.7kStPE99.webp","/_astro/icon-production.CU6pNbOC.svg","/_astro/arbre_main.CE0OD-gs.webp","/_astro/festival-01.DZyNhW3a.webp","/_astro/billetterie-01.W1CYcRqr.webp","/_astro/dm-sans-latin-ext-400-normal.Cygz-XR6.woff2","/_astro/mulish-vietnamese-400-normal.2eFnXJo1.woff2","/_astro/dm-sans-latin-400-normal.COF6noiJ.woff2","/_astro/mulish-cyrillic-ext-400-normal.DJ1cpvF8.woff2","/_astro/mulish-latin-ext-400-normal.DJvxwb0P.woff2","/_astro/mulish-cyrillic-400-normal.DoXf7eGK.woff2","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/mulish-latin-400-normal.M3OQmH06.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/logo-white.C-PWymHK.svg","/_astro/logo-black.vaEz9zHh.svg","/_astro/dm-sans-latin-ext-400-normal.NAt9AhwD.woff","/_astro/dm-sans-latin-400-normal.DmRB7q_B.woff","/_astro/mulish-vietnamese-400-normal.C8k3Q01s.woff","/_astro/mulish-cyrillic-ext-400-normal.D-MBlSGi.woff","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/mulish-latin-400-normal.Cc7D2LHJ.woff","/_astro/mulish-latin-ext-400-normal.BMAEjqWm.woff","/_astro/mulish-cyrillic-400-normal.Y0YbCLzO.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/billetterie.BPmQ_tAy.css","/favicon.svg","/_astro/page.BCFd37Sx.js","/assets/img/photo_caroussel_1.webp","/assets/img/photo_caroussel_2.webp","/assets/img/photo_caroussel_3.webp","/assets/img/photo_caroussel_4.webp","/assets/img/photo_caroussel_5.webp","/_astro/page.BCFd37Sx.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9W3yRqgow/H3Wi+LhMhQqmwnYYJed3lHo26W6S2f3eU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
