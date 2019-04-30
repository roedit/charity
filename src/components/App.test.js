import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Charity from './charity/Charity'
import Donations from './donations/Donations'

describe('App', () => {
    it('Should create the app', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.hasClass("app")).toBe(true)
        expect(wrapper.children()).toHaveLength(2)
        expect(wrapper.childAt(0).type()).toBe(Charity)
        expect(wrapper.childAt(1).type()).toBe(Donations)
    })
})