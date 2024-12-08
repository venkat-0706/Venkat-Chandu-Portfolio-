'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Project page 

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    const category = filterItems[i].dataset.category.toLowerCase();
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}
/* Certifications */

// Custom select variables for certifications
const select1 = document.querySelector("[data-select1]");
const selectItems1 = document.querySelectorAll("[data-select-item1]");
const selectValue1 = document.querySelector("[data-select-value1]");
const filterBtn1 = document.querySelectorAll("[data-filter-btn1]");
const filterItems1 = document.querySelectorAll("[data-filter-item]"); // Correct selector for filter items

select1.addEventListener("click", function () {
  elementToggleFunc(this);
});

const filterFunc1 = function (selectedValue) {
  for (let i = 0; i < filterItems1.length; i++) {
    const category = filterItems1[i].dataset.category.toLowerCase(); // Use dataset.category to match with selectedValue
    if (selectedValue === "all") {
      filterItems1[i].classList.add("active");
    } else if (selectedValue === category) {
      filterItems1[i].classList.add("active");
    } else {
      filterItems1[i].classList.remove("active");
    }
  }
};

// Add event in all select items
for (let i = 0; i < selectItems1.length; i++) {
  selectItems1[i].addEventListener("click", function () {
    const selectedValue1 = this.getAttribute("data-select-item1");
    selectValue1.innerText = this.innerText;
    elementToggleFunc(select1); // Close the dropdown after selection
    filterFunc1(selectedValue1);
  });
}

// Add event in all filter button items for large screen
let lastClickedBtn1 = filterBtn1[0];
for (let i = 0; i < filterBtn1.length; i++) {
  filterBtn1[i].addEventListener("click", function () {
    const selectedValue1 = this.getAttribute("data-filter-btn1");
    selectValue1.innerText = this.innerText;
    filterFunc1(selectedValue1);
    lastClickedBtn1.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn1 = this;
  });
}

// Contact page

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  const sidebarInfoMore = document.querySelector(".sidebar-info_more");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // Set initial mode
  if (!body.classList.contains('dark-mode') && !body.classList.contains('light-mode')) {
    body.classList.add('dark-mode');
  }

  // Toggle dark mode
  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    modeToggle.innerHTML = body.classList.contains("dark-mode")
      ? '<ion-icon name="sunny-outline"></ion-icon>'
      : '<ion-icon name="moon-outline"></ion-icon>';
  });

  // Show/Hide sidebar contacts
  sidebarBtn.addEventListener("click", () => {
    sidebarInfoMore.classList.toggle("visible");
  });

  // Navigate between sections
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");

      const targetPage = link.textContent.toLowerCase();
      pages.forEach(page => {
        if (page.getAttribute("data-page") === targetPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
    });
  });
});