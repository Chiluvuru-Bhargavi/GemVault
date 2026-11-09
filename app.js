/**
 * GemVault — Vanilla ES6 Interactivity Engine
 * Zero external dependencies. GitHub Pages compatible.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Sticky Header Glassmorphic Blur on Scroll
  // --------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Interactive Phone Mockup — ShortsBlockerService Simulation
  // --------------------------------------------------------------------------
  const phoneScreen = document.getElementById('phoneScreen');
  const cardShort = document.getElementById('cardShort');
  const cardAllowed = document.getElementById('cardAllowed');
  const allowedBadge = document.getElementById('allowedBadge');
  const blockedCountEl = document.getElementById('mockupBlockedCount');
  const statusClock = document.getElementById('statusClock');
  const tabShortsBlocked = document.getElementById('tabShortsBlocked');

  let blockedCount = 0;
  let isIntercepting = false;

  // Real-time Status Bar Clock
  const updatePhoneClock = () => {
    if (statusClock) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      statusClock.textContent = `${hours}:${minutes}`;
    }
  };
  updatePhoneClock();
  setInterval(updatePhoneClock, 1000);

  // Trigger Short Interception
  const triggerShortsInterception = () => {
    if (isIntercepting || !phoneScreen) return;
    isIntercepting = true;

    // Increment blocked counter
    blockedCount++;
    if (blockedCountEl) {
      blockedCountEl.textContent = `Blocked: ${blockedCount}`;
      blockedCountEl.style.color = '#EB5757';
      blockedCountEl.style.borderColor = 'rgba(235, 87, 87, 0.4)';
    }

    // Flash Crimson Interception Overlay
    phoneScreen.classList.add('intercept-active');

    // Simulate GLOBAL_ACTION_BACK: Eject after 400ms
    setTimeout(() => {
      phoneScreen.classList.remove('intercept-active');
      if (blockedCountEl) {
        blockedCountEl.style.color = '#F7F8F8';
        blockedCountEl.style.borderColor = 'rgba(255, 255, 255, 0.08)';
      }
      isIntercepting = false;
    }, 450);
  };

  if (cardShort) {
    cardShort.addEventListener('click', triggerShortsInterception);
    cardShort.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerShortsInterception();
      }
    });
  }

  if (tabShortsBlocked) {
    tabShortsBlocked.addEventListener('click', triggerShortsInterception);
  }

  // Trigger Allowed Long-Form Video Click
  if (cardAllowed && allowedBadge) {
    cardAllowed.addEventListener('click', () => {
      allowedBadge.style.background = 'rgba(39, 166, 68, 0.3)';
      allowedBadge.style.boxShadow = '0 0 12px rgba(39, 166, 68, 0.5)';
      setTimeout(() => {
        allowedBadge.style.background = 'rgba(39, 166, 68, 0.12)';
        allowedBadge.style.boxShadow = 'none';
      }, 500);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Operational Modes Switcher (Standard vs. Strict Mode)
  // --------------------------------------------------------------------------
  const tabStandard = document.getElementById('tabStandard');
  const tabStrict = document.getElementById('tabStrict');
  const panelStandard = document.getElementById('panelStandard');
  const panelStrict = document.getElementById('panelStrict');

  const setMode = (mode) => {
    if (mode === 'standard') {
      tabStandard?.classList.add('active');
      tabStandard?.setAttribute('aria-selected', 'true');
      tabStrict?.classList.remove('active');
      tabStrict?.setAttribute('aria-selected', 'false');

      if (panelStandard) panelStandard.style.display = 'block';
      if (panelStrict) panelStrict.style.display = 'none';
    } else {
      tabStrict?.classList.add('active');
      tabStrict?.setAttribute('aria-selected', 'true');
      tabStandard?.classList.remove('active');
      tabStandard?.setAttribute('aria-selected', 'false');

      if (panelStandard) panelStandard.style.display = 'none';
      if (panelStrict) panelStrict.style.display = 'block';
    }
  };

  tabStandard?.addEventListener('click', () => setMode('standard'));
  tabStrict?.addEventListener('click', () => setMode('strict'));

  // --------------------------------------------------------------------------
  // 5. Monotonic Hardware Clock Live Ticker
  // --------------------------------------------------------------------------
  const monotonicTicker = document.getElementById('monotonicTicker');
  if (monotonicTicker) {
    const baseOffset = 148924820;
    const startTime = performance.now();

    const updateTicker = () => {
      const elapsed = performance.now() - startTime;
      const currentMs = Math.floor(baseOffset + elapsed);
      monotonicTicker.textContent = `${currentMs.toLocaleString('en-US')} ms`;
      requestAnimationFrame(updateTicker);
    };
    requestAnimationFrame(updateTicker);
  }

  // --------------------------------------------------------------------------
  // 6. Developer FAQ Accordion
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. One-Click Git Clone to Clipboard
  // --------------------------------------------------------------------------
  const gitClonePill = document.getElementById('gitClonePill');
  const cloneCmd = 'git clone https://github.com/username/gemvault.git';

  if (gitClonePill) {
    const copyToClipboard = () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cloneCmd).then(() => {
          gitClonePill.classList.add('copied');
          setTimeout(() => {
            gitClonePill.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          fallbackCopyText(cloneCmd);
        });
      } else {
        fallbackCopyText(cloneCmd);
      }
    };

    const fallbackCopyText = (text) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        gitClonePill.classList.add('copied');
        setTimeout(() => {
          gitClonePill.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.warn('Copy command failed:', err);
      }
      document.body.removeChild(textArea);
    };

    gitClonePill.addEventListener('click', copyToClipboard);
    gitClonePill.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyToClipboard();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Subtle Scroll Reveal via IntersectionObserver
  // --------------------------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const animatedElements = document.querySelectorAll('.bento-cell, .mode-card, .arch-card, .permission-table-card, .manifest-audit-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }

});
