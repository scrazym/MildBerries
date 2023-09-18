import {createAndAppendElem} from "./createAndAppendElem";

export const createProductContainer = (imageValue, priceValue, deliveryValue, nameValue, idValue) => {
    const cartProductContainer = createAndAppendElem({
        classList: ['shopping-cart__product-container'],
        attrs: {id: idValue}
    });
    const cartInformationContainer = createAndAppendElem({
        classList: ['shopping-cart__product-information-container'],
        place: cartProductContainer
    });
    const cartPriceContainer = createAndAppendElem({
        classList: ['shopping-cart__product-price-container'],
        place: cartProductContainer
    });
    const cartImageContainer = createAndAppendElem({
        classList: ['shopping-cart__product-img-container'],
        place: cartInformationContainer
    });
    createAndAppendElem({
        tag: 'img',
        classList: ['shopping-cart__product-img'],
        place: cartImageContainer,
        attrs: {src: imageValue}
    });
    const cartDeliveryAndNameContainer = createAndAppendElem({
        classList: ['shopping-cart__product-name-delivery-container'],
        place: cartInformationContainer
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__product-name'],
        place: cartDeliveryAndNameContainer,
        text: nameValue
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__product-delivery'],
        place: cartDeliveryAndNameContainer,
        text: deliveryValue
    });

    createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__product-price'],
        place: cartPriceContainer,
        text: `${priceValue}$`
    });

    return cartProductContainer;
}