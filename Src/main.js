__webpack_nonce__ = '<%= htmlWebpackPlugin.options.nonce %>';
import {
    createApp
} from "vue";
import "./Style/style.css"
import App from "./App.vue";
import router from './Router/Router.js'
import { i18n } from "./Vi18n.js"

const app = createApp(App);

app.use(router).use(i18n).mount("#app");

