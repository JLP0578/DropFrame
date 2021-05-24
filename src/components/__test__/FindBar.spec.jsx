// it ( 'charger le ficher warframe.json' , ( ) => {
//     expect ( somme ( 1 , 2 ) ) . toEqual ( 3 ) ;
// } ) ;
import WarframeController from "../Controllers/warframe";

describe('Warframes.js', () => {

    it('Le fichier warframes.json est charger', () => {
        expect(WarframeController.fileLoad())
            .toEqual(true);
    });

});
