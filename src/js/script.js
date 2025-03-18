// Инициализация Свайпера
const swiper = new Swiper('.swiper', {
  // loop: true,
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
  }
  if (window.innerWidth >= 768) {
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
    document.querySelector('.swiper.swiper-brands').style.height = '272px'
    document.querySelector('.button-expand_inner').innerHTML = 'Скрыть'
  } else if (
    document.querySelector('.button-expand_inner').innerHTML === 'Скрыть'
  ) {
    document.querySelector('.swiper.swiper-brands').style.height = '184px'
    document.querySelector('.button-expand_inner').innerHTML = 'Показать все'
  }
})

// кнопка БУРГЕР МЕНЮ
document.querySelector('.btn-burger').addEventListener('click', () => {
  document.querySelector('.sidebar').animate(
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
})

// кнопка КРЕСТИК
document.querySelector('.btn-burger-close').addEventListener('click', () => {
  document.querySelector('.sidebar').animate(
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
})

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
})