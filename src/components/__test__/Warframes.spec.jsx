// it ( 'charger le ficher warframe.json' , ( ) => {
//     expect ( somme ( 1 , 2 ) ) . toEqual ( 3 ) ;
// } ) ;
import WarframeController from "../Controllers/warframe";

describe('Warframes.js', () => {

    it('Le fichier warframes.json est charger', () => {
        expect(WarframeController.fileLoad())
            .toEqual(true);

    });
    it('Les objets de warframes.js', () => {
        expect(typeof WarframeController.getAllObject())
            .toBe('object');
    });

    it('Le nombre de warframe', () => {
        expect(WarframeController.numberOfWarframe())
            .toEqual(WarframeController.getAllObject().length);

    });
    describe('Gestion des noms', () => {

        it('Les noms des warframes', () => {
            //console.log('ALL',WarframeController.namesOfWarframe('All'));
            /// 23/04/2021
            const allNames = ["Ash", "Ash Prime", "Atlas", "Atlas Prime", "Banshee", "Banshee Prime", "Baruuk", "Chroma", "Chroma Prime", "Ember", "Ember Prime", "Equinox", "Equinox Prime", "Excalibur", "Excalibur Prime", "Excalibur Umbra", "Frost", "Frost Prime", "Gara", "Garuda", "Gauss", "Grendel", "Harrow", "Hildryn", "Hydroid", "Hydroid Prime", "Inaros", "Inaros Prime", "Ivara", "Ivara Prime", "Khora", "Lavos", "Limbo", "Limbo Prime", "Loki", "Loki Prime", "Mag", "Mag Prime", "Mesa", "Mesa Prime", "Mirage", "Mirage Prime", "Nekros", "Nekros Prime", "Nezha", "Nezha Prime", "Nidus", "Nova", "Nova Prime", "Nyx", "Nyx Prime", "Oberon", "Oberon Prime", "Octavia", "Octavia Prime", "Protea", "Revenant", "Rhino", "Rhino Prime", "Saryn", "Saryn Prime", "Sevagoth", "Titania", "Titania Prime", "Trinity", "Trinity Prime", "Valkyr", "Valkyr Prime", "Vauban", "Vauban Prime", "Volt", "Volt Prime", "Wisp", "Wukong", "Wukong Prime", "Xaku", "Zephyr", "Zephyr Prime"]
            expect(WarframeController.namesOfWarframe('All'))
                .toEqual(allNames);

        });
        it('Les noms des warframes normal', () => {
            //console.log('NORMAL',WarframeController.namesOfWarframe('Normal'));
            /// 23/04/2021
            const allNormalNames = ["Ash", "Atlas", "Banshee", "Baruuk", "Chroma", "Ember", "Equinox", "Excalibur", "Excalibur Umbra", "Frost", "Gara", "Garuda", "Gauss", "Grendel", "Harrow", "Hildryn", "Hydroid", "Inaros", "Ivara", "Khora", "Lavos", "Limbo", "Loki", "Mag", "Mesa", "Mirage", "Nekros", "Nezha", "Nidus", "Nova", "Nyx", "Oberon", "Octavia", "Protea", "Revenant", "Rhino", "Saryn", "Sevagoth", "Titania", "Trinity", "Valkyr", "Vauban", "Volt", "Wisp", "Wukong", "Xaku", "Zephyr"];
            expect(WarframeController.namesOfWarframe('Normal'))
                .toEqual(allNormalNames);

        });
        it('Les noms des warframes prime', () => {
            //console.log('PRIME',WarframeController.namesOfWarframe('Prime'));
            /// 23/04/2021
            const allPrimesNames = ["Ash Prime", "Atlas Prime", "Banshee Prime", "Chroma Prime", "Ember Prime", "Equinox Prime", "Excalibur Prime", "Frost Prime", "Hydroid Prime", "Inaros Prime", "Ivara Prime", "Limbo Prime", "Loki Prime", "Mag Prime", "Mesa Prime", "Mirage Prime", "Nekros Prime", "Nezha Prime", "Nova Prime", "Nyx Prime", "Oberon Prime", "Octavia Prime", "Rhino Prime", "Saryn Prime", "Titania Prime", "Trinity Prime", "Valkyr Prime", "Vauban Prime", "Volt Prime", "Wukong Prime", "Zephyr Prime"];
            expect(WarframeController.namesOfWarframe('Prime'))
                .toEqual(allPrimesNames);

        });
    });
    describe('Gestion des recherche par nom', () => {
        it('On recherche "Ash" ', () => {
            /// 23/04/2021
            const EqualResult = ["Ash", "Ash Prime"];
            expect(WarframeController.searchByName('Ash'))
            .toEqual(EqualResult);

        });
        it('On recherche "Limbo Prime" ', () => {
            /// 23/04/2021
            const EqualResult = ["Limbo Prime"];
            expect(WarframeController.searchByName('Limbo Prime'))
                .toEqual(EqualResult);

        });
        it('On recherche "Tintin" ', () => {
            /// 23/04/2021
            const EqualResult = [];
            expect(WarframeController.searchByName('Tintin'))
                .toEqual(EqualResult);

        });
        it('On recherche "Milou Prime" ', () => {
            /// 23/04/2021
            const EqualResult = [];
            expect(WarframeController.searchByName('Milou Prime'))
                .toEqual(EqualResult);

        });
        it('On recherche "a" ', () => {
            /// 23/04/2021
            const EqualResult = ["Ash", "Ash Prime", "Atlas", "Atlas Prime",];
            expect(WarframeController.searchByName('a'))
                .toEqual(EqualResult);

        });
        it('On recherche "B" ', () => {
            /// 23/04/2021
            const EqualResult = ["Banshee", "Banshee Prime", "Baruuk"];
            expect(WarframeController.searchByName('B'))
                .toEqual(EqualResult);

        });
        it('On recherche "van" ', () => {
            /// 23/04/2021
            const EqualResult = [];
            expect(WarframeController.searchByName('van'))
                .toEqual(EqualResult);

        });
    });
    describe('Gestion des drop', () => {
        it('On recherche les drops de "Banshee" ', () => {
            /// 23/04/2021
            const EqualResult = [];
            expect(typeof WarframeController.searchDropByName('Banshee'))
                .toBe('object');

        });
        it('On recherche les drops de "Ember Prime" ', () => {
            /// 23/04/2021
            const EqualResult = [];
            expect(typeof WarframeController.searchDropByName('Ember Prime'))
                .toBe('object');

        });
    });
    describe('Gestion des parties', () => {
        it('Les trois partie de "Ash" ', () => {
            // console.log(JSON.stringify(WarframeController.getPart("Ash"),null,2));
            expect(WarframeController.getPart("Ash"))
                .toEqual([["Ash Blueprint","blueprint.png"],["Ash Chassis Blueprint","prime-chassis.png"],["Ash Neuroptics Blueprint","prime-neuroptics.png"],["Orokin Cell","orokin-cell.png"],["Ash Systems Blueprint","prime-systems.png"]]);

        });
        it('Les trois partie de "equinox" ', () => {
            // console.log('<pre>'+JSON.stringify(WarframeController.getPart("equinox"),null,4)+'</pre>');
            expect(WarframeController.getPart("equinox"))
                .toEqual([["Equinox Blueprint","blueprint.png"],["Day Aspect","day-aspect.png"],["Forma","forma.png"],["Night Aspect","night-aspect.png"]]);

        });
        it('Les trois partie de "ember Prime" ', () => {
            // console.log('<pre>'+JSON.stringify(WarframeController.getPart("ember Prime"),null,4)+'</pre>');
            expect(WarframeController.getPart("ember Prime"))
                .toEqual([["Ember Prime Blueprint","blueprint.png"],["Ember Prime Chassis Blueprint","prime-chassis.png"],["Ember Prime Neuroptics Blueprint","prime-neuroptics.png"],["Orokin Cell","orokin-cell.png"],["Ember Prime Systems Blueprint","prime-systems.png"]]);

        });
    });
});
