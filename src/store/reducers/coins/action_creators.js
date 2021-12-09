export const constantCoins = {
    SET_PRICES: 'SET_PRICES',
    IS_LOADED: 'IS_LOADED'
};

export const CoinActonCreators = {
    setPrices: (payload) => ({
        type: constantCoins.SET_PRICES,
        payload
    }),
    isLoaded: () => ({
        type: constantCoins.IS_LOADED
    })
}