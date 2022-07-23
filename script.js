const prevBtn=document.getElementById('left-arrow');
const nextBtn=document.getElementById('right-arrow');
const slideContainer=document.querySelector('#slider');
const slide=document.querySelector('#slide-track');
let slides=document.querySelectorAll('.slide');
const interval=2000;
let index=0;



const slideWidth=slides[index].clientWidth+34;

const startSlide=()=>{
    setInterval(()=>{
        index++;
        slide.style.transform='translateX('+(-slideWidth*index)+'px)';
        slide.style.transition='0.5s';
    },interval);
}
startSlide();
slide.addEventListener('transitionend',function end(){
    if(index===4){
        slide.style.transition='0.5s';
        index=0;
        slide.style.transform='translateX('+(0)+'px)';
    }
})
