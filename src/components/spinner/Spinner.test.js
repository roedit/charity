import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './Spinner'

describe('Spinner', () => {
    it('Should show the spinner', () => {
        const wrapper = shallow(<Spinner />)
        expect(wrapper.type()).toBe('svg')
        expect(wrapper.hasClass('spinner')).toBe(true)
        expect(wrapper.props().viewBox).toBe('0 0 50 50')

        //circle
        const circle = wrapper.childAt(0)
        expect(circle.hasClass('path')).toBe(true)
        expect(circle.props().cx).toBe('25')
        expect(circle.props().cy).toBe('25')
        expect(circle.props().r).toBe('20')
        expect(circle.props().fill).toBe('none')
        expect(circle.props().strokeWidth).toBe('5')
    })
})