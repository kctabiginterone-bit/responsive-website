// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const learnBtn = document.getElementById('learn-btn');
  const extra = document.getElementById('extra');
  const changeBtn = document.getElementById('change-btn');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if (mobileMenu.hidden) {
        mobileMenu.hidden = false;
      } else {
        mobileMenu.hidden = true;
      }
    });
  }

  // Show/hide extra content (feature 1)
  if (learnBtn && extra) {
    learnBtn.addEventListener('click', function () {
      if (extra.hidden) {
        extra.hidden = false;
        learnBtn.textContent = 'Hide';
      } else {
        extra.hidden = true;
        learnBtn.textContent = 'Learn More';
      }
    });
  }

  // Change some text (feature 2)
  if (changeBtn) {
    changeBtn.addEventListener('click', function () {
      const heading = document.querySelector('.hero h1');
      if (heading) {
        heading.textContent = heading.textContent.includes('Responsive') ? 'Interactive Responsive Site' : 'Responsive One-Page Website';
      }
    });
  }

  // Card toggles (extra small interactions)
  document.querySelectorAll('.card-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const extra = this.parentElement.querySelector('.card-extra');
      if (!extra) return;
      if (extra.hidden) {
        extra.hidden = false; this.textContent = 'Less';
      } else {
        extra.hidden = true; this.textContent = 'More';
      }
    });
  });

  // Dynamically set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
