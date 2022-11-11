const animateScroll = (e) => {
    const desing = document.querySelector(e);
    desing.scrollIntoView({
        behavior: 'smooth'
    });
}

const homes = document.querySelector(".home");
const about = document.querySelector(".about");
const skill = document.querySelector(".skill");
const port = document.querySelector(".port");
const contact = document.querySelector(".contact");

document.addEventListener('DOMContentLoaded', function(){

homes.addEventListener('click', (el)=>{
    animateScroll(".presentacion");
});

about.addEventListener('click', (el)=>{
    animateScroll("#ABOUT");
});

skill.addEventListener('click', (el)=>{
    animateScroll("#SKILLS");
});

port.addEventListener('click', (el)=>{
    animateScroll("#PORTAFOLIO");
});

contact.addEventListener('click', (el)=>{
    animateScroll("#CONTAC");
});

});



  AOS.init({
    duration: 1500
  });

