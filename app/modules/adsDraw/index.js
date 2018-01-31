import {Screen} from "./private/Screen";
import {ElementFactory} from "./private/factories/ElementFactory";
import {get, map, forEach, assign} from 'lodash';

export class AdsDraw {

    /**
     * AdsDraw Constructor
     * @param {Object} config
     * @param {String} config.id
     */
    constructor(config) {
        this.config = config;
        this.container = document.createElement("div");
        this.container.setAttribute("id", `ads-${config.id}`);
    }

    /**
     * Ads Draw Render function
     * @return {Element}
     */
    render() {
        const { config } = this;

        assign(this.container.style, config.style);
        forEach(get(this.config, 'settings.screens'), (screen) => {
            const elements = map(screen.elements, (element) => {
                return ElementFactory.createElement(element, config.assets);
            });

            this.container.appendChild(new Screen(screen, elements).render());
        });

        return this.container;
    }


}