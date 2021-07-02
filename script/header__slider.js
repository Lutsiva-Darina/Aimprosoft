let offset = 0;
let slideIndex = 1;

const slider = document.querySelector('.slider'),
    // slider = document.querySelector('.offer__slider'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    images = document.querySelectorAll('.slider .slider__line .offer__slide');
// width = window.getComputedStyle(slidesWrapper).width,
sliderLine = document.querySelector('.slider__line');

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    return width;
    // rollSlider();
}

init();
window.addEventListener('resize', init);

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + width + 'px)';

}
// sliderLine.style.width = 100 * slides.length + '%';
// sliderLine.style.display = 'flex';
// sliderLine.style.transition = '0.5s all';

// slidesWrapper.style.overflow = 'hidden';

// slides.forEach(slide => {
//     slide.style.width = width;
// });

const indicators = document.createElement('ol'),
    dots = [];
indicators.classList.add('carousel-indicators');
indicators.style.cssText = `
    position: absolute;
    top:95%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index: 15;
    display: flex;
    list-style: none;
`; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
// indicators.style.marginLeft = -width / 2 + 'px';
// indicators.style.left = 50 + '%';
slider.append(indicators);


for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 15px;
        height: 15px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: aqua;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        transition: opacity .6s ease;
        border-radius:50%;
    `;
    if (i == 2) {
        dot.style.backgroundColor = 'black';
    }
    indicators.append(dot);
    dots.push(dot);
}
let counter = 0;
// for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener('click', function() {
//         // counter = dots[i].length;
//         // console.log(dots[i].target.getA);
//         const slideTo = dots[i].target.getAttribute('data-slide-to');
//     });
// }
// let count = 0;
// for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener('click', function() {
//         count++;
//         if (count >= images.length) {
//             count = 0;
//         }
//         rollSlider();
//     });
//     dots[i].addEventListener('click', function() {
//         count++;
//         if (count >= images.length) {
//             count = 0;
//         }
//         rollSlider();
//     });

// }
// document.querySelector('.slider-next').addEventListener('click', function() {
//     count++;
//     if (count >= images.length) {
//         count = 0;
//     }
//     rollSlider();
// });
let slideTo;
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        slideTo = e.target.getAttribute('data-slide-to');
        console.log(slideTo);
        sliderLine.style.transform = 'translate(-' + (slideTo - 1) * width + 'px)';
        return slideTo;
    });
});

// dots[slideIndex - 1].style.backgroundColor = 'black';
// function animation() {
//     dots.forEach(dot => {

//         dot.addEventListener('click', (e) => {
//             const slideTo = e.target.getAttribute('data-slide-to');
//             width = document.querySelector('.slider').offsetWidth;
//             slideIndex = slideTo;
//             // offset = +width.slice(0, width.length - 2) * (slideTo - 1);

//             // slidesField.style.transform = `translateX(-${offset}px)`;
//             rollSlider();
//             count++;
//             console.log(count);
//             // if (e[length] = length - 1) {
//             //     offset = 0;
//             // }
//             dots.forEach(dot => dot.style.backgroundColor = "red");
//             dots[slideIndex - 1].style.backgroundColor = 'black';
//         });
//     });
// }
// if (count < dots.length) {
//     animation();
// }