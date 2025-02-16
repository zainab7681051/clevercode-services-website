<script setup>
const props = defineProps(['head', "body"])
</script>
<template>

    <div class="about-section-two-childs">
        <h1 class="section-two-text-container">{{ props.head }}</h1>
        <p class="section-two-text-container">{{ props.body }}</p>
    </div>
</template>
<style>
h1.section-two-text-container {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 1.28;
    letter-spacing: 0px;
    color: var(--dark-blue);
    margin: 0px;
}

p.section-two-text-container {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.3;
    letter-spacing: 0px;
    margin: 0px;
    padding: 1rem 1rem 0 0;
    color: var(--dark-blue);
}

@media (min-width: 48em) {
    h1.section-two-text-container {
        font-size: calc(2.25rem + ((1vw - 0.48rem) * 1.3889));
    }

    p.section-two-text-container {
        font-size: calc(1rem + ((1vw - 0.48rem) * 0.6944));
    }
}
</style>