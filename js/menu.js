
(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu__open-btn"),
    closeMenuBtn: document.querySelector(".menu__close-btn"),
    menu: document.querySelector(".menu__container"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // document.body.classList.toggle("menu-open")
    refs.menu.classList.toggle("is-hidden");
  }
})();