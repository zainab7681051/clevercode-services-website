<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import ButtonArrow from '../ButtonArrow.vue';
let { t, locale } = useI18n();
let router = useRouter();
let data = ref([
    {
        check: false,
        head: t('footer_section_head_1'),
        list: [
            t('footer_section_list_1_item_1'),
            t('footer_section_list_1_item_2'),
            t('footer_section_list_1_item_3'),
            t('footer_section_list_1_item_4')
        ]
    },
    {
        check: false,
        head: t('footer_section_head_2'),
        list: [
            t('footer_section_list_2_item_1'),
            t('footer_section_list_2_item_2'),
            t('footer_section_list_2_item_3'),
            t('footer_section_list_2_item_4'),
            t('footer_section_list_2_item_5')
        ]
    },
    {
        check: false,
        head: t('footer_section_head_3'),
        list: [
            t('footer_section_list_3_item_1'),
            t('footer_section_list_3_item_2'),
            t('footer_section_list_3_item_3'),
            t('footer_section_list_3_item_4'),
            t('footer_section_list_3_item_5')
        ]
    },
    {
        check: false,
        head: t('footer_section_head_4'),
        list: [
            t('footer_section_list_4_item_1'),
            t('footer_section_list_4_item_2'),
            t('footer_section_list_4_item_3')
        ]
    },
    {
        check: false,
        head: t('footer_section_head_5'),
        list: [
            [t('footer_section_list_5_item_1'), "en"],
            [t('footer_section_list_5_item_2'), "ar"],
            [t('footer_section_list_5_item_3'), "ku"],
            [t('footer_section_list_5_item_4'), "tr"],
            [t('footer_section_list_5_item_5'), "ru"],
            [t('footer_section_list_5_item_6'), "ja"],
            [t('footer_section_list_5_item_7'), "zh_CN"],
            [t('footer_section_list_5_item_8'), "hi"],
        ]
    }
]);

function checkMethod(i) {
    data.value.forEach((x, index) => {
        if (index != i)
            x.check = false;
    });
    data.value[i].check = !data.value[i].check;

}
function ChangeLang(v) {
    localStorage.clear()
    localStorage.setItem('locale', v)
    location.reload();
}
</script>

<template>
    <section class="footer">
        <div class="footer-title">
            <div class="text">
                <div>
                    <h3>{{ t("footer_text_main") }}</h3>
                    <div class="btn-wrapper">
                        <a href="#">
                            <button-arrow :BtnText="t(`btn_text_1`)" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <span class="white-line"></span>
        <div class="footer-body-container">
            <div class="footer-body">
                <div class="footer-body-text">
                    <div v-for="(v, i) in data">
                        <h3 @click="checkMethod(i)" :style="v.check ? 'opacity:1' : ''">
                            {{ v.head }} <span v-if="v.check">-</span><span v-else>+</span>
                        </h3>
                        <ul :class="v.check ? 'active' : ''">
                            <div v-for="(vv, ii) in v.list">
                                <li v-if="i === data.length - 2">
                                    <a
                                        :href="ii === 0 ? $router.resolve({ path: '/about' }).href : ii === 1 ? '#' : $router.resolve({ path: '/pricing' }).href">
                                        {{ vv }}
                                    </a>
                                </li>
                                <li v-else-if="i === data.length - 1" @click="() => ChangeLang(vv[1])"
                                    :style="locale === vv[1] ? 'cursor: pointer; opacity:1' : 'cursor: pointer'">
                                    {{ vv[0] }}
                                </li>
                                <li v-else>{{ vv }}</li>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <span class="white-line"></span>
        <div class="footer-socials">
            <div>
                <div class="socials-container">
                    <div class="social">
                        <span>2024 | CleverCode Services</span>
                        <ul>
                            <li><a class="social-link " href="#"
                                    target="_blank" rel="noreferrer" color="white">
                                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li><a class="social-link " href="#"
                                    target="_blank" rel="noreferrer" color="white">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z">
                                        </path>
                                        <path fill="none"
                                            d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.footer {
    position: relative;
    width: 100%;
    background-color: var(--footer-bg-color);
}

.footer-title {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    display: flex;
    flex-flow: wrap;
    max-width: none;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
}

.footer-title .text {
    padding-left: var(--grid-half-gutter);
    padding-right: var(--grid-half-gutter);
    min-width: initial;
    flex: 0 0 100%;
    max-width: 100%;
}

.footer-title .text>div {
    position: relative;
    padding: min(120px, 30px + 5.29vw) 0px;
    --h-align: center;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: capitalize;
}

.footer-title .text>div>h3 {
    font-size: 1.325rem;
    letter-spacing: 0em;
    line-height: 1.2;
    font-weight: 500;
    color: var(--white);
    text-align: center;
}

.white-line {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    display: flex;
    flex-flow: wrap;
    max-width: none;
    width: 100%;
}

.white-line::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--white);
    opacity: 0.5;
}

.footer-body-container {
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    display: flex;
    flex-flow: wrap;
    max-width: none;
    width: 100%;
    position: relative;
    padding-top: 64px;
    padding-bottom: 64px;
    background-color: var(--footer-bg-color);
}

.footer-body {
    padding-left: var(--grid-half-gutter);
    padding-right: var(--grid-half-gutter);
    min-width: initial;
    flex: 0 0 100%;
    max-width: 100%;
}

.footer-body-text {
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
    letter-spacing: 0em;
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
}

.footer-body-text h3 {
    position: relative;
    width: 100%;
    display: flex;
    gap: 0.2em;
    justify-content: space-between;
    align-items: center;
    padding: 0.575em;
    line-height: 1;
    font-weight: 500;
    color: rgb(255, 255, 255);
    opacity: 0.6;
    cursor: pointer;
}

.footer-body-text h3>span {
    font-size: x-large;
}

.footer-body-text h3::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: var(--white);
    opacity: 0.6;
}

.footer-body-text ul {
    height: 0px;
    overflow: hidden;
}

.footer-body-text ul.active {
    height: auto;
}

.footer-body-text ul li {
    position: relative;
    margin-left: -0.66em;
    display: inline-flex;
    gap: 0.66rem;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.33em 0.66em;
    border-radius: 5em;
    background-color: transparent;
    letter-spacing: 0em;
    line-height: 1.5;
    font-weight: 400;
    color: rgb(255, 255, 255);
    opacity: 0.6;
    font-size: 0.875rem;
    line-height: 1.4;
    font-weight: 400;
    padding: 0.575em;
    margin-left: 0px;
}


.footer-body-text ul li>a {
    color: inherit;
}


.footer-socials {
    position: relative;
    width: 100%;
    padding: 16px 0px;
    z-index: 1;
}

.footer-socials>div {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    display: flex;
    flex-flow: wrap;
    max-width: none;
    width: 100%;
}

.socials-container {
    padding-right: var(--grid-half-gutter);
    min-width: initial;
    flex: 0 0 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
}

.social {
    display: flex;
    gap: min(48px, 5.832px + 2.48vw);
    margin-top: 16px;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}

.social>span {
    font-size: 0.875rem;
    letter-spacing: 0em;
    line-height: 1.5;
    font-weight: 400;
    color: rgb(255, 255, 255);
    opacity: 0.6;
}

.social ul {
    display: flex;
    gap: min(32px, 21.2px + 0.64vw);
}

.social-link {
    position: relative;
    width: 2rem;
    height: 2rem;
    display: flex;
    cursor: pointer;
    border-radius: 100%;
    outline: none;
}

.social-link svg {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    fill: rgb(255, 255, 255);
}


@media screen and (min-width:1024px) {
    .footer-title .text {
        flex: 0 0 75%;
        max-width: 75%;
    }

    .footer-body-text {
        display: flex;
        gap: 4rem;
        justify-content: center;
    }

    .footer-body-text h3 {
        opacity: 1;
    }

    .footer-body-text h3::after {
        display: none;
    }

    .footer-body-text h3>span {
        display: none;
    }

    .footer-body-text ul li {
        opacity: 0.6;
    }

    .footer-body-text ul li:hover {
        opacity: 1;
    }

    .footer-body-text ul li>a:hover {
        opacity: 1;
    }

    .footer-body-text ul {
        height: auto;
    }

    .white-line::after {
        opacity: .4;
    }
}

@media (min-width: 48em) {

    .footer-title .text>div>h3 {
        font-size: calc(1.325rem + ((1vw - 0.48rem) * 1.3889));
        min-height: 0vw;
    }

    .footer-body-text,
    .footer-body-text ul li,
    .social>span {
        font-size: calc(0.875rem + ((1vw - 0.48rem) * 0.7292));
        ;
        min-height: 0vw;
    }

    .social-link {
        width: calc(2rem + ((1vw - 0.48rem) * 0.6944));
        height: calc(2rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }
}
</style>
