window.addEventListener("load", sidenVises);

function sidenVises() {
  const burgerBtn = document.querySelector("#burger_btn");
  burgerBtn.addEventListener("click", openMenu);
}

function openMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  this.removeEventListener("click", openMenu);
  this.classList.add("open");
  menu.classList.add("open");
  this.addEventListener("click", closeMenu);
}

function closeMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  this.removeEventListener("click", closeMenu);
  menu.classList.remove("open");
  this.addEventListener("click", openMenu);
}
