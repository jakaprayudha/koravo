/*==================================================
    KORAVO REGISTER
==================================================*/

"use strict";

const Register = {
  cache() {
    this.form = document.querySelector("#registerForm");

    this.fullname = document.querySelector("#fullname");

    this.email = document.querySelector("#email");

    this.password = document.querySelector("#password");

    this.confirmPassword = document.querySelector("#confirmPassword");

    this.togglePassword = document.querySelector("#togglePassword");

    this.terms = document.querySelector(".terms input");

    this.button = document.querySelector(".register .btn-primary");
  },

  init() {
    this.cache();

    this.events();

    console.log("✅ Register Ready");
  },

  events() {
    /*=====================================
            SHOW PASSWORD
        =====================================*/

    if (this.togglePassword) {
      this.togglePassword.addEventListener("click", () => {
        const icon = this.togglePassword.querySelector("i");

        if (this.password.type === "password") {
          this.password.type = "text";

          icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
          this.password.type = "password";

          icon.classList.replace("fa-eye-slash", "fa-eye");
        }
      });
    }

    /*=====================================
            SUBMIT
        =====================================*/

    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();

        this.submit();
      });
    }
  },

  submit() {
    const fullname = this.fullname.value.trim();

    const email = this.email.value.trim();

    const password = this.password.value.trim();

    const confirm = this.confirmPassword.value.trim();

    if (fullname === "") {
      alert("Please enter your full name.");

      this.fullname.focus();

      return;
    }

    if (fullname.length < 3) {
      alert("Full name is too short.");

      this.fullname.focus();

      return;
    }

    if (email === "") {
      alert("Please enter your email.");

      this.email.focus();

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email address.");

      this.email.focus();

      return;
    }

    if (password.length < 8) {
      alert("Password minimum 8 characters.");

      this.password.focus();

      return;
    }

    if (confirm !== password) {
      alert("Password confirmation doesn't match.");

      this.confirmPassword.focus();

      return;
    }

    if (!this.terms.checked) {
      alert("Please agree to the Terms & Privacy Policy.");

      return;
    }

    this.loading();
  },

  loading() {
    this.button.disabled = true;

    this.button.innerHTML = `

            <i class="fa-solid fa-spinner fa-spin"></i>

            Creating Account...

        `;

    setTimeout(() => {
      this.button.innerHTML = `

                <i class="fa-solid fa-circle-check"></i>

                Account Created

            `;
    }, 2000);

    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Register.init();
});
