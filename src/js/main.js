import '../scss/style.scss'

const scrollToElement = (el, instance = 0) => {
  const elements = document.querySelectorAll(el)
  if (elements.length > instance){
    elements[instance].scrollIntoView({behavior:'smooth'})
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const link1 = document.getElementById('link1')
  const link2 = document.getElementById('link2')
  const link3 = document.getElementById('link3')

  if (link1) {
    link1.addEventListener('click', (e)=> {
      e.preventDefault()
      scrollToElement('.header');
    })
  }
  if (link2) {
    link2.addEventListener('click', (e)=> {
      e.preventDefault()
      scrollToElement('.header', 1);
    })
  }
  if (link3) {
    link3.addEventListener('click', (e)=> {
      e.preventDefault()
      scrollToElement('footer');
    })
  }
})