import React from 'react';
import {shallow} from 'enzyme';
import App from '../components/App';

describe('App', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<App/>)));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    describe('App action', () => {
        it('should add new poi in list', () => {
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);
            wrapper.instance().addNewPOIInTheStep(numStep_1, poi_1);
            wrapper.instance().addNewPOIInTheStep(numStep_1, poi_2);
            expect(wrapper.instance().state.etapes).toEqual(MOCK_step_1);
        });
        it('should add new step in list', () => {
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);

            wrapper.instance().addNewPOIInTheStep(numStep_1, poi_1);
            wrapper.instance().addNewPOIInTheStep(numStep_1, poi_2);
            expect(wrapper.instance().state.etapes).toEqual(MOCK_step_1);

            wrapper.instance().addNewStepInTheList();
            expect(wrapper.instance().state.etapes).toEqual(MOCK_add_new_step);
        });
        it('should control add step in list', () => {
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);
            wrapper.instance().addNewStepInTheList();
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);
        });
        it('should remove step from list', () => {
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);

            wrapper.instance().addNewPOIInTheStep(numStep_1, poi_1);
            wrapper.instance().addNewPOIInTheStep(numStep_1, poi_2);
            expect(wrapper.instance().state.etapes).toEqual(MOCK_step_1);

            wrapper.instance().addNewStepInTheList();
            expect(wrapper.instance().state.etapes).toEqual(MOCK_add_new_step);

            wrapper.instance().removeStepFromTheList(numStep_1);
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);
        });
        it('should control remove step from list', () => {
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);
            wrapper.instance().removeStepFromTheList(numStep_1);
            expect(wrapper.instance().state.etapes).toEqual(MOCK_empty_step);
        });
    });
});
