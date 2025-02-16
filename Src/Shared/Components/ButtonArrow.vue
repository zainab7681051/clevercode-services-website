<script setup>
import { useI18n } from 'vue-i18n';
import larr from "../../Assets/icons/left-arrow.svg"
import rarr from "../../Assets/icons/right-arrow.svg"
let { locale } = useI18n();
const props = defineProps(['BtnText'])
</script>
<template>
    <span class="inner-btn-container">
        <span class="primary"></span>
        <span>
            <span class="btn-text">{{ props['BtnText'] }}
                <i :class="locale === 'ar' || locale === 'ku' ? 'rtl' : ''">
                    <svg v-if="locale === 'ar' || locale === 'ku'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="left-arrow"><path d="M27 14H9.83l6.58-6.59a2 2 0 0 0-2.82-2.82l-10 10a1.79 1.79 0 0 0-.25.31 1.19 1.19 0 0 0-.09.15l-.1.2-.06.2a.84.84 0 0 0 0 .17 2 2 0 0 0 0 .78.84.84 0 0 0 0 .17l.06.2c0 .07.07.13.1.2a1.19 1.19 0 0 0 .09.15 1.79 1.79 0 0 0 .25.31l10 10a2 2 0 0 0 2.82-2.82L9.83 18H27a2 2 0 0 0 0-4Z"></path></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="right-arrow"><path d="M28.66 17.11a1.19 1.19 0 0 0 .09-.15l.1-.2.06-.2a.84.84 0 0 0 .05-.17 2 2 0 0 0 0-.78.84.84 0 0 0-.05-.17l-.06-.2-.1-.2a1.19 1.19 0 0 0-.09-.15 1.79 1.79 0 0 0-.25-.31l-10-10a2 2 0 0 0-2.82 2.82l6.58 6.6H5a2 2 0 0 0 0 4h17.17l-6.58 6.59a2 2 0 1 0 2.82 2.82l10-10a1.79 1.79 0 0 0 .25-.3Z"></path></svg>
                 </i>
             </span>
         </span>
    </span>
</template>
<style>

.inner-btn-container{
    --btn-font-size: 0.875rem;
    font-size: var(--btn-font-size);
    color: var(--btn-font-color);
}
.btn-wrapper>a .btn-text>i {
    display: none;
}
.btn-wrapper>a .btn-text>i svg{
    width: var(--btn-font-size);
    height: var(--btn-font-size);
    fill: var(--btn-font-color);
}
@media (min-width: 48em){
    .inner-btn-container{
        --btn-font-size:calc(0.875rem + ((1vw - 0.48rem) * 0.7292)); ;
        min-height: 0vw;
    }
}
@media screen and (min-width:1024px) {
    .btn-wrapper>a .btn-text>i{
        display: block;
    }
    .btn-wrapper>a:hover .btn-text>i.rtl {
        animation-name: arrow-bounce-rtl;
    }
}
</style>