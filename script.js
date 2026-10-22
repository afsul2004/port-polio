/**
 * Afsuldeen.j — Python Full-Stack Developer Portfolio
 * Interactive Scripting (Navigation, Scroll Tracking, Architecture Drawers, Form Handling)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Top Scroll Progress Bar
  const scrollProgressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      scrollProgressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Active Navigation Item Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  function updateActiveNavLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // 4. Collapsible Architecture Panels
  const archButtons = document.querySelectorAll('.arch-toggle-btn');
  archButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      if (panel) {
        const isOpen = panel.classList.toggle('open');
        const span = button.querySelector('span');
        if (span) {
          if (isOpen) {
            span.textContent = 'Hide Architecture';
            button.style.borderColor = 'var(--accent-cyan)';
          } else {
            span.textContent = targetId === 'arch-ecom' ? 'Architecture & Docs' : 'Architecture & Rules';
            button.style.borderColor = '';
          }
        }
      }
    });
  });

  // 5. Toast Notification Utility
  const toast = document.getElementById('toast');
  let toastTimeout;

  function showToast(message, duration = 3000) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // 6. Copy-to-Clipboard Buttons
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const textToCopy = button.getAttribute('data-copy');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => showToast(`Copied ${textToCopy} to clipboard!`))
          .catch(() => fallbackCopy(textToCopy));
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${text} to clipboard!`);
    } catch (err) {
      showToast('Could not copy automatically. Email: ' + text);
    }
    document.body.removeChild(tempInput);
  }

  // 7. Interactive Functional Contact Form
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Clear error on input
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          const errEl = document.getElementById(input.id.replace('sender', '').toLowerCase() + 'Error') ||
                        document.getElementById(input.id === 'senderName' ? 'nameError' :
                                               input.id === 'senderEmail' ? 'emailError' :
                                               input.id === 'senderSubject' ? 'subjectError' : 'messageError');
          if (errEl) errEl.textContent = '';
        });
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please provide your name.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please provide your email address.';
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please specify a subject.';
        isValid = false;
      } else {
        subjectError.textContent = '';
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please write a brief message.';
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message should be at least 10 characters.';
        isValid = false;
      } else {
        messageError.textContent = '';
      }

      if (!isValid) return;

      const name = encodeURIComponent(nameInput.value.trim());
      const email = encodeURIComponent(emailInput.value.trim());
      const subject = encodeURIComponent(subjectInput.value.trim());
      const body = encodeURIComponent(
        `Hello Afsuldeen,\n\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()}\nContact Email: ${emailInput.value.trim()}`
      );

      const mailtoUrl = `mailto:afsal8133@gmail.com?subject=${subject}&body=${body}`;

      // Show success feedback
      formStatus.style.display = 'block';
      formStatus.className = 'form-status success';
      formStatus.innerHTML = `
        <strong>Thank you, ${nameInput.value.trim()}!</strong><br>
        Opening your default mail client to deliver your message to <code>afsal8133@gmail.com</code>.<br>
        If your email client didn't launch automatically, <a href="${mailtoUrl}" style="color:#ffffff;text-decoration:underline;">click here to send directly</a>.
      `;

      showToast('Opening email client...');

      // Trigger mail client
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    });
  }
});
