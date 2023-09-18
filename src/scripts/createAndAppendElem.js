export const createAndAppendElem = (dataObj) => {
    const {tag, classList, place, attrs, text} = dataObj;
    const elem = document.createElement(tag || 'div');

    if (classList && classList.length) {
        classList.forEach(element => {
            elem.classList.add(element);
        });
    }

    if (place) place.append(elem);

    if (attrs) {
        for (const key in attrs) {
            elem.setAttribute(key, attrs[key]);
        }
    }

    if (text) elem.append(text);

    return elem;
}