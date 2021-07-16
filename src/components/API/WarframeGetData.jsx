import React from 'react';

/***
 * formate le mot
 * exclue tout les types sauf les chaînes de caractère
 * @param { String } word
 * @returns { String } retourne le mot dont la première lettre en majuscule et le reste en minuscule sinon vide
 */
export const capitalize = (word) => {
    if (typeof word !== 'string') return '';
    const tabOfWord = word.split(' ');
    let firstWord = tabOfWord[0];
    let secondWord = tabOfWord[1];
    let firstWordfisrtLetterToUpper = firstWord.charAt(0).toUpperCase();
    let firstWordToLower = firstWord.slice(1).toLowerCase();
    let secondWordfisrtLetterToUpper, secondWordToLower = '';
    let result = firstWordfisrtLetterToUpper + firstWordToLower;
    if(secondWord !== undefined) {
        secondWordfisrtLetterToUpper = ' ' + secondWord.charAt(0).toUpperCase();
        secondWordToLower = secondWord.slice(1).toLowerCase();
        result = firstWordfisrtLetterToUpper + firstWordToLower + secondWordfisrtLetterToUpper + secondWordToLower
    }    
    return result;
}

/***
 * compart le nom de la warframe avec le mot chercher,
 * exclue "Excalibur Prime" qui n'est pas obtenable par drop
 * @param { String } warframeName nom de la warframe dans le JSON
 * @param { String } searchName fragement du nom que l'on cherche
 * @return { String } retourne le nom de la warframe sinon vide
 */
export const warframeGetName = (warframeName, searchName) => {
    let resultat = '';
    const isTrulyName = (warframeName.indexOf(searchName) > -1);
    const isNotExcaPrime = (warframeName !== "Excalibur Prime");
    const isNotExcaUmbra = (warframeName !== "Excalibur Umbra");
    if (isTrulyName && isNotExcaPrime && isNotExcaUmbra) {
        resultat = warframeName;
    }
    return resultat;
}

/***
 *
 * @param { *[] } warframe objet de la warframe
 * @param { String } searchName nom de la warframe que l'on cherche
 * @returns { *[] } retourne le objet de la warframe sinon vide
 */
export const warframeGetData = (warframe, searchName) => {
    let resultat = {};
    const isSameName = (warframe.name === searchName);
    if (isSameName) {
        resultat = warframe;
    }
    return resultat;
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
 * @param { *[] } warframeJSON
 * @param { String } searchName
 * @param { String } type
 * @returns { *[] }
 */
export const warframeGet = (warframeJSON, searchName, type) => {
    searchName = capitalize(searchName);
    let matches = []
    const isNotEmptySearchName = searchName !== "";
    if(isNotEmptySearchName){
        warframeJSON.map((warframe) => {
            const isWarframeCategory = (warframe.productCategory === 'Suits');
            if (isWarframeCategory) {
                switch (type) {
                    case 'findName':
                        let name = warframeGetName(warframe.name, searchName);
                        if(name != ''){
                            matches.push(name);
                        }
                        break;
                    case 'getData':
                        let data = warframeGetData(warframe, searchName)
                        if(Object.keys(data).length != 0){
                            matches.push(data);
                        }
                        break;
                }
            }
        })
    }
    return  matches;
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
