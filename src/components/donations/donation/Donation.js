import React from 'react'
import { getCurrencySymbol } from '../../../utils/currency'

const Donation = (props) => {
    const donation = props.donation
    const myStyle = {
        order: props.align === 'right' ? 1 : 3
    }

    return (
      <div className={'donation ' + props.align}>
        <img className="user" src={donation.imageUrl}/>
        <div className="info" style={myStyle}>
           <div className="header">
            <h3 className="name">{donation.donorDisplayName}</h3>
            <h4 className="amount">{getCurrencySymbol(donation.currencyCode)} {donation.amount.toFixed(2)}</h4>
           </div>
           <div className="message">
             <p>{donation.message}</p>
           </div>
        </div>
      </div>
    )
}

export default Donation