<template>
  <section class="section section--white prices" aria-labelledby="prices-title">
    <div class="container">
      <div class="section__header section__header--center">
        <span class="section__label">{{ t.prices.label }}</span>
        <h2 class="section__title" id="prices-title">
          {{ t.prices.title }}
        </h2>
        <p class="section__subtitle">
          {{ t.prices.subtitle }}
        </p>
      </div>

      <!-- Schedule badge -->
      <div class="prices__schedule">
        <div v-for="(day, i) in schedule" :key="i" class="schedule-item">
          <span class="schedule-item__days">{{ day.days }}</span>
          <span class="schedule-item__hours">{{ day.hours }}</span>
        </div>
      </div>

      <!-- Price cards -->
      <div class="prices__grid">
        <div
          v-for="(plan, i) in plans"
          :key="i"
          class="price-card"
          :class="{ 'price-card--featured': plan.featured }"
        >
          <div v-if="plan.badge" class="price-card__badge">
            {{ plan.badge }}
          </div>

          <div class="price-card__icon" aria-hidden="true">
            <div v-html="plan.icon"></div>
          </div>

          <h3 class="price-card__name">{{ plan.name }}</h3>
          <p class="price-card__desc">{{ plan.desc }}</p>

          <div class="price-card__price">
            <span class="price-card__amount">{{ plan.price }}</span>
            <span class="price-card__unit">{{ plan.unit }}</span>
          </div>

          <ul class="price-card__features" :aria-label="t.prices.featuresAria">
            <li v-for="(f, fi) in plan.features" :key="fi">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  :fill="plan.featured ? '#C8962E' : '#E8F8EF'"
                />
                <polyline
                  points="5 8 7 10 11 6"
                  :stroke="plan.featured ? '#FFF' : '#27A96B'"
                  stroke-width="1.5"
                />
              </svg>
              {{ f }}
            </li>
          </ul>

          <a
            :href="`tel:${PHONE1_RAW}`"
            class="btn btn--full"
            :class="plan.featured ? 'btn--primary' : 'btn--outline-navy'"
            @click="handlePriceCall(plan.name)"
          >
            {{ t.prices.btn }}
          </a>
        </div>
      </div>

      <p class="prices__note">
        * Цены уточняются при записи — возможны скидки для групп, детей и
        постоянных клиентов. Звоните:
        <a :href="`tel:${PHONE1_RAW}`" @click="handlePriceCall('footer')">{{
          PHONE1_DISPLAY
        }}</a>
        или
        <a :href="`tel:${PHONE2_RAW}`" @click="handlePriceCall('footer2')">{{
          PHONE2_DISPLAY
        }}</a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const PHONE1_RAW = "+998882586565";
const PHONE1_DISPLAY = "+998 88 258-65-65";
const PHONE2_RAW = "+998959090875";
const PHONE2_DISPLAY = "+998 95 909-08-75";

const { trackCall, trackCTAClick } = useAnalytics();
const { t } = useI18n();

const handlePriceCall = (plan) => {
  trackCall(PHONE1_RAW);
  trackCTAClick(`price_call_${plan}`, "prices");
};

const planIcons = [
  `<svg viewBox="0 0 28 28" fill="none" stroke="#162B5B" stroke-width="1.8" width="28" height="28">
     <polygon points="5 3 23 14 5 25 5 3"/>
   </svg>`,
  `<svg viewBox="0 0 28 28" fill="none" stroke="#FFF" stroke-width="1.8" width="28" height="28">
     <circle cx="14" cy="9" r="5"/>
     <path d="M5 24c0-5 4-9 9-9s9 4 9 9"/>
   </svg>`,
  `<svg viewBox="0 0 28 28" fill="none" stroke="#162B5B" stroke-width="1.8" width="28" height="28">
     <circle cx="9" cy="9" r="4"/>
     <circle cx="19" cy="9" r="4"/>
     <path d="M2 24c0-4 3-7 7-7"/>
     <path d="M19 17c4 0 7 3 7 7"/>
     <path d="M10 24c0-2.76 1.79-5 4-5s4 2.24 4 5"/>
   </svg>`,
  `<svg viewBox="0 0 28 28" fill="none" stroke="#162B5B" stroke-width="1.8" width="28" height="28">
     <path d="M4 18 Q9 8 14 14 Q19 20 24 10"/>
     <line x1="4" y1="22" x2="24" y2="22"/>
     <line x1="9" y1="22" x2="9" y2="18"/>
     <line x1="19" y1="22" x2="19" y2="12"/>
   </svg>`,
];

const planFeatured = [false, true, false, false];

const schedule = computed(() => t.value.prices.schedule);

const plans = computed(() =>
  t.value.prices.plans.map((plan, i) => ({
    ...plan,
    icon: planIcons[i],
    featured: planFeatured[i],
  })),
);
</script>

<style scoped>
.prices__schedule {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 48px;
  border: 1.5px solid var(--cream-dark);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--cream);
}

.schedule-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  gap: 6px;
  border-right: 1.5px solid var(--cream-dark);
}

.schedule-item:last-child {
  border-right: none;
}

.schedule-item__days {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.schedule-item__hours {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--navy);
}

/* Price cards */
.prices__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.price-card {
  position: relative;
  background: var(--cream);
  border: 1.5px solid var(--cream-dark);
  border-radius: var(--radius-lg);
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition:
    box-shadow var(--transition),
    transform var(--transition);
}

.price-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.price-card--featured {
  background: var(--navy);
  border-color: var(--navy);
  transform: scale(1.02);
}

.price-card--featured:hover {
  box-shadow: var(--shadow-lg);
  transform: scale(1.02) translateY(-3px);
}

.price-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold);
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.price-card__icon {
  margin-bottom: 16px;
  color: var(--navy);
}

.price-card--featured .price-card__icon {
  color: var(--gold-light);
}

.price-card__name {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-dark);
}

.price-card--featured .price-card__name {
  color: var(--white);
}

.price-card__desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}

.price-card--featured .price-card__desc {
  color: rgba(255, 255, 255, 0.65);
}

.price-card__price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 20px;
}

.price-card__amount {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--navy);
}

.price-card--featured .price-card__amount {
  color: var(--gold-light);
}

.price-card__unit {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.price-card--featured .price-card__unit {
  color: rgba(255, 255, 255, 0.5);
}

.price-card__features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
  flex: 1;
}

.price-card__features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--text-mid);
}

.price-card--featured .price-card__features li {
  color: rgba(255, 255, 255, 0.78);
}

.price-card__features svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.prices__note {
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-muted);
  padding: 0 16px;
}

.prices__note a {
  color: var(--navy);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 1199px) {
  .prices__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .price-card--featured {
    transform: none;
  }
  .price-card--featured:hover {
    transform: translateY(-3px);
  }
}

@media (max-width: 767px) {
  .prices__grid {
    grid-template-columns: 1fr;
  }
  .prices__schedule {
    flex-direction: column;
  }
  .schedule-item {
    border-right: none;
    border-bottom: 1.5px solid var(--cream-dark);
    flex-direction: row;
    justify-content: space-between;
  }
  .schedule-item:last-child {
    border-bottom: none;
  }
}
</style>
