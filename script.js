const track=document.querySelector('.carousel__track');
const slides=Array.from(track.children)
const trackContainer=document.querySelector('.carousel__track-container')
const nxt=document.querySelector('.carousel__button--right');
const prev=document.querySelector('.carousel__button--left');
const body=document.getElementById('body')
const video=document.getElementById('video')
const playButton=document.getElementById('play_button')
const openCart=document.getElementById('cart_open')
const slideSize=slides[0].getBoundingClientRect();
const overlay=document.getElementById('backdrop');
const slideWidth=slideSize.width;
const cartModal=document.querySelector('.cart_modal')
const closeCartBtn=document.querySelector('.close_button')
const dishModal=document.querySelector('.dish_modal')

const openDishBtn=document.querySelector('.open_dish_btn')
const closeDishBtn=document.querySelector('.cancel')
const submitDishBtn=document.querySelector('.submit')

var width=0


const isPhone=window.matchMedia('(max-width : 480px)').matches;

if(isPhone){
    track.style.transform='translateX('+330+'px)';
}else{
    track.style.transform='translateX('+245+'px)';
}


playButton.addEventListener('click',()=>{
    if(video.paused==true){
        video.play()
        playButton.style.display='none'
    }else{
        video.pause()
    }
})

video.onclick=function(){
    if(video.paused==false){
        video.pause();
        playButton.style.display='block'
    }else{
        video.play();
        playButton.style.display='none'
    }
}



prev.addEventListener('click',()=>{
    const currentSlide=track.querySelector('.current-slide');

    const prevSlide=currentSlide.previousElementSibling;

    if(prevSlide){
        width-=currentSlide.getBoundingClientRect().width;

        
        if(isPhone){
            console.log(width)
            if(width==150){
                track.style.transform='translateX('+330+'px)';
            }
            if(width==450){
                track.style.transform='translateX('+0.2+'px)';
            }
        }
    
        if(!isPhone && width<340){
            track.style.transform='translateX('+270+'px)';
        }

    if(prevSlide!==null){
        currentSlide.classList.remove('current-slide')
        prevSlide.classList.add('current-slide')
    }
    }
})

nxt.addEventListener('click',()=>{
    const currentSlide=track.querySelector('.current-slide');
    const nextSlide=currentSlide.nextElementSibling;
    if(nextSlide!==null){
        
        width+=currentSlide.getBoundingClientRect().width;

        if(isPhone){
            if(width==300){
                track.style.transform='translateX(-'+10+'px)';
            }
            if(width==600){
                track.style.transform='translateX(-'+350+'px)';
            }
        }
    
        if(!isPhone && width>340){
            track.style.transform='translateX(-'+270+'px)';
        }
    
    
        currentSlide.classList.remove('current-slide')
        nextSlide.classList.add('current-slide')
    }
    
    //move
    

    
    


    
})

// left -> move left


// right -> move right

openCart.addEventListener('click',()=>{
    overlay.style.display='block'
    cartModal.style.display='block'
    body.style.overflow='hidden'
})

openDishBtn.addEventListener('click',()=>{
    overlay.style.display='block'
    dishModal.style.display='block'
    body.style.overflow='hidden'
})

closeCartBtn.addEventListener('click',()=>{
    overlay.style.display='none'
    cartModal.style.display='none'
    body.style.overflow='auto'
})


closeDishBtn.addEventListener('click',()=>{
    overlay.style.display='none'
    dishModal.style.display='none'
    body.style.overflow='auto'
})

submitDishBtn.addEventListener('click',()=>{
    overlay.style.display='none'
    dishModal.style.display='none'
    body.style.overflow='auto'

    setTimeout(()=>{
        window.alert('Dish added!')
    },500)
})