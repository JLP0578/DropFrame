import React from 'react';
/***
 *
 * @param word {string}
 * @returns {string}
 */
const capitalize = (word) => {
    if (typeof word !== 'string') return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
}
/***
 * @returns {array}
 * @param warframe
 * @param searchName
 * @param tab
 */
export const findByName = (warframe, searchName, tab) => {
    const isTrulyName = (warframe.name.indexOf(searchName) > -1);
    if (isTrulyName) {
        return warframe.name;
    }
}
/***
 *
 * @param warframeJSON
 * @param searchName
 * @param type 'findByName' or 'getDataByName'
 * @returns {*[]}
 */
export const warframeGetData = (warframeJSON, searchName, type) => {
    searchName = capitalize(searchName);
    let matches = []
    warframeJSON.map((warframe) => {
        const isWarframeCategory = (warframe.productCategory === 'Suits');
        if (isWarframeCategory) {
            switch (type) {
                case 'findByName':
                    const isTrulyName = (warframe.name.split(' ')[0].indexOf(searchName) > -1);
                    const isNotExcaPrime = (warframe.name !== "Excalibur Prime");
                    if (isTrulyName && isNotExcaPrime) {
                        matches.push(warframe.name);
                    }
                    break;
                case 'getDataByName':
                    const isSameName = (warframe.name === searchName);
                    if (isSameName) {
                        matches.push(warframe);
                    }
                    break;
            }
        }
    })
    return matches;
}

/***
 * @returns {array}
 * @param warframe
 * @param name
 * @param tab
 */
export const getDataByName = (warframe, name, tab) => {
    const isSameName = (warframe.name === name);
    if (isSameName) {
        tab.push(warframe);
    }
    return tab;
}
