const BUY_LAPTOP = "BUY_LAPTOP"


export const buyLaptop = (qty) => {
    return {
        type: BUY_LAPTOP,
        payload: qty
    }
}


const initialState = {
    laptopQty: 30
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_LAPTOP:
            
            return {
                ...state,
                laptopQty: state.laptopQty - action.payload
            }

        default: return state
    }
}


export default reducer