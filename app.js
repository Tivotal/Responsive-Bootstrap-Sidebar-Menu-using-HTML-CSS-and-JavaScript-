/* Created by Tivotal */

let btn = document.querySelector(".toggle-btn");
let sideBar = document.querySelector(".sidebar");

btn.addEventListener("click", function () {
  sideBar.classList.toggle("expand");
});
