let screen = window.innerWidth
let start = Number(screen) * 0.1
let end = Number(screen) * 0.9
// var initialPath = `M 10 100 Q 500 100 990 100`
var initialPath = `M ${start} 100 Q ${screen/2} 100 ${end} 100`
var string = document.querySelector('#string')

gsap.set("#string svg", {
    attr: {width: screen}
})
gsap.set("#string path", {
    attr: {d: initialPath, stroke: 'red'}
})

string.addEventListener("mousemove", function (dets) {
    // let path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    let path = `M ${start} 100 Q ${dets.x} ${dets.y} ${end} 100`

    gsap.to('#string path', {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function () {
    gsap.to('#string path', {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1,.2)"
    })
})
