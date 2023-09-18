import {createHeaderContainer} from "./header";
import {createCart} from "./shoppingCart";
import {createElemOfSidePanelList} from "./sidePanel";
import {createUserEnterWrapper} from "./userEnter";
import {createSlider} from "./slider";
import {createAndAppendElem} from "./createAndAppendElem";
import {createProductsWrapper} from "./bestSellers";

const root = document.getElementById('root');

export const header = createAndAppendElem({tag: 'header', classList: ['header'], place: root});
export const overlay = createAndAppendElem({tag: 'div', classList: ['user__overlay'], place: root});
export const sidePanel = createElemOfSidePanelList(root);
export const sliderSection = createAndAppendElem({tag: 'section', classList: ['slider'], place: root});

export const bestsellers = createProductsWrapper(root);
export const cart = createCart();

const shoppingCartSection = createAndAppendElem({tag: 'section', classList: ['shopping-cart__section'], place: root});

shoppingCartSection.append(cart);
createHeaderContainer(header);
createUserEnterWrapper(overlay);
createSlider(sliderSection);

export {root};
