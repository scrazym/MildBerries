import {cart, header} from "../createBaseLayout";
import {createProductContainer} from "../createProductInCart";
import {countAndPriceProducts} from "../utils";
import {images} from "../bestSellers";


const productFromLocalstorage = localStorage.getItem("products");
export let productsArray = productFromLocalstorage ? (JSON.parse(productFromLocalstorage)) : [];
export const handleAddToCart = (event) => {

    const {target} = event;
    const price = target.parentElement.parentElement.querySelector('.bestsellers__product-price').innerHTML;
    const dateDelivery = target.parentElement.parentElement.querySelector('.bestsellers__product-delivery').innerHTML;
    const nameProduct = target.parentElement.parentElement.querySelector('.bestsellers__product-name').innerHTML;
    const id = target.parentElement.parentElement.id;

    const productObject = {
        idProduct: id,
        priceProduct: price.slice(0, -1),
        dateDeliveryProduct: dateDelivery,
        name: nameProduct,
    };

    const {idProduct, priceProduct, dateDeliveryProduct, name} = productObject;

    const product = createProductContainer(images.find(image => image.idImage === idProduct).img, priceProduct, dateDeliveryProduct, name, idProduct);
    const cartWrapper = cart.querySelector('.shopping-cart__main-container');

    cartWrapper.append(product);

    productsArray.push(productObject);

    countAndPriceProducts();

    localStorage.setItem('products', JSON.stringify(productsArray));
}