var tl = gsap.timeline()

// tl.to("#box1", {
//     backgroundColor: "tomato",
//     delay: 1,
//     duration: 1
// })
// tl.to("#box2", {
//     backgroundColor: "tomato",
//     duration: 1
// })

tl.from("#logo", {
    y: -30,
    opacity: 0,
    delay: .5,
    duration: 1
})
tl.from("#links h4", {
    y: -30,
    opacity: 0,
    stagger: .5
})

tl.from("#hero", {
    y: 30,
    opacity: 0,
    stagger: .5,
})