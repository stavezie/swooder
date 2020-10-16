const menu = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');
const logo = document.querySelector('header__logo');

var info = document.querySelector('.header__icon');
var hover_text = document.querySelector('.header__hover-text');

menu.addEventListener('click', function(){

    if (nav.style.opacity == '1') {
        nav.style.height = '0';
        nav.style.width = '0';
        nav.style.opacity = '0';
        menu.classList.toggle('header__menu-active');
    }
    else {
        nav.style.height = 'auto';
        nav.style.width = 'auto';
        nav.style.opacity = '1';
        nav.style.transition = 'opacity 2s linear';
        menu.classList.toggle('header__menu-active');
    }
});


// VideoPlayer


function videoPlayer(btn) {

    const video = btn.previousElementSibling;

    if (video.paused) {
        video.play();
        btn.style.opacity = 0;
        btn.style.height = "265px";
        btn.style.width = "265px";
    }
    else {
        video.pause();
        btn.style.opacity = 1;
        btn.style.height = "auto";
        btn.style.width = "auto";
    }

  }

// Help Text


info.addEventListener('mouseenter', function s(element) {
    hover_text.style.opacity = 1;
    hover_text.style.transition = "opacity 0.4s linear";
});


info.addEventListener('mouseleave', function() {
    hover_text.style.opacity = 0;
    hover_text.style.transition = "opacity 0.4s linear";
});

// FancyBox

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1
    }
});


