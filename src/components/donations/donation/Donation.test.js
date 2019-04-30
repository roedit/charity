import React from 'react'
import { shallow } from 'enzyme'
import Donation from './Donation';
import { getCurrencySymbol } from '../../../utils/currency'

jest.mock('../../../utils/currency')

const donation = {
    imageUrl: 'imageUrl',
    donorDisplayName: 'donorDisplayName',
    currencyCode: 'currencyCode',
    amount: 100,
    currencyCode: 'GBP',
    message: 'message'
}
let align = 'right'
describe('Charity', () => {
    it('Should create the component', () => {
        const symbol = "#"
        getCurrencySymbol.mockImplementation(() => symbol)

        const wrapper = shallow(<Donation donation={donation} align={align}/>);
        expect(wrapper.hasClass('donation')).toBe(true)
        expect(wrapper.hasClass(align)).toBe(true)
        expect(wrapper.children()).toHaveLength(2)

        //<img className="user" src="imageUrl" />
        const img = wrapper.childAt(0)
        expect(img.hasClass('user')).toBe(true)
        expect(img.props().src).toBe(donation.imageUrl)

        //<div className="info" style={{...}}>
        const info = wrapper.childAt(1)
        expect(info.hasClass('info')).toBe(true)
        expect(info.props().style.order).toBe(align === 'right' ? 1 : 3)
        expect(info.children()).toHaveLength(2)

        align = 'left'
        wrapper.setProps({ align })
        expect(wrapper.childAt(1).props().style.order).toBe(align === 'right' ? 1 : 3)

        //<div className="header">
        const header = info.childAt(0)
        expect(header.hasClass('header')).toBe(true)
        expect(header.children()).toHaveLength(2)
        expect(header.childAt(0).hasClass('name')).toBe(true)
        expect(header.childAt(0).text()).toBe(donation.donorDisplayName)
        expect(header.childAt(1).hasClass('amount')).toBe(true)
        expect(header.childAt(1).text()).toBe(`${symbol} ${donation.amount.toFixed(2)}`)

        //<div className="message">
        const message = info.childAt(1)
        expect(message.hasClass('message')).toBe(true)
        expect(message.childAt(0).text()).toBe(donation.message)
    })
})