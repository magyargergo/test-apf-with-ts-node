# TestApfWithTsNode

Run the following code:

```bash
yarn prepare:app
$ TS_NODE_PROJECT='scripts/tsconfig.json' ./node_modules/.bin/ts-node --experimental-specifier-resolution=node scripts/index.ts
test-apf-import-with-ts-node/test-apf-with-ts-node/node_modules/@ionic/storage/bundles/ionic-storage.umd.js:5
}(this, (function (exports, core, common, localforage, CordovaSQLiteDriver) { 'use strict';
 ^
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/gmagyar/freelancer-dev/test-apf-import-with-ts-node/test-apf-with-ts-node/node_modules/@angular/core/fesm2015/core.mjs not supported.
Instead change the require of /Users/gmagyar/freelancer-dev/test-apf-import-with-ts-node/test-apf-with-ts-node/node_modules/@angular/core/fesm2015/core.mjs to a dynamic import() which is available in all CommonJS modules.
    at test-apf-import-with-ts-node/test-apf-with-ts-node/node_modules/@ionic/storage/bundles/ionic-storage.umd.js:2:85
    at Object.<anonymous> (/Users/gmagyar/freelancer-dev/test-apf-import-with-ts-node/test-apf-with-ts-node/node_modules/@ionic/storage/bundles/ionic-storage.umd.js:5:2)
    at Object.require.extensions.<computed> [as .js] (/Users/gmagyar/freelancer-dev/test-apf-import-with-ts-node/test-apf-with-ts-node/node_modules/ts-node/dist/index.js:842:20)
    at async Promise.all (index 0) {
  code: 'ERR_REQUIRE_ESM'
}
error Command failed with exit code 1.
```
