import {IMAGE_TYPE, TEXT_TYPE} from "../../constants/elementTypes";
import {ImageElement} from "../elements/ImageElement";
import {TextElement} from "../elements/TextElement";
import {get} from "lodash";

export class ElementFactory {

    /**
     * Static element creator by type
     * @param {Object} config
     * @param {Object} assets
     * @returns {TextElement|ImageElement}
     */
    static createElement(config, assets) {
        const elementConfig = Object.assign({}, config);

        switch (config.type) {
            case TEXT_TYPE:
                return new TextElement(elementConfig);

            case IMAGE_TYPE:
                elementConfig.image = assets[get(config, "image.masterAssetId")];
                return new ImageElement(elementConfig);
        }
    }

}