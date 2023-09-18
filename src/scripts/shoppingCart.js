import {createAndAppendElem} from './createAndAppendElem.js';
import {handleClearCart} from "./actions/handleClearCart";
import {createProductContainer} from "./createProductInCart";
import {images} from "./bestSellers";

const productFromLocalstorage = localStorage.getItem("products");
let products = productFromLocalstorage ? (JSON.parse(productFromLocalstorage)) : [];
let sumGoods = products.length;
const sumPrice = products.reduce((accum, product) => accum + +product.priceProduct, 0);

export const createCart = () => {
    const cartContainer = createAndAppendElem({classList: ['shopping-cart__container', 'container']});
    createAndAppendElem({
        tag: 'h1',
        classList: ['shopping-cart__h1'],
        place: cartContainer,
        text: 'Корзина'
    });
    const clearCartContainer = createAndAppendElem({
        classList: ['shopping-cart__clear-container'],
        place: cartContainer,
    });
    const cartWrapper = createAndAppendElem({classList: ['shopping-cart__wrapper'], place: cartContainer});
    const cartMainContainer = createAndAppendElem({classList: ['shopping-cart__main-container'], place: cartWrapper});

    if (productFromLocalstorage) {
        products = JSON.parse(productFromLocalstorage);
        cartMainContainer.innerHTML = "";

        for (let i = 0; i < products.length; i++) {
            const newProduct = createProductContainer(images.find(image => image.idImage === products[i].idProduct).img, products[i].priceProduct, products[i].dateDeliveryProduct, products[i].name, products[i].idProduct);
            cartMainContainer.append(newProduct);
        }
    }
    createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__goods_top'],
        place: clearCartContainer,
        text: `${sumGoods} товаров`
    });    
    const cartOrderContainer = createAndAppendElem({classList: ['shopping-cart__order-container'], place: cartWrapper});
    const cartOrderTotalContainer = createAndAppendElem({
        classList: ['shopping-cart__total-container'],
        place: cartOrderContainer
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__total'],
        place: cartOrderTotalContainer,
        text: 'Итого:'
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__total-value'],
        place: cartOrderTotalContainer,
        text: `${sumPrice.toFixed(2)}$`
    });
    const cartOrderGoodsContainer = createAndAppendElem({
        classList: ['shopping-cart__goods-container'],
        place: cartOrderContainer
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__goods'],
        place: cartOrderGoodsContainer,
        text: `${sumGoods} товаров`
    });
    createAndAppendElem({
        tag: 'button',
        classList: ['shopping-cart__order-button'],
        place: cartOrderContainer,
        text: 'Оформить заказ'
    });
    const clearCartButton = createAndAppendElem({
        tag: 'button',
        classList: ['shopping-cart__clear-cart'],
        place: cartOrderContainer,
        text: 'Очистить корзину'
    });
    const cartOrderPolitic = createAndAppendElem({
        tag: 'a',
        classList: ['shopping-cart__order-politic'],
        attrs: {href: 'https://test.com', target: '_blank'},
        text: 'политикой'
    });
    const cartOrderRules = createAndAppendElem({
        tag: 'a',
        classList: ['shopping-cart__order-rules'],
        attrs: {href: 'https://test.com', target: '_blank'},
        text: 'правилами\u00A0торговой\u00A0площадки'
    });
    const cartOrderAgreement = createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__order-agreement'],
        place: cartOrderContainer
    });

    cartOrderAgreement.innerHTML = 'Нажимая, Вы соглашаетесь с обработкой персональных данных в соответствии с ' + cartOrderPolitic.outerHTML + ' в целях фиксации посредством видеозаписи обстоятельств выдачи заказа в пункте выдачи заказа и ' + cartOrderRules.outerHTML;

    clearCartButton.addEventListener('click', handleClearCart);

    return cartContainer;
}
