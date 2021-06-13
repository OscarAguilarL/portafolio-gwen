const btn = document.querySelector(".btn-menu");
const btnIcon = document.querySelector(".icon-menu");
const navigation = document.querySelector(".header-navigation");

btn.addEventListener("click", () => {
  navigation.classList.toggle("visible");
});
