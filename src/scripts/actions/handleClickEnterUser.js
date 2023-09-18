import {overlay} from "../createBaseLayout";

export const handleClickEnter = function (event) {
    if (event.target.parentElement === event.currentTarget || event.target === event.currentTarget) {
        overlay.classList.add('user__overlay_active')
    }
};