/**
 * GA4 + Meta Pixel analytics composable
 * Replace G-XXXXXXXXXX and your Pixel ID in index.html
 */
export function useAnalytics() {
  const trackEvent = (name, params = {}) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
    // Meta Pixel custom events
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("trackCustom", name, params);
    }
  };

  const trackCall = (phone) => {
    trackEvent("click_to_call", {
      event_category: "Contact",
      event_label: phone,
      phone_number: phone,
    });
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Contact");
    }
  };

  const trackWhatsApp = () => {
    trackEvent("telegram_click", {
      event_category: "Contact",
      event_label: "Telegram",
    });
  };

  const trackFormSubmit = (service) => {
    trackEvent("form_submit", {
      event_category: "Lead",
      event_label: service,
      value: 1,
    });
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: service });
    }
  };

  const trackGalleryClick = (index) => {
    trackEvent("gallery_click", {
      event_category: "Engagement",
      event_label: `photo_${index}`,
    });
  };

  const trackVideoPlay = (title) => {
    trackEvent("video_play", {
      event_category: "Engagement",
      event_label: title,
    });
  };

  const trackCTAClick = (label, location) => {
    trackEvent("cta_click", {
      event_category: "CTA",
      event_label: label,
      cta_location: location,
    });
  };

  return {
    trackEvent,
    trackCall,
    trackWhatsApp,
    trackFormSubmit,
    trackGalleryClick,
    trackVideoPlay,
    trackCTAClick,
  };
}
