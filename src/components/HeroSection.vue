<template>
  <section class="hero" :aria-label="t.hero.aria">
    <!-- Background -->
    <div class="hero__bg">
      <!-- Replace src with your real photo: /images/hero.jpg -->
      <img
        class="hero__bg-img"
        :src="'/images/hero.jpg'"
        :alt="t.hero.imgAlt"
        loading="eager"
        fetchpriority="high"
        onerror="this.style.display = 'none'"
      />
      <div class="hero__overlay"></div>
    </div>

    <!-- Floating trust chips -->
    <div class="hero__trust container">
      <span class="trust-chip">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {{ t.hero.chip1 }}
      </span>
      <span class="trust-chip">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
        {{ t.hero.chip2 }}
      </span>
      <span class="trust-chip">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        {{ t.hero.chip3 }}
      </span>
    </div>

    <!-- Content -->
    <div class="container hero__content">
      <div class="hero__text">
        <span class="hero__label">{{ t.hero.label }}</span>

        <h1 class="hero__h1">
          {{ t.hero.h1 }}<br />
          <em>{{ t.hero.h1em }}</em>
        </h1>

        <p class="hero__sub">
          {{ t.hero.sub1 }}
          <strong>{{ t.hero.sub2strong }}</strong
          >{{ t.hero.sub2rest }}
        </p>

        <div class="hero__actions">
          <a
            :href="`tel:${PHONE1_RAW}`"
            class="btn btn--primary btn--lg"
            @click="handleCall"
            :aria-label="t.hero.callAria"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              aria-hidden="true"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.74a16 16 0 006.35 6.35l1.11-1.11a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
              />
            </svg>
            {{ t.hero.btnCall }}
          </a>

          <a
            :href="TELEGRAM_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--telegram btn--lg"
            @click="handleWhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
              />
            </svg>
            {{ t.hero.btnWa }}
          </a>
        </div>

        <p class="hero__note">
          {{ t.hero.or }}
          <a href="#booking" @click.prevent="scrollTo('booking')">{{
            t.hero.leaveApp
          }}</a
          >{{ t.hero.callback }}
        </p>
      </div>

      <!-- Decorative horse silhouette -->
      <div class="hero__deco" aria-hidden="true">
        <svg
          viewBox="0 0 340 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M260 60c-8-20-28-32-48-28-12 2-22 10-28 20-6 10-6 22-2 32 2 6 6 12 10 16-4 2-8 6-12 10-8 10-12 22-12 34 0 8 2 16 6 22-8 4-16 10-22 18-10 14-14 30-12 46 2 14 8 26 18 36 4 4 8 8 14 10-2 6-4 12-4 18 0 10 4 20 10 28 6 8 14 14 24 16 10 2 20 0 28-6 8-6 14-16 14-26 0-8-2-16-6-22 2-2 4-4 6-6 10-12 16-28 16-44 0-10-2-20-6-28 6-6 10-14 12-22 2-10 2-20-2-30-4-8-10-16-18-20 4-6 6-14 4-22-2-10-8-20-16-26 4-8 6-18 4-26z"
            fill="white"
            opacity="0.06"
          />
          <path
            d="M220 80c-6 0-12 4-16 10-2 4-4 8-4 12 0 6 2 12 6 16-6 2-12 8-16 14-6 10-8 22-6 32 2 8 6 16 12 22-10 6-18 16-22 26-4 10-4 22 0 32 4 10 10 18 20 24-4 8-6 16-4 24 2 10 8 18 16 24 8 6 18 8 28 6 10-2 18-8 24-18 4-8 6-18 4-26 6-4 10-10 14-18 4-10 6-20 4-30-2-10-8-20-16-26 4-6 6-14 6-22 0-10-4-20-10-26 6-4 10-10 12-18 2-8 0-18-4-26-4-6-10-12-18-14-4-2-8-2-12-2"
            stroke="white"
            stroke-width="2"
            opacity="0.2"
            stroke-linecap="round"
          />
          <!-- Horse legs stylized -->
          <rect
            x="170"
            y="290"
            width="16"
            height="70"
            rx="8"
            fill="white"
            opacity="0.1"
          />
          <rect
            x="200"
            y="285"
            width="16"
            height="75"
            rx="8"
            fill="white"
            opacity="0.1"
          />
          <rect
            x="145"
            y="295"
            width="14"
            height="65"
            rx="7"
            fill="white"
            opacity="0.08"
          />
          <rect
            x="225"
            y="290"
            width="14"
            height="70"
            rx="7"
            fill="white"
            opacity="0.08"
          />
        </svg>
      </div>
    </div>

    <!-- Scroll Down -->
    <button
      class="hero__scroll"
      @click="scrollTo('benefits')"
      :aria-label="t.hero.scrollAria"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  </section>
</template>

<script setup>
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const PHONE1_RAW = "+998882586565";
const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackCall, trackWhatsApp, trackCTAClick } = useAnalytics();
const { t } = useI18n();

const handleCall = () => {
  trackCall(PHONE1_RAW);
  trackCTAClick("call", "hero");
};
const handleWhatsApp = () => {
  trackWhatsApp();
  trackCTAClick("whatsapp", "hero");
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-top: var(--header-height);
}

/* Background */
.hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0a152e 0%, #162b5b 50%, #0a1f40 100%);
  z-index: 0;
}

.hero__bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: 0.45;
  transform-origin: center;
  animation: kenBurns 20s ease-in-out alternate infinite;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 21, 46, 0.85) 0%,
    rgba(13, 27, 62, 0.65) 60%,
    rgba(10, 21, 46, 0.8) 100%
  );
}

/* Trust chips - top of hero */
.hero__trust {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 24px;
  padding-bottom: 0;
  margin-bottom: auto;
}

.trust-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(8px);
}

.trust-chip svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  stroke: var(--gold-light);
}

/* Main content */
.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 380px;
  align-items: center;
  gap: 40px;
  padding-top: 48px;
  padding-bottom: 80px;
}

.hero__text {
  max-width: 620px;
}

.hero__label {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 16px;
}

.hero__h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 20px;
}

.hero__h1 em {
  font-style: normal;
  color: var(--gold-light);
}

.hero__sub {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 520px;
}

.hero__sub strong {
  color: var(--white);
  font-weight: 600;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 20px;
}

.hero__note {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
}

.hero__note a {
  color: var(--gold-light);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Decorative SVG */
.hero__deco {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
}

.hero__deco svg {
  width: 100%;
  max-width: 320px;
  filter: drop-shadow(0 0 60px rgba(200, 150, 46, 0.15));
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
  transition: background var(--transition-fast);
}

.hero__scroll:hover {
  background: rgba(255, 255, 255, 0.2);
}

.hero__scroll svg {
  width: 20px;
  height: 20px;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(6px);
  }
}

/* Responsive */
@media (max-width: 1023px) {
  .hero__content {
    grid-template-columns: 1fr;
  }
  .hero__deco {
    display: none;
  }
  .hero__text {
    max-width: 100%;
  }
}

@media (max-width: 767px) {
  .hero {
    min-height: 92vh;
  }
  .hero__h1 {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  .hero__actions {
    flex-direction: column;
  }
  .hero__actions .btn {
    width: 100%;
    justify-content: center;
  }
  .hero__trust {
    gap: 6px;
  }
  .trust-chip {
    font-size: 0.75rem;
    padding: 5px 10px;
  }
}

/* ── Hero entrance animations (on page load, above the fold) ── */
@media (prefers-reduced-motion: no-preference) {
  .hero__label {
    animation: heroIn 0.6s cubic-bezier(0.2, 0, 0, 1) 0.1s both;
  }
  .hero__h1 {
    animation: heroIn 0.6s cubic-bezier(0.2, 0, 0, 1) 0.22s both;
  }
  .hero__sub {
    animation: heroIn 0.6s cubic-bezier(0.2, 0, 0, 1) 0.38s both;
  }
  .hero__actions {
    animation: heroIn 0.6s cubic-bezier(0.2, 0, 0, 1) 0.52s both;
  }
  .hero__trust .trust-chip:nth-child(1) {
    animation: chipPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.72s both;
  }
  .hero__trust .trust-chip:nth-child(2) {
    animation: chipPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.86s both;
  }
  .hero__trust .trust-chip:nth-child(3) {
    animation: chipPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1s both;
  }
}
</style>
