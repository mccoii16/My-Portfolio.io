
let menuBtn = document.getElementById("menu-btn")
let closeBtn = document.getElementById("close-btn")
let navMobile = document.querySelector(".nav-bar-mobile")

console.log(menuBtn)

menuBtn.addEventListener("click", function(){
    navMobile.style.display="block";
})


closeBtn.addEventListener("click", function(){
    navMobile.style.display="none";

})


window.addEventListener('load', function() {
    // Hide the loader after 3 seconds
    setTimeout(function() {
      var loader = document.getElementById('loader');
      loader.classList.add('hidden');
      loader.style.display= "none";
    }, 1500);
  });
  
  