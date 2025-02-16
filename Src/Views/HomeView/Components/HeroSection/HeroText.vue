<script setup>
import { useI18n } from 'vue-i18n'
import ButtonArrow from '../../../../Shared/Components/ButtonArrow.vue';
let { t } = useI18n();
</script>
<template>
    <div class="hero-text-container">
        <h1 class="h1">{{ t('home_hero_section_text_main') }}</h1>
        <p class="subtitle">{{ t('home_hero_section_text_secondary') }}</p>
        <div class="btn-wrapper">
            <a href="mailto:clevercodservices@gmail.com">
                <button-arrow :BtnText="t('home_hero_section_btn_text')" />
            </a>
        </div>
    </div>
</template>