<script setup>
import AboutPageImg from "../../../Assets/img/about-page-img-750.png";
import { useI18n } from 'vue-i18n'
let { t, locale } = useI18n();
</script>
<template>
    <div class="about-hero-section">
        <div class="about-hero-text-wrapper">
            <div class="about-text">
                <div class="about-text-container">
                    <h1 class="about-text-header">{{ t("about_section_hero_main") }}</h1>
                </div>
                <div class="about-text-container">
                    <div class="about-text-body">
                        <p>{{ t("about_section_hero_secondary_1") }}</p>
                        <p>{{ t("about_section_hero_secondary_2") }}</p>
                    </div>
                </div>
            </div>
            <div class="about-hero-img" :style="locale === 'ar' || locale === 'ku' ? 'transform:rotateY(180deg)' : ''">
                <div>
                    <img :src="AboutPageImg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.about-hero-section {
    position: relative;
    display: flex;
    flex-direction: column;
    color: var(--white);
    min-height: 89vh;
    background-color: var(--iris-blue);
    background-image: linear-gradient(227deg, #5240cb 0%, #3c2e92 80%);
    padding-top: 74px;
}

.about-text {
    padding: 1rem;
}

.about-text-header {
    font-size: calc(20.86px + 4.11vw);
    font-weight: 600;
    white-space: pre-wrap;
}

.about-text-body {
    letter-spacing: 0.02em;
    margin: 16px 0px 0px;
    color: #c1b8ff;
    line-height: 1.5;
    font-size: calc(15.43px + 0.18vw);
    margin-top: calc(10.86px + 1.61vw);
}

.about-text-body p {
    margin-top: 1rem
}

.about-hero-img {
    display: none;
    padding-top: 2rem
}

.about-hero-img>div {
    box-sizing: border-box;
    display: block;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
    max-width: 100%;
}

.about-hero-img>div>img {
    display: block;
    width: 100%;
    height: auto;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
}

@media screen and (min-width:1024px) {
    .about-hero-text-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .about-text {
        padding: 2rem 2rem 0 2rem;
    }

    .about-hero-img {
        display: block;
    }
}
</style>