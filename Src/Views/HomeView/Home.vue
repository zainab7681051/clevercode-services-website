<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import HeroSection from './Components/HeroSection/HeroSection.vue';
import SectionTwo from './Components/SectionTwo/SectionTwo.vue';
import SectionThree from './Components/SectionThree/SectionThree.vue';
import SectionFour from './Components/SectionFour/SectionFour.vue';
import FaqSection from './Components/FAQSection/FAQSection.vue';
import SectionDivider from '../../Shared/Components/SectionDivider.vue';

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    const sections=gsap.utils.toArray('#home-hero-section,#home-section-two, #home-section-three, #home-section-four, #home-faq-section');
    const section_dividers=gsap.utils.toArray('#section-divider-1, #section-divider-2, #section-divider-3, #section-divider-4, #section-divider-5');
    const globe_img=gsap.utils.toArray('.home-hero-img, .home-section-2-img, .home-section-3-img, .home-section-4-img')
    
    sections.forEach((section, index) => {
      gsap.to(section_dividers[index].querySelector('svg'), {
        transform: 'scale(1, 1)',
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: section,
          start: 'top',
          end: 'bottom -=50%',
          scrub: 1, 
          toggleActions: 'play pause reverse pause',
        }
      })
    });
  });
});

onMounted(()=>{})
</script>
<template>
    <hero-section id="home-hero-section" />
    <!-- --blue and --dark-blue -->
    <section-divider id="section-divider-1" :svg-fill-color="'#5A05FF'" :bg-color="'#00234b'" />
    <section-two id="home-section-two"/>
    <!-- dark-blue and dark-red -->
    <section-divider id="section-divider-2":svg-fill-color="'#00234b'" :bg-color="'#360f16'" />
    <section-three id="home-section-three" />
    <!-- dark-red and green -->
    <section-divider id="section-divider-3" :svg-fill-color="'#360f16'" :bg-color="'#003d2d'" />
    <section-four id="home-section-four"/>
    <!-- green and light-pink -->
    <section-divider id="section-divider-4" :svg-fill-color="'#003d2d'" :bg-color="'#ffe6e5'" />
    <faq-section id="home-faq-section" />
    <!-- light-pink and blue -->
    <section-divider id="section-divider-5" :svg-fill-color="'#ffe6e5'" :bg-color="'#5A05FF'" />
</template>