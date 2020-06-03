const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')


for (let i = 0; i < carouselImages.length; i++) {

    carouselImages[i].style.display = 'none';
}

let counter = 0;
const size = carouselImages[counter].clientWidth;
const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

setInterval(function () {
    if (counter >= 1) {
        carouselImages[counter - 1].style.display = 'none';
    }
    let incremento = -513;

    carouselImages[carouselImages.length - 1].style.display = 'none';
    carouselSlide.style.left = -incremento + 'px'
    //carouselSlide.style.transition = 'transform 0s'
    carouselImages[counter].style.display = 'block';
    carouselSlide.style.transform = 'translateX(' + (513) + 'px)'
    carouselSlide.style.transition = 'transform 2s linear'
    counter++;
    incremento -= 513;
    if (counter == carouselImages.length) {
        counter = 0;
        console.log(counter)
    }
}, 2000)

// carouselSlide.style.transform = 'translateX(' + sizeTotal + 'px)'

// setTimeout(function () {
//     carouselSlide.style.transform = 'translateX(' + sizeTotal + 'px)'
// }, 0);