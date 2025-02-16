<script setup>
import NavLinks from "./NavLinks.vue"
import NavMenu from "./NavMenu.vue"
import { ref } from "vue";
let isMenuOpen = ref(false)
</script>

<template>
    <nav class="nav">
        <div>
            <div class="nav-link-wrapper">
                <nav-links @open-menu="() => isMenuOpen = !isMenuOpen" />
                <nav-menu
                    :style="isMenuOpen ? 'opacity:1; transform: translateY(0%) scale(1);pointer-events:all;' : 'pointer-events:none; opacity:0; transform: translateY(-2%) scale(1.01);'" />
            </div>
        </div>
    </nav>
</template>

<style>
.nav {
    position: fixed;
    width: 100vw;
    margin-top: var(--menu-top);
    z-index: 5;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    display: flex;
    flex-flow: wrap;
    max-width: none;
}

.nav>div {
    padding-left: var(--grid-half-gutter);
    padding-right: var(--grid-half-gutter);
    min-width: initial;
    flex: 0 0 100%;
    max-width: 100%;
}

.nav-link-wrapper {
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    z-index: 3;
}
</style>