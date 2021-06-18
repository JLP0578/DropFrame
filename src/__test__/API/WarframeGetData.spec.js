import React from 'react';
import {shallow, mount, render} from 'enzyme';

import {capitalize, findByName, warframeGetData, warframeGetName, getDataByName} from '../../components/API/WarframeGetData';

const Mock_warframeJSON = [
    {
      "uniqueName": "/Lotus/Powersuits/Ninja/Ninja",
      "name": "Ash"
    },{
        "uniqueName": "/Lotus/Powersuits/Ember/Ember",
        "name": "Ember"
    },{
        "uniqueName": "/Lotus/Powersuits/Loki/Loki",
        "name": "Loki"
    },{
        "uniqueName": "/Lotus/Powersuits/Loki/LokiPrime",
        "name": "Loki Prime"
    },{
        "uniqueName": "/Lotus/Powersuits/Excalibur/ExcaliburUmbra",
        "name": "Excalibur Umbra"
    },{
        "uniqueName": "/Lotus/Powersuits/Excalibur/Excalibur",
        "name": "Excalibur"
    }
];

describe('WarframeGetData', () => {
    it('capitalize', () => {
        expect(capitalize('ember')).toMatch(/Ember/);
        expect(capitalize('Ember')).toMatch(/Ember/);
        expect(capitalize('eMBER')).toMatch(/Ember/);
        expect(capitalize('EmBeR')).toMatch(/Ember/);

        expect(capitalize('ember prime')).toMatch(/Ember prime/);
        expect(capitalize('Ember Prime')).toMatch(/Ember prime/);
        expect(capitalize('eMBER pRIME')).toMatch(/Ember prime/);
        expect(capitalize('EmBeR pRiMe')).toMatch(/Ember prime/);

        expect(capitalize('/*-456dqsd')).toMatch('');
        expect(capitalize(456)).toMatch('');
        expect(capitalize({})).toMatch('');
        expect(capitalize([])).toMatch('');
        expect(capitalize(null)).toMatch('');
    });

    it('warframeGetName', () => {

        const Mock_value = ['Lo', 'lo', 123, '/?', 'Loki Prime'];

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
    });
});
