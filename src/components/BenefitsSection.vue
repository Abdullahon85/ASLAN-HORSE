<template>
  <section class="section section--cream" aria-labelledby="benefits-title">
    <div class="container">
      <div class="section__header section__header--center" v-reveal="'fade'">
        <span class="section__label">Почему выбирают нас</span>
        <h2 class="section__title" id="benefits-title">
          4 причины заниматься в ASLAN
        </h2>
        <p class="section__subtitle">
          Профессиональный конный клуб у ипподрома — безопасно, удобно,
          результативно.
        </p>
      </div>

      <div class="benefits__grid">
        <div
          v-for="(item, i) in benefits"
          :key="i"
          class="benefit-card"
          v-reveal="{ delay: i * 90 }"
        >
          <div
            class="benefit-card__icon"
            :style="{ background: item.iconBg }"
            aria-hidden="true"
          >
            <component
              :is="'div'"
              v-html="item.icon"
              class="benefit-card__svg"
            ></component>
          </div>
          <h3 class="benefit-card__title">{{ item.title }}</h3>
          <p class="benefit-card__text">{{ item.text }}</p>
        </div>
      </div>

      <!-- Bottom CTA stripe -->
      <div class="benefits__cta">
        <p>Готовы попробовать? Первый урок — без обязательств.</p>
        <a
          href="#booking"
          class="btn btn--primary"
          @click.prevent="scrollTo('booking')"
        >
          Записаться на пробный урок
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: "Опытные тренеры",
    text: "Подготовка от чемпионов — индивидуальный план, работа над посадкой и техникой управления.",
    iconBg: "rgba(200,150,46,0.1)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#C8962E" stroke-width="1.8">
             <circle cx="12" cy="8" r="4"/>
             <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/>
             <path d="M17 14l2 2 4-4" stroke="#25A96B" stroke-width="2"/>
           </svg>`,
  },
  {
    title: "Удобное расположение",
    text: "Чиланзар, рядом с ипподромом — парковка у клуба, удобный подъезд из любой части города.",
    iconBg: "rgba(30,58,115,0.08)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#162B5B" stroke-width="1.8">
             <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"/>
             <circle cx="12" cy="10" r="3"/>
           </svg>`,
  },
  {
    title: "Безопасность",
    text: "Сертифицированное снаряжение, инструктаж для новичков, детское оборудование и постоянный присмотр.",
    iconBg: "rgba(37,169,107,0.1)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#27A96B" stroke-width="1.8">
             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
             <polyline points="9 12 11 14 15 10"/>
           </svg>`,
  },
  {
    title: "Фотосессии",
    text: "Организуем профессиональные фото и видео с лошадьми для любого события — результат уже на следующий день.",
    iconBg: "rgba(200,150,46,0.1)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#C8962E" stroke-width="1.8">
             <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
             <circle cx="12" cy="13" r="4"/>
           </svg>`,
  },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
.benefits__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}

.benefit-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow var(--transition),
    transform var(--transition);
}

.benefit-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.benefit-card__icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.benefit-card__svg :deep(svg) {
  width: 28px;
  height: 28px;
}

.benefit-card__title {
  font-family: var(--font-heading);
  font-size: 1.1875rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.benefit-card__text {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.65;
}

/* CTA stripe */
.benefits__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: var(--navy);
  border-radius: var(--radius-lg);
  padding: 28px 40px;
}

.benefits__cta p {
  font-size: 1.0625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.88);
}

@media (max-width: 1023px) {
  .benefits__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .benefits__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .benefits__cta {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
  .benefits__cta .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
