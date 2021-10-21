function SwiperBox1__init() {
  const swiper = new Swiper(".swiper-box-1 .swiper", {
    loop:true,
    speed : 1000,
    autoplay: {
      delay: 2800,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        let txt = "";

        if ( index == 0 ) {
          txt = "[EVENT] 향기까지 취향대로";
        }
        else if ( index == 1 ) {
          txt = "[EVENT] 버터와 오일이 만나면?";
        }
        else if ( index == 2 ) {
          txt = "[EVENT] 할로윈 에디션 론칭!";
        }
        else if ( index == 3 ) {
          txt = "[EVENT] 다운로드 러쉬 9월";
        }
        else if ( index == 4 ) {
          txt = "[EVENT] 다음을 기대하세요!";
        }

        className += ' index-' + index;

        return '<span class="' + className + '"><div>' + txt + "</div></span>";
      },
    },
  });
}

SwiperBox1__init();