const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
/*======================================
        COUNTER
======================================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach((counter) => {
    const target = +counter.dataset.target;

    const update = () => {
      const current = +counter.innerText.replace(/,/g, "");

      const increment = target / 120;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString();

        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    update();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      runCounter();

      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector(".stats"));
/*======================================
    AI SEARCH DEMO
======================================*/

const suggestions = document.querySelectorAll(".search-tags span");
const input = document.querySelector(".search-input input");

suggestions.forEach((tag) => {
  tag.addEventListener("click", () => {
    input.value = tag.innerText;

    input.focus();
  });
});
/*======================================
        MARQUEE
======================================*/

const marquee = document.querySelector(".marquee__content");

marquee.addEventListener("mouseenter", () => {
  marquee.style.animationPlayState = "paused";
});

marquee.addEventListener("mouseleave", () => {
  marquee.style.animationPlayState = "running";
});
/*======================================
    BACK TO TOP
======================================*/

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
