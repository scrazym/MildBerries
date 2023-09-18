import {cart, header} from "../createBaseLayout";
import {productsArray} from "./handleAddToCart";


export const handleClearCart = (event) => {
    const cartWrapper = cart.querySelector('.shopping-cart__main-container');
    const clearContainer = cart.querySelector('.shopping-cart__goods_top');
    const cartGoods = cart.querySelector('.shopping-cart__goods');
    const priceInOrder = cart.querySelector('.shopping-cart__total-value');
    const cartCircle = header.querySelector('.header__icon-circle');

    cartCircle.classList.remove('header__hide');
    cartCircle.classList.add('header__filter');

    cartWrapper.innerHTML = '';
    clearContainer.innerHTML = '0 товаров';
    cartGoods.innerHTML = '0 товаров';
    priceInOrder.innerHTML = '0.00$'

    productsArray.length = 0;
    localStorage.clear();

    localStorage.setItem('products', JSON.stringify(productsArray));
};
