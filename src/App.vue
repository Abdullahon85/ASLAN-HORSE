<template>
  <div id="app-root">
    <SiteHeader />
    <StickyMobileBar />

    <main>
      <HeroSection id="home" />
      <BenefitsSection id="benefits" />
      <ServicesSection id="services" />
      <TestimonialsSection id="reviews" />
      <AboutSection id="about" />
      <PricesSection id="prices" />
      <GallerySection id="gallery" />
      <FAQSection id="faq" />
      <LeadFormSection id="booking" />
      <ContactSection id="contacts" />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import StickyMobileBar from "./components/StickyMobileBar.vue";
import HeroSection from "./components/HeroSection.vue";
import BenefitsSection from "./components/BenefitsSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import AboutSection from "./components/AboutSection.vue";
import PricesSection from "./components/PricesSection.vue";
import GallerySection from "./components/GallerySection.vue";
import FAQSection from "./components/FAQSection.vue";
import LeadFormSection from "./components/LeadFormSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<style>
#app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
