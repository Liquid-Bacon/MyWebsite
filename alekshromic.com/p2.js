
let sliderImages2 = document2.querySelectorAll(".slidee"),
    arrowLeft2 = document2.querySelector("#arrow-left2"),
    arrowRight2 = document2.querySelector("#arrow-right2"),
    current2 = 0;

// Clear all images
function reset2() {
    for (let i = 0; i < sliderImages2.length; i++) {
        sliderImages2[i].style.display = "none";
    }
}

// Init slider
function startSlide2() {
    reset2();
    sliderImages2[0].style.display = "block";
}

// Show prev
function slideLeft2() {
    reset2();
    sliderImages2[current2 - 1].style.display = "block";
    current2--;
}

// Show next
function slideRight2() {
    reset2();
    sliderImages2[current2 + 1].style.display = "block";
    current2++;
}

// Left arrow click
arrowLeft2.addEventListener("click", function () {
    if (current2 === 0) {
        current2 = sliderImages2.length;
    }
    slideLeft2();
});

// Right arrow click
arrowRight2.addEventListener("click", function () {
    if (current2 === sliderImages2.length - 1) {
        current2 = -1;
    }
    slideRight2();
});

startSlide2();
