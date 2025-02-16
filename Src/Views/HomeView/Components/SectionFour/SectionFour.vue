<script setup>
import { ref, Transition, watch } from 'vue';
import GlassOverImg from './GlassOverImg.vue';
import { useI18n } from 'vue-i18n'
let { t } = useI18n();
let title = ref(''), body = ref(''), key = ref(0);
let data = ref([
    {
        check: true,
        title: t('home_section_four_title_1'),
        body: t('home_section_four_body_1')
    },
    {
        check: false,
        title: t('home_section_four_title_2'),
        body: t('home_section_four_body_2')
    },
    {
        check: false,
        title: t('home_section_four_title_3'),
        body: t('home_section_four_body_3')
    },
    {
        check: false,
        title: t('home_section_four_title_4'),
        body: t('home_section_four_body_4')
    },
    {
        check: false,
        title: t('home_section_four_title_5'),
        body: t('home_section_four_body_5')
    },
    {
        check: false,
        title: t('home_section_four_title_6'),
        body: t('home_section_four_body_6')
    },
    {
        check: false,
        title: t('home_section_four_title_7'),
        body: t('home_section_four_body_7')
    }
]);


title.value = data.value[0].title;
body.value = data.value[0].body;
watch([title, body], () => {
    key.value += 1;
});

function checkMethod(i) {
    data.value.forEach((x, index) => {
        if (index != i)
            x.check = false;
    });
    data.value[i].check = !data.value[i].check;
    console.log("check", data.value[i].check);
    title.value = data.value[i].title
    body.value = data.value[i].body

}
</script>

<template>
    <section class="section-four section-two">
        <div class="section-content-container">
            <div>
                <div class="text-container">
                    <div>
                        <h2>{{ t('home_section_four_main') }}</h2>
                        <p> {{ t('home_section_four_secondary') }}</p>
                    </div>
                </div>
                <div class="list-container">
                    <ul class="image-slider">
                        <li class="glass">
                            <Transition name="glass">
                                <KeepAlive>
                                    <component :is="GlassOverImg" :title="title" :body="body" :key="title" />
                                </KeepAlive>
                            </Transition>
                        </li>
                    </ul>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" v-for="(v, i) in data">
                        <span class="circle" @click="checkMethod(i)"
                            :class="v.check ? 'circle active' : 'circle'"></span>
                    </div>
                </div>
                <div class="label-container">{{ title }}</div>
            </div>
        </div>
    </section>
</template>

<style>
.section-four {
    background-color: var(--green);
    --circle-bg-color: var(--green);
    color: #d8f2e7;
}

@media screen and (min-width: 1024px) {
    .section-four .section-content-container>div {
        display: grid;
        grid-template-areas:
            "pic text"
            "pic bar"
            "pic label";
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 1fr;
        align-items: center;
    }

}
</style>