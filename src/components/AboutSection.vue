<template>
  <section class="section section--cream about" aria-labelledby="about-title">
    <div class="container">
      <div class="about__layout">
        <!-- Left: image placeholder -->
        <div class="about__media" v-reveal="'left'">
          <!-- Replace src with /images/about-team.jpg -->
          <div class="about__img-wrap">
            <img
              :src="'/images/about-team.jpg'"
              alt="Команда тренеров конного клуба ASLAN"
              loading="lazy"
              class="about__img"
              onerror="this.parentElement.classList.add('no-img')"
            />
            <div class="about__img-placeholder" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="60" fill="#E8EDF6" />
                <path
                  d="M60 30C46.7 30 36 40.7 36 54s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"
                  fill="#C8D0E4"
                />
                <path
                  d="M20 100c0-22 18-38 40-38s40 16 40 38"
                  stroke="#C8D0E4"
                  stroke-width="4"
                  fill="none"
                />
              </svg>
              <span>Фото команды</span>
            </div>
          </div>

          <!-- Feature chips -->
          <div class="about__chips">
            <div class="about__chip">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="#C8962E"
                stroke-width="1.8"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M10 2l2.39 4.84L18 7.64l-4 3.9.94 5.5L10 14.27l-4.94 2.77.94-5.5-4-3.9 5.61-.8z"
                />
              </svg>
              <span>Опыт 5+ лет</span>
            </div>
            <div class="about__chip">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="#27A96B"
                stroke-width="1.8"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path d="M10 1l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
              </svg>
              <span>Сертифицированные тренеры</span>
            </div>
            <div class="about__chip about__chip--wide">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="#162B5B"
                stroke-width="1.8"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path d="M10 19s-8-4-8-10V4l8-3 8 3v5c0 6-8 10-8 10z" />
              </svg>
              <span>Безопасность для детей от 6 лет</span>
            </div>
          </div>
        </div>

        <!-- Right: text -->
        <div class="about__text" v-reveal="'right'">
          <span class="section__label">О клубе</span>
          <h2 class="section__title" id="about-title">
            Команда ASLAN — тренеры и инфраструктура
          </h2>
          <div class="divider-gold"></div>

          <p class="about__lead">
            Конный клуб ASLAN расположен у Чиланзарского ипподрома — одного из
            лучших площадок для верховой езды в Ташкенте. Мы работаем для тех,
            кто делает первые шаги в седле, и для тех, кто готовится к
            соревнованиям по конкуру.
          </p>

          <div class="about__features">
            <div
              v-for="(f, i) in features"
              :key="i"
              class="about__feature"
              v-reveal="{ dir: 'right', delay: i * 100 }"
            >
              <div class="about__feature-icon" aria-hidden="true">
                <div v-html="f.icon"></div>
              </div>
              <div>
                <h3 class="about__feature-title">{{ f.title }}</h3>
                <p class="about__feature-text">{{ f.text }}</p>
              </div>
            </div>
          </div>

          <div class="about__actions">
            <a
              :href="TELEGRAM_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
              @click="trackWhatsApp()"
            >
              Связаться с тренером
            </a>
            <a
              href="#prices"
              class="btn btn--outline-navy"
              @click.prevent="scrollTo('prices')"
            >
              Посмотреть цены
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAnalytics } from "@/composables/useAnalytics.js";

const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackWhatsApp } = useAnalytics();

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const features = [
  {
    title: "Профессиональные тренеры",
    text: "Наши инструкторы — участники соревнований по конкуру с многолетним опытом преподавания для детей и взрослых.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#C8962E" stroke-width="1.8" width="22" height="22">
             <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/>
           </svg>`,
  },
  {
    title: "Инфраструктура ипподрома",
    text: "Крытый и открытый манежи, конные трассы, трасса препятствий для конкура, современное снаряжение.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#162B5B" stroke-width="1.8" width="22" height="22">
             <rect x="3" y="8" width="18" height="14" rx="2"/>
             <path d="M7 8V5a5 5 0 0110 0v3"/>
           </svg>`,
  },
  {
    title: "Безопасность — приоритет",
    text: "Обязательный инструктаж, сертифицированные сёдла, шлемы для всех всадников, постоянное присутствие инструктора.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#27A96B" stroke-width="1.8" width="22" height="22">
             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
             <polyline points="9 12 11 14 15 10"/>
           </svg>`,
  },
];
</script>

<style scoped>
.about__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

/* Media side */
.about__media {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about__img-wrap {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4/3;
  background: var(--cream-dark);
}

.about__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about__img-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: var(--cream-dark);
}

.about__img-placeholder svg {
  width: 80px;
  height: 80px;
}
.about__img-placeholder span {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-style: italic;
}

/* When no-img class is added (failed load), show placeholder */
.about__img-wrap:not(.no-img) .about__img-placeholder {
  display: none;
}
.about__img-wrap.no-img .about__img {
  display: none;
}
.about__img-wrap.no-img .about__img-placeholder {
  display: flex;
}

/* Chips */
.about__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.about__chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  background: var(--white);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-mid);
  box-shadow: var(--shadow-sm);
}

.about__chip--wide {
  flex: 1 1 100%;
}

/* Text side */
.about__lead {
  font-size: 1.0625rem;
  color: var(--text-mid);
  line-height: 1.75;
  margin-bottom: 32px;
}

.about__features {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
}

.about__feature {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.about__feature-icon {
  width: 44px;
  height: 44px;
  background: var(--white);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.about__feature-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.about__feature-text {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.about__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

@media (max-width: 1023px) {
  .about__layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about__media {
    order: -1;
  }
}

@media (max-width: 767px) {
  .about__actions .btn {
    width: 100%;
    justify-content: center;
  }
  .about__chip--wide {
    flex: 1 1 auto;
  }
}
</style>
