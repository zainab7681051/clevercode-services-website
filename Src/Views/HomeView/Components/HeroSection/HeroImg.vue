<script setup>
import {onMounted} from "vue";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import globeImg640 from '../../../../Assets/img/big-globe-img-640.png'
import globeImg720 from '../../../../Assets/img/big-globe-img-720.png'
import globeImg1920 from '../../../../Assets/img/big-globe-img-1920.png'

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
        gsap.to('.home-hero-img', {
            transform: 'rotate(90deg)',
            duration: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#home-hero-section',
                start: 'top +=150%',
                end: 'bottom',
                scrub: 1, 
                toggleActions: 'play pause reverse pause',
            }
        })
    });
})
</script>
<template>
    <div class="hero-img-container">
        <div class="img-container-layer4">
            <div class="img-container-layer3">
                <div class="img-container-layer2">
                    <span class="img-container-layer1">
                        <img sizes="100vw" :srcset="globeImg640+' 640w,' + globeImg720+' 720w,' + globeImg1920+' 1920w,'"
                            :src="globeImg1920" alt="image of globe" decoding="async" class="hero-img home-hero-img">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.hero-img-container {
    padding-left: var(--grid-half-gutter);
    padding-right: var(--grid-half-gutter);
    min-width: initial;
    flex: 0 0 100%;
    max-width: 100%;
    margin-left: 0%;
}

.img-container-layer4 {
    position: relative;
}

.img-container-layer3 {
    /* pointer-events: none; */
    width: 100%;
    height: 100%;
}

.img-container-layer2 {
    position: relative;
    margin-top: -8px;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
}

.img-container-layer1 {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20rem;
}

.hero-img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: contain;
}

@media screen and (min-width:720px) {
    .hero-img-container {
        flex: 0 0 87.5%;
        max-width: 87.5%;
        margin-left: 6.25%;
    }
}

@media screen and (min-width:1024px) {
    .hero-img-container {
        flex: 0 0 43.75%;
        max-width: 43.75%;
        margin-left: 0%;
    }

    .img-container-layer4 {
        width: 100%;
        margin-top: 16%;
    }
}
</style>