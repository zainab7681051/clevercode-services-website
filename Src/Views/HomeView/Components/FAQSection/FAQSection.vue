<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
let { t } = useI18n();
let data = ref([
    {
        check: false,
        Q: t('home_section_faq_q_1'),
        A: t('home_section_faq_a_1')
    },
    {
        check: false,
        Q: t('home_section_faq_q_2'),
        A: t('home_section_faq_a_2')
    },
    {
        check: false,
        Q: t('home_section_faq_q_3'),
        A: t('home_section_faq_a_3')
    },
    {
        check: false,
        Q: t('home_section_faq_q_4'),
        A: t('home_section_faq_a_4')
    },
    {
        check: false,
        Q: t('home_section_faq_q_5'),
        A: t('home_section_faq_a_5')
    },
    {
        check: false,
        Q: t('home_section_faq_q_6'),
        A: t('home_section_faq_a_6')
    }
]);


function checkMethod(i) {
    data.value.forEach((x, index) => {
        if (index != i)
            x.check = false;
    });
    data.value[i].check = !data.value[i].check;

}
</script>

<template>
    <section class="faq-section section-two page-section">
        <div class="section-content-container">
            <div>
                <div class="text-container">
                    <div>
                        <h2>{{ t('home_section_faq_title') }}</h2>
                    </div>
                </div>
                <div class="faq-container">
                    <div class="faq" v-for="(v, i) in data">
                        <div class="q-container" @click="checkMethod(i)">
                            <span :class="v.check ? 'active' : ''"> </span>
                            <h3>
                                {{ v.Q }}
                            </h3>
                        </div>
                        <div :class="v.check ? 'answers active' : 'answers'">
                            <p>{{ v.A }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.faq-section {
    background-color: var(--light-pink);
    --pink: #e03d5c;
    color: var(--pink);
}

.faq-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 2rem 2rem 0rem;
}

.faq {
    font-weight: 400;
}

.q-container {
    display: flex;
    align-items: center;
}

.q-container h3 {
    font-size: min(22px, 19.344px + 0.16vw);
    cursor: pointer;
}

.q-container span {
    position: relative;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: var(--light-pink);
    box-shadow: var(--pink) 0px 0px 0px 2px;
    z-index: 1;
    transform-origin: center center;
    transition: width 0.25s, height 0.25s, background-color 0.25s;
    cursor: pointer;
    margin: 1rem;
}

.q-container span.active {
    height: 15px;
    width: 15px;
    background: var(--pink);
}

.faq .answers {
    font-size: min(19px, 16.344px + 0.16vw);
    height: 0;
    overflow: hidden;
    line-height: 25px;
    transition: height .25s ease-in-out;
}

.faq .answers.active {
    height: auto;
    padding: .5rem 2rem 1rem 2rem;
}

@media screen and (min-width: 1024px) {
    .faq-container {
        grid-area: pic;
    }
}
</style>
