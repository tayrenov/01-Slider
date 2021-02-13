new Swiper('.image-slider', { 
  //Авто высота
    autoHeight:true,
  //Стрелки
  /*
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },*/
    //Булеты, навигация, текущее положение
    pagination: {
      el:'.swiper-pagination',
      clickable: true
    }
  });
