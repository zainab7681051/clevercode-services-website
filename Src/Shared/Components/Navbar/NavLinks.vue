<script setup>
import NavLinkLeft from './NavLinkLeft.vue';
import NavLinkRight from './NavLinkRight.vue'
</script>

<template>
    <div class="nav-links">
        <nav-link-left />
        <span class="nav-bg-container-mid"></span>
        <nav-link-right @open-menu="() => $emit('openMenu')" />
    </div>
</template>

<style>
.nav-links {
    position: relative;
    width: auto;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: visible;
    z-index: 2;
    translate: none;
    rotate: none;
    scale: none;
    opacity: 1;
    transform: translate(0px, 0px);
}

.nav-bg-container {
    background-color: var(--background-color);
    border-radius: 115px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
}

.nav-bg-container-mid {
    background-color: var(--background-color);
    width: 22px;
    height: 3rem;
    clip-path: polygon(35% 39%, 68% 39%, 100% 20%, 100% 80%, 69% 71%, 36% 69%, 0% 80%, 0% 20%);
    margin: 0 -9px;
    z-index: 0;
}
</style>