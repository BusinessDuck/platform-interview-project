import { assign } from "lodash";

export class Screen {

    /**
     * Constructor Screen
     * @param {Object} config
     * @param {Number} config.iid
     * @param {String} config.name
     * @param {Object} config.style
     * @param {Array} elements
     */
    constructor(config, elements) {
        this.elements = elements;
        this.iid = config.iid;
        this.name = config.name;
        this.style = config.style;
    }

    /**
     * Screen Render function
     * @returns {Element}
     */

    render() {
        const {iid, name, style, elements} = this;
        const container = document.createElement("div");

        container.setAttribute("id", `screen-${iid}`);
        container.setAttribute("title", name);
        assign(container.style, style);

        elements.forEach(element => container.appendChild(element.render()));

        return container;
    }
}