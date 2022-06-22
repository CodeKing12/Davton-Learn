$(".course-slider-1").slick({
    variableWidth: true,
    infinite: false,
    edgeFriction: 1,
    draggable: false,
    prevArrow: "<button class='flex absolute z-20 top-0 bottom-0 left-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_back_ios</span></button>",
    nextArrow: "<button class='flex absolute z-20 top-0 bottom-0 right-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_forward_ios</span></button>",
})


function openCard (element) {
    card = element.children[1]
    element.classList.add("pop-out")
    card.classList.add("show-me", "px-6", "py-4")
    imageCard = element.children[0]
    element.parentElement.parentElement.style.zIndex = "2000"
    // imageCard.lastElementChild.
    // imageCard.children[1].classList.remove("h-36")
    // imageCard.children[1].classList.add("h-[186px]")
}

function closeCard (element) {
    card = element.children[1]
    element.classList.remove("pop-out")
    card.classList.remove("show-me", "px-6", "py-4")
    element.parentElement.parentElement.style.zIndex = "20"
    // imageCard.children[1].classList.remove("h-[186px]")
    // imageCard.children[1].classList.add("h-36")
} 

function openMenu() {
    document.getElementById("menu").style.width = "250px";
    nav.classList.add("nav-active");
    setTimeout(function(){document.querySelector(".mobile-nav-items").classList.remove("disappear");}, 400);
    document.querySelector(".menu-icon").setAttribute("onclick", "closeMenu()");
    document.querySelector("body").style.overflow = "hidden";
}

function closeMenu() {
    setTimeout(function(){document.getElementById("menu").style.width = "0";}, 100);
    // document.getElementById("menu").style.width = "0";
    document.querySelector(".mobile-nav-items").classList.add("disappear");
    nav.classList.remove("nav-active");
    document.querySelector(".menu-icon").setAttribute("onclick", "openMenu()");
    document.querySelector("body").style.overflow = "scroll";
}

function bringOut() {
    document.querySelector(".the-card").classList.add("pop-card")
}

function removeCard() {
    document.querySelector(".the-card").classList.remove("pop-card")
}

function showDropdown() {
    $('.profileDropdown').toggleClass("show-us")
}


MicroModal.init();

$(".news-slider").slick({
    variableWidth: true,
    infinite: true,
    edgeFriction: 1,
    draggable: false,
    // rewind: true,
    // slidesToShow: 3,
    prevArrow: "<button class='flex absolute z-[200] top-0 bottom-0 left-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_back_ios</span></button>",
    nextArrow: "<button class='flex absolute z-[100] top-0 bottom-0 right-0 h-full w-12 px-1 items-center justify-center py-[6px] next-arrow text-white transition-all duration-100 ease-linear hover:duration-150 group'><span class='material-symbols-outlined !text-3xl group-hover:!text-4xl transition-all duration-150 ease hover:duration-150 !hidden'>arrow_forward_ios</span></button>",
})

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
function showNotification(notif) {
    notification = document.getElementsByClassName(`.${notif}`);
    content = notification.children[1];
    content.classList.add("show-acc");
}