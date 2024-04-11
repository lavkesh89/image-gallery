let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft += 900;
    scrollContainer.Style.scrollBehavior = "smooth";
    
});

backBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft -= 900;
    scrollContainer.style.scrollBehavior ="smooth";
    
});














// let scrollContainer = document.querySelector(".gallery");
// let backBtn = document.getElementById("backBtn");
// let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//     scrollContainer.style.scrollBehavior = "smooth"; // Smooth scrolling for mouse wheel
// });

// nextBtn.addEventListener("click", ()=> {
//     scrollContainer.scrollLeft += 900;
//     scrollContainer.style.scrollBehavior = "smooth"; // Smooth scrolling for next button
// });

// backBtn.addEventListener("click", ()=> {
//     scrollContainer.scrollLeft -= 900;
//     scrollContainer.style.scrollBehavior = "smooth"; // Smooth scrolling for back button
// });