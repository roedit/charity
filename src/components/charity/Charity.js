import React from 'react'
import {observer, inject} from 'mobx-react';

@inject('charityStore')
@observer
class Charity extends React.Component {
    render() {
        const { charityStore } = this.props
    
        console.log(charityStore.charity)
        return (
            <div>This is the carity component</div>
        );
    }
};

export default Charity