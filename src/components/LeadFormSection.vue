<template>
  <section
    class="section section--navy lead-form"
    aria-labelledby="booking-title"
  >
    <div class="container">
      <div class="lead-form__layout">
        <!-- Left: why form -->
        <div class="lead-form__left" v-reveal="'left'">
          <span class="section__label on-dark">{{ t.form.label }}</span>
          <h2
            class="section__title on-dark"
            id="booking-title"
            style="color: var(--white)"
          >
            {{ t.form.title }}
          </h2>
          <div class="divider-gold"></div>
          <p class="lead-form__desc">
            {{ t.form.desc1 }}<strong>{{ t.form.desc1strong }}</strong
            >{{ t.form.desc2 }}
          </p>

          <div class="lead-form__phones">
            <p>{{ t.form.orContact }}</p>
            <a
              :href="`tel:${PHONE1_RAW}`"
              class="lead-form__phone-link"
              @click="trackCall(PHONE1_RAW)"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M18.33 14.1v2.5a1.67 1.67 0 01-1.82 1.67A16.49 16.49 0 017.2 14.9a16.22 16.22 0 01-2.56-2.56A16.49 16.49 0 011.73 3.5 1.67 1.67 0 013.4 1.67H5.9A1.67 1.67 0 017.56 3.1c.11.8.3 1.59.58 2.34a1.67 1.67 0 01-.38 1.76l-1.06 1.06a13.33 13.33 0 005.29 5.29l1.06-1.06a1.67 1.67 0 011.76-.38c.75.28 1.54.47 2.34.58a1.67 1.67 0 011.44 1.69z"
                />
              </svg>
              {{ PHONE1_DISPLAY }}
            </a>
            <a
              :href="`tel:${PHONE2_RAW}`"
              class="lead-form__phone-link"
              @click="trackCall(PHONE2_RAW)"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M18.33 14.1v2.5a1.67 1.67 0 01-1.82 1.67A16.49 16.49 0 017.2 14.9a16.22 16.22 0 01-2.56-2.56A16.49 16.49 0 011.73 3.5 1.67 1.67 0 013.4 1.67H5.9A1.67 1.67 0 017.56 3.1c.11.8.3 1.59.58 2.34a1.67 1.67 0 01-.38 1.76l-1.06 1.06a13.33 13.33 0 005.29 5.29l1.06-1.06a1.67 1.67 0 011.76-.38c.75.28 1.54.47 2.34.58a1.67 1.67 0 011.44 1.69z"
                />
              </svg>
              {{ PHONE2_DISPLAY }}
            </a>
            <a
              :href="TELEGRAM_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="lead-form__phone-link lead-form__phone-link--tg"
              @click="trackWhatsApp()"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M9.95 0A9.95 9.95 0 0 0 0 9.95a9.95 9.95 0 0 0 9.95 9.95 9.95 9.95 0 0 0 9.95-9.95A9.95 9.95 0 0 0 9.95 0a9.95 9.95 0 0 0-.046 0zm4.127 6.02c-.083-.002.267.02.387.116a.42.42 0 0 1 .142.27c.013.077.03.254.017.393-.15 1.581-.8 5.418-1.133 7.189-.14.75-.415 1-.682 1.025-.58.054-1.02-.383-1.583-.751-.88-.577-1.378-.937-2.231-1.5-.987-.65-.348-1.008.215-1.592.147-.153 2.706-2.481 2.756-2.692.006-.027.012-.125-.047-.177-.058-.052-.144-.034-.207-.02-.088.02-1.494.95-4.218 2.787-.4.276-.76.408-1.085.4-.357-.007-1.042-.2-1.554-.367-.626-.204-1.124-.311-1.08-.657.022-.18.27-.364.744-.552 2.915-1.27 4.859-2.107 5.831-2.512 2.778-1.155 3.356-1.356 3.73-1.362z"
                />
              </svg>
              Telegram
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <div class="lead-form__right" v-reveal="{ dir: 'right', delay: 120 }">
          <!-- Success state -->
          <Transition name="fade">
            <div v-if="submitted" class="form-success" role="status">
              <div class="form-success__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                  <circle cx="24" cy="24" r="22" fill="rgba(39,169,107,0.15)" />
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    stroke="#27A96B"
                    stroke-width="2"
                  />
                  <polyline
                    points="14 24 21 31 34 17"
                    stroke="#27A96B"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3>{{ t.form.successTitle }}</h3>
              <p>
                {{ t.form.successText }}
              </p>
              <a
                :href="`tel:${PHONE1_RAW}`"
                class="btn btn--primary btn--lg btn--full"
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
                {{ PHONE1_DISPLAY }}
              </a>
            </div>
          </Transition>

          <!-- Form -->
          <form
            v-if="!submitted"
            class="booking-form"
            @submit.prevent="submitForm"
            novalidate
            :aria-label="t.form.ariaLabel"
          >
            <div class="form-group">
              <input
                id="f-name"
                v-model.trim="form.full_name"
                type="text"
                class="form-input"
                :class="{ 'is-error': errors.full_name }"
                :placeholder="t.form.placeholderName"
                autocomplete="name"
                required
                aria-required="true"
                :aria-describedby="errors.full_name ? 'err-name' : undefined"
              />
              <span
                v-if="errors.full_name"
                role="alert"
                id="err-name"
                class="form-error"
                >{{ errors.full_name }}</span
              >
            </div>

            <div class="form-group">
              <input
                id="f-telegram"
                v-model.trim="form.telegram"
                type="text"
                class="form-input"
                placeholder="@telegram user"
                autocomplete="off"
              />
            </div>

            <div class="form-group">
              <input
                id="f-phone"
                v-model.trim="form.phone"
                type="tel"
                class="form-input"
                :class="{ 'is-error': errors.phone }"
                :placeholder="t.form.placeholderPhone"
                autocomplete="tel"
                required
                aria-required="true"
                :aria-describedby="errors.phone ? 'err-phone' : undefined"
              />
              <span
                v-if="errors.phone"
                role="alert"
                id="err-phone"
                class="form-error"
                >{{ errors.phone }}</span
              >
            </div>

            <div class="form-group">
              <select
                id="f-service"
                v-model="form.service"
                class="form-select"
                :class="{ 'is-error': errors.service }"
                required
                aria-required="true"
                :aria-describedby="errors.service ? 'err-service' : undefined"
              >
                <option value="" disabled>
                  {{ t.form.selectPlaceholder }}
                </option>
                <option
                  v-for="(opt, i) in t.form.serviceOptions"
                  :key="i"
                  :value="opt"
                >
                  {{ opt }}
                </option>
              </select>
              <span
                v-if="errors.service"
                role="alert"
                id="err-service"
                class="form-error"
                >{{ errors.service }}</span
              >
            </div>

            <button
              type="submit"
              class="btn btn--primary btn--full btn--lg btn--submit"
              :disabled="submitting"
            >
              <span v-if="!submitting">{{ t.form.btnSubmit }}</span>
              <span v-else>{{ t.form.btnSubmitting }}</span>
            </button>

            <p class="form-consent-note">
              {{ t.form.consentNote }}
              <a href="#" @click.prevent>{{ t.form.consentLink }}</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useAnalytics } from "@/composables/useAnalytics.js";
import { useI18n } from "@/composables/useI18n.js";

const PHONE1_RAW = "+998882586565";
const PHONE1_DISPLAY = "+998 88 258-65-65";
const PHONE2_RAW = "+998959090875";
const PHONE2_DISPLAY = "+998 95 909-08-75";
const TELEGRAM_URL = "https://t.me/+998882586565";

const { trackCall, trackWhatsApp, trackFormSubmit } = useAnalytics();
const { t } = useI18n();

const submitted = ref(false);
const submitting = ref(false);

const form = reactive({
  full_name: "",
  telegram: "",
  phone: "",
  service: "",
});

const errors = reactive({
  full_name: "",
  phone: "",
  service: "",
});

// Phone validation - international format
const PHONE_RE = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,14}$/;

const validate = () => {
  let valid = true;
  errors.full_name = "";
  errors.phone = "";
  errors.service = "";

  if (!form.full_name || form.full_name.length < 2) {
    errors.full_name = t.value.form.errName;
    valid = false;
  }

  if (!form.phone || !PHONE_RE.test(form.phone.replace(/\s/g, ""))) {
    errors.phone = t.value.form.errPhone;
    valid = false;
  }

  if (!form.service) {
    errors.service = t.value.form.errService;
    valid = false;
  }

  return valid;
};

const submitForm = async () => {
  if (!validate()) return;

  submitting.value = true;

  // Simulate API call; replace with real endpoint (e.g., Formspree, your backend)
  await new Promise((r) => setTimeout(r, 800));
  // Заменить на:
  // const res = await fetch('https://formspree.io/f/xpwzgkrq', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     name: form.full_name,
  //     phone: form.phone,
  //     service: form.service,
  //     date: form.preferred_date,
  //     message: form.message
  //   })
  // })
  // if (!res.ok) throw new Error('Ошибка отправки')

  trackFormSubmit(form.service);
  submitted.value = true;
  submitting.value = false;
};
</script>

<style scoped>
.lead-form__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

/* Left column */
.lead-form__left {
  padding-top: 8px;
}

.lead-form__desc {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.72;
  margin-bottom: 32px;
}

.lead-form__desc strong {
  color: var(--white);
}

.lead-form__phones {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lead-form__phones > p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4px;
}

.lead-form__phone-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--gold-light);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.lead-form__phone-link:hover {
  color: var(--white);
}

.lead-form__phone-link--tg {
  color: #62c8f5;
}
.lead-form__phone-link--tg:hover {
  color: #fff;
}

/* Right column - form box */
.lead-form__right {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-lg);
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.btn--submit {
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.9375rem;
}

.form-consent-note {
  text-align: center;
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-top: 2px;
}

.form-consent-note a {
  color: var(--navy);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* proweb-style inputs - lighter bg, larger border-radius */
.booking-form :deep(.form-input),
.booking-form :deep(.form-select) {
  background: #f0f2f5;
  border-color: transparent;
  border-radius: 10px;
  padding: 15px 16px;
  font-size: 0.9375rem;
  color: var(--text-dark);
}

.booking-form :deep(.form-input::placeholder),
.booking-form :deep(.form-select) option:first-child {
  color: #a0a8b8;
}

.booking-form :deep(.form-input:focus),
.booking-form :deep(.form-select:focus) {
  background: #fff;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(200, 150, 46, 0.15);
}

/* Success state */
.form-success {
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.form-success__icon {
  margin-bottom: 4px;
}

.form-success h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.form-success p {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.65;
  max-width: 360px;
}

/* transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1023px) {
  .lead-form__layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 767px) {
  .lead-form__right {
    padding: 24px 20px;
    border-radius: var(--radius-lg);
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
