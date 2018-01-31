import * as axios from 'axios';
import config from '../../config';

/**
 * Get ads
 * @returns {Promise.<*>}
 */
export async function getAdsList() {
    return axios.get(`${config.apiServer}/assets/ad.json`);
}