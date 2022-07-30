const menu=document.querySelector('.menu')
const toggleMenu=document.querySelector('.toggle-menu')
const menuLink=document.querySelectorAll('.menu-item a')

toggleMenu.addEventListener('click',()=>{
    toggleMenu.classList.toggle('active')
    menu.classList.toggle('active')
})

menuLink.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('active')
        toggleMenu.classList.remove('active')
    })
})

//animation

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-home',{
    duration:0.6,
    opacity:0,
    x:-200,
    stagger:0.3
})

gsap.from('.animate-serve',{
    scrollTrigger:'.animate-serve',
    duration:1.0,
    opacity:0,
    x:-200,
    stagger:0.1,
    delay:0.2
})

gsap.from('.animate-img',{
    scrollTrigger:'.animate-img',
    duration:1.0,
    opacity:0,
    x:200,
    stagger:0.1,
    delay:0.2
})

gsap.from('.animate-team',{
    scrollTrigger:'.animate-team',
    duration:0.6,
    opacity:0,
    y:-100,
    stagger:0.4,
    delay:0.3
})

gsap.from('.animate-team-card',{
    scrollTrigger:'.animate-team-card',
    duration:0.6,
    opacity:0,
    y:-100,
    stagger:0.4,
    delay:0.5
})

gsap.from('.animate-email',{
    scrollTrigger:'.animate-email',
    duration:1.0,
    opacity:0,
    x:-200,
    stagger:0.1
})
