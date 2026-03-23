<template>
  <section
    class="section section--navy gallery"
    aria-labelledby="gallery-title"
  >
    <div class="container">
      <div class="section__header section__header--center on-dark">
        <span class="section__label">{{ t.gallery.label }}</span>
        <h2 class="section__title" id="gallery-title">
          {{ t.gallery.title }}
        </h2>
        <p class="section__subtitle">
          {{ t.gallery.subtitle }}
        </p>
      </div>

      <!-- Filter tabs -->
      <div
        class="gallery__tabs"
        role="tablist"
        :aria-label="t.gallery.filterAria"
      >
        <button
          v-for="tab in galleryTabs"
          :key="tab.id"
          class="gallery__tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
          role="tab"
          :aria-selected="activeTab === tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Grid -->
      <div class="gallery__grid" role="list">
        <button
          v-for="(item, i) in filteredItems"
          :key="item.id"
          class="gallery__item"
          :class="`gallery__item--${item.size}`"
          @click="openLightbox(i)"
          :aria-label="`Открыть фото: ${item.alt}`"
          role="listitem"
        >
          <!-- Lazy-loaded image; replace src with real /images/ path -->
          <img
            :src="item.src"
            :alt="item.alt"
            loading="lazy"
            decoding="async"
            class="gallery__img"
            onerror="this.parentElement.classList.add('img-error')"
          />
          <div class="gallery__placeholder" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
              <rect
                width="48"
                height="48"
                rx="8"
                fill="rgba(255,255,255,0.05)"
              />
              <path
                d="M6 36l10-14 8 10 6-7 12 11"
                stroke="rgba(255,255,255,0.2)"
                stroke-width="2"
                fill="none"
              />
              <circle cx="16" cy="18" r="4" fill="rgba(255,255,255,0.15)" />
            </svg>
            <span>{{ item.label }}</span>
          </div>
          <div class="gallery__hover" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              width="24"
              height="24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </button>
      </div>

      <div class="gallery__cta">
        <a
          :href="TELEGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--primary btn--lg"
          @click="trackWhatsApp()"
        >
          {{ t.gallery.btnWa }}
        </a>
        <p class="gallery__cta-note">{{ t.gallery.btnWaSub }}</p>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div
        v-if="lightboxOpen"
        class="lightbox"
        @click.self="closeLightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="currentItem?.alt"
      >
        <button
          class="lightbox__close"
          @click="closeLightbox"
          :aria-label="t.gallery.closeLightbox"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            width="28"
            height="28"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <button
          class="lightbox__nav lightbox__nav--prev"
          @click="prevPhoto"
          :aria-label="t.gallery.prevPhoto"
          v-show="currentIndex > 0"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            width="28"
            height="28"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div class="lightbox__content">
          <img
            :src="currentItem?.src"
            :alt="currentItem?.alt"
            class="lightbox__img"
            loading="lazy"
            onerror="this.style.display = 'none'"
          />
          <div class="lightbox__no-img" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none" width="56" height="56">
              <rect
                width="64"
                height="64"
                rx="12"
                fill="rgba(255,255,255,0.05)"
              />
              <path
                d="M8 48l14-20 10 13 8-10 16 17"
                stroke="rgba(255,255,255,0.2)"
                stroke-width="2.5"
                fill="none"
              />
              <circle cx="22" cy="22" r="6" fill="rgba(255,255,255,0.12)" />
            </svg>
            <p>{{ currentItem?.alt }}</p>
          </div>
          <p v-if="currentItem?.alt" class="lightbox__caption">
            {{ currentItem.alt }}
          </p>
        </div>
        <button
          class="lightbox__nav lightbox__nav--next"
          @click="nextPhoto"
          :aria-label="t.gallery.nextPhoto"
          v-show="currentIndex < filteredItems.length - 1"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            width="28"
            height="28"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <span class="lightbox__counter"
          >{{ currentIndex + 1 }} / {{ filteredItems.length }}</span
        >
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackWhatsApp, trackGalleryClick } = useAnalytics();
const { t } = useI18n();

const galleryTabs = computed(() => t.value.gallery.tabs);

const activeTab = ref("all");
const lightboxOpen = ref(false);
const currentIndex = ref(0);

// Static gallery items - only src/category/size/id are static; label/alt come from i18n
const staticItems = [
  {
    id: 1,
    src: "/images/gallery/training-1.jpg",
    category: "training",
    size: "wide",
  },
  {
    id: 2,
    src: "/images/gallery/competition-1.jpg",
    category: "competition",
    size: "normal",
  },
  {
    id: 3,
    src: "/images/gallery/photo-1.jpg",
    category: "photo",
    size: "normal",
  },
  {
    id: 4,
    src: "/images/gallery/training-2.jpg",
    category: "training",
    size: "normal",
  },
  {
    id: 5,
    src: "/images/gallery/competition-2.jpg",
    category: "competition",
    size: "normal",
  },
  {
    id: 6,
    src: "/images/gallery/photo-2.jpg",
    category: "photo",
    size: "wide",
  },
  {
    id: 7,
    src: "/images/gallery/training-3.jpg",
    category: "training",
    size: "normal",
  },
  {
    id: 8,
    src: "/images/gallery/competition-3.jpg",
    category: "competition",
    size: "normal",
  },
  {
    id: 9,
    src: "/images/gallery/photo-3.jpg",
    category: "photo",
    size: "normal",
  },
  {
    id: 10,
    src: "/images/gallery/training-4.jpg",
    category: "training",
    size: "normal",
  },
  {
    id: 11,
    src: "/images/gallery/competition-4.jpg",
    category: "competition",
    size: "normal",
  },
  {
    id: 12,
    src: "/images/gallery/photo-4.jpg",
    category: "photo",
    size: "normal",
  },
];

const items = computed(() =>
  staticItems.map((item, i) => ({
    ...item,
    ...t.value.gallery.items[i],
  })),
);

const filteredItems = computed(() =>
  activeTab.value === "all"
    ? items.value
    : items.value.filter((i) => i.category === activeTab.value),
);

const currentItem = computed(
  () => filteredItems.value[currentIndex.value] ?? null,
);

const openLightbox = (i) => {
  currentIndex.value = i;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
  trackGalleryClick(filteredItems.value[i]?.id);
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = "";
};

const prevPhoto = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

const nextPhoto = () => {
  if (currentIndex.value < filteredItems.value.length - 1) currentIndex.value++;
};

const onKeydown = (e) => {
  if (!lightboxOpen.value) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevPhoto();
  if (e.key === "ArrowRight") nextPhoto();
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.gallery__tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.gallery__tab {
  padding: 9px 22px;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.gallery__tab:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.1);
}

.gallery__tab.active {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--white);
}

/* Grid */
.gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 220px;
  gap: 12px;
  margin-bottom: 48px;
}

.gallery__item {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  padding: 0;
  outline: none;
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.gallery__item:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}
.gallery__item:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
}

.gallery__item--wide {
  grid-column: span 2;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity var(--transition);
}

/* Show placeholder when image not loaded (either before load or after error) */
.gallery__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  pointer-events: none;
}

/* When image loads successfully, hide placeholder */
.gallery__item:not(.img-error) .gallery__img {
  position: relative;
  z-index: 1;
}
.gallery__item:not(.img-error) .gallery__placeholder {
  display: none;
}

/* On error show placeholder */
.gallery__item.img-error .gallery__img {
  display: none;
}
.gallery__item.img-error .gallery__placeholder {
  display: flex;
}

.gallery__placeholder span {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.04em;
}

.gallery__hover {
  position: absolute;
  inset: 0;
  background: rgba(13, 27, 62, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-fast);
  z-index: 2;
}

.gallery__item:hover .gallery__hover {
  opacity: 1;
}

/* CTA */
.gallery__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.gallery__cta-note {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.45);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.93);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.22);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.22);
}
.lightbox__nav--prev {
  left: 20px;
}
.lightbox__nav--next {
  right: 20px;
}

.lightbox__content {
  max-width: 900px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.lightbox__img {
  max-width: 100%;
  max-height: 75vh;
  border-radius: var(--radius-md);
  object-fit: contain;
}

.lightbox__no-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: var(--radius-lg);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  min-width: 280px;
  min-height: 200px;
  justify-content: center;
}

.lightbox__no-img p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}

.lightbox__caption {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
}

.lightbox__counter {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 12px;
  border-radius: var(--radius-full);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1023px) {
  .gallery__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 160px;
  }
  .gallery__item--wide {
    grid-column: span 2;
  }
  .lightbox__nav {
    width: 40px;
    height: 40px;
  }
  .lightbox__nav--prev {
    left: 8px;
  }
  .lightbox__nav--next {
    right: 8px;
  }
}
</style>
