if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/main-62a3e12e79ce59795999.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/404-165c5ea36ef752d156c7.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/_app-d831f1a61fe3853051c9.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/autoridades-8f0ee811816d52e1a809.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/index-ec8c234ef96f4dc34229.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/niveles-5f891b0648196f57dab6.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/niveles/inicial-32528e6618d625f07524.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/niveles/primario-73e5e17ab98f231b3a73.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/niveles/secundario-97aca1cf550ef36fec9b.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/pages/nosotros-2a050da3f762dca84c6c.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/css/120f2e2270820d49a21f.css",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/css/ede90f626ce500982c51.css",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/gBRDAr_RnjXl3RKO69Bp3/_buildManifest.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/_next/static/gBRDAr_RnjXl3RKO69Bp3/_ssgManifest.js",revision:"gBRDAr_RnjXl3RKO69Bp3"},{url:"/img/lasnieves.png",revision:"831d4c255fab1e3c56dfbded8653a96e"},{url:"/manifest.json",revision:"d249cc7f36e4c4d345629d5a88b0a907"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
