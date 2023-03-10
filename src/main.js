import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles.css";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
