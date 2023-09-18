import { createAndAppendElem } from './createAndAppendElem.js';
import {cart} from "./createBaseLayout";
import {productsArray} from "./actions/handleAddToCart";
import {header} from "./createBaseLayout";

export const calcDate = () => {
    const date = new Date();
    const dateMax = new Date();
    dateMax.setDate(dateMax.getDate() + 2);
    const month = dateMax.toLocaleString('default', { month: 'long' });
    if (month === 'март' || month === 'август') {
        return `${date.getDate()}-${dateMax.getDate()} ${month.slice(0, length - 1)}а`
    } else {
        return `${date.getDate()}-${dateMax.getDate()} ${month.slice(0, length - 1)}я`
    }
}

export const countAndPriceProducts = () => {
    const clearContainer = cart.querySelector('.shopping-cart__goods_top');
    const cartGoods = cart.querySelector('.shopping-cart__goods');
    const priceInOrder = cart.querySelector('.shopping-cart__total-value');
    const countInHeader = header.querySelector('.header__icon-circle');
    countInHeader.classList.remove('header__filter');
    countInHeader.classList.add('header__hide');

    const sumPrice = productsArray.reduce((accum, product) => accum + +product.priceProduct, 0);

    clearContainer.innerHTML = `${productsArray.length} товаров`;
    cartGoods.innerHTML = `${productsArray.length} товаров`;
    priceInOrder.innerHTML = `${sumPrice}$`;
    countInHeader.innerHTML = `${productsArray.length}`;
}
