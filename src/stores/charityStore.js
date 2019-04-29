import { observable, action } from "mobx";

class CharityStore {
    api = process.env.API
    key = process.env.API_KEY
    charityId = process.env.CHARITY_ID
    options = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    @observable charity
    @observable donations
    @observable loadingCharity = false
    @observable loadingDonations = false

    constructor() {
        this.fetchCharities()
        this.fetchDonations()
    }

    @action
    fetchCharities() {
        this.loadingCharity = true

        fetch(`${this.api}/${this.key}/v1/charity/${this.charityId}`, this.options)
        .then(response => response.json())
        .then(data => {
            this.charity = data
            this.loadingCharity = false
        })
    }

    
    @action
    fetchDonations() {
        this.loadingDonations = true

        fetch(`${this.api}/${this.key}/v1/charity/${this.charityId}/donations`, this.options)
        .then(response => response.json())
        .then(data => {
            this.donations = data
            this.loadingDonations = false
        })
    }
 }

 export default CharityStore