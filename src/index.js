import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "mobx-react"
import App from './components/App'
import './index.sass'
import CharityStore from './stores/charityStore'

const charityStore = new CharityStore();

ReactDOM.render(
    <Provider charityStore={charityStore}>
        <App />
    </Provider>, document.getElementById('app'))