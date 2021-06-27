window.addEventListener("scroll", () => {
  let topIcon = document.querySelector(".top-icon");
  let backToTop = document.querySelector(".back-to-top");
  if (topIcon) {
    const windowScrolled = window.scrollY > 350;
    topIcon.classList.toggle("scrolling-active", windowScrolled);
    if (windowScrolled) {
      let logo = document.querySelector(".top-icon .home");
      logo.classList.toggle("d-home", window.scrollY > 400);
    }
  }
  if (backToTop) {
    const windowScrolledToTop = window.scrollY > 600;
    if (windowScrolledToTop) {
      backToTop.classList.toggle("d-block", window.scrollY > 650);
    }
  }
});

function dropIt() {
  document.getElementById("dropIt").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const navLinks = $("#navLinks");
const filterLinks = $("#filterLinks");
$(".closed").click(function () {
  if (
    this.parentElement.className == "logo flex" ||
    this.parentElement.id == "navLinks"
  ) {
    navLinks.toggleClass("open");
  } else {
    filterLinks.toggleClass("open-filter");
  }
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
    target.classList.add("active");
  });
});

const prodOptCont = document.querySelector("#prod-opt-cont");
const pocBtn = document.querySelectorAll(".open-btn");
pocBtn.forEach((el) => {
  el.addEventListener("click", () => {
    prodOptCont.style.display = "block";
  });
});
window.addEventListener("mouseup", (e) => {
  if (e.target != prodOptCont && e.target.parentNode == prodOptCont) {
    prodOptCont.style.display = "none";
  }
});

const bars = document.querySelector(".bars");
const backdrop = document.querySelector(".backdrop");
const homesidebar = document.querySelector(".homesidebar");

bars.addEventListener("click", () => {
  toggleSidebar();
});
backdrop.addEventListener("click", () => {
  toggleSidebar();
});
const toggleSidebar = () => {
  backdrop.classList.toggle("backdrop--active");
  homesidebar.classList.toggle("sidebar-active");
};
$(".sub-btn").click(function () {
  $(this).next(".sub-menu").slideToggle();
  $(this).find(".dropdown").toggleClass("rotate");
});
