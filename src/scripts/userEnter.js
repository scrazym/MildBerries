import {createAndAppendElem} from "./createAndAppendElem";
import {handleClickClose} from "./actions/handleClickCloseUser";


export const createUserEnterWrapper = (overlay) => {
    const userEnterWrapper = createAndAppendElem({tag: 'div', classList: ['user__wrapper'], place: overlay});
    createAndAppendElem({tag: 'h2', classList: ['user__title'], place: userEnterWrapper, text: 'Войти'});
    createAndAppendElem({
        tag: 'input',
        classList: ['user__enter-input'],
        attrs: {type: 'tel', required: true, placeholder: 'Номер телефона...'},
        place: userEnterWrapper
    });
    createAndAppendElem({
        tag: 'button',
        classList: ['user__btn'],
        attrs: {type: 'submit'},
        place: userEnterWrapper,
        text: 'Получить код'
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
    const enterOrderAgreement = createAndAppendElem({
        tag: 'p',
        classList: ['shopping-cart__order-agreement'],
        place: userEnterWrapper,
    });

    enterOrderAgreement.innerHTML = 'Нажимая, Вы соглашаетесь с обработкой персональных данных в соответствии с ' + cartOrderPolitic.outerHTML + ' в целях фиксации посредством видеозаписи обстоятельств выдачи заказа в пункте выдачи заказа и ' + cartOrderRules.outerHTML;

    const userEnterClose = createAndAppendElem({tag: 'div', classList: ['user__close'], place: userEnterWrapper});
    createAndAppendElem({tag: 'span', place: userEnterClose});
    createAndAppendElem({tag: 'span', place: userEnterClose});
    userEnterClose.addEventListener('click', handleClickClose);

    return userEnterWrapper;
}




