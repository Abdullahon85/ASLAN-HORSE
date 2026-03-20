<template>
  <section class="section section--white faq" aria-labelledby="faq-title">
    <div class="container">
      <div class="section__header section__header--center">
        <span class="section__label">{{ t.faq.label }}</span>
        <h2 class="section__title" id="faq-title">{{ t.faq.title }}</h2>
        <p class="section__subtitle">
          {{ t.faq.subtitle }}
        </p>
      </div>

      <div class="faq__grid">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="faq-item"
          :class="{ 'faq-item--open': openIndex === i }"
        >
          <button
            class="faq-item__question"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-answer-${i}`"
            :id="`faq-q-${i}`"
          >
            <span>{{ item.q }}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          <div
            class="faq-item__answer"
            :id="`faq-answer-${i}`"
            role="region"
            :aria-labelledby="`faq-q-${i}`"
            :hidden="openIndex !== i"
          >
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="faq__cta">
        <div class="faq__cta-text">
          <h3>{{ t.faq.ctaTitle }}</h3>
          <p>{{ t.faq.ctaText }}</p>
        </div>
        <div class="faq__cta-btns">
          <a
            :href="`tel:${PHONE1_RAW}`"
            class="btn btn--primary"
            @click="trackCall(PHONE1_RAW)"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.74a16 16 0 006.35 6.35l1.11-1.11a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
              />
            </svg>
            {{ t.faq.btnCall }}
          </a>
          <a
            :href="TELEGRAM_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--telegram"
            @click="trackWhatsApp()"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const PHONE1_RAW = "+998882586565";
const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackCall, trackWhatsApp } = useAnalytics();
const { t } = useI18n();

const openIndex = ref(0);

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? -1 : i;
};

const faqItems = computed(() => t.value.faq.items);
</script>

<style scoped>
.faq__grid {
  max-width: 800px;
  margin: 0 auto 56px;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1.5px solid var(--cream-dark);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.faq-item {
  border-bottom: 1.5px solid var(--cream-dark);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  text-align: left;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  background: var(--white);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
  border: none;
  outline: none;
}

.faq-item__question:hover {
  background: var(--cream);
}
.faq-item__question:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: -2px;
}

.faq-item--open .faq-item__question {
  background: var(--cream);
  color: var(--navy);
}

.faq-item__icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cream-dark);
  border-radius: 50%;
  color: var(--text-muted);
  transition:
    transform var(--transition),
    background var(--transition-fast),
    color var(--transition-fast);
}

.faq-item__icon svg {
  width: 16px;
  height: 16px;
}

.faq-item--open .faq-item__icon {
  transform: rotate(180deg);
  background: var(--navy);
  color: var(--white);
}

.faq-item__answer {
  padding: 0 24px 20px;
  background: var(--cream);
  display: block;
}

.faq-item__answer[hidden] {
  display: none;
}

.faq-item__answer p {
  font-size: 0.9375rem;
  color: var(--text-mid);
  line-height: 1.72;
  padding-top: 4px;
}

/* CTA strip */
.faq__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: var(--navy-mid);
  border-radius: var(--radius-lg);
  padding: 32px 40px;
  max-width: 800px;
  margin: 0 auto;
}

.faq__cta-text h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 4px;
}

.faq__cta-text p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.faq__cta-btns {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

@media (max-width: 767px) {
  .faq__cta {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
  .faq__cta-btns .btn {
    width: 100%;
    justify-content: center;
  }
  .faq-item__question {
    padding: 16px 18px;
    font-size: 0.9375rem;
  }
  .faq-item__answer {
    padding: 0 18px 16px;
  }
}
</style>
