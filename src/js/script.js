// Инициализация Свайпера
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
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

// Свайпер при ресайзе
window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    // swiper.updateAutoHeight(1);
    swiper.enable()
  } else if (window.innerWidth >= 768) {
    swiper.realIndex = 0 // устанавка активного слайда по индексу
    swiper.disable()
    swiper.updateAutoHeight(1)
  }
})

// Expand кнопка
document.querySelector('.button-expand').addEventListener('click', () => {
  if (
    document.querySelector('.button-expand_inner').innerHTML === 'Показать все'
  ) {
    document.querySelector('.swiper.swiper-custom').style.height = '272px'
    document.querySelector('.button-expand_inner').innerHTML = 'Скрыть'
  } else if (
    document.querySelector('.button-expand_inner').innerHTML === 'Скрыть'
  ) {
    document.querySelector('.swiper.swiper-custom').style.height = '184px'
    document.querySelector('.button-expand_inner').innerHTML = 'Показать все'
  }
})

// btn-Call
// buttonCall.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (countCall < 2) {
//         contentContainer.style.opacity = "0.3";
//         call.style.right = "0px";
//         sideBar.style.left = window.innerWidth < 1440 ? "-360px" : "0px";
//         if (window.innerWidth >= 1440) {
//           sideBar.style.opacity = '0.3';
//         }
//         countCall++;
//       }
//     });
//   });

// кнопка БУРГЕР МЕНЮ
document.querySelector('.ic-burger').addEventListener('click', () => {
  document.querySelector('.sidebar').animate(
    [
      {
        transform: 'translateX(300px)'
      }
    ],
    {
      duration: 1000,
      fill: 'forwards',
    }
  )
})

// кнопка КРЕСТИК
document.querySelector('.ic-cross').addEventListener('click', () => {
  //   document.querySelector('.sidebar').style.left = '-500px'
  document.querySelector('.sidebar').animate(
    [
      {
        transform: 'translateX(-300px)'
      }
    ],
    {
      duration: 1000,
      fill: 'forwards',
    }
  )
})
