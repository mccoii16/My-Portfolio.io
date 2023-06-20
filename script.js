
let menuBtn = document.getElementById("menu-btn")
let closeBtn = document.getElementById("close-btn")
let navMobile = document.querySelector(".nav-bar-mobile")

// let portBtn = document.getElementById("portfolios")

console.log(menuBtn)

menuBtn.addEventListener("click", function(){
    navMobile.style.display="block";
})


closeBtn.addEventListener("click", function(){
    navMobile.style.display="none";

})

// portBtn.addEventListener("click", function(){
//     navMobile.style.display="none";

// })


// window.addEventListener('load', function() {
//     // Hide the loader after 3 seconds
//     setTimeout(function() {
//       var loader = document.getElementById('loader');
//       loader.classList.add('hidden');
//       loader.style.display= "none";
//     }, 1500);
//   });
  

let buttonVideo1 = document.querySelector("#buttons1")
let buttonVideo2 = document.querySelector("#buttons2")
let buttonVideo3 = document.querySelector("#buttons3")
let buttonVideo4 = document.querySelector("#buttons4")
let buttonVideo5 = document.querySelector("#buttons5")
let videoEl1 = document.querySelector(".port-content-container-1")
let videoEl2 = document.querySelector(".port-content-container-2")
let videoEl3 = document.querySelector(".port-content-container-3")


buttonVideo1.addEventListener("click", function(){
    videoEl1.classList.add("active");
    videoEl2.classList.add("active");
    videoEl3.classList.add("active")
})
buttonVideo2.addEventListener("click", function(){
    videoEl2.classList.add("active");
    videoEl1.classList.remove("active");
    videoEl3.classList.remove("active")
})
buttonVideo3.addEventListener("click", function(){
    videoEl1.classList.remove("active");
    videoEl2.classList.remove("active");
    videoEl3.classList.add("active")
})
buttonVideo4.addEventListener("click", function(){
    videoEl1.classList.remove("active")
    videoEl2.classList.add("active")
    videoEl3.classList.add("active")
})
buttonVideo5.addEventListener("click", function(){
    videoEl1.classList.add("active")
    videoEl2.classList.add("active")
    videoEl3.classList.remove("active")
})

