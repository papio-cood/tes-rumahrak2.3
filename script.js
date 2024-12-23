<!DOCTYPE html>
<html lang="id"></html>

const hamburger = document.getElementById("hamburger");
const navLink = document.getElementById("nav-link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});