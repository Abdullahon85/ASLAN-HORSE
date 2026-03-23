<template>
  <section class="section section--white" aria-labelledby="reviews-title">
    <div class="container">
      <div class="section__header section__header--center" v-reveal="'fade'">
        <span class="section__label">Отзывы клиентов</span>
        <h2 class="section__title" id="reviews-title">
          Что говорят наши ученики
        </h2>
        <p class="section__subtitle">
          Реальные истории семей, спортсменов и фотографов, которые уже
          занимаются в ASLAN.
        </p>
      </div>

      <div class="reviews__grid">
        <blockquote
          v-for="(rev, i) in reviews"
          :key="i"
          class="review-card"
          v-reveal="{ dir: i % 2 === 0 ? 'left' : 'right', delay: i * 60 }"
        >
          <div class="review-card__top">
            <div class="stars" aria-label="5 звёзд">
              <svg
                v-for="s in 5"
                :key="s"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  d="M8 1l1.85 3.75 4.15.6-3 2.93.7 4.12L8 10.35l-3.7 1.95.7-4.12-3-2.93 4.15-.6z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <time class="review-card__date">{{ rev.date }}</time>
          </div>
          <p class="review-card__text">"{{ rev.text }}"</p>
          <footer class="review-card__footer">
            <div
              class="review-card__avatar"
              :style="{ background: rev.avatarBg }"
              aria-hidden="true"
            >
              {{ rev.name[0] }}
            </div>
            <div>
              <cite class="review-card__name">{{ rev.name }}</cite>
              <span class="review-card__role">{{ rev.role }}</span>
            </div>
          </footer>
        </blockquote>
      </div>

      <!-- Social proof numbers -->
      <div class="reviews__stats">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="stat-item"
          v-reveal="{ delay: i * 100 }"
        >
          <span class="stat-item__number">{{ stat.number }}</span>
          <span class="stat-item__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    text: "Записали дочку на пробный урок — она в восторге! Тренер терпеливый, объясняет понятно. Записались сразу на месяц. Рекомендую всем семьям с детьми в Чиланзаре.",
    name: "Дилноза М.",
    role: "Мама ученицы, 8 лет",
    date: "Февраль 2026",
    avatarBg: "#4A90D9",
  },
  {
    text: "Заказывали фотосессию с лошадьми для годовщины свадьбы. Всё прошло отлично — лошади спокойные, место красивое. Фото получились невероятные. Спасибо команде ASLAN!",
    name: "Камила и Акбар",
    role: "Фотосессия на годовщину",
    date: "Январь 2026",
    avatarBg: "#E4AE4A",
  },
  {
    text: "Тренируюсь по конкуру уже 4 месяца. Изначально был на нулевом уровне, сейчас готовлюсь к первым соревнованиям. Тренер профессиональный, видно, что любит своё дело.",
    name: "Тимур Р.",
    role: "Спортсмен, конкур",
    date: "Декабрь 2025",
    avatarBg: "#27A96B",
  },
  {
    text: "Отличное место для детей! Безопасно, лошади добрые, персонал внимательный. Сын ждёт каждой субботы как праздника.",
    name: "Шахло Х.",
    role: "Мама ученика, 10 лет",
    date: "Ноябрь 2025",
    avatarBg: "#C8962E",
  },
];

const stats = [
  { number: "500+", label: "учеников прошли обучение" },
  { number: "5+", label: "лет клуб работает в Ташкенте" },
  { number: "4.9★", label: "средняя оценка клиентов" },
  { number: "30+", label: "фотосессий проведено" },
];
</script>

<style scoped>
.reviews__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.review-card {
  background: var(--cream);
  border-radius: var(--radius-lg);
  padding: 28px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid transparent;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}

.review-card:hover {
  border-color: var(--gold-pale);
  box-shadow: var(--shadow-md);
}

.review-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.review-card__date {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.review-card__text {
  font-size: 0.9375rem;
  color: var(--text-mid);
  line-height: 1.72;
  flex: 1;
  font-style: normal;
}

.review-card__footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.review-card__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.0625rem;
  color: var(--white);
  flex-shrink: 0;
}

.review-card__name {
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--text-dark);
}

.review-card__role {
  display: block;
  font-size: 0.8125rem;
  color: var(--text-muted);
  margin-top: 1px;
}

/* Stats band */
.reviews__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: var(--navy);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-item:last-child {
  border-right: none;
}

.stat-item__number {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--gold-light);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-item__label {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.4;
}

@media (max-width: 1023px) {
  .reviews__stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat-item:nth-child(2) {
    border-right: none;
  }
  .stat-item:nth-child(3),
  .stat-item:nth-child(4) {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
  .stat-item:nth-child(4) {
    border-right: none;
  }
}

@media (max-width: 767px) {
  .reviews__grid {
    grid-template-columns: 1fr;
  }
  .reviews__stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
