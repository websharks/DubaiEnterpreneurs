const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
// script.js
const searchContainer = document.querySelector('.search-container');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');

searchContainer.addEventListener('click', () => {
    searchBox.classList.toggle('expanded');
    searchInput.focus();
});


const text = document.querySelector('.text');

text.addEventListener('animationiteration', () => {
    text.style.animation = 'none';
    void text.offsetWidth; // Trigger reflow to restart the animation
    text.style.animation = null;
});
let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
const btnPrev=document.querySelector('#btn-prev');
const btnNext=document.querySelector('#btn-next');


btnPrev.addEventListener('click',function(){
  PrevSlide();
});
btnNext.addEventListener('click',function(){
  NextSlide();
});

function updatePosition(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });

  sliders[slidePosition].classList.add('active');

  dots.forEach(dot=>{
    dot.classList.remove('dot-active');
  });

  dots[slidePosition].classList.add('dot-active');
}

function PrevSlide(){
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }else{
    slidePosition--;
  }
  updatePosition();
}
function NextSlide(){
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
}


const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
 const dot=document.createElement('div');
 dot.classList.add('dot');
 dotContainer.appendChild(dot);
});

const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');


dots.forEach((dot,index)=>{
  dot.addEventListener('click',function(){
    slidePosition=index;
    updatePosition();
  });
});


setInterval(()=>{
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
},5000);