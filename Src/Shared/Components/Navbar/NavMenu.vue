<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
let { t } = useI18n();
const props = defineProps({ OpenMenu: Boolean })
let imgSrc = ref("");
onMounted(() => {
    Promise.all([import('../../../Assets/img/menu-about-750.png'),
    import('../../../Assets/img/menu-about-1080.png'),
    import('../../../Assets/img/menu-about-1920.png'),
    import('../../../Assets/img/menu-pricing-750.png'),
    import('../../../Assets/img/contact-us750.png'),
    import('../../../Assets/img/contact-us1080.png'),
    import("../../../Assets/img/contact-us1920.png")
    ]).then(values => {
        imgSrc.value = {
            about750: values[0].default + " 750w,",
            about1080: values[1].default + " 1080w,",
            about1920: values[2].default + " 1920w,",
            pricing750: values[3].default + " 720w,",
            contact750: values[4].default + " 750w,",
            contact1080: values[5].default + " 1080w,",
            contact1920: values[6].default + " 1920w,"
        }
    })

})
</script>
<template>
    <div class="menu-box">
        <span></span>
        <div class="menu-wrapper">
            <div class="nav-menu">
                <div class="inner-main">
                    <a :href="$router.resolve({ path: '/pricing' }).href">
                        <span class="nav-item">
                            <figure class="index-button-image">
                                <span>
                                    <img alt="menu-globe-pricing" sizes="100vw" :srcset="imgSrc.pricing750"
                                        :src="imgSrc.pricing750" decoding="async" data-nimg="fill">
                                </span>
                            </figure>
                            <span class="label">
                                <span class="title" font-weight="500" color="black">
                                    {{ t("nav_menu_text_1") }}
                                </span>
                                <span class="description" color="black">
                                    {{ t("nav_menu_text_1_secondary") }}
                                </span>
                            </span>
                        </span>
                    </a>
                    <a :href="$router.resolve({ path: '/about' }).href">
                        <span class="nav-item">
                            <figure class="index-button-image">
                                <span>
                                    <img alt="menu-globe-pricing" sizes="100vw"
                                        :srcset="imgSrc.about750 + imgSrc.about1920" :src="imgSrc.about1920"
                                        decoding="async" data-nimg="fill">
                                </span>
                            </figure>
                            <span class="label">
                                <span class="title" font-weight="500" color="black">
                                    {{ t("nav_menu_text_2") }}
                                </span>
                                <span class="description" color="black">
                                    {{ t("nav_menu_text_2_secondary") }}
                                </span>
                            </span>
                        </span>
                    </a>
                    <a href="mailto:clevercodeservices@gmail.com">
                        <span class="nav-item">
                            <figure class="index-button-image">
                                <span>
                                    <img alt="menu-globe-pricing" sizes="100vw"
                                        :srcset="imgSrc.contact750 + imgSrc.contact1080 + imgSrc.contact1920"
                                        :src="imgSrc.contact1920" decoding="async" data-nimg="fill">
                                </span>
                            </figure>
                            <span class="label">
                                <span class="title" font-weight="500" color="black">
                                    {{ t("nav_menu_text_3") }}
                                </span>
                                <span class="description" color="black">
                                    {{ t("nav_menu_text_3_secondary") }}
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-box {
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0px;
    left: 0px;
    overflow: auto;
    z-index: 1;
    opacity: 0;
    transform-origin: center center;
    transform: translateY(-2%) scale(1.01);
    transition: all 150ms ease-in-out 150ms;
}

.menu-box>span {
    position: absolute;
    inset: 0px;
    background-color: rgb(0, 0, 0);
    transition: all 150ms ease-in-out 0s;
    opacity: 0.85;
}

.menu-wrapper {
    margin: 0px auto;
    padding-top: 72px;
    padding-bottom: calc(2 * var(--grid-padding));
    width: calc(100% - (2 * var(--grid-padding) + var(--grid-gutter)));
}

.nav-menu {
    position: relative;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 16px;
    background-color: rgb(255, 255, 255);
    z-index: 2;
}

.inner-main {
    position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden scroll;
    padding: 0px;
    display: contents;
    transform: translateX(0%);
    transition: none 0s ease 0s;
}

.nav-item {
    position: relative;
    width: 100%;
    height: 72px;
    display: flex;
    -webkit-box-pack: start;
    justify-content: start;
    -webkit-box-align: center;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-item::after {
    content: "";
    position: absolute;
    inset: 0px;
    visibility: hidden;
    pointer-events: none;
    border-radius: 16px;
    outline: rgb(5, 100, 255);
    box-shadow: rgba(5, 100, 255, 0.4) 0px 0px 0px 3px, rgb(5, 100, 255) 0px 0px 0px 1px;
}

.nav-item .label {
    position: relative;
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: auto 24px;
    grid-template-rows: min-content auto;
    justify-items: start;
    gap: 4px 16px;
}

.nav-item .label .title {
    font-size: 16px;
    letter-spacing: 0em;
    line-height: 1.5;
    color: rgb(0, 0, 0);
    font-weight: 500;
    grid-area: 1 / 1;
}

.nav-item .label .description {
    font-size: 10px;
    letter-spacing: 0em;
    line-height: 1.5;
    font-weight: 400;
    color: rgb(0, 0, 0);
    grid-area: 2 / 1 / auto / span 2;
    padding-right: 48px;
    opacity: 0.5;
}

.nav-item .index-button-image {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    overflow: hidden;
}

.nav-item .index-button-image>span {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.nav-item .index-button-image>span>img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
}
</style>