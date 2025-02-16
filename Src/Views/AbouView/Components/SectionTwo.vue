<script setup>
import { onMounted, ref } from 'vue'
import SectionTwoTextContainer from './SectionTwoTextContainer.vue';
import { useI18n } from 'vue-i18n'
let { t } = useI18n();
const text = ref([
    {
        "head": t('about_section_title_1'),
        "body": t('about_section_body_1')
    },
    {
        "head": t('about_section_title_2'),
        "body": t('about_section_body_2')
    },
    {
        "head": t('about_section_title_3'),
        "body": t('about_section_body_3')
    },
    {
        "head": t('about_section_title_4'),
        "body": t('about_section_body_4')
    },
    {
        "head": t('about_section_title_5'),
        "body": t('about_section_body_5')
    }
]);

onMounted(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
        loader.style.display = 'none';
    }
})
</script>

<template>
    <div class="about-section-two">
        <div class="about-section-two-childs">
            <h2>{{ t("about_section_title_0") }}</h2>
        </div>
        <SectionTwoTextContainer v-for="v in text" :head="v.head" :body="v.body" />
    </div>
</template>

<style>
.about-section-two {
    display: flex;
    min-height: 80vh;
    height: auto;
    width: 100%;
    background-color: var(--white);
    padding-top: 10px;
    padding-bottom: calc(57.14px + 7.14vw);
    flex-direction: column;
    align-items: flex-start;
}

.about-section-two-childs {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    z-index: 2;
    border-radius: 10px;
    position: relative;
    padding-left: calc(4.57px + 3.57vw);
    padding-right: calc(4.57px + 3.57vw);
    padding-bottom: calc(37.43px + 2.68vw);
}

.about-section-two-childs:first-child h2 {
    color: var(--dark-blue);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.23;
    letter-spacing: 0px;
    margin: 0px;
    width: 100%;
}


@media screen and (min-width:1024px) {
    .about-section-two {
        padding-top: calc(57.14px + 7.14vw);
        align-items: center;
    }

    .about-section-two-childs {
        padding-top: calc(37.43px + 2.68vw);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 24px;
    }

    .about-section-two-childs:first-child {
        position: absolute;
        transform: translateY(-14rem)
    }

    .about-section-two-childs:not(:first-child):not(:nth-child(2)) {
        margin-top: 5rem;
    }

    .about-section-two-childs:not(:first-child) {
        width: calc(58rem + ((1vw - 0.48rem) * 13.8889));
    }

    .about-section-two-childs:first-child h2 {
        font-size: calc(1.4rem + ((1vw - 0.48rem) * 0.8333));
    }
}

@media screen and (min-width:1440px) {
    .about-section-two-childs:first-child {
        transform: translateY(-17rem)
    }
}
</style>
