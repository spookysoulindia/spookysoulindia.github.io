'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "332b7d2e7f94a9cd618727fc15780d3b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "1839252b1a3cfadac7b323c414166b25",
"main.dart.js": "96bf616933d1681a189b32da79b201b0",
"assets/AssetManifest.json": "37b3eff0d9a1f2f333da8ca44788d199",
"assets/NOTICES": "1af69640b47189d1a92002281c6d1f04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/crophoddie.jpg": "12eaa0dc5de3bf13b9eedea1c898a887",
"assets/assets/dude.png": "1e6c9d55ad2d2287c0018bec128369bf",
"assets/assets/noimage.png": "e6363d885f9f1c60001a2aefbb729767",
"assets/assets/shirts.jpg": "85526b8433db7f33b97e0ab1dd4dab08",
"assets/assets/chic.png": "ace8b36344244714349b21468687f6fd",
"assets/assets/whatsapp.png": "b6288a41ab215477cf69da06bf65eae0",
"assets/assets/womenstshirt.jpg": "3bb64ed233ce43d7ef2bed1cfcbf685b",
"assets/assets/404.png": "112d5af6363ba91b67e49ae6c334cb57",
"assets/assets/oversizedtshirts.jpg": "6026d14ce8ea86a001245ae232e55b24",
"assets/assets/hood.png": "6b920aeb383e5474f90f1622b67ef7b9",
"assets/assets/croptops.jpg": "c654815b811c28cb98c09a1d90163245",
"assets/shaders/ink_sparkle.frag": "c4a781c7aac4541e0f7120c52c5b83ee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "1de86ee03afc50d8625ef61d793afa5f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "032ad65f18dbf09c085e8f3d88fafc93",
".git/config": "f669c3efca21cf9e069c56b5082f9a9b",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "fdf9e8f975969b135b729c3e53a0cddd",
".git/refs/heads/main": "fdf9e8f975969b135b729c3e53a0cddd",
".git/logs/HEAD": "38681ea475e57312179abd1b8d0a381b",
".git/logs/refs/remotes/origin/main": "c6ad9391131ccd9ccf4e86c8f37954b6",
".git/logs/refs/heads/main": "fd1ba2e6ae9eddf57f505a20e5bcf258",
".git/objects/5f/ba6dc7684e421dbf75f56e86f3cb2b453d3fb8": "ebb5997f515b4a3683099600f1ec990f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/39/ca674b68257ca095a4aefb2ee308a8d522118e": "93ab54d1f8998d01133b6767d8d99843",
".git/objects/d0/a6904d84e5af19ea8eb1cf696f5ce00cf750e3": "12535175171216d5f85f5fef022fc662",
".git/objects/d0/29cc3b99eb1307f848939e687af3b17ee65ba4": "a9f92717698809c537b8729538d67359",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/19/4281f1050d06f8d818572d677d5eb38ca1a498": "e19bd0e12d50b00c71e9529d9911a6d0",
".git/objects/c2/8635d55b0cda5bae724b400ef5e1c327736acd": "cb698dbb8f9736d7a4b294c705ee78e5",
".git/objects/2f/daf13cf7edd560d2c6cc10bc49b86139df39d7": "6a6c4977b61f9273506dcf93c58a51cc",
".git/objects/a8/ca17d9fc11f60822f24af5b710e5e567491bf2": "2d9875ccc69a8f9ffe702ac0c335d330",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/58/871030aef8acd0862f208accc4babd751e5116": "3066e6949f447d677b2398acd19c82fe",
".git/objects/be/58a51f4666a1d22fc1d83b600512493be75620": "b1fc7d43568e18edff8a02e9487bf871",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/76/96af1cf4effbdd5df5013f43e8d19448e91f68": "9997ba6dedd2e5cf9bbfcc1c230ff674",
".git/objects/a0/1337303f8b491a2cbfe41ae48145f82e4b81fc": "c941c67479174ce01eb1e040c9b4bb1b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b1/1f78528e86cf640556f25d28e1a1d7939ae682": "3faec932d7f23dc133f20cce1fc16dd0",
".git/objects/00/72c23f60ca36c75f60898da59351e60f3fb5fa": "aa4cf89cca06b8afe487caa9854141c7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1f/d0ee37e4878ebb7e3d9afd8ceb93bebc754625": "140e8c15f94ff00f5e94c69f4cbaa6c1",
".git/objects/4e/47a8b89e43018226f953c2a94f86e7272454cd": "80c08cbe289b6f521d98c59dea11917d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/01/3336f5688fd3676512584296edd8fd4c7bb7c9": "d4d31461d6c4e56f9de50fa37bdf1117",
".git/objects/22/4f66b4fc53f5f186aff156cbf77f13fb84f3fa": "4e676963e71a04d8eb9e341b2b981432",
".git/objects/79/70324efea93d944220d92fc36085bc09d642df": "3b130295b10ea53b17596a4679af42d4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/d8/e8b95dbe0a669ce05cdebbf5dcc78e62c09f20": "9f4741c5d816af2d929e30236dd7ab1b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/91/0433b5178c7ef55d65b05b5877b46599f1ce24": "d8bec77cc3e5419f6c9924726048a9d4",
".git/objects/91/886bc45db849d3e379412389e06a05ce914606": "b008af513517ddfcd98af1a6ee570ea6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/92/95818ea714868adb8401830940caf2cd425ac5": "a1ed133f3a3daef76054bbb7022a15c4",
".git/objects/cf/d8e93fbb18661e188841d7c284dda89b1fa415": "2f6704a0de9a5efcf61cba2435c8068d",
".git/objects/cf/934738e58762608667e872b385f30c079a76fc": "fa54bf20560035eb2d803fdb9f4fd08a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b9a6237907da1c2dd90fa709b8f0ab24575a99": "1a05437c3c5f4a83f4962d3bcfea2264",
".git/objects/c0/dbfbfe9152f49e37c635949e137d22ad68c48c": "9fc3108094a96225ca9c0d319cf55a61",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/11/9e5b01131286f4e6b19b963b731bdd3588004a": "ce875599985f4bd05718fe4d69295621",
".git/objects/7b/a6871107769ae88e4d6f5650ad373e309cfbb1": "e9259f06888bfe1c7c3ac8a5920a6055",
".git/objects/52/7d704b363635ad21520d01feb87374b8c45034": "512d6d7a76941acdbcb8b8a11d797e0c",
".git/objects/4c/575a9abf4912b312c39f8c866c74222478af70": "3dd567fe23f59f3049ecc0640ee6d873",
".git/objects/94/e370365c32193ba4dedb5ea8f17a0a4b9c060c": "89da55a3ddd8da75d6f7a8fce8c8baaf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/13/e9a37b70022eab78ed7ced81336288c7a991bb": "3611c6b5f4652875f5a4bc318a30ac8c",
".git/objects/5e/581121bef3bcf0076b29f74993f24769f8bc5c": "4cb525bc3fa40d7427e29b8f7a3c907d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/70360116c6154debff6a31ffd8f5d8d24a6c93": "17b7148fb89475787f240946418b16e7",
".git/objects/e0/fe059707dc1b2654aa3697621de4f5ec70b177": "99807ea2fe79f6d560cf83695a547f9b",
".git/objects/bd/c86d5a70cfa0dfedc529bd7cce535cf21397ed": "1669910a137257cb1dd9ed84f2919764",
".git/objects/da/eecb0fa5bd6d10990f06fce268f9a773315f17": "ff0cd768bbe53ea2754ed44fb553694b",
".git/objects/51/fa7b1ee71ad7d7417d65d336aa1c85f95dbf45": "1558a83d3170a5f00b68b44567da591e",
".git/objects/16/b99947c172e3681a697ec932a6cc395ee4714b": "56d15723800a2ea33762533a45f08017",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/95/1b4764af9333651e14ac17645e0f8c69cf4fc0": "bc852e37cc40aaf7ae780d073b75b3d7",
".git/objects/05/98cad3cd62c294b2d98d31097188f2a02e0ced": "f458501dcf6aaf1c0ded0ae66aedb065",
".git/objects/c6/403e37e33b4c46d90ae14eaf82fe08dd187330": "f7e6b100f69082105ba3b2076ffae5df",
".git/objects/8f/6bf94b387b9440981df79bda8ebc9476a2c784": "f6eb1e8dc65119b947d778fa366b4a56",
".git/objects/04/0310bf25d6a81c88e390c6a0e1f577450826d0": "acdb48729bd7a6b44a17e683ff8e51d9",
".git/objects/87/79833a218f8501376c0704fcc50c73d481c937": "cfa464de43a59dbdc70e867e44695ff8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"manifest.json": "40393efeac57bd5fdc054736f21f84cf",
"index.html": "8eb3004d11392b4350cd833458b64347",
"/": "8eb3004d11392b4350cd833458b64347"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
