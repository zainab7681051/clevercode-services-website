<script setup>
const props = defineProps(['bgColor', 'svgFillColor']);
</script>

<template>
    <div :style="`background-color:${props.bgColor}`" class="section-divider page-section">
        <svg viewBox="0 0 100 25" width="1" height="0.1" preserveAspectRatio="none"
            :style="`fill:${props.svgFillColor}`">
            <path d="M0 0 Q 50 49.5 100 0" transform-origin="0 0"></path>
        </svg>
    </div>
</template>

<style>
.section-divider {
    position: relative;
    width: 100%;
    height: auto;
    display: block;
    /* margin-top: -0.5px;
    margin-bottom: -0.5px; */
}

.section-divider::before {
    content: "";
    position: absolute;
    inset: 0px;
    margin-top: 0.5px;
}

.section-divider>svg {
    position: relative;
    width: 100%;
    height: auto;
    display: block;
    transform-origin: 50% 0%;
    will-change: transform;
    mask-image: -webkit-radial-gradient(center, white, black);
    overflow: visible;
    translate: none;
    rotate: none;
    scale: none;
    transform: translate3d(0px, 0px, 0px) scale(1, 0.3957);
}
@media screen and (min-width: 1024px){
    .section-divider>svg{
        transform: 'scale(1, 0.0)';
    }
}
</style>