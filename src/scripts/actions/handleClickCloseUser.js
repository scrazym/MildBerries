import {overlay} from "../createBaseLayout";

export const handleClickClose = function (event) {
    if (event.target.parentElement === event.currentTarget || event.target === event.currentTarget) {
        overlay.classList.remove('user__overlay_active')
    }
};
