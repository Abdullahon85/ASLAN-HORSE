<template>
  <section
    class="section section--cream contact"
    aria-labelledby="contact-title"
  >
    <div class="container">
      <div class="section__header section__header--center">
        <span class="section__label">{{ t.contact.label }}</span>
        <h2 class="section__title" id="contact-title">
          {{ t.contact.title }}
        </h2>
        <p class="section__subtitle">
          {{ t.contact.subtitle }}
        </p>
      </div>

      <div class="contact__layout">
        <!-- Contact cards -->
        <div class="contact__info">
          <div v-for="(card, i) in contactCards" :key="i" class="contact-card">
            <div class="contact-card__icon" aria-hidden="true">
              <div v-html="card.icon"></div>
            </div>
            <div class="contact-card__body">
              <span class="contact-card__label">{{ card.label }}</span>
              <component
                :is="card.href ? 'a' : 'p'"
                v-bind="
                  card.href
                    ? {
                        href: card.href,
                        target: card.external ? '_blank' : undefined,
                        rel: card.external ? 'noopener noreferrer' : undefined,
                      }
                    : {}
                "
                class="contact-card__value"
                @click="card.track && card.track()"
              >
                {{ card.value }}
              </component>
              <p v-if="card.sub" class="contact-card__sub">{{ card.sub }}</p>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="contact__cta">
            <a
              :href="`tel:${PHONE1_RAW}`"
              class="btn btn--primary btn--full"
              @click="handleCall(PHONE1_RAW)"
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
              {{ t.contact.btnCall }} {{ PHONE1_DISPLAY }}
            </a>
            <a
              :href="`tel:${PHONE2_RAW}`"
              class="btn btn--outline-navy btn--full"
              @click="handleCall(PHONE2_RAW)"
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
              {{ PHONE2_DISPLAY }}
            </a>
            <a
              :href="TELEGRAM_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--telegram btn--full"
              @click="trackWhatsApp()"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                />
              </svg>
              {{ t.contact.btnWa }}
            </a>
          </div>
        </div>

        <!-- Map embed / placeholder -->
        <div class="contact__map">
          <div class="map-wrap">
            <!-- Replace this iframe with real Google Maps / Yandex embed code -->
            <div
              class="map-placeholder"
              role="img"
              :aria-label="t.contact.mapAria"
            >
              <svg
                viewBox="0 0 80 80"
                fill="none"
                width="64"
                height="64"
                aria-hidden="true"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="38"
                  stroke="rgba(13,27,62,0.1)"
                  stroke-width="2"
                />
                <path
                  d="M40 15C31.7 15 25 21.7 25 30c0 12.2 15 35 15 35s15-22.8 15-35c0-8.3-6.7-15-15-15z"
                  fill="rgba(200,150,46,0.2)"
                  stroke="#C8962E"
                  stroke-width="1.5"
                />
                <circle cx="40" cy="30" r="5" fill="#C8962E" opacity="0.7" />
              </svg>
              <div class="map-placeholder__text">
                <strong>{{ t.contact.mapAddress }}</strong>
                <span>{{ t.contact.mapLandmark }}</span>
                <a
                  :href="MAPS_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn--outline-navy btn--sm map-placeholder__open"
                >
                  {{ t.contact.mapsBtn }}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    width="14"
                    height="14"
                    aria-hidden="true"
                  >
                    <path d="M7 2H2v12h12v-5M9 2h5v5M14 2L7 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
const TELEGRAM_URL = "https://t.me/+998882586565";
const MAPS_URL =
  "https://yandex.uz/maps/-/CPRFa060";

const { trackCall, trackWhatsApp } = useAnalytics();
const { t } = useI18n();

const handleCall = (phone) => trackCall(phone);

const contactCards = computed(() => [
  {
    label: t.value.contact.cards[0].label,
    value: PHONE1_DISPLAY,
    href: `tel:${PHONE1_RAW}`,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#C8962E" stroke-width="1.8" width="22" height="22">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.74a16 16 0 006.35 6.35l1.11-1.11a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>`,
    track: () => trackCall(PHONE1_RAW),
  },
  {
    label: t.value.contact.cards[1].label,
    value: PHONE2_DISPLAY,
    href: `tel:${PHONE2_RAW}`,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#162B5B" stroke-width="1.8" width="22" height="22">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.74a16 16 0 006.35 6.35l1.11-1.11a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>`,
    track: () => trackCall(PHONE2_RAW),
  },
  {
    label: t.value.contact.cards[2].label,
    value: t.value.contact.cards[2].value,
    sub: t.value.contact.cards[2].sub,
    href: MAPS_URL,
    external: true,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#C8962E" stroke-width="1.8" width="22" height="22">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>`,
  },
  {
    label: t.value.contact.cards[3].label,
    value: t.value.contact.cards[3].value,
    sub: t.value.contact.cards[3].sub,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#27A96B" stroke-width="1.8" width="22" height="22">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>`,
  },
]);
</script>

<style scoped>
.contact__layout {
  display: grid;
  grid-template-columns: 480px 1fr;
  gap: 48px;
  align-items: start;
}

/* Info column */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.contact-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--cream-dark);
  transition: background var(--transition-fast);
}

.contact-card:hover {
  background: var(--cream);
}

.contact-card__icon {
  width: 44px;
  height: 44px;
  background: var(--cream);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-card__label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.contact-card__value {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a.contact-card__value:hover {
  color: var(--gold);
}

.contact-card__sub {
  font-size: 0.8125rem;
  color: var(--text-muted);
  margin-top: 3px;
  line-height: 1.45;
}

.contact__cta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 24px;
}

/* Map */
.contact__map {
  flex: 1;
}

.map-wrap {
  border-radius: var(--radius-xl);
  overflow: hidden;
  height: 420px;
  position: relative;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--cream-dark) 0%, var(--cream) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 2px dashed var(--cream-dark);
  border-radius: var(--radius-xl);
  text-align: center;
  padding: 32px;
}

.map-placeholder__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.map-placeholder__text strong {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  color: var(--navy);
}

.map-placeholder__text span {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.map-placeholder__open {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 1199px) {
  .contact__layout {
    grid-template-columns: 1fr;
  }
  .map-wrap {
    height: 320px;
  }
}

@media (max-width: 767px) {
  .contact-card {
    padding: 16px 18px;
  }
  .contact__cta {
    padding: 16px 18px;
  }
}
</style>
