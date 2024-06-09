//                                                    Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


//                                                    Slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

var repeat =  function(activeClass){
    let active = document.getElementsByClassName('active');
    let i  = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 6500);
    };
    repeater();
};

repeat();



//                                                  Transisi
    var sudahTransisi = false;

    window.addEventListener('scroll', function() {
        var tentang = document.querySelector('.tentang');
        var tentangPosition = tentang.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (tentangPosition < screenPosition && !sudahTransisi) {
        tentang.classList.add('active');
        sudahTransisi = true;
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        const makananItems = document.querySelectorAll('.makanan');
        makananItems.forEach(function (item) {
            item.classList.add('animate__animated', 'animate__slideInUp');
        });
    });


//         navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.bar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        document.querySelectorAll('.bar a').forEach(a => a.style.display = 'block');
    };

