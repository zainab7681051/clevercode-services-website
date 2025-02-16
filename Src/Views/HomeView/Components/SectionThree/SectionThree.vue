<script setup>
import { ref, Transition, watch } from 'vue';
import GlassOverImg from './GlassOverImg.vue';
import { useI18n } from 'vue-i18n'
let { t } = useI18n();
let title = ref(''), body = ref(''), key = ref(0);
let data = ref([
    {
        check: true,
        title: t('home_section_three_title_1'),
        body: t('home_section_three_body_1')
    },
    {
        check: false,
        title: t('home_section_three_title_2'),
        body: t('home_section_three_body_2')
    },
    {
        check: false,
        title: t('home_section_three_title_3'),
        body: t('home_section_three_body_3')
    },
    {
        check: false,
        title: t('home_section_three_title_4'),
        body: t('home_section_three_body_4')
    },
    {
        check: false,
        title: t('home_section_three_title_5'),
        body: t('home_section_three_body_5')
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
    title.value = data.value[i].title
    body.value = data.value[i].body

}
</script>

<template>
    <section class="section-three section-two">
        <div class="section-content-container">
            <div>
                <div class="text-container">
                    <div>
                        <h2>{{ t('home_section_three_main') }}</h2>
                        <p>{{ t('home_section_three_secondary') }}</p>
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
.section-three {
    background-color: var(--dark-red);
    --circle-bg-color: var(--dark-red);
    color: rgb(254, 255, 235);
}

@media screen and (min-width: 1024px) {
    .section-three .section-content-container>div {
        display: grid;
        grid-template-areas:
            "text pic"
            "bar pic"
            "label pic";
        grid-template-columns: 1fr 1.5fr;
        grid-template-rows: 1fr;
        align-items: center;
    }

}
</style>