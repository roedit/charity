import React from 'react'
import {observer, inject} from 'mobx-react'
import './donations.sass'
import Donation from './donation/Donation'

@inject('charityStore')
@observer
class Donations extends React.Component {

    render() {
        const { charityStore } = this.props
    
        if(charityStore.loadingDonations) {
            return (
                <div>Loading..</div>
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