import {AdsElementInterface} from "../interfaces/AdsElementInterface";

export class ImageElement extends AdsElementInterface {

    /**
     * ImageElement constructor
     * @param {Object} config
     * @param {String} config.image
     * @param {Object} config
     * @param {String} config.name
     * @param {Number} config.id
     * @param {Object} config.style
     * @param {String} config.type
     */
    constructor(config) {
        super(config);
        this.image = config.image;
    }

    /**
     * Check ImageElement instance
     * @return {boolean}
     */
    isImage() {
        return true;
    }

    /**
     * Image render
     * @return {Element}
     */
    render() {
        const {image, name} = this;
        const container = super.render();
        const imageElement = document.createElement("img");

        imageElement.setAttribute("src", image);
        container.appendChild(imageElement);
        container.setAttribute("title", name);

        return container;
    }

}