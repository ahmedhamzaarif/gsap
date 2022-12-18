var tl = gsap.timeline({
    repeat: -1
});
tl
.to(".img-container", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2
}, 'a')

.to(".text h1", {
    delay: 1,
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
}, 'a')
.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 3,
    top: -100
}, 'a')