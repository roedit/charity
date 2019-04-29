import React from 'react'
import {observer, inject} from 'mobx-react';

@inject('charityStore')
@observer
class Donations extends React.Component {
    render() {
        const { charityStore } = this.props
    
        console.log(charityStore.donations)
        return (
            <div>cucu</div>
        );
    }
};

export default Donations