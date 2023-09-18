import {sidePanel} from "../createBaseLayout";

export const handleHamburgerClick = function (event) {
    const overlay = document.querySelector('.side__panel_overlay');

    sidePanel.classList.toggle('side__panel_active');
    event.currentTarget.classList.toggle('header__hamburger_active');
    document.body.classList.toggle('no-scroll');
    overlay.classList.toggle('side__panel_overlay_active');
};