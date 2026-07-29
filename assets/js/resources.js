/*==================================================
    KORAVO RESOURCES
==================================================*/

"use strict";

/*==================================================
    RESOURCE CATEGORIES
==================================================*/

const RESOURCE_CATEGORIES = [
  {
    id: 1,
    icon: "fa-solid fa-book",
    title: "Documentation",
    total: 128,
    description: "Complete product documentation.",
  },

  {
    id: 2,
    icon: "fa-solid fa-graduation-cap",
    title: "Tutorials",
    total: 84,
    description: "Step-by-step learning guides.",
  },

  {
    id: 3,
    icon: "fa-solid fa-circle-question",
    title: "FAQ",
    total: 42,
    description: "Frequently asked questions.",
  },

  {
    id: 4,
    icon: "fa-solid fa-cloud-arrow-down",
    title: "Downloads",
    total: 76,
    description: "Free templates and resources.",
  },

  {
    id: 5,
    icon: "fa-solid fa-robot",
    title: "AI Guides",
    total: 31,
    description: "Artificial Intelligence tutorials.",
  },

  {
    id: 6,
    icon: "fa-solid fa-hospital",
    title: "Healthcare",
    total: 112,
    description: "Healthcare digital transformation.",
  },

  {
    id: 7,
    icon: "fa-solid fa-building",
    title: "Business",
    total: 68,
    description: "Business process resources.",
  },

  {
    id: 8,
    icon: "fa-solid fa-code",
    title: "Developers",
    total: 55,
    description: "API and integration guides.",
  },
];
const ARTICLES = [
  {
    title: "Hospital Accreditation SOP Guide",
    category: "Healthcare",
    time: "8 min read",
  },

  {
    title: "Getting Started with SATUSEHAT",
    category: "Integration",
    time: "12 min read",
  },

  {
    title: "ISO 9001 Documentation Guide",
    category: "Business",
    time: "10 min read",
  },

  {
    title: "Building AI Workflow",
    category: "AI",
    time: "15 min read",
  },

  {
    title: "Koravo Marketplace Tutorial",
    category: "Marketplace",
    time: "6 min read",
  },

  {
    title: "Digital Transformation Roadmap",
    category: "Strategy",
    time: "9 min read",
  },
];
const FAQ = [
  {
    question: "How do I purchase digital products?",
    answer:
      "Choose a product, complete checkout, and it will appear in your library.",
  },

  {
    question: "Can I use products commercially?",
    answer: "Yes, depending on the license included with each product.",
  },

  {
    question: "How do updates work?",
    answer: "Purchased products receive free updates while supported.",
  },

  {
    question: "Can I request custom SOP?",
    answer: "Yes. Koravo provides custom documentation services.",
  },

  {
    question: "How can I become a seller?",
    answer: "Seller onboarding will be available in future releases.",
  },
];
const Resources = {
  cache() {
    this.categories = document.querySelector(".resource-category-grid");

    this.resources = document.querySelector(".resource-grid");

    this.faq = document.querySelector(".faq-list");

    this.widget = document.querySelector(".resources-widget");

    this.search = document.querySelector(".resources-search input");
  },

  init() {
    this.cache();

    this.renderCategories();

    this.renderResources();

    this.renderFAQ();

    this.renderWidget();

    this.bindEvents();

    console.log("Resources Ready 🚀");
  },
  renderCategories(data = RESOURCE_CATEGORIES) {
    this.categories.innerHTML = "";

    data.forEach((item) => {
      this.categories.innerHTML += `

<div class="resource-category-card">

<i class="${item.icon}"></i>

<h3>${item.title}</h3>

<p>${item.description}</p>

<small>${item.total} Articles</small>

</div>

`;
    });
  },
  renderResources(data = ARTICLES) {
    this.resources.innerHTML = "";

    data.forEach((article) => {
      this.resources.innerHTML += `

<article class="resource-card">

<div class="resource-cover"></div>

<div class="resource-body">

<span class="badge">

${article.category}

</span>

<h3>

${article.title}

</h3>

<p>

${article.time}

</p>

<div class="resource-footer">

<a href="#">

Read More →

</a>

</div>

</div>

</article>

`;
    });
  },
  renderFAQ() {
    this.faq.innerHTML = "";

    FAQ.forEach((item) => {
      this.faq.innerHTML += `

<div class="faq-item">

<div class="faq-question">

${item.question}

</div>

<div class="faq-answer">

${item.answer}

</div>

</div>

`;
    });

    document.querySelectorAll(".faq-item").forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
    });
  },
  renderWidget() {
    this.widget.innerHTML = `

<div class="resources-widget-box">

<h3>

Knowledge Base

</h3>

<ul>

<li>📚 596 Articles</li>

<li>🎥 84 Tutorials</li>

<li>📥 76 Downloads</li>

<li>❓ 42 FAQ</li>

<li>🤖 AI Documentation</li>

</ul>

</div>

`;
  },
  bindEvents() {
    if (!this.search) return;

    this.search.addEventListener("keyup", (e) => {
      const keyword = e.target.value.toLowerCase();

      const result = ARTICLES.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword) ||
          item.category.toLowerCase().includes(keyword),
      );

      this.renderResources(result);
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Resources.init();
});
