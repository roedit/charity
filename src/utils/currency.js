const getCurrencySymbol = (currency) => {
    switch (currency) {
        case 'GBP':
        return '£'

        case 'EUR':
        return '€'
    }
}

export { getCurrencySymbol }