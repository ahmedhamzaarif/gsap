let main = document.querySelector('#main') 
let cursor = document.querySelector('#cursor') 
let imageDiv = document.querySelector('#image') 

main.addEventListener('mousemove', (dets) => {
    console.log(dets)
    gsap.to('#cursor', {
        x: dets.x -10,
        y: dets.y -10,
        duration: 1,
        ease: 'back.out'
    })
})

imageDiv.addEventListener('mouseenter', (dets) => {
    cursor.textContent = 'View More'
    gsap.to('#cursor', {
        scale: 4,
        backgroundColor: '#ffffff8a'
    })
})

imageDiv.addEventListener('mouseleave', (dets) => {
    cursor.textContent = ''
    gsap.to('#cursor', {
        scale: 1,
        backgroundColor: '#fff'
    })
})