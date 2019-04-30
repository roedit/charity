import React from 'react'
import {observer, inject} from 'mobx-react'
import Spinner from '../spinner/Spinner'
import Donation from './donation/Donation'

@inject('charityStore')
@observer
class Donations extends React.Component {

    render() {
        const { charityStore } = this.props
    
        if(charityStore.loadingDonations) {
            return (
                <div className="donations">
                    <Spinner />
                </div>
            )
        }

        if(charityStore.donations.length === 0) {
            return(
                <div className="donations empty">
                    <h3 className="noDonations">Be the first to donate</h3>
                    <button className="donate">Donate</button>
                </div>
            )
        }

        return (
            <div className="donations">
                {charityStore.donations.map((donation, index) => <Donation key={index} donation={donation} align={index % 2 ? 'left' : 'right'}/>)}
            </div>
        );
    }
};

export default Donations