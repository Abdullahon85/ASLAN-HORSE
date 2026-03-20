<template>
  <div class="sticky-bar" :aria-label="t.sticky.aria">
    <a
      :href="`tel:${PHONE1_RAW}`"
      class="sticky-bar__btn sticky-bar__btn--call"
      @click="trackCall(PHONE1_RAW)"
      :aria-label="t.sticky.callAria"
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
      <span>{{ t.sticky.call }}</span>
    </a>

    <a
      :href="TELEGRAM_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="sticky-bar__btn sticky-bar__btn--tg"
      @click="trackWhatsApp()"
      :aria-label="t.sticky.waAria"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
        />
      </svg>
      <span>Telegram</span>
    </a>
  </div>
</template>

<script setup>
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const PHONE1_RAW = "+998882586565";
const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackCall, trackWhatsApp } = useAnalytics();
const { t } = useI18n();
</script>

<style scoped>
.sticky-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  height: var(--mobile-bar-height);
  box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.18);
}

.sticky-bar__btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;
  transition: filter var(--transition-fast);
  -webkit-tap-highlight-color: transparent;
}

.sticky-bar__btn:active {
  filter: brightness(0.88);
}

.sticky-bar__btn svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.sticky-bar__btn--call {
  background: var(--gold);
}

.sticky-bar__btn--tg {
  background: #229ed9;
}

/* Hide on desktop */
@media (min-width: 768px) {
  .sticky-bar {
    display: none;
  }
}
</style>
