<template>
  <header
    class="site-header"
    :class="{
      'site-header--scrolled': scrolled,
      'site-header--open': menuOpen,
    }"
  >
    <div class="container header__inner">
      <!-- Logo -->
      <a
        href="#home"
        class="header__logo"
        @click.prevent="scrollTo('home')"
        :aria-label="t.header.logoAria"
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
        <span class="logo-text">ASLAN</span>
        <span class="logo-sub">{{ t.header.logoSub }}</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="header__nav" aria-label="navigation">
        <ul class="nav-list">
          <li>
            <a href="#services" @click.prevent="scrollTo('services')">{{
              t.header.nav.services
            }}</a>
          </li>
          <li>
            <a href="#about" @click.prevent="scrollTo('about')">{{
              t.header.nav.about
            }}</a>
          </li>
          <li>
            <a href="#prices" @click.prevent="scrollTo('prices')">{{
              t.header.nav.prices
            }}</a>
          </li>
          <li>
            <a href="#gallery" @click.prevent="scrollTo('gallery')">{{
              t.header.nav.gallery
            }}</a>
          </li>
          <li>
            <a href="#contacts" @click.prevent="scrollTo('contacts')">{{
              t.header.nav.contacts
            }}</a>
          </li>
        </ul>
      </nav>

      <!-- Language switcher -->
      <div class="lang-switcher" v-click-outside="closeLangMenu">
        <button
          class="lang-toggle"
          @click="langOpen = !langOpen"
          :aria-expanded="langOpen"
          aria-haspopup="listbox"
        >
          {{ lang.toUpperCase() }}
          <svg
            viewBox="0 0 10 6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            width="10"
            height="6"
            aria-hidden="true"
          >
            <polyline points="1 1 5 5 9 1" />
          </svg>
        </button>
        <Transition name="lang-drop">
          <div v-if="langOpen" class="lang-dropdown" role="listbox">
            <button
              v-for="l in langs"
              :key="l.code"
              class="lang-option"
              :class="{ 'lang-option--active': lang === l.code }"
              role="option"
              :aria-selected="lang === l.code"
              @click="pickLang(l.code)"
            >
              {{ l.label }}
            </button>
          </div>
        </Transition>
      </div>

      <!-- Desktop CTAs -->
      <div class="header__cta">
        <a
          :href="`tel:${PHONE1_RAW}`"
          class="header__phone"
          @click="trackCall(PHONE1_RAW)"
          :aria-label="t.header.callAria"
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
          class="btn btn--telegram btn--sm"
          @click="trackWhatsApp()"
          :aria-label="t.header.waAria"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            />
          </svg>
          Telegram
        </a>
        <a
          href="#booking"
          class="btn btn--primary btn--sm"
          @click.prevent="scrollTo('booking')"
        >
          {{ t.header.book }}
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="hamburger"
        :class="{ active: menuOpen }"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        :aria-label="t.header.menuAria"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="menu-slide">
      <div v-if="menuOpen" class="mobile-menu" @click="menuOpen = false">
        <nav :aria-label="t.header.mobileNavAria">
          <ul>
            <li>
              <a
                href="#services"
                @click.prevent="handleMobileNav('services')"
                >{{ t.header.nav.services }}</a
              >
            </li>
            <li>
              <a href="#about" @click.prevent="handleMobileNav('about')">{{
                t.header.nav.about
              }}</a>
            </li>
            <li>
              <a href="#prices" @click.prevent="handleMobileNav('prices')">{{
                t.header.nav.prices
              }}</a>
            </li>
            <li>
              <a href="#gallery" @click.prevent="handleMobileNav('gallery')">{{
                t.header.nav.gallery
              }}</a>
            </li>
            <li>
              <a href="#faq" @click.prevent="handleMobileNav('faq')">{{
                t.header.nav.faq
              }}</a>
            </li>
            <li>
              <a
                href="#contacts"
                @click.prevent="handleMobileNav('contacts')"
                >{{ t.header.nav.contacts }}</a
              >
            </li>
          </ul>
        </nav>

        <!-- Mobile lang switcher -->
        <div class="mobile-lang-switcher" @click.stop>
          <button
            v-for="l in langs"
            :key="l.code"
            class="lang-btn"
            :class="{ 'lang-btn--active': lang === l.code }"
            @click="setLang(l.code)"
          >
            {{ l.label }}
          </button>
        </div>

        <div class="mobile-menu__cta">
          <a
            :href="`tel:${PHONE1_RAW}`"
            class="btn btn--primary btn--full"
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
            {{ t.header.callBtn }}: {{ PHONE1_DISPLAY }}
          </a>
          <a
            :href="TELEGRAM_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--telegram btn--full"
            @click="trackWhatsApp()"
          >
            Telegram
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const PHONE1_RAW = "+998882586565";
const PHONE1_DISPLAY = "+998 88 258-65-65";
const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackCall, trackWhatsApp } = useAnalytics();
const { lang, setLang, t } = useI18n();

const langs = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
];

const scrolled = ref(false);
const menuOpen = ref(false);
const langOpen = ref(false);

const pickLang = (code) => {
  setLang(code);
  langOpen.value = false;
};

const closeLangMenu = () => {
  langOpen.value = false;
};

// v-click-outside directive
const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = (e) => {
      if (!el.contains(e.target)) binding.value();
    };
    document.addEventListener("click", el._clickOutside);
  },
  unmounted(el) {
    document.removeEventListener("click", el._clickOutside);
  },
};

const onScroll = () => {
  scrolled.value = window.scrollY > 60;
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleMobileNav = (id) => {
  menuOpen.value = false;
  setTimeout(() => scrollTo(id), 50);
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition:
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.site-header--scrolled {
  background: var(--navy);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
}

.site-header--open {
  background: var(--navy);
}

.header__inner {
  display: flex;
  align-items: center;
  height: var(--header-height);
  gap: 15px;
}

/* Logo */
.header__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  width: 36px;
  height: 36px;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.04em;
}

.logo-sub {
  font-size: 0.6875rem;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 1px;
  align-self: flex-end;
  margin-bottom: 2px;
}

/* Nav */
.header__nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0;
}

.nav-list li a {
  padding: 8px 14px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-sm);
  transition:
    color var(--transition-fast),
    background var(--transition-fast);
}

.nav-list li a:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.08);
}

/* Desktop CTA */
.header__cta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.header__phone {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--white);
  white-space: nowrap;
  transition: color var(--transition-fast);
}

.header__phone:hover {
  color: var(--gold-light);
}

.header__phone svg {
  width: 15px;
  height: 15px;
  opacity: 0.8;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-left: auto;
  border-radius: var(--radius-sm);
  background: transparent;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.25s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  background: var(--navy-mid);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 0 24px;
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
}

.mobile-menu ul li a {
  display: block;
  padding: 13px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
}

.mobile-menu ul li a:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--gold-light);
}

.mobile-menu__cta {
  padding: 16px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Transition */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.menu-slide-enter-to,
.menu-slide-leave-from {
  max-height: 600px;
  opacity: 1;
}

/* Responsive */
@media (max-width: 1023px) {
  .header__nav {
    display: none;
  }
  .header__cta {
    display: none;
  }
  .lang-switcher {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .mobile-menu {
    display: none;
  }
}

/* Language switcher dropdown */
.lang-switcher {
  position: relative;
  flex-shrink: 0;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast);
  line-height: 1;
}

.lang-toggle:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: var(--navy);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  min-width: 72px;
  z-index: 200;
}

.lang-option {
  display: block;
  width: 100%;
  padding: 9px 16px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: rgba(255, 255, 255, 0.65);
  background: transparent;
  border: none;
  cursor: pointer;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
}

.lang-option:hover {
  background: rgba(255, 255, 255, 0.07);
  color: var(--white);
}

.lang-option--active {
  color: var(--gold-light);
  background: rgba(200, 150, 46, 0.12);
}

/* Dropdown animation */
.lang-drop-enter-active,
.lang-drop-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.lang-drop-enter-from,
.lang-drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.mobile-lang-switcher {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 4px;
}

.mobile-lang-switcher .lang-btn {
  padding: 5px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: rgba(255, 255, 255, 0.55);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s;
}

.mobile-lang-switcher .lang-btn--active {
  color: var(--gold-light, #e6b84a);
  background: rgba(200, 150, 46, 0.18);
  border-color: rgba(200, 150, 46, 0.45);
}
</style>
