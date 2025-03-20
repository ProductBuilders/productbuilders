// Google Analytics event tracking
export const analytics = {
  install: (app) => {
    // Skip analytics during SSR
    if (typeof window === 'undefined') return

    // Make trackEvent available to components
    app.provide('trackEvent', (category, action, label) => {
      if (window && window.gtag) {
        window.gtag('event', action, {
          'event_category': category,
          'event_label': label
        });
      }
    });

    // Track button clicks
    app.directive('track-click', {
      mounted(el, binding) {
        el.addEventListener('click', () => {
          if (window && window.gtag) {
            const value = binding.value || {};
            const category = value.category || 'Button';
            const action = value.action || 'Click';
            const label = value.label || el.innerText || 'Unknown Button';
            
            window.gtag('event', action, {
              'event_category': category,
              'event_label': label
            });
          }
        });
      }
    });
  }
}; 