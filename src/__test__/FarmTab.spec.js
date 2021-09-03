import React from 'react';
import { shallow } from 'enzyme';

import FarmTab from '@components/FarmTab';

const MOCK_currentWarframeName = "";
const MOCK_currentWarframePart = {};

describe('FarmTab', () => {
    let wrapper;
    wrapper = shallow(
        <FarmTab
            currentWarframeName={MOCK_currentWarframeName}
            currentWarframePart={MOCK_currentWarframePart}
        />
    );

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should generate node treeTech', () => {
        // handlePartList
    });

});
