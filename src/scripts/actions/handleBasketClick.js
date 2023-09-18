import {cart, sliderSection} from "../createBaseLayout";

export const handleBasketClick = function (event) {
    const bestsellers = document.querySelector('.bestsellers');

    if (event.target.parentElement === event.currentTarget || event.target === event.currentTarget) {
        cart.classList.toggle('shopping-cart__container_active');
        sliderSection.classList.toggle('slider__filter');
        bestsellers.classList.toggle('bestsellers__filter')

    }
};
