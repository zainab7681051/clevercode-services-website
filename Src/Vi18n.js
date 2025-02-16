import { createI18n } from 'vue-i18n'
import en_message from "./locales/en.js";
import ar_message from "./locales/ar.js";
import ku_message from "./locales/ku.js";
import tr_message from "./locales/tr.js";
import ru_message from "./locales/ru.js";
import ja_message from "./locales/ja.js";
import zh_CN_message from "./locales/zh-CN.js";
import hi_message from "./locales/hi.js";

let locale = localStorage.getItem('locale') || "en";
const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: 'en',
    messages: {
        en: en_message,
        ar: ar_message,
        ku: ku_message,
        tr: tr_message,
        ru: ru_message,
        ja: ja_message,
        zh_CN: zh_CN_message,
        hi: hi_message
    }
});

export { i18n };