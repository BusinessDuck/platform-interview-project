// This exercise can be completed with vanilla JS, but feel
// free to add any productivity dependencies that you use in your 
// normal workflow. If they're unusual let us know what they do :).

import './styles/app.scss';
import {AdsDraw} from "./modules/adsDraw";
import {getAdsList} from "./modules/adsDraw/api";

async function buildAd() {
    //JSON: http://localhost:3000/assets/ad.json
    const response = await getAdsList();
    if(response.status === 200) {
        const adsDrawInstance = new AdsDraw(response.data);
        document.getElementById("app").appendChild(adsDrawInstance.render());
    }
}

document.addEventListener('DOMContentLoaded', buildAd);
