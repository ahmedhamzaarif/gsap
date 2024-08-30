let open = document.querySelector('#open')
let close = document.querySelector('#close')

let navTl = gsap.timeline()
let menuTl = gsap.timeline()

// Nav
navTl.from('#nav h2', {
    y: -50,
    opacity: 0,
    delay: .5,
    duration: .2
})

navTl.from('#nav #open', {
    y: -50,
    opacity: 0
})

// Menu
menuTl.to("#menu", {
    right: 0,
    duration: .5
})
menuTl.from("#menu li", {
    x: '100%',
    stagger: .2,
    opacity: 0,
    duration: .5,
    ease: 'sine.out'
})
menuTl.from("#menu #close", {
    opacity: 0,
    duration: .5
})

menuTl.pause()


open.addEventListener("click", () => {
    menuTl.play()
})
close.addEventListener('click', () => {
    menuTl.reverse()
})