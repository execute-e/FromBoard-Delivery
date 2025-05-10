export default class Reviews {
    selectors = {
        root: "[data-js-reviews]",
        leftButton: "[data-js-reviews-button-left]",
        rightButton: "[data-js-reviews-button-right]",
        list: "[data-js-reviews-list]",
        item: "[data-js-reviews-item]"
    }

    stateClasses = {
        active: "is-active",
        hidden: "is-hidden"
    }


    constructor() {
        this.root = document.querySelector(this.selectors.root);
        this.leftButton = this.root.querySelector(this.selectors.leftButton);
        this.rightButton = this.root.querySelector(this.selectors.rightButton);
        this.reviewsList = this.root.querySelector(this.selectors.list);
        this.reviewsItems = this.root.querySelectorAll(this.selectors.item);
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();

        this.init();
    }

    init() {
        this.leftButton.addEventListener('click', this.prevSlide);
        this.rightButton.addEventListener('click', this.nextSlide);

        window.addEventListener('resize', () => {
            this.itemsPerView = this.getItemsPerView();
            this.updateSlider();
        })

        this.updateSlider();
        this.updateButtons();
    }

    getItemsPerView = () => {
        return window.innerWidth < 1439 ? 1 : 2;
    }

    updateSlider = () => {
        this.reviewsItems.forEach(item => {
            item.classList.add(this.stateClasses.hidden);
        });

        for(let i = this.currentIndex; i < this.currentIndex + this.itemsPerView; ++i) {
            if (this.reviewsItems[i]) {
                this.reviewsItems[i].classList.remove(this.stateClasses.hidden);
            }
        }
    }

    updateButtons() {
        this.leftButton.disabled = this.currentIndex === 0;
        this.rightButton.disabled = this.currentIndex >= this.reviewsItems.length - this.itemsPerView;
    }

    prevSlide = () => {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlider();
            this.updateButtons();
        }
    }

    nextSlide = () => {
        if (this.currentIndex < this.reviewsItems.length - this.itemsPerView) {
            this.currentIndex++;
            this.updateSlider();
            this.updateButtons();
        }
    }
}