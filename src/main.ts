import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

const app = createApp(App);

app.use(VueViewer, {
  defaultOptions: {
    toolbar: false,
    navbar: false,
    title: false,
    url: 'data-src',
  },
});

app.mount("#app");
