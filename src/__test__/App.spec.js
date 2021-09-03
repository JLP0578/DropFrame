import React from 'react';
import { shallow } from 'enzyme';

import App from '@components/App';

describe('App', () => {
    let wrapper;
    wrapper = shallow(<App/>);

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should generate node treeTech', () => {
        // handlePartList
    });

});
