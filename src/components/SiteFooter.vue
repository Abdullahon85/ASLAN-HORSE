<template>
  <footer class="site-footer" role="contentinfo">
    <!-- Top CTA banner -->
    <div class="footer__cta-banner">
      <div class="container footer__cta-inner">
        <div>
          <h2 class="footer__cta-title">
            {{ t.footer.ctaTitle }}
          </h2>
          <p class="footer__cta-sub">
            {{ t.footer.ctaSub }}
          </p>
        </div>
        <div class="footer__cta-btns">
          <a
            :href="`tel:${PHONE1_RAW}`"
            class="btn btn--primary btn--lg"
            @click="handleCall"
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
            {{ PHONE1_DISPLAY }}
          </a>
          <a
            :href="TELEGRAM_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--telegram btn--lg"
            @click="handleWhatsApp"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>

    <!-- Main footer body -->
    <div class="footer__body">
      <div class="container footer__grid">
        <!-- Brand -->
        <div class="footer__brand">
          <a
            href="#home"
            class="footer__logo"
            @click.prevent="scrollTo('home')"
            :aria-label="t.footer.logoAria"
          >
            <svg
              class="logo-icon"
              viewBox="0 0 40 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z"
                fill="#C8962E"
                opacity="0.15"
              />
              <path
                d="M28 12c-1.5 0-3 .8-3.8 2l-2.2 3.5-3-1.5c-1-.5-2.2-.3-3 .5l-3 3c-.5.5-.5 1.3 0 1.8l1.5 1.5-1 4.5c-.2.8.2 1.6 1 1.9l.5.2c.7.3 1.5 0 1.9-.7l2-3.5 2.1 1c.5.3 1.1.2 1.5-.2l5-5.5c.4-.4.5-1 .2-1.5L27 16l1-2.5c.2-.5 0-1.1-.5-1.4-.2-.1-.4-.1-.5-.1z"
                fill="#C8962E"
              />
            </svg>
            <span>ASLAN</span>
          </a>
          <p class="footer__brand-desc">
            {{ t.footer.brandDesc }}
          </p>
          <div class="footer__hours">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="#C8962E"
              stroke-width="1.5"
              width="14"
              height="14"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="6.5" />
              <polyline points="8 4.5 8 8 10.5 9.5" />
            </svg>
            {{ t.footer.hours }}
          </div>
        </div>

        <!-- Nav -->
        <nav class="footer__nav" :aria-label="t.footer.navTitle">
          <h3 class="footer__col-title">{{ t.footer.navTitle }}</h3>
          <ul>
            <li v-for="(link, i) in navLinks" :key="i">
              <a :href="'#' + navIds[i]" @click.prevent="scrollTo(navIds[i])">{{
                link
              }}</a>
            </li>
          </ul>
        </nav>

        <!-- Services -->
        <div class="footer__services">
          <h3 class="footer__col-title">{{ t.footer.servicesTitle }}</h3>
          <ul>
            <li v-for="(link, i) in serviceLinks" :key="i">
              <a href="#services" @click.prevent="scrollTo('services')">{{
                link
              }}</a>
            </li>
          </ul>
        </div>

        <!-- Contacts -->
        <div class="footer__contact">
          <h3 class="footer__col-title">{{ t.footer.contactTitle }}</h3>
          <ul class="footer__contact-list">
            <li>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path
                  d="M14.67 10.74v2a1.1 1.1 0 01-1.21 1.11 10.9 10.9 0 01-4.76-1.69A10.74 10.74 0 012.84 6.3 10.9 10.9 0 011.17 1.56 1.11 1.11 0 012.27.44H4.3a1.11 1.11 0 011.11.95c.07.53.2 1.05.38 1.56a1.11 1.11 0 01-.25 1.17l-.85.85a8.89 8.89 0 003.54 3.54l.85-.85a1.11 1.11 0 011.17-.25c.5.18 1.03.3 1.56.38a1.11 1.11 0 01.96 1.15z"
                />
              </svg>
              <a :href="`tel:${PHONE1_RAW}`" @click="handleCall">{{
                PHONE1_DISPLAY
              }}</a>
            </li>
            <li>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path
                  d="M14.67 10.74v2a1.1 1.1 0 01-1.21 1.11 10.9 10.9 0 01-4.76-1.69A10.74 10.74 0 012.84 6.3 10.9 10.9 0 011.17 1.56 1.11 1.11 0 012.27.44H4.3a1.11 1.11 0 011.11.95c.07.53.2 1.05.38 1.56a1.11 1.11 0 01-.25 1.17l-.85.85a8.89 8.89 0 003.54 3.54l.85-.85a1.11 1.11 0 011.17-.25c.5.18 1.03.3 1.56.38a1.11 1.11 0 01.96 1.15z"
                />
              </svg>
              <a :href="`tel:${PHONE2_RAW}`" @click="handleCall">{{
                PHONE2_DISPLAY
              }}</a>
            </li>
            <li>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path
                  d="M14 1.5a1 1 0 011 1v9a1 1 0 01-1 1H3L1 14.5v-12a1 1 0 011-1h12z"
                />
              </svg>
              <a
                :href="TELEGRAM_URL"
                target="_blank"
                rel="noopener noreferrer"
                @click="handleWhatsApp"
                >Telegram</a
              >
            </li>
            <li>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path
                  d="M14 6.67C14 11.33 8 15.33 8 15.33S2 11.33 2 6.67a6 6 0 1112 0z"
                />
                <circle cx="8" cy="6.67" r="2" />
              </svg>
              <span>{{ t.footer.address }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>© {{ year }} {{ t.footer.copyright }}</p>
        <p class="footer__bottom-seo">
          {{ t.footer.seo }}
        </p>
      </div>
    </div>
  </footer>
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

const { trackCall, trackWhatsApp } = useAnalytics();
const { t } = useI18n();

const year = computed(() => new Date().getFullYear());

const navIds = [
  "home",
  "services",
  "about",
  "prices",
  "gallery",
  "faq",
  "contacts",
  "booking",
];
const navLinks = computed(() => t.value.footer.navLinks);
const serviceLinks = computed(() => t.value.footer.serviceLinks);

const handleCall = () => trackCall(PHONE1_RAW);
const handleWhatsApp = () => trackWhatsApp();

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
.site-footer {
  background: var(--navy);
  color: rgba(255, 255, 255, 0.75);
}

/* Top CTA banner */
.footer__cta-banner {
  background: var(--navy-mid);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 40px 0;
}

.footer__cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.footer__cta-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 6px;
}

.footer__cta-sub {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
}

.footer__cta-btns {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

/* Main body */
.footer__body {
  padding: 56px 0 40px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
}

/* Brand */
.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 16px;
}

.footer__logo .logo-icon {
  width: 32px;
  height: 32px;
}

.footer__logo span {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.04em;
}

.footer__brand-desc {
  font-size: 0.9rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 16px;
  max-width: 280px;
}

.footer__hours {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
}

/* Column titles */
.footer__col-title {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
}

/* Nav list */
.footer__nav ul,
.footer__services ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__nav a,
.footer__services a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__nav a:hover,
.footer__services a:hover {
  color: var(--gold-light);
}

/* Contact list */
.footer__contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
}

.footer__contact-list svg {
  flex-shrink: 0;
  margin-top: 2px;
  stroke: rgba(255, 255, 255, 0.4);
}

.footer__contact-list a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__contact-list a:hover {
  color: var(--gold-light);
}

/* Bottom bar */
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 0;
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer__bottom p {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.35);
}

.footer__bottom-seo {
  font-size: 0.75rem !important;
  color: rgba(255, 255, 255, 0.25) !important;
}

@media (max-width: 1199px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px 40px;
  }
  .footer__brand {
    grid-column: span 2;
  }
}

@media (max-width: 767px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .footer__brand {
    grid-column: span 1;
  }
  .footer__cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__cta-btns .btn {
    width: 100%;
    justify-content: center;
  }
  .footer__bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
</style>
