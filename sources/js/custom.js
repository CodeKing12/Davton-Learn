$(".course-slider-1").slick({
    variableWidth: true,
    infinite: false,
    edgeFriction: 1,
    draggable: false,
    prevArrow: "<button class='flex absolute z-20 top-0 bottom-0 left-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_back_ios</span></button>",
    nextArrow: "<button class='flex absolute z-20 top-0 bottom-0 right-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_forward_ios</span></button>",
})

$(".course-slider-2").slick({
    variableWidth: true,
    infinite: false,
    prevArrow: "<button class='flex absolute z-20 top-0 bottom-0 left-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_back_ios</span></button>",
    nextArrow: "<button class='flex absolute z-20 top-0 bottom-0 right-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_forward_ios</span></button>",
})

function openCard (element) {
    card = element.children[1]
    element.classList.add("pop-out")
    card.classList.add("show-me")
    imageCard = element.children[0]
    imageCard.children[1].classList.remove("h-32")
    imageCard.children[1].classList.add("h-[186px]")
}

function closeCard (element) {
    card = element.children[1]
    element.classList.remove("pop-out")
    card.classList.remove("show-me")
} 

// course_sliders = document.querySelectorAll(".all-course-sliders")[0]

// course_sliders.forEach(el => el.onmouseover = function(){
//     el.children.forEach(child => function() {
//         if (child.classList.contains("slick-arrow")) {
//             el.children[0].style.display="flex"
//             el.children[0].style.backgroundColor="#000000"
//             el.children[2].style.display="flex"
//             el.children[2].style.backgroundColor="#000000"
//         }
//     })
// })

// for (slider in course_sliders) {
//     course_sliders[slider].addEventListener("onmouseenter", function(){
//         slider.style.display = "flex"
//     });
//     course_sliders[slider].addEventListener("onmouseleave", function(){
//         slider.style.display = "none"
//     })
// }