import React from 'react'
import { shallow } from 'enzyme'
import Donations from './Donations'
import Donation from './donation/Donation';
import Spinner from '../spinner/Spinner';

const charityStore = {
    loadingDonations: true,
    donations: [1, 2, 3]
}
describe('Charity', () => {
    it('Should show the spinner', () => {
        const wrapper = shallow(<Donations.wrappedComponent charityStore={charityStore}/>)
        expect(wrapper.hasClass('donations')).toBe(true)
        expect(wrapper.childAt(0).type()).toBe(Spinner)
    })

    it('Should create the component', () => {
        charityStore.loadingDonations = false
        const wrapper = shallow(<Donations.wrappedComponent charityStore={charityStore}/>)
        expect(wrapper.hasClass('donations')).toBe(true)
        expect(wrapper.children()).toHaveLength(charityStore.donations.length)

        charityStore.donations.forEach((donation, index) => {
            expect(wrapper.childAt(index).type()).toBe(Donation)
            expect(wrapper.childAt(index).props().donation).toBe(donation)
            expect(wrapper.childAt(index).props().align).toBe(index % 2 ? 'left' : 'right')
        })
    })
})