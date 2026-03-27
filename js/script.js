// js/script.js
// ========== RESPONSIVE ADDITIONS (Hamburger Menu & Mobile Dropdown) ==========
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger button if not exists
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    if (navbar && navMenu && !document.querySelector('.hamburger')) {
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        navbar.appendChild(hamburger);

        // Toggle menu
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Close menu when a link is clicked (optional)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Mobile dropdown (click instead of hover)
    const dropdowns = document.querySelectorAll('.dropdown');
    if (window.innerWidth <= 992) {
        dropdowns.forEach(dropdown => {
            const dropbtn = dropdown.querySelector('.dropbtn');
            dropbtn.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }

    // Also handle resize to reset dropdown behavior on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        } else {
            // Re-attach click listeners if needed (already attached)
        }
    });
});
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ==================== NEWSLETTER FORM ====================
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterMessage = document.getElementById("newsletter-message");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission
      // Hide the form and show the thank you message
      newsletterForm.style.display = "none";
      newsletterMessage.style.display = "block";
    });
  }
document.querySelector(".search-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const searchTerm = this.querySelector("input").value.toLowerCase().trim();
  if (searchTerm === "") return;

  // FIX: Only search inside the <main> tag to avoid the header/menu
  const contentNodes = document.querySelectorAll(
    "main h1, main h2, main h3, main p, .faq-question",
  );
  let found = false;

  for (let node of contentNodes) {
    if (node.textContent.toLowerCase().includes(searchTerm)) {
      // Smoothly scroll to the section
      node.scrollIntoView({ behavior: "smooth", block: "center" });

      // Apply the Elite Gold highlight
      const originalBg = node.style.backgroundColor;
      node.style.backgroundColor = "rgba(255, 215, 0, 0.4)";
      node.style.transition = "background-color 0.5s ease"; // Makes it look smoother

      setTimeout(() => {
        node.style.backgroundColor = originalBg || "transparent";
      }, 3000);

      found = true;
      break;
    }
  }

  if (!found) {
    alert("No results found for: " + searchTerm);
  }
});
// ==================== POPUP MARKETING ====================
const popup = document.getElementById("popup");
const closePopupBtn = document.querySelector(".close-popup");
const popupForm = document.getElementById("popup-form");

// 1. Show popup 1 second after every reload
if (popup) {
    setTimeout(function () {
        popup.style.display = "flex";
    }, 1000); 
}

// 2. Close when "X" is clicked
if (closePopupBtn) {
    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
}

// 3. Close when "Get My Discount" is clicked (Stops the loop)
if (popupForm) {
    popupForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents page from refreshing
        
        // Show a quick alert or change the text
        alert("Success! Your 10% discount code is: ELITE10");
        
        // Hide the popup so it doesn't stay open
        popup.style.display = "none";
    });
}

// 4. Close if clicking outside the box
window.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

  // ==================== COUNTER ANIMATION ====================
  const counters = document.querySelectorAll(".counter-number");
  let counted = false; // Flag to ensure counters run only once

  // Function to animate a single counter
  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-target"));
    const suffix = counter.innerText.replace(/[0-9]/g, ""); // Extract any suffix like '+'
    let current = 0;
    const increment = target / 100; // Increment step (adjust for speed)
    const updateCounter = setInterval(function () {
      current += increment;
      if (current >= target) {
        counter.innerText = target + suffix;
        clearInterval(updateCounter);
      } else {
        counter.innerText = Math.ceil(current) + suffix;
      }
    }, 20); // 20ms per step
  }

  // Intersection Observer to trigger counters when the section becomes visible
  const countersSection = document.querySelector(".counters");
  if (countersSection && counters.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counters.forEach((counter) => animateCounter(counter));
            counted = true; // Prevent re-triggering
          }
        });
      },
      { threshold: 0.3 },
    ); // Trigger when 30% visible

    observer.observe(countersSection);
  }

  // ==================== SCROLL FADE-IN ANIMATIONS ====================
  // Add 'fade-in' class to all major sections for animation (if not already present)
  const sectionsToAnimate = document.querySelectorAll("section:not(.hero)"); // Exclude hero if desired
  sectionsToAnimate.forEach((section) => {
    // Only add if not already present (to avoid duplication)
    if (!section.classList.contains("fade-in")) {
      section.classList.add("fade-in");
    }
  });

  // Intersection Observer for fade-in effect
  const fadeElements = document.querySelectorAll(".fade-in");
  if (fadeElements.length > 0) {
    const fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Optionally unobserve after it becomes visible to save resources
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    ); // Slight offset for better trigger

    fadeElements.forEach((el) => fadeObserver.observe(el));
  }

  // ==================== SMOOTH SCROLLING FOR ANCHOR LINKS (optional) ====================
  // Add smooth scroll to all internal links (like #services)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ==================== MOBILE MENU TOGGLE (optional enhancement) ====================
  // Since the design is responsive but we have a horizontal menu,
  // we can add a simple hamburger toggle for better mobile UX.
  // This is not explicitly requested but enhances user interaction.
  // Create a hamburger button dynamically if it doesn't exist.
  const navbar = document.querySelector(".navbar");
  const navMenu = document.querySelector(".nav-menu");

  if (navbar && navMenu) {
    // Check if hamburger already exists (maybe from HTML), if not, create one
    let hamburger = document.querySelector(".hamburger");
    if (!hamburger) {
      hamburger = document.createElement("div");
      hamburger.className = "hamburger";
      hamburger.innerHTML = "<span></span><span></span><span></span>";
      navbar.insertBefore(hamburger, navMenu); // Insert before the menu
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close menu when a link is clicked (for single page navigation)
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  // Add some CSS for the hamburger (if not already in style.css)
  // We'll inject it dynamically or rely on the fact that it might be added later.
  // But to be safe, we can add a style block if not present.
  if (!document.querySelector("#hamburger-styles")) {
    const style = document.createElement("style");
    style.id = "hamburger-styles";
    style.textContent = `
            .hamburger {
                display: none;
                flex-direction: column;
                cursor: pointer;
                padding: 5px;
            }
            .hamburger span {
                width: 25px;
                height: 3px;
                background: var(--primary);
                margin: 3px 0;
                transition: 0.3s;
            }
            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }
            @media (max-width: 768px) {
                .hamburger {
                    display: flex;
                }
                .nav-menu {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: var(--white);
                    box-shadow: var(--shadow);
                    padding: 1rem;
                }
                .nav-menu.active {
                    display: flex;
                }
                .navbar {
                    position: relative;
                }
            }
        `;
    document.head.appendChild(style);
  }
}); // End DOMContentLoaded
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const icon = button.querySelector("i");

    // Close other items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.querySelector(".faq-answer").style.maxHeight = null;
        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });

    // Toggle current item
    const answer = faqItem.querySelector(".faq-answer");
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.classList.replace("fa-minus", "fa-plus");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.replace("fa-plus", "fa-minus");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Find the full-content div right before the button
      const content = this.previousElementSibling;

      content.classList.toggle("active");
      this.classList.toggle("active");

      if (content.classList.contains("active")) {
        this.innerHTML = 'Read Less <i class="fas fa-chevron-down"></i>';
      } else {
        this.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
      }
    });
  });
});
document.getElementById("event-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from refreshing

  // 1. Get the name from the input field
  const nameInput = document.getElementById("user-name").value;

  // 2. Insert the name into the success message
  document.getElementById("client-name").innerText = nameInput;

  // 3. Hide the form
  this.style.display = "none";

  // 4. Show the success box
  const successBox = document.getElementById("success-message");
  successBox.style.display = "flex";

  // Optional: Smooth scroll back to the top of the section
  window.scrollTo({
    top: document.querySelector(".contact-form-container").offsetTop - 100,
    behavior: "smooth",
  });
});
document
  .querySelector(".custom-select-trigger")
  .addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });

document.querySelectorAll(".custom-option").forEach((option) => {
  option.addEventListener("click", function () {
    let value = this.getAttribute("data-value");
    let text = this.innerText;

    // Update the visible text
    document.querySelector(".custom-select-trigger span").innerText = text;

    // Update the hidden input value for the form
    document.getElementById("selected-event-type").value = value;

    // Close dropdown
    this.closest(".custom-select-wrapper").classList.remove("active");
  });
});

// Close dropdown if user clicks outside
window.addEventListener("click", function (e) {
  const select = document.querySelector(".custom-select-wrapper");
  if (!select.contains(e.target)) {
    select.classList.remove("active");
  }
});