'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "ce1fb41198bce3db07317af34abd7a6f",
"icons/Icon-192.png": "364f7b1a7ccfb263a5e428d8c194fc6d",
"icons/Icon-maskable-192.png": "364f7b1a7ccfb263a5e428d8c194fc6d",
"icons/Icon-512.png": "3ee6f72dce5160a54917439dfe61900a",
"icons/Icon-maskable-512.png": "3ee6f72dce5160a54917439dfe61900a",
"version.json": "1839252b1a3cfadac7b323c414166b25",
"main.dart.js": "d9044d792ada4bfb9a519aad3152e86e",
"assets/AssetManifest.json": "7803fc371fc3fb8953d409a2bf6351ec",
"assets/NOTICES": "3f921bc3ef8aeea6e1f248dc65d38a1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/AssetManifest.bin": "838a029acef489c6f9d495cafd57a2d1",
"assets/fonts/MaterialIcons-Regular.otf": "8a09551a4e59e666d320abf1d2d0fd34",
"assets/assets/images/bubble.png": "d6349e3c47917054e5f504b53950d481",
"assets/assets/images/instagram.png": "875597c968ee64e7cf5afbdec5f95278",
"assets/assets/images/twitter.png": "5ca83f36d1de9f323f4217c169fea445",
"assets/assets/images/croptop.png": "4e8d78855b77771f11c0a728ac3c01fd",
"assets/assets/images/noimage.png": "e6363d885f9f1c60001a2aefbb729767",
"assets/assets/images/crophoodie.png": "d653f237fdaeebe049edda8e8f8d48a8",
"assets/assets/images/tshirt.png": "6f4ad4918781b6bfa85b4ea3273cc271",
"assets/assets/images/oversized.png": "1e19d60737976f630cf1e2132c6d59ef",
"assets/assets/images/spooky.png": "9a1b8dbe17e7de00e0de1ce822346403",
"assets/assets/images/hoodie.png": "77d4b6c755111de6455fe1a158217211",
"assets/assets/images/whatsapp.png": "b6288a41ab215477cf69da06bf65eae0",
"assets/assets/images/facebook.png": "ac65533df079a192ce511d1c1e5889d6",
"assets/assets/images/googleplay.png": "1f12a6762bc48d9b8718238d2da2c41d",
"assets/assets/images/appstore.png": "0a5c3b9a186b3f1b7ba45b70dacc5f34",
"assets/assets/images/spooky_black.png": "1f5131b369e594b60e0c56c7646ba479",
"assets/assets/images/linkedin.png": "d2b6c44104204eb1644c41e0382b9656",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "ec99a48112ab01b8d4ce46281f6347d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "670497c497d34bb186fe4d26c31e33f3",
".git/config": "9ade6c9e6878762c8a66e67bf5ffa5ce",
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
".git/refs/remotes/origin/main": "2a940825daf284b815cb938f135465f9",
".git/refs/heads/main": "2a940825daf284b815cb938f135465f9",
".git/logs/HEAD": "702fc92cf7a79b646ba871846d18d69e",
".git/logs/refs/remotes/origin/main": "3eb7e0ef328879fb4ad068ad47c34516",
".git/logs/refs/heads/main": "da9f8c63eba2adb66dadf692662b5b98",
".git/objects/5f/d4b5e3676c1a3ebacbde0198a382c1d81f2a4c": "e53a349118d4c6685ce4dcdeeb62206f",
".git/objects/6b/95cc09ea32b1d715e1858a676bd553dd8ade90": "f1145b95eceee0b77ed8facaf3899f87",
".git/objects/53/c5c8cbf07c01e52bd4889366eaa56c2b28b985": "4b4299e8c99f11dd8a14f458d42d19e7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/bbaf8947a75212e95a596f15eb17a05463695b": "421634a5cc7ec70f5a9234069a49b314",
".git/objects/2a/2c09962a1187c364fe13fbea46073dce7c53cd": "eccac105e79b28d554fe802808932365",
".git/objects/8a/e3a5c6463fd379b8ec674f43ceba5e3c7fac97": "a6cbef3889e6485e54a7dc083c34ebb6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d1375264cc7802d269b4e6ba0a2327fda959cd": "10fd8465a80a0d0b39352a32edeb5b0a",
".git/objects/ba/b6b4c0ca206e3064eb3e88a8740fdf533acfca": "fc3df6da315e0c97564f63618a0f4586",
".git/objects/69/cc937380975ab7fab89e5c1e71ae8199aa9084": "d7cd8798f7eae973e34d01e1b48142d8",
".git/objects/69/e916c75289bd8f64e23af50a27982abaf59f7c": "93784d415ea443b67e550af5c5a3d2b6",
".git/objects/93/de766f3fb9e1208469f8d19eb7551e451615aa": "ca20d11dd5159d77366b3127df1f6e7f",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/af/6c0915f4b9549cf0324ad379b1971ec25fcb7e": "69c970f65042c71aaebdad7d32ecdaf1",
".git/objects/af/07b71133e0b9a3b10d24884e8b88b3bc1ebd6f": "aa011a0e92e787cfb7779516671d55b1",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/2c/25ee7e0440dbb0fa0676cd77fdb1c87417b8ce": "2c06a6e1978869f56703e5c3a6ccbab1",
".git/objects/03/6d26533723078aa8a1d56d991f58c46c2cf854": "ed9dd8b1333bc3e5d121838a6003020f",
".git/objects/ad/a7d4d23ef5a3388fe8f674ac3a4fe743b7d154": "94d00670d06f38b0f6994c5cdf73f4e8",
".git/objects/e1/fd25003586f0282e4d99c62565a9f4379079f2": "299c277859c62fdca8324974be58f07a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/a51dd64a679abf91181bdbb7a71788860babaf": "30b3ce7b6e88e0a39afb11fc8d6d422c",
".git/objects/0e/d3426d50eb7047263994573f3bdb133b256c30": "49c82c7f9cddb024eed31e37c76925ae",
".git/objects/58/12f07c5bc2ceac7ab7f39772d623ba46a32f6c": "dff94aecc6b589eb847d357161755aa0",
".git/objects/32/bd2f7575a9284256fe95be6a4266cb46f49697": "4261cd8115c5baea7a65e19f5de9b39f",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/6c/d88579a301ab66db7c89f0dd907ce6faf0bd28": "ecbed0ead95c2f14204512899035b85b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/59/d2eb1a1c259d5a527066dfb06579c66612f228": "ea46794a117c6efda4845bbdcd6deb84",
".git/objects/bb/274e1288888d12ad36f788410ba37f23948f65": "28a2193ce78c158a9cc60d23419a74b9",
".git/objects/bb/6e0b1ccb5c75eb0616342f1bb64102a5289387": "85204319e03e469489a7d07da3efdc97",
".git/objects/3e/b1244b3306f3a08e73eb456626d7455a5c3759": "6463c2e3c6aeaccf1f76e98cda9f0482",
".git/objects/85/935ea9d00ee0b165eacbea5e6241fff1b82800": "9f50d34247ec572ebdbb4fd16b479c93",
".git/objects/72/3893fc2dfa7b9befb76304c33f917a93004dff": "299c5edffcdd72577c2fc0af1bf2efde",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/67/7286a85a39f93ce858497c48986c8afd6e6ce1": "e0122d52523f6de92ab4ae6c72de5343",
".git/objects/67/6aac63f082aaf2746138616b081616657be5c6": "13a77059459958d31b6bc4732eda3c5b",
".git/objects/67/53a28ca9a1decd3a021c0778520646c5ea0812": "0cbb645131d9c5aa0b7c4f26c23cbd44",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/61/c04cab8f93e34176a5c771cb5b0cdabc4c956a": "d99f300ae33d9e30a6e3d33ac1f46526",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/36/18ba4dd835f06106c5ffaddac31bc906896d8c": "423434e090524116cbcf8d6a8d456fe0",
".git/objects/6f/f6937d20c49c09594b3a45adaae82f8fa7eb11": "a588ae18f755396a6e63d7dd3b384eaa",
".git/objects/54/d9f15d173a008cc293294c161833793f87064c": "87c25983f67414fbd77f16ad7bf4957f",
".git/objects/9c/6e2965daa49d208a80e6671c70edcd8ee390e4": "b8b223d11c2c7c4db32fcb9b8099c383",
".git/objects/7c/8df407ff898079560655547710b17b8c2a1d87": "b77811ecd4208c3c37f969abf9ac732c",
".git/objects/e3/2e7ce0141b52879900cde2eaff435f16555539": "08d53fabcb3944a3d9c41099abe33204",
".git/objects/6e/80c4f45048a0bedc0ef996afb52f6b246c784a": "960c4104b792435be1e271b35c0da951",
".git/objects/99/964e08ca147ef172995a6cd9b1e3db317b0efc": "ffdbae9cacafdc6390626378640a7e67",
".git/objects/1f/da49fbcbca3524b12f7a06e7fd34786a4ff8af": "be3b0abb94bb100de983871bd95d12ad",
".git/objects/34/d22fc92a69d11f39e3f9673d83200692d23d62": "99fa091b002b338a3584b15d2989ba51",
".git/objects/4e/f044e5462d272f11a9702c5f928edfe34a79e5": "918d198c63009180141e469d1260f27b",
".git/objects/df/f49ba0392d2d6f0f787b52915ab9a93ed2340e": "8774baf4697cd4d1aec3ba78f74d9052",
".git/objects/df/e11a0544b04a4c30eaee712352e756e77cf676": "2be75f493bcfe6b6e8334673418e41ca",
".git/objects/0c/78bc70bc3e10eed7284ea22fad07105bf24f2b": "2945fdd962450076edc2ff5889071749",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/01/ef060b8714f56ec89f4f7f009427b6ae95833e": "7ffe7f1fea7dd6c728fe32193b7848a4",
".git/objects/22/af69ede8823e482f3e2e6c58eb144ab929d152": "384703c6039abd2354bec3f7759ace9d",
".git/objects/30/ee7c1bf051f58d5bda39b7a5670480d8d8140d": "6066a288416434a32ff6fa90ea8269fe",
".git/objects/30/eaf6dee4f81d4da96f3b79cf7f770ebb7394ff": "5103a1361ed44387d59b9387127fd5a8",
".git/objects/27/3d5e9a4c0c422891e5ed553fe52eb72e2a512f": "6c2d68f090557a8c7fbb3aeb3550f773",
".git/objects/38/7753831076f484dfbdf4c8bae7e21eea33ebf8": "77fd896ab4b91829f3e273b64b2516a2",
".git/objects/38/a251c5ecc7f2d4dcedc38b8869b4b62709004f": "6ffe940d9577e1515d3612644358128e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/d8/e24872f3d1efc4c85a2d50cd6ce209bf160262": "3438f7c15316970946e924d2b1aa6865",
".git/objects/75/0a7d8f473b18e93f3510dbea8f381c73d05d48": "ff0c32c3471381c70335ed86c8ce256b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/9b/efe9e022066673145258ac566a9e978e1ef5cf": "2153e6627084961698ef817d87148503",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/33/b6f13b7209ca555c9dd055cdb369f86c55c1ab": "ab67228fdc491fc486ffa9db5581d7e2",
".git/objects/82/25f12cff2f2544a2d95e66a3cd924e5f05162f": "f71670aba23d8883f62f7a97688be8f4",
".git/objects/0b/299d728dd3ba4580158f65a8a9fd14bbad6d8a": "30d5ebb41735bc2f146365c210612303",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/18/f4043ba81eb317e9aa19c5533d69ed2f5a4591": "f6db2a4a80f352c0f49144647617676c",
".git/objects/5d/448e5acba063c856e800b901071382f8d6cd1e": "266e7fc58b2c763ed1cb993004f73a34",
".git/objects/5d/bf2d2d9cefc7e295b9921b73f13d6d40f11868": "de5fc5046be20f04249fe64fd11241dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1a/3c8d1435354bf053329ecd9668586880420618": "18fc52c22473ffad1c1fceee6a962651",
".git/objects/11/6607ad680f7a9936eef2c19fef56a0c15b3765": "23ba58b0e53cc9a62d8cf401de6141b3",
".git/objects/42/67e43bed1d969d50f9202f5504577794e9a3b4": "8ab0e53a2bcf11058494f8e818990855",
".git/objects/5a/6355f6ad562e2a73b74edb028a29f4ea0016d4": "9581410618a57d4f2d61bb673bf71a27",
".git/objects/5a/4f48467274db80a8024b2cf7d4e03c838ee8b8": "895cb5b3c359951f522cb354104da070",
".git/objects/f0/72e879f7f624589fc7f32d7c3afd42e22e4007": "2325468b1f5e1b96a2f9b71165518445",
".git/objects/52/a499a1d7044dc7b144f27f2aaff4a67059655f": "38df6ee5511861eeb552366c565b5142",
".git/objects/52/1fca5b491996ad8d3675bc975dc9c1d7471d0a": "2b4f867c6cbb08439574cbea7da219bd",
".git/objects/52/27a5ccadbd32e9ef25362d120afbdef4a20ff9": "863fd9f55c249c807cb4dfa797a83587",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/4c/575a9abf4912b312c39f8c866c74222478af70": "3dd567fe23f59f3049ecc0640ee6d873",
".git/objects/ea/c6de86c145624919d64c655c9694b8a78a23ea": "e78d4cca839d544052bf4dd8d651d2ea",
".git/objects/ec/d6073b24d818db0f3d5188fc7834350cab1691": "5594dae875d50bcf512080adae17d3fc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/50/9d42d0994ca6e15c7b512a9e5053da86256385": "ea4cae744f1d78b29c53c99fd70e70db",
".git/objects/8c/b1ca433096c988b7dda70f0dea136b8d526d1c": "2c84cb86ba9d06c0634cc0c9123c965a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/ef/33bb23c5a29183c3aba8fa82dd8075b26ddb4e": "18e45f3b5c0b315c1ad0aecd216fa866",
".git/objects/8b/e18de93dc12dfcd2ff24ad012b1cbdc177ccc6": "db3c28918b1a77c39bddb4874ae88cae",
".git/objects/8b/5c4e0dffed9ed9e79b4245f1ef2e95f9d7112c": "68dc2bcadb8771dd3b35b30f736e12ab",
".git/objects/5e/581121bef3bcf0076b29f74993f24769f8bc5c": "4cb525bc3fa40d7427e29b8f7a3c907d",
".git/objects/e0/fe059707dc1b2654aa3697621de4f5ec70b177": "99807ea2fe79f6d560cf83695a547f9b",
".git/objects/bd/07c62efb0c05dd88629e067880020cf4ffbd1f": "2da5ae65273a64eb76bd9f1a17d487e3",
".git/objects/57/5228c6b12083e38112fe47501260f09f031b3f": "523e323608974e7e71f90551c0e652ec",
".git/objects/1b/7de8d9ac3b347c752f6f469bbdef3c47602073": "3eec6a7cac691635ae3bd388ad428954",
".git/objects/51/146f943f9759edf664535699700ed54b31972d": "e28fa9ff27dec286383767458d0a940f",
".git/objects/51/0914eda542e31b9c59797fb8defe8236341336": "2d9bf012e5a71715e89ad83bca761416",
".git/objects/16/e8dfbbffd70dc9e94d211cefc0028944a7cc56": "14fb37fc479ddcc218b4800d2abb7822",
".git/objects/43/6b6670485230734a485306d8fe510036182d29": "64941be1c0e9f862b221c00829632f85",
".git/objects/80/ca6716e5e44c5dc7ab08f58deaa91bf884f262": "e6319723368bbf6f8d6f047a93734ece",
".git/objects/8d/eb1faddb16e6bb813740202d49cfec362addee": "d5c1953049724b15586bf6a722ccb469",
".git/objects/f4/2073d4f2c30158a85684fc327bc643048dbaec": "9dc68efdf299298b1a27b871b97ae174",
".git/objects/98/56e20765aa2195ab3eaa9037f727c1aef3f933": "9555ecab6d6957ba517feb8e93ac5f8c",
".git/objects/44/b2bd1216c49bbac1b47d0d3a6b9c27045ae5b5": "57fa69fe4c9fe230cf229bfaaac2cef3",
".git/objects/c8/a61bd057aa048c5b2f77946de868813b5adcc3": "769e458f3d685cd435b6681934250f95",
".git/objects/95/46d89d69923f517e4cffefd6e22716a8ed8f5f": "8dcc9a8f71ad0641a948928a54fb4b9e",
".git/objects/25/10b152a65356513928554cb37531763aa15f60": "d497bae23aba8cbe2b209ab1844cb5fc",
".git/objects/2d/03a7e4d538482be9fd088b96918cc2a575e862": "d10554f118a4750a1d4b6465065d00dc",
".git/objects/c6/3c32a6e6f5a6d494311917725bc25982263be0": "4c29f3e115e64cf6184580dec380b5e1",
".git/objects/b0/119f57df7f2ff1529c3c2078758791a89dce5f": "6b23226a482ff7c8e9874779f62d5672",
".git/objects/a5/44e6b393e2598a36048faac1419ac09ed2d321": "5cc637308b8f68beb936b0f7b4d44ef2",
".git/objects/3d/96afa9c9d04568b50d5a617506cf439bcd6138": "0bc1e8783f6a92eaeb2c8d60878b4e3c",
".git/objects/4d/4c4b883e7825946b0ee1b099246b5d615365ca": "798b47717b1fbd7c6ac2153f93f71e40",
".git/objects/0d/f34782f70d85e0201ba396de386071282ee6ee": "580d5b7ef5ec95a5bd16ed6b7d9014f4",
".git/objects/20/dd300b934735c7c2dd0cca1dfac8c341384133": "41b5b01c891302bd83ce456cfc147bd1",
".git/objects/37/eb2706ff12e6bb917e4c74f86b5a1559b4bf07": "b05ccf20360e7ba67c1de19c6f2be4f9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"manifest.json": "40393efeac57bd5fdc054736f21f84cf",
"index.html": "9bd0a7692ec3e4a131dde5240696a650",
"/": "9bd0a7692ec3e4a131dde5240696a650"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
