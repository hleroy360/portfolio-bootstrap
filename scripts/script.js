/*
    Student Name: Helix LeRoy
    File Name: script.js
    Date: 12/21/2023
*/

//jQuery for hero image to consume the header window space
$( document ).ready(function() {
  $('.hero').height($(window).height());
});

//Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("mobile-logo");
  if (menu.style.display === "block" && logo.style.display === "none") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}
