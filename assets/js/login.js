/*==================================================
    KORAVO LOGIN
==================================================*/

"use strict";

const Login = {
  cache() {
    this.form = document.querySelector("form");

    this.password = document.querySelector("#password");

    this.toggle = document.querySelector("#togglePassword");

    this.loginButton = document.querySelector(".login .btn-primary");
  },

  init() {
    this.cache();

    this.events();

    console.log("✅ Login Ready");
  },

  events() {
    /*=====================================
            SHOW PASSWORD
        =====================================*/

    if (this.toggle) {
      this.toggle.addEventListener("click", () => {
        const icon = this.toggle.querySelector("i");

        if (this.password.type === "password") {
          this.password.type = "text";

          icon.classList.remove("fa-eye");

          icon.classList.add("fa-eye-slash");
        } else {
          this.password.type = "password";

          icon.classList.remove("fa-eye-slash");

          icon.classList.add("fa-eye");
        }
      });
    }

    /*=====================================
            LOGIN BUTTON
        =====================================*/

    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();

        this.login();
      });
    }
  },

  login() {
    const email = document.querySelector('input[type="email"]').value.trim();

    const password = this.password.value.trim();

    if (email === "") {
      alert("Please enter your email.");

      return;
    }

    if (password === "") {
      alert("Please enter your password.");

      return;
    }

    this.loading();
  },

  loading() {
    this.loginButton.disabled = true;

    this.loginButton.innerHTML = `

            <i class="fa-solid fa-spinner fa-spin"></i>

            Signing In...

        `;

    setTimeout(() => {
      this.loginButton.innerHTML = `

                <i class="fa-solid fa-circle-check"></i>

                Success

            `;
    }, 1800);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Login.init();
});
