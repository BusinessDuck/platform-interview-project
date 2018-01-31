import {assign} from "lodash";

export class AdsElementInterface {

    /**
     * Interface ads element constructor
     * @param {Object} config
     * @param {String} config.name
     * @param {Number} config.id
     * @param {Object} config.style
     * @param {String} config.type
     */
    constructor(config) {
        this.name = config.name;
        this.iid = config.iid;
        this.style = config.style;
        this.type = config.type;
    }

    /**
     * Check for Element instance, instead of typeof
     * @return {boolean}
     */

    isElement() {
        return true;
    }

    /**
     * Render
     * @return {Element}
     */
    render() {
        const {iid, style} = this;
        const container = document.createElement("div");

        container.setAttribute("id", `element-${iid}`);
        assign(container.style, style);

        return container;
    }
}