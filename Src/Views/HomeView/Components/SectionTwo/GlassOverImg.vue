<script setup>
import globeimg from "../../../../Assets/img/section-two1920.png"
const props = defineProps(['title', 'body'])

import {onMounted, onUnmounted, ref} from "vue";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
        gsap.to('.home-section-2-img', {
            transform: 'rotate(90deg)',
            duration: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#home-section-two',
                start: 'top +=100%',
                end: 'bottom',
                scrub: 1, 
                toggleActions: 'play pause reverse pause',
            }
        })
    });
})
</script>
<template>
    <span class="glass-over-img">
        <img class="home-section-2-img" :src="globeimg" alt="image of globe">
        <div class="glass-text-container">
            <h3>{{ props.title }}</h3>
            <p>{{ props.body }}</p>
        </div>
    </span>
</template>
<style>
.glass-over-img {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    border-radius: 1rem;
    margin: auto;
    padding: 0px;
    position: absolute;
    inset: 0px;
}

.glass-over-img>img {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: none;
}

.glass-text-container {
    display: block;
    margin: auto;
    color: white;
    width: 100%;
    height: fit-content;
    position: absolute;
    z-index: 4;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.2)
}

.glass-text-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    backdrop-filter: blur(7px);
    border-radius: inherit;
    z-index: -1;
}

.glass-text-container>h3 {
    font-size: 1.4rem;
    padding: 4px;
    border-bottom: solid 1px #fff;
    text-align: center
}

.glass-text-container>h3+p {
    font-size: 1.1rem;
    line-height: 1.3;
    padding: 10px;
}

@media screen and (min-width: 1024px) {
    .glass-over-img {
        height: 75vh;
    }

}

@media (min-width: 48em) {
    .glass-over-img>img {
        object-fit: contain;
    }

    .glass-text-container {
        border-radius: 31px;
    }

    .glass-text-container {
        width: calc(20rem + ((1vw - 0.48rem) * 5.5556));
        min-height: 0vw;
    }

    .glass-text-container>h3 {
        font-size: calc(1.4rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }

    .glass-text-container>h3+p {
        font-size: calc(1.1rem + ((1vw - 0.48rem) * 0.6944));
        min-height: 0vw;
    }
}
</style>