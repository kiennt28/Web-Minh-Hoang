window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let navbar = document.querySelector("nav");
  let sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);
function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".navbar-collapse");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}

// scrollFunction();

const tabs = document.querySelectorAll(".nav-links");
const panes = document.querySelectorAll(".tab-pane");
const tabActive = document.querySelector(".nav-links.active");
const line = document.querySelector(".nav-tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".nav-links.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    this.classList.add("active");
    pane.classList.add("active");
  };
});
