import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/style.css";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import VueLazyload from "vue-lazyload";

const app = createApp(App);
app.use(VueLazyload, {
  preLoad: 2,
//   error: errorimage,
  loading: require("./assets/loading.png"),
  attempt: 1,
});

app.use(VueViewer, {
  defaultOptions: {
    toolbar: false,
    navbar: false,
    title: false,
    url: 'data-src',
  },
});

app.mount("#app");
