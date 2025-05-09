export default class Header {
    selectors = {
        root: "[data-js-header]",
        overlay: "[data-js-header-overlay]",
        button: "[data-js-header-button]",
    }

    stateClasses = {
        isActive: "is-active",
    }

    constructor() {
        this.root = document.querySelector(this.selectors.root);
        this.button = this.root.querySelector(this.selectors.button);
        this.overlay = this.root.querySelector(this.selectors.overlay);

        this.init();
    }

    onButtonClick = () => {
        this.overlay.classList.toggle(this.stateClasses.isActive);
        this.button.classList.toggle(this.stateClasses.isActive);
        
    }

    init = () => {
        this.button.addEventListener('click', this.onButtonClick);
    }
}