gsap.from("#page1 #box", {
    scale: .5,
    delay: 1,
    duration: 2,
    rotate: 360 
})

gsap.from("#page2 #box", {
    scale: .5,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: '#page2 #box'
})
gsap.from("#page3 #box", {
    scale: .5,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: '#page3 #box',
        scroller: 'body',
        markers: true,
        start: 'top 60%',
        end: 'top 30%',
        scrub: 3 //true
    }

})

gsap.to("#page4 h2", {
    transform: 'translateX(calc(90vw - 100%))',
    scrollTrigger: {
        trigger: '#page4',
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2, //true
        pin: true
    }

})