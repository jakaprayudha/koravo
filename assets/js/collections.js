/*==================================================
    KORAVO COLLECTIONS
==================================================*/

"use strict";

/*==================================================
    DUMMY COLLECTIONS
==================================================*/

const COLLECTIONS = [
  {
    id: 1,
    title: "Hospital Accreditation Bundle",
    industry: "Hospital",
    assets: 265,
    categories: 15,
    price: 299,
    rating: 4.9,
    downloads: 2450,
    color: "blue",
  },
  {
    id: 2,
    title: "Hospital Management Collection",
    industry: "Hospital",
    assets: 180,
    categories: 12,
    price: 249,
    rating: 4.8,
    downloads: 1832,
    color: "green",
  },
  {
    id: 3,
    title: "Business Starter Kit",
    industry: "Business",
    assets: 120,
    categories: 8,
    price: 149,
    rating: 4.9,
    downloads: 5210,
    color: "purple",
  },
  {
    id: 4,
    title: "ISO Documentation Pack",
    industry: "ISO",
    assets: 95,
    categories: 6,
    price: 199,
    rating: 5.0,
    downloads: 950,
    color: "orange",
  },
  {
    id: 5,
    title: "Government Administration",
    industry: "Government",
    assets: 220,
    categories: 18,
    price: 399,
    rating: 4.8,
    downloads: 730,
    color: "red",
  },
  {
    id: 6,
    title: "AI Productivity Collection",
    industry: "AI",
    assets: 85,
    categories: 5,
    price: 99,
    rating: 4.9,
    downloads: 3400,
    color: "cyan",
  },
];

/*==================================================
    INDUSTRIES
==================================================*/

const INDUSTRIES = [
  {
    icon: "🏥",
    name: "Hospital",
  },

  {
    icon: "🏢",
    name: "Business",
  },

  {
    icon: "🏛",
    name: "Government",
  },

  {
    icon: "🎓",
    name: "Education",
  },

  {
    icon: "🤖",
    name: "AI",
  },

  {
    icon: "📊",
    name: "Dashboard",
  },

  {
    icon: "⚖",
    name: "Legal",
  },

  {
    icon: "🏭",
    name: "Manufacturing",
  },
];
const Collections = {
  cache() {
    this.grid = document.querySelector(".collections-grid");

    this.industry = document.querySelector(".industry-grid");

    this.search = document.querySelector(".collections-search input");

    this.widget = document.querySelector(".collections-widget");
  },

  init() {
    this.cache();

    this.renderCollections();

    this.renderIndustry();

    this.renderWidget();

    this.bindEvents();

    console.log("Collections Ready");
  },
  renderCollections() {
    this.grid.innerHTML = "";

    COLLECTIONS.forEach((item) => {
      this.grid.innerHTML += `

        <article class="collection-card">

            <div class="collection-cover ${item.color}">

                <span>

                    ${item.industry}

                </span>

                <h3>

                    ${item.title}

                </h3>

                <small>

                    ${item.assets} Assets

                </small>

            </div>

            <div class="collection-body">

                <div>

                    ⭐ ${item.rating}

                </div>

                <div>

                    ${item.downloads} Downloads

                </div>

                <div>

                    ${item.categories} Categories

                </div>

                <div class="collection-footer">

                    <strong>

                        $${item.price}

                    </strong>

                    <a href="#">

                        View →

                    </a>

                </div>

            </div>

        </article>

        `;
    });
  },
  renderIndustry() {
    this.industry.innerHTML = "";

    INDUSTRIES.forEach((item) => {
      this.industry.innerHTML += `

        <div class="industry-card">

            <div class="industry-icon">

                ${item.icon}

            </div>

            <h4>

                ${item.name}

            </h4>

        </div>

        `;
    });
  },
  renderWidget() {
    this.widget.innerHTML = `

<div class="collection-widget">

<h3>

Trending Collections

</h3>

<ul>

<li>

🏥 Hospital Bundle

</li>

<li>

🤖 AI Productivity

</li>

<li>

🏛 Government

</li>

<li>

📚 Business Kit

</li>

</ul>

</div>

`;
  },
  bindEvents() {
    if (!this.search) return;

    this.search.addEventListener("keyup", (e) => {
      const keyword = e.target.value.toLowerCase();

      const filtered = COLLECTIONS.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword) ||
          item.industry.toLowerCase().includes(keyword),
      );

      this.renderFiltered(filtered);
    });
  },
  renderFiltered(data) {
    this.grid.innerHTML = "";

    data.forEach((item) => {
      this.grid.innerHTML += `

<article class="collection-card">

<div class="collection-cover ${item.color}">

<span>${item.industry}</span>

<h3>${item.title}</h3>

<small>${item.assets} Assets</small>

</div>

<div class="collection-body">

<div>⭐ ${item.rating}</div>

<div>${item.downloads} Downloads</div>

<div>${item.categories} Categories</div>

<div class="collection-footer">

<strong>$${item.price}</strong>

<a href="#">View</a>

</div>

</div>

</article>

`;
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Collections.init();
});
