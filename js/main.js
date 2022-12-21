const slides = document.querySelectorAll('.gallery__slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
let timer = 0;

function autoSlider() {
    timer = setTimeout(nextSlide, 2000);

}

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        autoSlider();
    } else {
        index++;
        activeSlide(index);
        autoSlider();
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

autoSlider();
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//! slider
const newsPrev = document.getElementById('news-prev'),
    newsNext = document.getElementById('news-next'),
    newsSlides = document.querySelectorAll('.news__slide'),
    dots = document.querySelectorAll('.dot');

let indexNews = 0;

const prepareCurrentSlide = ind => {
    NewsActiveSlide(indexNews);
    NewsActiveDot(indexNews);
}

const NewsActiveSlide = n => {
    for (slide2 of newsSlides) {
        slide2.classList.remove('active');
    }
    newsSlides[n].classList.add('active');
}

const NewsActiveDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const NewsNextSlide = () => {
    if (indexNews == newsSlides.length - 1) {
        indexNews = 0;
        prepareCurrentSlide(indexNews);
    } else {
        indexNews++;
        prepareCurrentSlide(indexNews);
    }
}

const NewsPrevSlide = () => {
    if (indexNews == 0) {
        indexNews = newsSlides.length - 1;
        prepareCurrentSlide(indexNews);
    } else {
        indexNews--;
        prepareCurrentSlide(indexNews);
    }
}

dots.forEach((item, indexNewsDot) => {
    item.addEventListener('click', () => {
        indexNews = indexNewsDot
        prepareCurrentSlide(indexNews);
    })
})

newsNext.addEventListener('click', NewsNextSlide);
newsPrev.addEventListener('click', NewsPrevSlide);


//!
const menu = document.querySelector('.burger__menu__body')
const menuBtn = document.querySelector('.burger__menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('menu__body')) {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        }
    })

    menu.querySelectorAll('.burger__menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

//!

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});