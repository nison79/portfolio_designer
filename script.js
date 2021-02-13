const box1 = document.getElementById('1');
const box2 = document.getElementById('2');
const box3 = document.getElementById('3');
const box4 = document.getElementById('4');
const button = document.getElementById('button'); 
const right = document.getElementsByClassName('.right')
const left = document.getElementsByClassName('.left')
const open = document.getElementById('open');
const modal = document.getElementById('modal')




//Show modal
open.addEventListener('click' , () => modal.classList.add('show-modal'));

//Hide modal
window.addEventListener('click' , e => e.target == modal ? modal.classList.remove('show-modal') : false );




//Event listeners
open.addEventListener('click' , () => {
  gsap.to(".modal" , {duration:1.5 , scale:1.2 ,  ease: "power2.out"})
  // gsap.to(".left" , {duration:1 , scale:3 ,  ease: "power2.out"})

})


//Animation by GSAP
gsap.to(".left h1" , {duration:1.5 ,opacity:1 , ease: "power2.out", x: 0 , scale:1});
gsap.to(".right" , {duration:3 ,opacity:1 , ease: "power2.out", y: 0 });
gsap.to(".left p" , {duration:3 ,opacity:1 , ease: "back.out(1.7)", x: 0});
// gsap.to(".projects" , {duration:3 , ease: ": back.out(1.5)" , stagger:0.2 })
gsap.to(".left h2" , {duration:3.1 ,opacity:1 , delay:0.5, ease: "back.out(1.9)", x: 0});


gsap.from(".projects", {
  duration: 1,
  scale: 0, 
  opacity: 1, 
  delay: 0.9, 
  stagger: 0.1,
  ease: "circ.out", 
  
});

gsap.from(".send", {duration:3 , scale:6, rotate:360,   ease:"back.out(1.9)"})
