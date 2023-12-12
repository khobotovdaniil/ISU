export default function advents() {
  const images = document.querySelectorAll('.advents__item__img')
  const today = new Date().getDate()

  images.forEach(element => {
    const images = element.querySelectorAll('img')

    element.addEventListener('click', () => {
      
      if (+today >= +element.getAttribute('data-day')) {
        images[0].classList.add('animate__animated', 'animate__bounceOut')
        setTimeout(() => {
          images[0].classList.add('hidden')
          images[1].classList.add('animate__animated', 'animate__bounceIn')
          images[1].classList.remove('hidden')
        }, 1000);
      } else {
        images[0].classList.add('animate__animated', 'animate__bounce')
        setTimeout(() => {
          images[0].classList.remove('animate__bounce')
        }, 1000);
      }
    })
  })

}