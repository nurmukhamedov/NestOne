("use strict");
// --------- menu start ------------------
// --------- menu start ------------------
// --------- menu start ------------------

const btn = document.querySelector(".header__nav-icon"),
  close = document.querySelector(".header__nav-menu"),
  nav_item = document.querySelectorAll(".header__nav-item"),
  main__header = document.querySelector(".header__nav"),
  box = document.querySelector(".header__nav-menu-ul");

function menu() {
  btn.addEventListener("click", function () {
    box.classList.toggle("show");
  });
}
menu();

close.addEventListener("click", function () {
  box.classList.remove("show");
});

// --------- menu end ------------------
// --------- menu end ------------------
// --------- menu end ------------------

// -------------sticky nav -------------
// const stickyNav = function () {
//   window.addEventListener("scroll", function () {
//     main__header.classList.toggle("sticky", window.scrollY > 250);
//   });
// };
// -------------sticky nav end -------------
// -------------sticky nav end -------------
// -------------sticky nav end -------------

// ---------------- Tabs start --------------------------
// ---------------- Tabs start --------------------------
// ---------------- Tabs start --------------------------

$(function () {
  class tabs {
    constructor(argument) {
      $(argument).find(".room__content-tab").not(".active").hide();
      $(argument)
        .find(".room__content-tabHeader--item")
        .click(function () {
          $(argument)
            .find(".room__content-tabHeader--item")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
          $(argument)
            .find(".room__content-tab")
            .hide()
            .eq($(this).index())
            .fadeIn(1000);
        });
    }
  }

  let wrap = $(".room_content");

  for (let i of wrap) {
    i = new tabs(i);
  }
  class tab {
    constructor(argument1) {
      $(argument1).find(".room__contentWarpper--itemBox").not(".active").hide();
      $(argument1)
        .find(".room__contentWrapper-item")
        .click(function () {
          $(argument1).find(this).next().slideToggle(500);
          $(argument1)
            .find(".room__contentWarpper--itemBox")
            .not($(this).next())
            .slideUp(500);
        });
    }
  }

  let wrapper = $(".room__contentWrapper");
  for (let i of wrapper) {
    i = new tab(i);
  }
});

// ---------------- Tabs End --------------------------
// ---------------- Tabs End --------------------------
// ---------------- Tabs End --------------------------

// ----------------Slider ----Start-------------
// ----------------Slider ----Start-------------
// ----------------Slider ----Start-------------

const btn_prev = document.getElementById("btn__left");
const btn__next = document.getElementById("btn__right");
let image = document.querySelectorAll(".flux__content-itemCenter img");
let i = 0;

btn__next.addEventListener("click", function () {
  image[i].classList.remove("active");
  i++;

  if (i >= image.length) {
    i = 0;
  }
  image[i].classList.add("active");
});
btn_prev.addEventListener("click", function () {
  image[i].classList.remove("active");
  i--;

  if (i <= 0) {
    i = image.length - 1;
  }
  image[i].classList.add("active");
});

function sliderNext() {
  image[i].classList.remove("active");
  i++;
  if (i >= image.length) {
    i = 0;
  }
  image[i].classList.add("active");
}
start();

function start() {
  return (interval = setInterval(sliderNext, 5000));
}
let slider = document.querySelector(".flux__content");

function stop() {
  clearInterval(interval);
}
slider.onmouseover = function () {
  stop();
};
slider.onmouseout = function () {
  start();
};

// ----------------Slider ----End-----------------
// ----------------Slider ----End-----------------
// ----------------Slider ----End-----------------

// ----------------Swiper Start--------------------
// ----------------Swiper Start--------------------
// ----------------Swiper Start--------------------

(function () {
  new Swiper(".review_slider", {
    slidesPerView: 1,
    loop: !0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".review_slider-next",
      prevEl: ".review_slider-prev",
    },
    breakpoints: { 992: { slidesPerView: 3 } },
  });
})();

// ----------------Swiper End--------------------
// ----------------Swiper End--------------------
// ----------------Swiper End--------------------

// -----------------------------scroll animation start------------------
// -----------------------------scroll animation start------------------
// -----------------------------scroll animation start------------------

$(function () {
  let link = $(".header__nav-menu a");

  link.on("click", function (e) {
    e.preventDefault();

    link.removeClass("active");

    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);

    $("html, body").animate({ scrollTop: target.offset().top - 150 }, 2000);
  });
});
// -----------------------------scroll animation end------------------
// -----------------------------scroll animation end------------------
// -----------------------------scroll animation end-----------------
