# vue3-boilerplate
Boilerplate for creating Vue 3 apps  

The files in this repository can be used as a starting point for building Vue Apps quickly. It can be used for building Vue apps that uses Vue Router for navigation, Pinia for storing the state. Styling can be done using either Tailwind as well as using CSS. It also includes util for connecting to firebase which can be extended to query the firestore database.  

## Project structure
```
src
├── assets
├── firebase
│   └── firebase.util.ts
├── pinia
│   ├── <store files>
├── components
│   ├── spinner (Loading spinner)
|   ├── button
|   ├── input
|   └── <new_component>
├── styles
|   ├── index.css
|   └── <additional css files>
├── types
|   └── <typescript type file>
├── views
|   └── <view>
├── App.vue
├── shims.vue.d.ts
└── main.ts
```

## 
Additional libraries/Technologies configured
* Typescript
* Babel
* Prettier
* Travis
* Jest
* Service worker

## Environment Variables
The following environment variables needs to be set

Variable | Description |
------|-------------|
VUE_APP_FIREBASE_CONFIG | Firebase JSON config |

* Bootstrap a vue project by using [Vite](https://github.com/vitejs/vite).
* Install additional dependencies  
``
npm install firebase pinia vue-router
``  
``
npm install @babel/preset-env @pinia/testing @types/jest @types/node @vitejs/plugin-vue @vue/test-utils @vue/vue3-jest autoprefixer babel-core babel-jest jest postcss postcss-import serve tailwindcss ts-jest ts-node tslib vite vue-tsc --save
``
* Copy the files in this project to the folder containing the new app code
* Copy/Rename `.env.example` and `.env` and modify its content with the correct configuration values
* Run the project

## References
* [Favicon generator](https://www.favicon-generator.org/) - (Generate the icons needed for PWA)
* [Firebase](https://firebase.google.com/docs/firestore/quickstart#web)
