import React from 'react';
import {shallow, mount, render} from 'enzyme';

import {capitalize, findByName, warframeGetData, warframeGetName, warframeGet, getDataByName} from '../../components/API/WarframeGetData';

const Mock_warframeJSON = [
    {
      "uniqueName": "/Lotus/Powersuits/Ninja/Ninja",
      "productCategory": "Suits",
      "name": "Ash"
    },{
        "uniqueName": "/Lotus/Powersuits/Ember/Ember",
        "productCategory": "Suits",
        "name": "Ember"
    },{
        "uniqueName": "/Lotus/Powersuits/Loki/Loki",
        "productCategory": "Suits",
        "name": "Loki"
    },{
        "uniqueName": "/Lotus/Powersuits/Loki/LokiPrime",
        "productCategory": "Suits",
        "name": "Loki Prime"
    },{
        "uniqueName": "/Lotus/Powersuits/Excalibur/ExcaliburUmbra",
        "productCategory": "Suits",
        "name": "Excalibur Umbra"
    },{
        "uniqueName": "/Lotus/Powersuits/Excalibur/Excalibur",
        "productCategory": "Suits",
        "name": "Excalibur"
    }
];

describe('WarframeGetData', () => {
    it('capitalize', () => {
        expect(capitalize('ember')).toMatch(/Ember/);
        expect(capitalize('Ember')).toMatch(/Ember/);
        expect(capitalize('eMBER')).toMatch(/Ember/);
        expect(capitalize('EmBeR')).toMatch(/Ember/);

        expect(capitalize('ember prime')).toMatch(/Ember Prime/);
        expect(capitalize('Ember Prime')).toMatch(/Ember Prime/);
        expect(capitalize('eMBER pRIME')).toMatch(/Ember Prime/);
        expect(capitalize('EmBeR pRiMe')).toMatch(/Ember Prime/);

        expect(capitalize('Lo')).toMatch('Lo');

        expect(capitalize('/*-456dqsd')).toMatch('');
        expect(capitalize('')).toMatch('');
        expect(capitalize(456)).toMatch('');
        expect(capitalize({})).toMatch('');
        expect(capitalize([])).toMatch('');
        expect(capitalize(null)).toMatch('');
    });

    it('warframeGetName', () => {

        const Mock_value = ['Lo', 'lo', 123, '/?', 'Loki Prime', ''];

        let indexTabMockValue = 0
        expect(warframeGetName(Mock_warframeJSON[0].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[1].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[2].name, Mock_value[indexTabMockValue])).toEqual("Loki");
        expect(warframeGetName(Mock_warframeJSON[3].name, Mock_value[indexTabMockValue])).toEqual("Loki Prime");
        expect(warframeGetName(Mock_warframeJSON[4].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[5].name, Mock_value[indexTabMockValue])).toEqual('');

        indexTabMockValue = 1;
        expect(warframeGetName(Mock_warframeJSON[0].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[1].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[2].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[3].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[4].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[5].name, Mock_value[indexTabMockValue])).toEqual('');

        indexTabMockValue = 2;
        expect(warframeGetName(Mock_warframeJSON[0].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[1].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[2].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[3].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[4].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[5].name, Mock_value[indexTabMockValue])).toEqual('');

        indexTabMockValue = 3;
        expect(warframeGetName(Mock_warframeJSON[0].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[1].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[2].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[3].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[4].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[5].name, Mock_value[indexTabMockValue])).toEqual('');

        indexTabMockValue = 4;
        expect(warframeGetName(Mock_warframeJSON[0].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[1].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[2].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[3].name, Mock_value[indexTabMockValue])).toEqual("Loki Prime");
        expect(warframeGetName(Mock_warframeJSON[4].name, Mock_value[indexTabMockValue])).toEqual('');
        expect(warframeGetName(Mock_warframeJSON[5].name, Mock_value[indexTabMockValue])).toEqual('');

        indexTabMockValue = 5;
        expect(warframeGetName(Mock_warframeJSON[0].name, Mock_value[indexTabMockValue])).toEqual("Ash");
        expect(warframeGetName(Mock_warframeJSON[1].name, Mock_value[indexTabMockValue])).toEqual("Ember");
        expect(warframeGetName(Mock_warframeJSON[2].name, Mock_value[indexTabMockValue])).toEqual("Loki");
        expect(warframeGetName(Mock_warframeJSON[3].name, Mock_value[indexTabMockValue])).toEqual("Loki Prime");
        expect(warframeGetName(Mock_warframeJSON[4].name, Mock_value[indexTabMockValue])).toEqual("Excalibur Umbra");
        expect(warframeGetName(Mock_warframeJSON[5].name, Mock_value[indexTabMockValue])).toEqual("Excalibur");

    });

    it('warframeGetData', () => {
                
        const Mock_value = ['Lo', 'lo', 123, '/?', 'Loki Prime'];

        let indexTabMockValue = 0
        expect(warframeGetData(Mock_warframeJSON[0], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[1], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[2], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[3], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[4], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[5], Mock_value[indexTabMockValue])).toEqual({});

        indexTabMockValue = 1;
        expect(warframeGetData(Mock_warframeJSON[0], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[1], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[2], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[3], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[4], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[5], Mock_value[indexTabMockValue])).toEqual({});

        indexTabMockValue = 2;
        expect(warframeGetData(Mock_warframeJSON[0], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[1], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[2], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[3], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[4], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[5], Mock_value[indexTabMockValue])).toEqual({});

        indexTabMockValue = 3;
        expect(warframeGetData(Mock_warframeJSON[0], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[1], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[2], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[3], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[4], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[5], Mock_value[indexTabMockValue])).toEqual({});

        indexTabMockValue = 4;
        expect(warframeGetData(Mock_warframeJSON[0], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[1], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[2], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[3], Mock_value[indexTabMockValue])).toEqual(Mock_warframeJSON[3]);
        expect(warframeGetData(Mock_warframeJSON[4], Mock_value[indexTabMockValue])).toEqual({});
        expect(warframeGetData(Mock_warframeJSON[5], Mock_value[indexTabMockValue])).toEqual({});
    });

    it('warframeGet', () => {
        // TODO test warframeGet
        let Mock_value = ['Lo', 'lo', 123, '/?', 'Loki Prime', ''];
        const Mock_type = ['findName', 'getData'];

        let indexTabMockType = 0;
        expect(warframeGet(Mock_warframeJSON, Mock_value[0], Mock_type[indexTabMockType])).toEqual(["Loki", "Loki Prime"]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[1], Mock_type[indexTabMockType])).toEqual(["Loki", "Loki Prime"]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[2], Mock_type[indexTabMockType])).toEqual([]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[3], Mock_type[indexTabMockType])).toEqual([]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[4], Mock_type[indexTabMockType])).toEqual(["Loki Prime"]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[5], Mock_type[indexTabMockType])).toEqual([]);

        Mock_value = ['Loki', 'lo', 123, '/?', 'Loki Prime', ''];
        indexTabMockType = 1;
        expect(warframeGet(Mock_warframeJSON, Mock_value[0], Mock_type[indexTabMockType])).toEqual([{
            "uniqueName": "/Lotus/Powersuits/Loki/Loki",
            "productCategory": "Suits",
            "name": "Loki"
        }]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[1], Mock_type[indexTabMockType])).toEqual([]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[2], Mock_type[indexTabMockType])).toEqual([]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[3], Mock_type[indexTabMockType])).toEqual([]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[4], Mock_type[indexTabMockType])).toEqual([{
            "uniqueName": "/Lotus/Powersuits/Loki/LokiPrime",
            "productCategory": "Suits",
            "name": "Loki Prime"
        }]);
        expect(warframeGet(Mock_warframeJSON, Mock_value[5], Mock_type[indexTabMockType])).toEqual([]);
    });
});
