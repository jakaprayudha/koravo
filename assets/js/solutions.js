/*==================================================
    KORAVO SOLUTIONS
==================================================*/

"use strict";

/*==================================================
    SOLUTIONS DATA
==================================================*/

const SOLUTIONS = [
  {
    id: 1,
    name: "Hospital",
    icon: "🏥",
    assets: 265,
    collections: 18,
    products: 420,
    color: "blue",
    description: "SOP, Accreditation, Medical Forms, Dashboard, AI Prompt",
  },

  {
    id: 2,
    name: "Clinic",
    icon: "🩺",
    assets: 180,
    collections: 12,
    products: 260,
    color: "green",
    description: "Clinic SOP, EMR Template, Dashboard, Forms",
  },

  {
    id: 3,
    name: "Government",
    icon: "🏛",
    assets: 320,
    collections: 22,
    products: 580,
    color: "purple",
    description: "Government SOP, Administration, Services",
  },

  {
    id: 4,
    name: "Education",
    icon: "🎓",
    assets: 210,
    collections: 15,
    products: 340,
    color: "orange",
    description: "Academic SOP, Curriculum, AI Prompt",
  },

  {
    id: 5,
    name: "Business",
    icon: "🏢",
    assets: 275,
    collections: 20,
    products: 510,
    color: "red",
    description: "Business Process, HR, ISO, Finance",
  },

  {
    id: 6,
    name: "Manufacturing",
    icon: "🏭",
    assets: 195,
    collections: 13,
    products: 280,
    color: "cyan",
    description: "ISO, Production SOP, Quality Control",
  },

  {
    id: 7,
    name: "Finance",
    icon: "💰",
    assets: 120,
    collections: 9,
    products: 185,
    color: "green",
    description: "Accounting SOP, Audit, Dashboard",
  },

  {
    id: 8,
    name: "Legal",
    icon: "⚖️",
    assets: 145,
    collections: 10,
    products: 240,
    color: "blue",
    description: "Legal Documents, Contracts, Policies",
  },
];

/*==================================================
    FEATURES
==================================================*/

const FEATURES = [
  {
    icon: "fa-solid fa-layer-group",
    title: "Ready Collections",
    description: "Professionally curated bundles for every industry.",
  },

  {
    icon: "fa-solid fa-shield-halved",
    title: "Compliance Ready",
    description: "Templates aligned with standards and regulations.",
  },

  {
    icon: "fa-solid fa-bolt",
    title: "Fast Deployment",
    description: "Reduce implementation time dramatically.",
  },
];
const Solutions = {
  cache() {
    this.grid = document.querySelector(".solutions-grid");

    this.feature = document.querySelector(".feature-grid");

    this.widget = document.querySelector(".solutions-widget");

    this.search = document.querySelector(".solutions-search input");
  },

  init() {
    this.cache();

    this.renderSolutions();

    this.renderFeatures();

    this.renderWidget();

    this.bindEvents();

    console.log("Solutions Ready 🚀");
  },
  renderSolutions(data = SOLUTIONS) {
    this.grid.innerHTML = "";

    data.forEach((item) => {
      this.grid.innerHTML += `

        <article class="solution-card">

            <div class="solution-cover ${item.color}">

                <span>

                    ${item.icon}

                </span>

                <h3>

                    ${item.name}

                </h3>

            </div>

            <div class="solution-body">

                <p>

                    ${item.description}

                </p>

                <ul>

                    <li>📦 ${item.assets} Assets</li>

                    <li>📚 ${item.collections} Collections</li>

                    <li>🛒 ${item.products} Products</li>

                </ul>

                <div class="solution-footer">

                    <a href="#">

                        Explore →

                    </a>

                </div>

            </div>

        </article>

        `;
    });
  },
  renderFeatures() {
    this.feature.innerHTML = "";

    FEATURES.forEach((item) => {
      this.feature.innerHTML += `

        <div class="feature-card">

            <i class="${item.icon}"></i>

            <h3>

                ${item.title}

            </h3>

            <p>

                ${item.description}

            </p>

        </div>

        `;
    });
  },
  renderWidget() {
    this.widget.innerHTML = `

<div class="solution-widget">

<h3>

Industry Overview

</h3>

<ul>

<li>

🏥 Hospital

420 Products

</li>

<li>

🏛 Government

580 Products

</li>

<li>

🏢 Business

510 Products

</li>

<li>

🎓 Education

340 Products

</li>

</ul>

</div>

`;
  },
  bindEvents() {
    if (!this.search) return;

    this.search.addEventListener("keyup", (e) => {
      const keyword = e.target.value.toLowerCase();

      const result = SOLUTIONS.filter(
        (item) =>
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword),
      );

      this.renderSolutions(result);
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Solutions.init();
});
