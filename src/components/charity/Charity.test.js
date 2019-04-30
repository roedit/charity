import React from 'react'
import { shallow } from 'enzyme'
import Charity from './Charity'
import Spinner from '../spinner/Spinner';

const charityStore = {
    loadingCharity: true,
    charity: {
        name: 'name',
        logoAbsoluteUrl: 'logoAbsoluteUrl',
        description: 'description',
        registrationNumber: 'registrationNumber'
    }
}
describe('Charity', () => {
    it('Should show the loading msg', () => {
        const wrapper = shallow(<Charity.wrappedComponent charityStore={charityStore}/>)
        expect(wrapper.hasClass('charity')).toBe(true)
        expect(wrapper.childAt(0).type()).toBe(Spinner)
    })

    it('Should create the component', () => {
        charityStore.loadingCharity = false
        const wrapper = shallow(<Charity.wrappedComponent charityStore={charityStore}/>)
        expect(wrapper.hasClass('charity')).toBe(true)
        expect(wrapper.children()).toHaveLength(2)

        //<div className="header">
        const header = wrapper.childAt(0)
        expect(header.hasClass('header')).toBe(true)
        expect(header.children()).toHaveLength(2)

        //<img className="logo" src="logoAbsoluteUrl" />
        const img = header.childAt(0)
        expect(img.hasClass('logo')).toBe(true)
        expect(img.props().src).toBe(charityStore.charity.logoAbsoluteUrl)

        // <h2>name</h2>
        const title = header.childAt(1)
        expect(title.text()).toBe(charityStore.charity.name)

        //<div className="description">
        const description = wrapper.childAt(1)
        expect(description.hasClass('description')).toBe(true)
        expect(description.children()).toHaveLength(2)

        // <p>description</p>
        const descText = description.childAt(0)
        expect(descText.text()).toBe(charityStore.charity.description)

        //<span>Charity No. # registrationNumber </span>
        const regNr = description.childAt(1)
        expect(regNr.text()).toBe(`Charity No. #${charityStore.charity.registrationNumber}`)
    })
})