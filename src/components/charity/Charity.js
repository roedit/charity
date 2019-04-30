import React from 'react'
import {observer, inject} from 'mobx-react';
import Spinner from '../spinner/Spinner'

@inject('charityStore')
@observer
class Charity extends React.Component {
    render() {
        const { charityStore } = this.props

        if(charityStore.loadingCharity) {
            return (
                <div className="charity">
                    <Spinner />
                </div>
            )
        }
    
        return (
            <div className="charity">
                <div className="header">
                    <img className="logo" src={charityStore.charity.logoAbsoluteUrl} />
                    <h2>{charityStore.charity.name}</h2>
                </div>
                <div className="description">
                    <p>{charityStore.charity.description}</p>
                    <span>Charity No. #{charityStore.charity.registrationNumber}</span>
                </div>
            </div>
        );
    }
};

export default Charity