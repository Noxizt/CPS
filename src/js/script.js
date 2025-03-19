// Инициализация Свайпера

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  // autoplay: {
  //   delay: 4000,
  //   stopOnLastSlide: true,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    0: {
      // при ширине экрана 0px и выше:
      enabled: true, // включение свайпера
      autoHeight: true // автоматическая высота swiper-wrapper от высоты слайда (обратить внимание на зависимость параметров swiper-wrapper от swiper)
    },
    768: {
      enabled: false,
      autoHeight: true
    }
  }
})

//Swiper

// if (window.innerWidth < 768) {
//   var swiperBrands = new Swiper('.swiper-brands', {
//     loop: true,
//     slidesPerView: 'auto',
//     // autoplay: {
//     //   delay: 4000,
//     //   stopOnLastSlide: true,
//     //   disableOnInteraction: false
//     // },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     breakpoints: {
//       0: {
//         // при ширине экрана 0px и выше:
//         enabled: true, // включение свайпера
//         autoHeight: true // автоматическая высота swiper-wrapper от высоты слайда (обратить внимание на зависимость параметров swiper-wrapper от swiper)
//       },
//       768: {
//         enabled: false,
//         autoHeight: true
//       }
//     }
//   })

//   var swiperElectronics = new Swiper('.swiper-electronics', {
//     loop: true,
//     slidesPerView: 'auto',
//     // autoplay: {
//     //   delay: 4000,
//     //   stopOnLastSlide: true,
//     //   disableOnInteraction: false
//     // },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     breakpoints: {
//       0: {
//         // при ширине экрана 0px и выше:
//         enabled: true, // включение свайпера
//         autoHeight: true // автоматическая высота swiper-wrapper от высоты слайда (обратить внимание на зависимость параметров swiper-wrapper от swiper)
//       },
//       768: {
//         enabled: false,
//         autoHeight: true
//       }
//     }
//   })

//   var swiperPrices = new Swiper('.swiper-prices', {
//     loop: true,
//     slidesPerView: 'auto',
//     // autoplay: {
//     //   delay: 4000,
//     //   stopOnLastSlide: true,
//     //   disableOnInteraction: false
//     // },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     breakpoints: {
//       0: {
//         // при ширине экрана 0px и выше:
//         enabled: true, // включение свайпера
//         autoHeight: true // автоматическая высота swiper-wrapper от высоты слайда (обратить внимание на зависимость параметров swiper-wrapper от swiper)
//       },
//       768: {
//         enabled: false,
//         autoHeight: true
//       }
//     }
//   })
// }

// Свайпер при ресайзе

// window.addEventListener('resize', function () {
//   if (window.innerWidth < 768) {
//     // swiper.updateAutoHeight(1);
//     swiperBrands.enable()
//     swiperElectronics.enable()
//     swiperPrices.enable()
//   }
//   if (window.innerWidth > 767) {
//     swiperBrands.realIndex = 0 // устанавка активного слайда по индексу
//     swiperElectronics.realIndex = 0
//     swiperPrices.realIndex = 0
//     swiperBrands.disable()
//     swiperElectronics.disable()
//     swiperPrices.disable()
//     // swiper.updateAutoHeight(1)
//   }
// })

const btnBurger = document.querySelector('.btn-burger')
const btnBurgerClose = document.querySelector('.btn-burger-close')

const btnCall = document.querySelector('.btn-call')
const btnSideCall = document.querySelector('.btn-side-call')

const btnMessage = document.querySelector('.btn-message')
const btnSideMessage = document.querySelector('.btn-side-message')

const sidebar = document.querySelector('.sidebar')
const sideCall = document.querySelector('.side-call')
const sideMessage = document.querySelector('.side-message')
const contentContainer = document.querySelector('.content-container')
const header = document.querySelector('.header')

// // ЗАКРЫТЬ МОДАЛКИ ПРИ КЛИКЕ НА CONTENT-CONTAINER
// document.addEventListener('mouseup', function (e) {
//   if (contentContainer.contains(e.target)) {
//     sidebar.animate(
//       [
//         {
//           transform: 'translateX(-375px)'
//         }
//       ],
//       {
//         duration: 700,
//         delay: 200,
//         fill: 'forwards'
//       }
//     )
//     sideCall.animate(
//       [
//         {
//           transform: 'translateX(550px)'
//         }
//       ],
//       {
//         duration: 700,
//         delay: 200,
//         fill: 'forwards'
//       }
//     )
//     sideMessage.animate(
//       [
//         {
//           transform: 'translateX(550px)'
//         }
//       ],
//       {
//         duration: 700,
//         delay: 200,
//         fill: 'forwards'
//       }
//     )
//     contentContainer.style.opacity = '1'
//     header.style.opacity = '1'
//   }
// })

// БУРГЕР__КЛИК
btnBurger.addEventListener('click', () => {
  sidebar.animate(
    [
      {
        transform: 'translateX(375px)'
      }
    ],
    {
      duration: 500,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '0.1'
  header.style.opacity = '0.1'
})

// БУРГЕР__КРЕСТИК
btnBurgerClose.addEventListener('click', () => {
  sidebar.animate(
    [
      {
        transform: 'translateX(-375px)'
      }
    ],
    {
      duration: 700,
      delay: 200,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '1'
  header.style.opacity = '1'
})

// КЛИК__ВНЕ__БУРГЕРА
// document.addEventListener('mouseup', function (e) {

//       if (!sidebar.contains(e.target)) {
//         sidebar.animate(
//           [
//             {
//               transform: 'translateX(-375px)'
//             }
//           ],
//           {
//             duration: 700,
//             delay: 200,
//             fill: 'forwards'
//           }
//         )
//         contentContainer.style.opacity = '1'
//         header.style.opacity = '1'
//       }
// })

// btn-expand-readmore
document.querySelector('.btn-expand-readmore').addEventListener('click', () => {
  if (
    document.querySelector('.btn-expand-readmore__inner').innerHTML ===
    'Читать далее'
  ) {
    document.querySelector('.content__text').style.height = 'auto'
    document.querySelector('.btn-expand-readmore').style.display = 'none'
  }
})

// btn-expand-brands
document.querySelector('.btn-expand-brands').addEventListener('click', () => {
  if (
    document.querySelector('.btn-expand-brands__inner').innerHTML ===
    'Показать все'
  ) {
    document.querySelector('.swiper.swiper-brands').style.height = '272px'
    document.querySelector('.btn-expand-brands__inner').innerHTML = 'Скрыть'
  } else if (
    document.querySelector('.btn-expand-brands__inner').innerHTML === 'Скрыть'
  ) {
    document.querySelector('.swiper.swiper-brands').style.height = '184px'
    document.querySelector('.btn-expand-brands__inner').innerHTML =
      'Показать все'
  }
})

// btn-expand-electronics
document
  .querySelector('.btn-expand-electronics')
  .addEventListener('click', () => {
    if (
      document.querySelector('.btn-expand-electronics__inner').innerHTML ===
      'Показать все'
    ) {
      document.querySelector('.swiper.swiper-electronics').style.height =
        '360px'
      document.querySelector('.btn-expand-electronics__inner').innerHTML =
        'Скрыть'
    } else if (
      document.querySelector('.btn-expand-electronics__inner').innerHTML ===
      'Скрыть'
    ) {
      document.querySelector('.swiper.swiper-electronics').style.height =
        '184px'
      document.querySelector('.btn-expand-electronics__inner').innerHTML =
        'Показать все'
    }
  })

// btn-call
document.querySelector('.btn-call').addEventListener('click', () => {
  document.querySelector('.side-call').animate(
    [
      {
        transform: 'translateX(-550px)'
      }
    ],
    {
      duration: 500,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '0.1'
  header.style.opacity = '0.1'
})

//btn-call-close
document.querySelector('.btn-call-close').addEventListener('click', () => {
  document.querySelector('.side-call').animate(
    [
      {
        transform: 'translateX(550px)'
      }
    ],
    {
      duration: 700,
      delay: 200,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '1'
  header.style.opacity = '1'
})

// btn-side-call
document.querySelector('.btn-side-call').addEventListener('click', () => {
  document.querySelector('.side-call').animate(
    [
      {
        transform: 'translateX(-550px)'
      }
    ],
    {
      duration: 500,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '0.1'
  header.style.opacity = '0.1'
})

// document.addEventListener('mouseup', function (e) {

//     if (!document.querySelector('.side-call').contains(e.target)) {
//       document.querySelector('.side-call').animate(
//         [
//           {
//             transform: 'translateX(550px)'
//           }
//         ],
//         {
//           duration: 700,
//           delay: 200,
//           fill: 'forwards'
//         }
//       )
//       contentContainer.style.opacity = '1'
//       header.style.opacity = '1'
//     }

// })

// btn-message
document.querySelector('.btn-message').addEventListener('click', () => {
  document.querySelector('.side-message').animate(
    [
      {
        transform: 'translateX(-550px)'
      }
    ],
    {
      duration: 500,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '0.1'
  header.style.opacity = '0.1'
})

//btn-message-close
document.querySelector('.btn-message-close').addEventListener('click', () => {
  document.querySelector('.side-message').animate(
    [
      {
        transform: 'translateX(550px)'
      }
    ],
    {
      duration: 700,
      delay: 200,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '1'
  header.style.opacity = '1'
})

// btn-side-message
document.querySelector('.btn-side-message').addEventListener('click', () => {
  document.querySelector('.side-message').animate(
    [
      {
        transform: 'translateX(-550px)'
      }
    ],
    {
      duration: 500,
      fill: 'forwards'
    }
  )
  contentContainer.style.opacity = '0.1'
  header.style.opacity = '0.1'
})

// document.addEventListener('mouseup', function (e) {
//   if (window.innerWidth < 1440) {
//     if (!document.querySelector('.side-message').contains(e.target)) {
//       document.querySelector('.side-message').animate(
//         [
//           {
//             transform: 'translateX(550px)'
//           }
//         ],
//         {
//           duration: 700,
//           delay: 200,
//           fill: 'forwards'
//         }
//       )
//       contentContainer.style.opacity = '1'
//       header.style.opacity = '1'
//     }
//   }
// })
