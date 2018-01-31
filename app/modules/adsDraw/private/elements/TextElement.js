import {AdsElementInterface} from "../interfaces/AdsElementInterface";

export class TextElement extends AdsElementInterface {

    /**
     * TextElement constructor
     * @param {Object} config
     * @param {String} config.label
     * @param {String} config.text
     * @param {String} config.name
     * @param {Number} config.id
     * @param {Object} config.style
     * @param {String} config.type
     */
    constructor(config) {
        super(config);
        this.label = config.label;
        this.text = config.text;
    }

    /**
     * Check Text instance
     * @return {boolean}
     */
    isText() {
        return true;
    }

    /**
     * Render function
     * @return {Element}
     */
    render() {
        const {name, label, text} = this;
        const container = super.render();

        container.classList.add(`text-${name}`);
        container.setAttribute("title", label);
        container.innerText = text.content;

        return container;
    }

}