let swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: "auto",
    speed: 700,
    loop:'true',
    preventClicks: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: -45,
        depth: 350,
        modifier: 1,
        slideShadows:false,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
})

// Scrooll animation

AOS.init(
    {
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms


    }
);