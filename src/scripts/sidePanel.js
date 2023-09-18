import { createAndAppendElem } from "./createAndAppendElem";

export const createElemOfSidePanelList = function (mainSection) {
    const sidePanelArr = ["Женщинам", "Обувь", "Детям", "Мужчинам", "Дом", "Красота", "Аксессуары", "Электроника"];
    const sidePanel = createAndAppendElem({tag: 'div', classList: ['side__panel'], place: mainSection});
    createAndAppendElem({tag: 'div', classList: ['side__panel_overlay'], place: mainSection});
    const sidePanelUl = createAndAppendElem({tag: 'ul', classList: ['side__panel_list'], place: sidePanel});
    const createUlElem = function (text) {
        const ulElem = createAndAppendElem({tag: 'li', classList: ['side__panel_item']});
        createAndAppendElem({tag: 'a', classList: ['side__panel_link'], attrs: {href: '#'}, text: text, place: ulElem});

        return ulElem;
    };

    sidePanelArr.forEach(elem => {
        sidePanelUl.append(createUlElem(elem));
    });

    return sidePanel;
};
