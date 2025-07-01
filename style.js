document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('toggle-services');
    const content2 = document.querySelector('.services .content2');
    let expanded = false;

    if (btn && content2) {
        btn.addEventListener('click', function() {
            expanded = !expanded;
            content2.classList.toggle('show-more', expanded);
            btn.textContent = expanded ? "Show Less" : "Show More";
        });
    }
});

// Logo javascript
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = "pointer";
        logo.addEventListener('click', function() {
            // Remove if already animating
            logo.classList.remove('animated');
            // Force reflow to restart animation
            void logo.offsetWidth;
            logo.classList.add('animated');
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// Fade in sections on scroll
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  function reveal() {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  }
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "opacity 0.7s, transform 0.7s";
  });
  window.addEventListener('scroll', reveal);
  reveal();
});

// Parallax effect for .banner section
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector('.banner');
    const profile = document.querySelector('.profile-container');
    const content = document.querySelector('.contentBx');
    if (!banner || !profile || !content) return;

    banner.addEventListener('mousemove', function(e) {
        const rect = banner.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        // Move profile image and content in opposite directions for depth
        profile.style.transform = `translate(${x * 30}px, ${y * 30}px) scale(1.03)`;
        content.style.transform = `translate(${-x * 20}px, ${-y * 20}px) scale(1.01)`;
    });

    banner.addEventListener('mouseleave', function() {
        profile.style.transform = '';
        content.style.transform = '';
    });
});

// Animated tilt and glow effect for service cards
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.services .servicesBx');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
            card.style.boxShadow = `${-rotateY*2}px ${rotateX*2}px 32px 0 rgba(125,47,243,0.18)`;
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
});

// Animated overlay reveal and scale effect for work/project cards
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.work .workBx');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = "scale(1.04) rotate(-2deg)";
            const overlay = card.querySelector('.workTextBx');
            if (overlay) {
                overlay.style.opacity = "1";
                overlay.style.transform = "translateY(0)";
            }
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = "";
            const overlay = card.querySelector('.workTextBx');
            if (overlay) {
                overlay.style.opacity = "0";
                overlay.style.transform = "translateY(30px)";
            }
        });
    });
});

// Show a thank you message after successful Formspree submission
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.fs-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset();
        form.innerHTML = '<div style="text-align:center; padding:32px 0; color:var(--primary); font-size:1.2em;">Thank you! Your message has been sent.</div>';
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    });
  });
});

/*Copyright year automatic update */
document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});