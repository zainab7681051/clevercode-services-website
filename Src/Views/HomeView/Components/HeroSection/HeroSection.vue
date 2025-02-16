<script setup>
import HeroText from './HeroText.vue';
import HeroImg from './HeroImg.vue';
</script>
<template>
    <section class="hero section">
        <div>
            <hero-text />
            <hero-img />
        </div>
    </section>
</template>
<style>
.section {
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: var(--hero-section-bg-color);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-top: var(--header-top);
    padding-bottom: 64px;
}
.hero.section{
    min-height: 120vh;
}
.section>div {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    display: flex;
    flex-flow: wrap;
    max-width: none;
    width: 100%;
    scroll-snap-align: start;

}

@media screen and (min-width: 1024px) {
    .section>div {
        flex-flow: wrap;
        margin-top: -7%;
    }
}
</style>