<script setup>
import globeimg from "../../../../Assets/img/section-three1920.png"
const props = defineProps(['title', 'body'])
import {onMounted, onUnmounted, ref} from "vue";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
        gsap.to('.home-section-3-img', {
            transform: 'rotate(90deg)',
            duration: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#home-section-three',
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
        <img class="home-section-3-img" :src="globeimg" alt="image of globe">
        <div class="glass-text-container">
            <h3>{{ props.title }}</h3>
            <p>{{ props.body }}</p>
        </div>
    </span>
</template>