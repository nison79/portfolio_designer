const box1 = document.getElementById('1');
const box2 = document.getElementById('2');
const box3 = document.getElementById('3');
const box4 = document.getElementById('4');
const button = document.getElementById('button'); 
const right = document.getElementsByClassName('.right')
const left = document.getElementsByClassName('.left')

//Event listeners
box1.addEventListener('toggle' , () => {
  gsap.to(".left h1" , {duration:1.5 , scale:5 , x:-2000, ease: "power2.out"})
  gsap.to(".left p" , {duration:1 , scale:3 , y:1000, ease: "power2.out"})

})



//Animation by GSAP
gsap.to(".left h1" , {duration:1.5 ,opacity:1 , ease: "power2.out", x: 0 , scale:1});
// gsap.to(".right" , {duration:3 ,opacity:1 , ease: "power2.out", y: 0 });
gsap.to(".left p" , {duration:3 ,opacity:1 , ease: "back.out(1.7)", x: 0});
// gsap.to(".projects" , {duration:3 , ease: ": back.out(1.5)" , stagger:0.2 })


gsap.from(".projects", {
  duration: 1,
  scale: 0, 
  opacity: 1, 
  delay: 0.9, 
  stagger: 0.1,
  ease: "circ.out", 
  
});

gsap.from("svg", {duration:3.5 , scale:5, rotate:360, x:-2000, y:1000 , ease:"back.out(1.2)"})
