import '../slick/slick.min.js';
import { createAndAppendElem } from './createAndAppendElem.js';
import slideUrl1 from '../assets/img/slides/slide_1.jpg';
import slideUrl2 from '../assets/img/slides/slide_2.jpg';
import slideUrl3 from '../assets/img/slides/slide_3.jpg';

const jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery-ui-dist/jquery-ui.js");

export const createSlider = (sliderSection) => {
    const sliderContainer = createAndAppendElem({classList: ['slider__container', 'container'], place: sliderSection});
    const slide1 = createAndAppendElem({classList: ['slider__slide'], place: sliderContainer, attrs: {id: 'slide-1'}});
    const slide2 = createAndAppendElem({classList: ['slider__slide'], place: sliderContainer, attrs: {id: 'slide-2'}});
    const slide3 = createAndAppendElem({classList: ['slider__slide'], place: sliderContainer, attrs: {id: 'slide-3'}});
    createAndAppendElem({tag: 'img', classList: ['slider__slide-img'], place: slide1, attrs: {src: slideUrl1}});
    createAndAppendElem({tag: 'img', classList: ['slider__slide-img'], place: slide2, attrs: {src: slideUrl2}});
    createAndAppendElem({tag: 'img', classList: ['slider__slide-img'], place: slide3, attrs: {src: slideUrl3}});

    return sliderContainer;
}

$(document).ready(function () {
    $('.slider__container').slick({
        dots: true,
        fade: true
    });
});
