let titleDiv = document.querySelector('#title')
let titleTextArr = titleDiv.textContent.trim().split('')

let title = ""

titleTextArr.forEach((e) => {
    title += `<span class=${e === ' ' ? 'space' : ''}>${e}</span>`
})

titleDiv.innerHTML = title

gsap.set('#title span:not(.space)', {
    display: 'inline-flex',
})
gsap.from('#title span', {
    y: 50,
    stagger: {
        from: 'edges',
        each: .15,
        ease: 'power2.in'
    },
    duration: .6,
    delay: .5,
    opacity: 0,
})