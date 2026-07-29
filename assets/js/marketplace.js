/*==================================================
    KORAVO MARKETPLACE
==================================================*/

"use strict";

/*==================================================
    DUMMY PRODUCTS
==================================================*/

const PRODUCTS = [
  {
    id: 1,
    slug: "hospital-accreditation-sop",
    title: "Hospital Accreditation SOP Bundle",
    category: "Hospital",
    author: "Koravo Studio",
    price: 49,
    rating: 4.9,
    sales: 1542,
    updated: "2 days ago",
    verified: true,
    color: "blue",
  },
  {
    id: 2,
    slug: "icu-sop",
    title: "ICU SOP Collection",
    category: "Hospital",
    author: "Koravo Studio",
    price: 39,
    rating: 4.8,
    sales: 820,
    updated: "Yesterday",
    verified: true,
    color: "green",
  },
  {
    id: 3,
    slug: "iso-9001-template",
    title: "ISO 9001 Documentation",
    category: "Business",
    author: "Koravo Studio",
    price: 59,
    rating: 5.0,
    sales: 1320,
    updated: "Today",
    verified: true,
    color: "purple",
  },
  {
    id: 4,
    slug: "ai-prompts",
    title: "Business AI Prompt Pack",
    category: "AI Prompt",
    author: "Koravo AI",
    price: 19,
    rating: 4.9,
    sales: 3280,
    updated: "5 min ago",
    verified: true,
    color: "orange",
  },
  {
    id: 5,
    slug: "hr-template",
    title: "HR Management Template",
    category: "Template",
    author: "Koravo Studio",
    price: 29,
    rating: 4.7,
    sales: 960,
    updated: "1 day ago",
    verified: true,
    color: "red",
  },
  {
    id: 6,
    slug: "dashboard-excel",
    title: "Hospital KPI Dashboard",
    category: "Dashboard",
    author: "Koravo Studio",
    price: 69,
    rating: 4.9,
    sales: 480,
    updated: "Today",
    verified: true,
    color: "cyan",
  },
];

/*==================================================
    MARKETPLACE MODULE
==================================================*/

const Marketplace = {
  state: {
    page: 1,
    view: "grid",
    keyword: "",
    sort: "latest",
    category: null,
    price: null,
    rating: null,
  },

  cache() {
    this.searchInput = document.querySelector(".marketplace-search input");
    this.searchButton = document.querySelector(".marketplace-search button");

    this.sidebar = document.querySelector(".marketplace-sidebar");
    this.toolbar = document.querySelector(".marketplace-toolbar");
    this.grid = document.querySelector(".marketplace-grid");
    this.pagination = document.querySelector(".marketplace-pagination");
    this.panel = document.querySelector(".marketplace-panel");
  },

  init() {
    this.cache();

    this.bindEvents();

    this.loadDashboard();

    this.renderProducts();

    console.log("✅ Marketplace Ready");
  },

  bindEvents() {
    if (this.searchButton) {
      this.searchButton.addEventListener("click", () => {
        this.search();
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.search();
        }
      });
    }
  },

  search() {
    this.state.keyword = this.searchInput.value.toLowerCase();

    this.renderProducts();
  },

  renderProducts() {
    if (!this.grid) return;

    this.grid.innerHTML = "";

    const result = PRODUCTS.filter((product) => {
      if (this.state.keyword === "") return true;

      return (
        product.title.toLowerCase().includes(this.state.keyword) ||
        product.category.toLowerCase().includes(this.state.keyword) ||
        product.author.toLowerCase().includes(this.state.keyword)
      );
    });

    result.forEach((product) => {
      this.grid.innerHTML += `

            <article class="product-card">

                <div class="product-cover ${product.color}">

                    <span class="product-category">

                        ${product.category}

                    </span>

                    <h3>

                        ${product.title}

                    </h3>

                    <small>

                        KORAVO

                    </small>

                </div>

                <div class="product-body">

                    <div class="product-rating">

                        <span>⭐ ${product.rating}</span>

                        <span>${product.sales} Sales</span>

                    </div>

                    <div class="product-author">

                        ${product.author}

                    </div>

                    <div class="product-footer">

                        <strong>

                            $${product.price}

                        </strong>

                        <a href="detail.html?id=${product.id}" class="btn-buy">

                            View

                        </a>

                    </div>

                </div>

            </article>

            `;
    });

    if (result.length === 0) {
      this.grid.innerHTML = `

                <div class="empty-state">

                    <h2>No products found.</h2>

                </div>

            `;
    }
  },

  loadDashboard() {
    if (!this.panel) return;

    this.panel.innerHTML = `

            <div class="widget">

                <h3>Marketplace Activity</h3>

                <ul>

                    <li>🟢 Hospital SOP Bundle sold</li>

                    <li>🔵 ISO Template updated</li>

                    <li>🟣 AI Prompt uploaded</li>

                    <li>🟠 Dashboard purchased</li>

                </ul>

            </div>

        `;
  },
};

/*==================================================
    START
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
  Marketplace.init();
});
