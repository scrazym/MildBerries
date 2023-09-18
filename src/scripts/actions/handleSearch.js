import {sliderSection} from "../createBaseLayout";

const handleSearch = function () {
    let val = event.target.value.trim().toLowerCase();
    let shopCart = document.querySelectorAll('.bestsellers__product-container');
    const search = document.querySelector('.bestsellers__h2');


    if (val !== '') {
        shopCart.forEach(function (elem) {
            if (elem.innerText.toLowerCase().search(val) === -1) {
                elem.classList.add('bestsellers__product-container_hide');
                sliderSection.classList.add('slider__filter');
                search.innerHTML = 'Результаты поиска:';
            } else {
                elem.classList.remove('bestsellers__product-container_hide');
            }
        });
    } else shopCart.forEach(function (elem) {
        elem.classList.remove('bestsellers__product-container_hide');
        sliderSection.classList.remove('slider__filter');
        search.innerHTML = 'Хиты продаж';
    })
}

export {handleSearch};
