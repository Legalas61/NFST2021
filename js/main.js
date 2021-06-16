// {event} open menu
const sandwich = document.querySelector('.sandwich'),
    menu = document.querySelector('header .global-wrap .info')
sandwich.addEventListener('click', ()=>{
    menu.classList.toggle('close')
})
// end {event} open menu
window.addEventListener('resize', ()=>{
    window.screen.width <= 450? menu.classList.add('close'):menu.classList.remove('close')

})

// ferst slider
const presentationSlider = document.querySelector('.presentation-location .slider')
if (presentationSlider) {
    const picts = presentationSlider.querySelectorAll('.picts img'),
          btns = presentationSlider.querySelectorAll('.slider .slider-btn');
    let i = 0
    setInterval(() => {
        i++
        if(i >= picts.length){
            picts[i-1].style.display='none'
            btns[i-1].classList.remove('active')
            i=0
            picts[i].style.display='block'
            btns[i].classList.add('active')
        }else{
            picts[i-1].style.display='none'
            btns[i-1].classList.remove('active')
            picts[i].style.display='block'
            btns[i].classList.add('active')
        }
    }, 2000);
    
    
}
// end ferst slider

// Two slider
const eventArea = document.querySelector('.last-event')
if (eventArea) {
    const slier = eventArea.querySelectorAll('.images .wrap')[0],
          btnLeft = eventArea.querySelectorAll('.arrow-left')[0],
          btnRight = eventArea.querySelectorAll('.arrow-right')[0];
    let now = slier.style.left || -370;
    const moveSlide = (toSide) =>{
              if (toSide) {          
                  switch (toSide) {
                      case 'left':
                            if(now >=-1850){
                                console.log(now);
                                now -= 370
                                slier.style.left = now +370+"px"
                            }
                          break;
                        case 'right':
                            if (now <=-740) {
                                console.log(now);
                                now += 370
                                slier.style.left = now +370+"px"
                            }
                    }
              }
          };

    btnLeft.addEventListener('click', ()=> moveSlide('left'))
    btnRight.addEventListener('click', ()=> moveSlide('right'))

    const slier2 = eventArea.querySelectorAll('.images .wrap')[1],
    btnLeft2 = eventArea.querySelectorAll('.arrow-left')[1],
    btnRight2 = eventArea.querySelectorAll('.arrow-right')[1];
    let now2 = slier2.style.left || -370;
    const moveSlide2 = (toSide) =>{
            if (toSide) {          
                switch (toSide) {
                    case 'left':
                        if(now2 >=-1850){
                            now2 -= 370
                            slier2.style.left = now2 +370+"px"
                        }
                        break;
                    case 'right':
                        if (now2 <=-740) {
                            now2 += 370
                            slier2.style.left = now2 +370+"px"
                        }
                }
            }
        };

    btnLeft2.addEventListener('click', ()=> moveSlide2('left'))
    btnRight2.addEventListener('click', ()=> moveSlide2('right'))
}
// End Two slider

// women slider
const womanArea = document.querySelector('.spikers')
if (womanArea) {
    const slier = womanArea.querySelector('.wrap .line')
    const maxHeight = womanArea.style.height;
    let now = slier.style.top || -393;
    setInterval(() => {
        if(now <=maxHeight){
            now -= 393
            slier.style.top = now + 393 +"px"
        }
        else{
            // запуск в обратку
        }
    }, 2000);
}
// End women slider

// arkadiy
const faqs = document.querySelectorAll('.faq .item')
if (faqs) {
    for (let i = 0; i < faqs.length; i++) {
        faqs[i].onclick = (e)=>{
            let response = e.target.parentNode.querySelector('.response')
            if (response) {
                response.classList.toggle('close')
                e.target.classList.toggle('to-up')
            }
        }
        
    }
}
// end arkadiy