
const swiper = new Swiper('.swiper',{
    loop:true,
    grabCursor:true,
    spaceBetween:10,

    //if we need pagination
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    //navigation arrows
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView:1
        },
        740:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
    
});

const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const arrow_icon = accordian.querySelector('.arrow_icon');
    const answers = accordian.querySelector('.answers');

    accordian.addEventListener('click',() => {
        arrow_icon.classList.toggle('active');
        answers.classList.toggle("active");
    });
});

