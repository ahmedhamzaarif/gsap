gsap.from('#wrapper', {
    opacity: 0,
    delay: 1,
    duration: 5,
    width: 0
})

gsap.from('.text', {
    opacity: 0,
    delay: 1,
    // duration: .5,
    width: 0,
    y: 50,
    stagger: .3,
    width: '100%'
})

gsap.from('#box1', {
    x: 1000,
    delay: 1,
    duration: 1.5,
})
gsap.to('#box2', {
    x: 1000,
    delay: 2.5,
    duration: 2,
    rotate: 360,
    yoyo: true,
    repeat: 1,
    backgroundColor: 'crimson'
})
