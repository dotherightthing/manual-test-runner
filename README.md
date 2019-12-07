# Manual Test Runner (MTR)

Vue app to manually run UI tests.

## Project setup

This project uses Vue CLI, to:

* configure Webpack
* enable authoring in Single File Vue components
* enable authoring in SCSS
* enable authoring in ES6
* enable Hot Module Replacement during development

This project was set up via WebStorm, which ran the Vue CLI command:

WebStorm: File > New > Project > Vue.js

* Node interpreter: `node /usr/local/bin/node`
* Vue CLI: `/usr/local/lib/node_modules/@vue/cli`
* Use the default project setup (`babel, eslint`)

Note: The default project setup excludes `router` and `vuex` (reactive global state storage = single source of truth).

These were install these via Vue UI's dedicated buttons at http://localhost:8000/plugins.

Also installed:

* `json-server `- mock server which serves json through REST routes: `npm run serve:json`. If the default port of `3000` is busy, change the port in `package.json` and `.env.local`.
* `axios` - promise based HTTP client for the browser and node.js - [Vue tutorial](https://www.vuemastery.com/courses/real-world-vue-js/API-calls-with-Axios)

## Project installation

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### Runs unit tests in Jest
```
npm run test
```

### Open Vue UI
```
vue ui
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
