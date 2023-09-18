import powerBankImg from "/assets/img/bestSellers/product1.jpg";
import jeansImg from "/assets/img/bestSellers/product2.jpg";
import phoneImg from "/assets/img/bestSellers/product3.jpg";
import phoneHolderImg from "/assets/img/bestSellers/product4.jpg";
import routerImg from "/assets/img/bestSellers/product5.jpg";
import shirtImg from "/assets/img/bestSellers/product6.jpg";

import {createAndAppendElem} from './createAndAppendElem.js';
import {calcDate} from "./utils.js";
import {handleAddToCart} from "./actions/handleAddToCart";

function Image(idImage, img) {
    this.idImage = idImage;
    this.img = img;
}

const powerBankImage = new Image('1', powerBankImg);
const jeans = new Image('2', jeansImg);
const phoneImage = new Image('3', phoneImg);
const phoneHolder = new Image('4', phoneHolderImg);
const routerImage = new Image('5', routerImg);
const shirtImage = new Image('6', shirtImg);

export const images = [powerBankImage, jeans, phoneImage, phoneHolder, routerImage, shirtImage];

const createProduct = (image, priceWithoutDiscount, discount, name, idValue) => {
    const price = Math.floor(priceWithoutDiscount - (priceWithoutDiscount * discount) / 100);
    const productWrapper = createAndAppendElem({classList: ['bestsellers__product-container'], attrs: {id: idValue}});
    const productImageContainer = createAndAppendElem({
        classList: ['bestsellers__product-img-container'],
        place: productWrapper
    });
    const productInformationWrapper = createAndAppendElem({
        classList: ['bestsellers__product-information-container'],
        place: productWrapper
    });
    const productPriceContainer = createAndAppendElem({
        classList: ['bestsellers__product-price-container'],
        place: productInformationWrapper
    });

    createAndAppendElem({
        tag: 'img',
        classList: ['bestsellers__product-img'],
        place: productImageContainer,
        attrs: {src: image}
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['bestsellers__product-price'],
        place: productPriceContainer,
        text: `${price}$`
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['bestsellers__product-delivery'],
        place: productInformationWrapper,
        text: calcDate()
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['bestsellers__product-name'],
        place: productInformationWrapper,
        text: name
    });
    const addToCartButton = createAndAppendElem({
        tag: 'button',
        classList: ['bestsellers__product-card-button'],
        place: productInformationWrapper,
        text: 'в корзину'
    });

    if (price !== priceWithoutDiscount) {
        createAndAppendElem({
            tag: 'p',
            classList: ['bestsellers__product-price-without-discount'],
            place: productPriceContainer,
            text: `${priceWithoutDiscount}$`
        });
        createAndAppendElem({
            tag: 'p',
            classList: ['bestsellers__product-discount'],
            place: productPriceContainer,
            text: `${discount}%`
        });
    }

    addToCartButton.addEventListener('click', handleAddToCart);

    return productWrapper;
}

export const createProductsWrapper = async (parent) => {
    const cartBestSellersContainer = createAndAppendElem({tag: 'section', classList: ['bestsellers'], place: parent});    
    const bestSellersContainer = createAndAppendElem({        
        classList: ['container'],
        place: cartBestSellersContainer
    });
    createAndAppendElem({
        tag: 'h2',
        classList: ['bestsellers__h2'],
        place: bestSellersContainer,
        text: 'Хиты продаж'
    });
    const cartProductContainer = createAndAppendElem({
        tag: 'div',
        classList: ['bestsellers__main-container'],
        place: bestSellersContainer
    });

    const productsFromMock = await fetch('https://6425ea4e556bad2a5b461cc0.mockapi.io/api/products');
    const products = await productsFromMock.json();

    products.forEach(({name, priceWithoutDiscount, discount, id}) => {
        cartProductContainer.append(createProduct(images.find(image => image.idImage === id).img, priceWithoutDiscount, discount, name, id));
    })

    return cartBestSellersContainer;
}

