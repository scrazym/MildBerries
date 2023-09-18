import iconEnter from '../assets/icons/headerIcons/avatarHeader.svg';
import iconBasket from '../assets/icons/headerIcons/headerCart.svg';
import {handleClickEnter} from "./actions/handleClickEnterUser";
import {handleBasketClick} from "./actions/handleBasketClick";
import {handleHamburgerClick} from "./actions/handleBurgerClick";
import {createAndAppendElem} from "./createAndAppendElem";
import {handleSearch} from "./actions/handleSearch";
import {productsArray} from "./actions/handleAddToCart";
import {handleClickLogo} from "./actions/handleClickLogo";

export const createHeaderContainer = (header) => {
    const headerContainer = createAndAppendElem({
        tag: 'div',
        classList: ['header__container', 'container'],
        place: header
    });
    const hamburger = createAndAppendElem({
        tag: 'div',
        classList: ['header__hamburger', 'hamburger'],
        place: headerContainer
    })
    createAndAppendElem({tag: 'span', place: hamburger});
    createAndAppendElem({tag: 'span', place: hamburger});
    createAndAppendElem({tag: 'span', place: hamburger});
    const logo = createAndAppendElem({
        tag: 'a',
        classList: ['header__title'],
        place: headerContainer,
        text: 'MILDBERRIES',
        attrs: {href: '#'}
    });
    const search = createAndAppendElem({
        tag: 'input',
        classList: ['header__search'],
        attrs: {placeholder: 'Поиск...'},
        place: headerContainer
    });
    search.addEventListener('input', handleSearch);
    const headerEnterWrapper = createAndAppendElem({
        tag: 'div',
        classList: ['header__icon-wrapper', 'header__icon-wrapper-enter'],
        place: headerContainer
    })
    createAndAppendElem({
        tag: 'img',
        classList: ['header__icon-img', 'header__icon-img-enter'],
        attrs: {src: iconEnter, alt: 'icon user body'},
        place: headerEnterWrapper
    });
    createAndAppendElem({tag: 'p', classList: ['header__icon-wrapper-text'], place: headerEnterWrapper, text: 'Войти'});
    const headerBasketWrapper = createAndAppendElem({
        tag: 'div',
        classList: ['header__icon-wrapper', 'header__icon-wrapper-basket'],
        place: headerContainer
    })
    createAndAppendElem({
        tag: 'img',
        classList: ['header__icon-img', 'header__icon-img-enter'],
        attrs: {src: iconBasket, alt: 'icon basket'},
        place: headerBasketWrapper
    });
    createAndAppendElem({
        tag: 'p',
        classList: ['header__icon-wrapper-text'],
        place: headerBasketWrapper,
        text: 'Корзина'
    });

    const circle = productsArray.length ? 'header__hide' : 'header__filter';
    createAndAppendElem({tag: 'div', classList: ['header__icon-circle', circle], place: headerBasketWrapper, text: `${productsArray.length}`});

    headerEnterWrapper.addEventListener('click', handleClickEnter);
    headerBasketWrapper.addEventListener('click', handleBasketClick);
    hamburger.addEventListener('click', handleHamburgerClick);
    logo.addEventListener('click', handleClickLogo);

    return headerContainer;
}

