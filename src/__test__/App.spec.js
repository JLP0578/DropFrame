import React from 'react';
import {shallow, mount, render} from 'enzyme';

import App from '../components/App';

describe('App', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<App/>)));

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });

});
