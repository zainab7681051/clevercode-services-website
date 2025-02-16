<script setup>
import { ref, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n'
let { t } = useI18n();
let isMenuOpened = ref(false);
const emits = defineEmits(['openMenu'])
function ClickHandler() {
    isMenuOpened.value = !isMenuOpened.value
    emits('openMenu')
}
</script>

<template>
    <span data-meta-row-node="1" class="nav-bg-container nav-link-right">
        <button :style="isMenuOpened ? 'color: var(--background-color); background-color: var(--color);' : ''"
            class="right-btn menu-button body-small" @click="ClickHandler">
            <span :style="isMenuOpened ? '--icon-color: var(--background-color);' : ''" class="menu-stripes"
                color="black" name="menu">

                <svg v-if="!isMenuOpened" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 8.00006L2.99988 8.00006" stroke="black" stroke-width="1.5" stroke-linecap="square"
                        stroke-linejoin="round"></path>
                    <path d="M21 15.0001L2.99988 15.0001" stroke="black" stroke-width="1.5" stroke-linecap="square"
                        stroke-linejoin="round"></path>
                </svg>

                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6.00006L18 18.0001" stroke="black" stroke-width="1.5"></path>
                    <path d="M18 6.00006L6 18.0001" stroke="black" stroke-width="1.5"></path>
                </svg>
            </span>
            <span class="label">{{ t("nav_link_right_text_main") }}</span>
        </button>


        <span class="nav-bg-container nav-menu-large-screen">
            <ul>
                <li>
                    <a :href="$router.resolve({ path: '/pricing' }).href">
                        {{ t("nav_link_right_text_1") }}
                    </a>
                </li>

                <li>
                    <a :href="$router.resolve({ path: '/about' }).href">
                        {{ t("nav_link_right_text_2") }}
                    </a>
                </li>

                <li>
                    <a href="mailto:clevercodeservices@gmail.com">
                        {{ t("nav_link_right_text_3") }}
                    </a>
                </li>

            </ul>
        </span>
    </span>
</template>

<style>
.nav-link-right {
    position: relative;
    height: auto;
    display: block;
    padding: 2px;
    position: initial !important;
    margin-right: 0px;
}

.body-small {
    font-size: 0.875rem;
    letter-spacing: 0em;
    line-height: 1.4;
    font-weight: 400;
}

.right-btn {
    --button-height: 44px;
    position: relative;
    height: var(--button-height);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: var(--button-height);
    cursor: pointer;
    z-index: 5;
    transition: all 150ms ease-in-out 0s;
}

.right-btn {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 1.325em;
    color: var(--color);
    background-color: var(--background-color);
    height: 2.56em !important;
}

.right-btn.menu-button {
    padding: 0px 16px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    gap: 8px;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.4em;
}

.menu-stripes {
    --icon-color__default: #000000;
    --icon-size__default: 1.5rem;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: var(--icon-size, var(--icon-size__default));
    height: var(--icon-size, var(--icon-size__default));
    --icon-color: var(--color)
}

.menu-stripes svg {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 150ms ease-in-out 150ms;
}

.menu-stripes svg path,
.menu-stripes svg rect,
.menu-stripes svg circle,
.menu-stripes svg ellipse,
.menu-stripes svg line {
    stroke: var(--icon-color, var(--icon-color__default));
}

.label {
    position: relative;
    width: max-content;
    overflow: hidden;
    color: inherit;
    pointer-events: none;
    user-select: none
}

.nav-menu-large-screen {
    display: none
}

@media screen and (min-width: 1024px) {
    button.right-btn {
        display: none;
    }

    .nav-menu-large-screen {
        position: relative;
        height: auto;
        display: block;
        padding: 2px;
    }

    .nav-menu-large-screen>ul {
        position: relative;
        display: flex;
    }

    .nav-menu-large-screen>ul>li {
        width: auto;
    }

    .nav-menu-large-screen>ul>li>a {
        --button-height: 44px;
        position: relative;
        color: var(--color);
        height: var(--button-height);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-radius: var(--button-height);
        cursor: pointer;
        padding: 0px 16px;
        -webkit-box-pack: start;
        justify-content: flex-start;
        gap: 8px;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.4em;
        transition: all 150ms ease-in-out 0s;
    }

    .nav-menu-large-screen>ul>li>a:hover {
        background-color: var(--color);
        color: var(--background-color);
    }
}

@media (min-width: 48em) {

    .body-small,
    .right-btn.menu-button,
    .nav-menu-large-screen>ul>li>a {
        font-size: calc(0.875rem + ((1vw - 0.48rem) * 0.7292));
        ;
        min-height: 0vw;
    }

    .menu-stripes {
        --icon-size__default: calc(1.5rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }
}
</style>
