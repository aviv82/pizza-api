/**
 * 
 * 
 * 
 * 
 */

import { ORIGIN } from "../config.js"

export const bigFetch = async () => {
    const populate = '';

    const URL = `${ ORIGIN }${ populate }`;
    const encodeURL = encodeURI(URL);
    const searchPromise = await fetch(encodeURL);
    if (!searchPromise.ok) {
        throw new Error(`${ searchPromise.status }: ${ searchPromise.statusText }`);
    }
    const searchData = await searchPromise.json();
    console.log('API fetch', searchData);
    return searchData;
}