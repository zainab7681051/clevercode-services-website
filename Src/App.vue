<script setup>
import { ref } from "vue"
import { useI18n } from 'vue-i18n';
import { RouterView } from "vue-router";
import NavBar from './Shared/Components/Navbar/NavBar.vue';
import FooterSection from './Shared/Components/FooterSection/FooterSection.vue';

let { locale } = useI18n();
let rtl_lang = ref(locale.value === 'ar' || locale.value === 'ku')

</script>

<template>
    <main :class="rtl_lang ? 'rtl' : ''"
        :style="locale === 'en' ? 'font-family: Bossa, sans-serif;' : rtl_lang ? 'font-family: Zain, sans-serif;' : locale === 'zh_CN' ? 'font-family:Noto Sans SC, sans-serif' : locale === 'ja' ? 'font-family:Noto Sans JP, sans-serif' : 'font-family:Noto Sans, sans-serif'">
        <nav-bar />
        <RouterView />
        <footer-section />
    </main>
</template>

<style>
main {
    position: relative;
    min-height: 100vh;
    --background-opacity: 1;
}

.rtl {
    direction: rtl;
}

main:has(.hero.section) {
    --btn-color: var(--blue);
    --btn-font-color: var(--btn-color);
    --color: var(--blue);
    --hero-section-bg-color: var(--blue);
    --background-color: var(--white);
    --footer-bg-color: var(--blue);
}

main:has(.about-hero-section) {
    --btn-color: var(--dark-blue);
    --btn-font-color: var(--btn-color);
    --color: var(--iris-blue);
    --hero-section-bg-color: var(--iris-blue);
    --background-color: var(--white);
    --footer-bg-color: var(--dark-blue);
}

main:has(.pricing-section) {
    --btn-color: var(--green);
    --btn-font-color: var(--btn-color);
    --color: var(--green);
    --hero-section-bg-color: var(--green);
    --background-color: #d8f2e7;
    --footer-bg-color: var(--green);
}
</style>