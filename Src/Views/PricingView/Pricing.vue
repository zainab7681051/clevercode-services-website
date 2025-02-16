<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import ButtonArrow from '../../Shared/Components/ButtonArrow.vue';

let { t } = useI18n();
let pricingElements = ref(null);


onMounted(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
        loader.style.display = 'none';
    }
})

function scrollToPricing() {
    if (pricingElements.value)
        pricingElements.value.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
}
</script>
<template>
    <div class="pricing-section">
        <div class="pricing-header-section">
            <div class="pricing-header-container">
                <div class="pricing-header-text-wrapper">
                    <div class="pricing-header-text">
                        <h1 class="pricing-title">{{ t("pricing_section_hero_main") }}</h1>
                        <div class="pricing-body">
                            <p>{{ t("pricing_section_hero_secondary") }}</p>
                        </div>
                    </div>
                </div>
                <div class="pricing-arrow-btn-container"><button @click="scrollToPricing()"><span><svg width="24"
                                height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path d="M11.8572 18.715V5" stroke="black" stroke-width="1.5"></path>
                                <path
                                    d="M18.714 11.8569C16.036 13.3919 11.857 18.7139 11.857 18.7139C11.857 18.7139 7.678 13.3919 5 11.8569"
                                    stroke="black" stroke-opacity="0.99" stroke-width="1.5"></path>
                            </svg></span></button></div>
            </div>
        </div>
        <div ref="pricingElements"></div>
        <div class="pricing-options">
            <div class="pricing-option-container">
                <div>
                    <div class="pricing-option-title-container">
                        <h3 class="pricing-option-title">{{ t("pricing_section_fixed_title") }}</h3>
                    </div>
                    <div class="pricing-option-body-container">
                        <p class="pricing-option-body">{{ t("pricing_section_fixed_body") }}</p>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <a href="mailto:clevercodservices@gmail.com">
                        <button-arrow :BtnText="t('btn_text_1')" />
                    </a>
                </div>
            </div>
            <div class="pricing-option-container">
                <div>
                    <div class="pricing-option-title-container">
                        <h3 class="pricing-option-title">{{ t("pricing_section_hourly_title") }}</h3>
                    </div>
                    <div class="pricing-option-body-container">
                        <p class="pricing-option-body">{{ t("pricing_section_hourly_body") }}</p>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <a href="mailto:clevercodservices@gmail.com">
                        <button-arrow :BtnText="t('btn_text_1')" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.pricing-section {
    padding: 2rem 0 6rem 0;
    margin-bottom: 2rem;
}

.pricing-header-section {
    --grid-padding: min(108px, calc(-24.2092px + 100vw * 0.0778));
    --grid-max-width: 106.25rem;
    --grid-col-width: 6.25%;
    --grid-gutter: min(24px, calc(13.4332px + 100vw * 0.0062));
    --grid-half-gutter: calc(0.5 * var(--grid-gutter));
    --grid-inset: calc(var(--grid-padding) + var(--grid-half-gutter));
    position: relative;
    z-index: 1;
    color: var(--background-color);
    background-color: var(--white);
    overflow: hidden;
}

.pricing-header-container {
    position: relative;
    background-color: var(--green);
    border-radius: 25px;
    margin: 80px 12px min(130px, 31px + 5.82vw);
}

.pricing-header-text-wrapper {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: min(108px, calc(-24.2092px + 100vw * 0.0778));
    padding-right: min(108px, calc(-24.2092px + 100vw * 0.0778));
    display: flex;
    flex-flow: wrap;
    max-width: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center
}

.pricing-header-text {
    padding-left: var(--grid-half-gutter);
    padding-right: var(--grid-half-gutter);
    min-width: initial;
    flex: 0 0 100%;
    max-width: 100%;
    margin-left: 0%;
    padding-top: min(100px, 28px + 4.24vw);
    padding-bottom: min(110px, 29px + 4.76vw);
}

.pricing-title {
    color: var(--white);
    white-space: pre-line;
    margin-left: -0.05em;
    font-size: 2.25rem;
    letter-spacing: 0em;
    line-height: 1.1;
    font-weight: 500;
}

.pricing-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--background-color);
    gap: min(32px, 21.2px + 0.64vw);
    padding-top: min(22px, 20.2px + 0.11vw);
    white-space: pre-line;
    font-size: 1rem;
    letter-spacing: 0em;
    line-height: 1.5;
    font-weight: 400;
    text-align: center;
    align-items: center;
}

.pricing-arrow-btn-container {
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    background-color: var(--background-color);
    border-radius: 50%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border: solid 1rem var(--green)
}

.pricing-arrow-btn-container>button {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    cursor: pointer;
}

.pricing-arrow-btn-container>button>span {
    position: absolute;
    display: block;
    margin: auto;
    inset: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    transition: transform .25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.pricing-arrow-btn-container>button>span>svg {
    position: absolute;
    width: 100%;
    height: 100%;
}

.pricing-options {
    position: relative;
    padding: var(--grid-padding);
    display: flex;
    flex-flow: wrap;
    gap: 3rem;
    max-width: none;
    width: 100%;
    margin-top: 4rem;
    padding: 0 1rem;
}

.pricing-option-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-radius: 1rem;
    padding-bottom: 2rem;
    background-color: var(--background-color);
}

.pricing-option-title-container {
    width: 100%;
    height: auto;
    padding: 1.5rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    text-transform: capitalize;
    background: var(--green);
}

.pricing-option-title {
    font-size: 2.25rem;
    letter-spacing: 0em;
    line-height: 1.3;
    font-weight: 500;
    color: var(--white);
}

.pricing-option-body-container {
    padding: 1.5rem;
}

.pricing-option-body {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--green);
}

.pricing-option-container .btn-wrapper {
    margin: 24px auto 0 auto;
}

.pricing-option-container .btn-wrapper .inner-btn-container {
    --btn-font-color: var(--white);
}

.pricing-option-container .btn-wrapper .primary {
    background-color: var(--green);
}

.pricing-option-container .btn-wrapper>a:hover .primary {
    background-color: #003d2dd7;
}

@media screen and (min-width: 720px) {
    .pricing-arrow-btn-container>button {
        width: calc(1.5rem + ((1vw - 0.48rem) * 0.6944));
        height: calc(1.5rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }

    .pricing-title {
        font-size: calc(2.25rem + ((1vw - 0.48rem) * 1.0417));
        min-height: 0vw;
    }

    .pricing-body {
        font-size: calc(1rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }

    .pricing-arrow-btn-container>button>span {
        width: calc(1.5rem + ((1vw - 0.48rem) * 0.6944));
        height: calc(1.5rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }

    .pricing-option-title {
        font-size: calc(2.25rem + ((1vw - 0.48rem) * 1.0417));
        min-height: 0vw;
    }

    .pricing-option-body {
        font-size: calc(1rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }
}

@media screen and (min-width: 1024px) {

    .pricing-header-text {
        flex: 0 0 75%;
        max-width: 75%;
        margin-left: 12.5%;
    }

    .pricing-arrow-btn-container>button:hover>span {
        transform: translateY(20%)
    }

    .pricing-option-container {
        width: 32%;
        flex-grow: 1;
        max-width: 50%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 24px;
    }
}
</style>
