<template>
  <section
    class="section section--navy services"
    aria-labelledby="services-title"
  >
    <div class="container">
      <div class="section__header section__header--center on-dark">
        <span class="section__label">{{ t.services.label }}</span>
        <h2 class="section__title" id="services-title">
          {{ t.services.title }}
        </h2>
        <p class="section__subtitle">{{ t.services.subtitle }}</p>
      </div>

      <div class="services__grid">
        <article
          v-for="(svc, i) in serviceCards"
          :key="i"
          class="service-card"
          :class="{ 'service-card--featured': svc.featured }"
        >
          <div class="service-card__icon" aria-hidden="true">
            <div v-html="svc.icon"></div>
          </div>
          <div class="service-card__body">
            <span v-if="svc.tag" class="tag tag--gold">{{ svc.tag }}</span>
            <h3 class="service-card__title">{{ svc.name }}</h3>
            <p class="service-card__text">{{ svc.text }}</p>
          </div>
          <a
            :href="`tel:${PHONE1_RAW}`"
            class="service-card__cta"
            @click="handleServiceCall(svc.name)"
          >
            {{ t.services.cta }}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </article>
      </div>

      <div class="services__bottom">
        <a
          :href="TELEGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--telegram btn--lg"
          @click="trackWhatsApp()"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            />
          </svg>
          {{ t.services.btnWa }}
        </a>
        <a
          href="#booking"
          class="btn btn--outline btn--lg"
          @click.prevent="scrollTo('booking')"
        >
          {{ t.services.btnBook }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const PHONE1_RAW = "+998882586565";
const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackCall, trackWhatsApp, trackCTAClick } = useAnalytics();
const { t } = useI18n();

const handleServiceCall = (name) => {
  trackCall(PHONE1_RAW);
  trackCTAClick(`service_call_${name}`, "services");
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const serviceIcons = [
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32">
     <circle cx="16" cy="10" r="5"/>
     <path d="M6 27c0-5.52 4.48-10 10-10s10 4.48 10 10"/>
     <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.2"/>
   </svg>`,
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32">
     <circle cx="10" cy="10" r="4"/>
     <circle cx="22" cy="10" r="4"/>
     <path d="M2 26c0-4.42 3.58-8 8-8"/>
     <path d="M22 18c4.42 0 8 3.58 8 8"/>
     <path d="M11 26c0-2.76 2.24-5 5-5s5 2.24 5 5"/>
   </svg>`,
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32">
     <polygon points="5 3 27 16 5 29 5 3"/>
   </svg>`,
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32">
     <path d="M4 20 Q10 8 16 16 Q22 24 28 12"/>
     <path d="M4 24h24"/>
     <line x1="10" y1="24" x2="10" y2="20"/>
     <line x1="22" y1="24" x2="22" y2="16"/>
   </svg>`,
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32">
     <path d="M27 26H5a2 2 0 01-2-2V10a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v14a2 2 0 01-2 2z"/>
     <circle cx="16" cy="17" r="5"/>
   </svg>`,
];

const serviceFeatured = [true, false, false, false, false];

const serviceCards = computed(() =>
  t.value.services.items.map((item, i) => ({
    ...item,
    icon: serviceIcons[i],
    featured: serviceFeatured[i],
  })),
);
</script>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition:
    background var(--transition),
    border-color var(--transition),
    transform var(--transition);
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(200, 150, 46, 0.4);
  transform: translateY(-2px);
}

.service-card--featured {
  border-color: var(--gold);
  background: rgba(200, 150, 46, 0.08);
}

.service-card__icon {
  color: var(--gold-light);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-card__title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--white);
}

.service-card__text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.65;
}

.service-card__cta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gold-light);
  margin-top: auto;
  padding-top: 4px;
  transition:
    gap var(--transition-fast),
    color var(--transition-fast);
}

.service-card__cta:hover {
  color: var(--white);
  gap: 12px;
}

.service-card__cta svg {
  width: 16px;
  height: 16px;
}

.services__bottom {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 1023px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .services__grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .services__bottom .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
