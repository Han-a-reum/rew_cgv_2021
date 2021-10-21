function SwiperBox1__init() {
  const swiper = new Swiper(".swiper-box-1 .swiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
}

SwiperBox1__init();