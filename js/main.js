const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


/* ======================================================================================== */
  
const burgerButton = document.querySelector(".header__burger")
const navList = document.querySelector(".header__menu-nav")

burgerButton.addEventListener("click", open)

function open(){
  navList.classList.toggle("active-menu")
  burgerButton.classList.toggle('active')
}


navList.querySelectorAll(".header__menu-link").forEach(link => {
  link.addEventListener("click", () => {
    burgerButton.classList.remove("active")
    navList.classList.remove("active-menu")
    html.classList.remove("unscroll")
  })
})


/* ======================================================================================== */
  
const instagram = document.querySelector(".instagram__items")

  Array.from(instagram.children).forEach(item => {
    const dublicateNode = item.cloneNode(true)
    dublicateNode.setAttribute("aria-hidden", true)
    instagram.appendChild(dublicateNode)
  })

/* ======================================================================================== */

const anchors = document.querySelectorAll('[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault()

        const blockID = anchor.getAttribute("href").substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})

/* ======================================================================================== */


const scrollRevealOptins = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".abouta--title", {
  ...scrollRevealOptins,
})

ScrollReveal().reveal(".about__text--1", {
  ...scrollRevealOptins,
  delay: 800,
})

ScrollReveal().reveal(".about__text--2", {
  ...scrollRevealOptins,
  delay: 1000,
})


ScrollReveal().reveal(".about__logo", {
  ...scrollRevealOptins,
  delay: 1500,
})

ScrollReveal().reveal(".services__title", {
  ...scrollRevealOptins,
})

ScrollReveal().reveal(".services__text", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".services__item", {
  ...scrollRevealOptins,
  duration: 1000,
  delay: 1000,
  interval: 500,
  distance: "0px",
})

ScrollReveal().reveal(".blog__title", {
  ...scrollRevealOptins,
})

ScrollReveal().reveal(".blog__subtitle", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".blog__text", {
  ...scrollRevealOptins,
  delay: 1000,
})

ScrollReveal().reveal(".blog__button", {
  ...scrollRevealOptins,
  delay: 1500,
})

