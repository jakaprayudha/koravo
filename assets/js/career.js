/*==================================================
    KORAVO CAREER
==================================================*/

"use strict";

/*==================================================
    JOBS
==================================================*/

const JOBS = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full Time",
    experience: "3+ Years",
    description: "Build scalable marketplace and enterprise applications.",
  },

  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full Time",
    experience: "2+ Years",
    description:
      "Develop beautiful user interfaces using modern web technologies.",
  },

  {
    id: 3,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full Time",
    experience: "3+ Years",
    description: "Build REST API, Microservices and Cloud Infrastructure.",
  },

  {
    id: 4,
    title: "UI / UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full Time",
    experience: "2+ Years",
    description: "Design modern digital experiences for Koravo platform.",
  },

  {
    id: 5,
    title: "AI Engineer",
    department: "Artificial Intelligence",
    location: "Remote",
    type: "Full Time",
    experience: "3+ Years",
    description: "Develop AI-powered enterprise solutions.",
  },

  {
    id: 6,
    title: "Healthcare Consultant",
    department: "Healthcare",
    location: "On Site",
    type: "Full Time",
    experience: "2+ Years",
    description: "Design hospital workflows, SOP and digital transformation.",
  },
];

/*==================================================
    BENEFITS
==================================================*/

const BENEFITS = [
  {
    icon: "fa-solid fa-house-laptop",
    title: "Remote Friendly",
    description: "Work from anywhere.",
  },

  {
    icon: "fa-solid fa-heart",
    title: "Health Insurance",
    description: "Comprehensive health benefits.",
  },

  {
    icon: "fa-solid fa-graduation-cap",
    title: "Learning Budget",
    description: "Training and certification support.",
  },

  {
    icon: "fa-solid fa-laptop-code",
    title: "Latest Equipment",
    description: "Modern development tools.",
  },

  {
    icon: "fa-solid fa-coins",
    title: "Performance Bonus",
    description: "Annual performance rewards.",
  },

  {
    icon: "fa-solid fa-chart-line",
    title: "Career Growth",
    description: "Grow together with Koravo.",
  },
];

/*==================================================
    PROCESS
==================================================*/

const PROCESS = [
  "Apply",

  "HR Interview",

  "Technical Test",

  "Final Interview",

  "Welcome",
];
const Career = {
  cache() {
    this.grid = document.querySelector(".career-grid");

    this.benefits = document.querySelector(".benefit-grid");

    this.process = document.querySelector(".process-grid");

    this.widget = document.querySelector(".career-widget");

    this.search = document.querySelector(".career-search input");
  },

  init() {
    this.cache();

    this.renderJobs();

    this.renderBenefits();

    this.renderProcess();

    this.renderWidget();

    this.bindEvents();

    console.log("Career Ready 🚀");
  },
  renderJobs(data = JOBS) {
    this.grid.innerHTML = "";

    data.forEach((job) => {
      this.grid.innerHTML += `

<div class="career-card">

<span class="badge">

${job.department}

</span>

<h3>

${job.title}

</h3>

<p>

${job.description}

</p>

<div>

📍 ${job.location}

</div>

<div>

💼 ${job.type}

</div>

<div>

⭐ ${job.experience}

</div>

<div class="career-footer">

<a href="#">

Apply Now →

</a>

</div>

</div>

`;
    });
  },
  renderBenefits() {
    this.benefits.innerHTML = "";

    BENEFITS.forEach((item) => {
      this.benefits.innerHTML += `

<div class="benefit-card">

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
  renderProcess() {
    this.process.innerHTML = "";

    PROCESS.forEach((step, index) => {
      this.process.innerHTML += `

<div class="process-card">

<div class="process-number">

${index + 1}

</div>

<h4>

${step}

</h4>

</div>

`;
    });
  },
  renderWidget() {
    this.widget.innerHTML = `

<div class="career-widget-box">

<h3>

Hiring Overview

</h3>

<ul>

<li>

💼 Open Positions : 6

</li>

<li>

🌍 Remote Jobs : 4

</li>

<li>

🏢 Hybrid Jobs : 1

</li>

<li>

🏥 Healthcare Team Hiring

</li>

</ul>

</div>

`;
  },
  bindEvents() {
    if (!this.search) return;

    this.search.addEventListener("keyup", (e) => {
      const keyword = e.target.value.toLowerCase();

      const result = JOBS.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword) ||
          job.department.toLowerCase().includes(keyword),
      );

      this.renderJobs(result);
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Career.init();
});
