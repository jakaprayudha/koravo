/*==================================================
KORAVO DASHBOARD
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();

  initSearch();

  initCounter();

  initProgress();

  initWorkspaceCard();
});

/*==================================================
SIDEBAR
==================================================*/

function initSidebar() {
  const toggle = document.querySelector(".sidebar-toggle");

  const sidebar = document.querySelector(".sidebar");

  if (!toggle || !sidebar) return;

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
}

/*==================================================
SEARCH
==================================================*/

function initSearch() {
  const search = document.querySelector(".header-search input");

  if (!search) return;

  search.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const keyword = search.value.trim();

      if (keyword === "") return;

      alert("Search : " + keyword);

      // nanti arahkan ke search page

      // window.location.href="search.html?q="+keyword;
    }
  });
}

/*==================================================
COUNTER
==================================================*/

function initCounter() {
  const numbers = document.querySelectorAll(".stat-card h2");

  numbers.forEach((number) => {
    const target = parseInt(number.innerText);

    let current = 0;

    const increment = Math.ceil(target / 40);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;

        clearInterval(timer);
      }

      number.innerText = current;
    }, 20);
  });
}

/*==================================================
PROGRESS
==================================================*/

function initProgress() {
  const progress = document.querySelector(".hero-progress-bar");

  if (!progress) return;

  progress.style.width = "0";

  setTimeout(() => {
    progress.style.transition = "1.2s";

    progress.style.width = "68%";
  }, 300);
}

/*==================================================
WORKSPACE CARD
==================================================*/

function initWorkspaceCard() {
  const cards = document.querySelectorAll(".workspace-widget");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0px)";
    });
  });
}
