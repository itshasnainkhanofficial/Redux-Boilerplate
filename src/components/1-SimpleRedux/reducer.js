const BUY_LAPTOP = "BUY_LAPTOP"


export const buyLaptop = () => {
    return {
        type: BUY_LAPTOP
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
                laptopQty: state.laptopQty - 1
            }

        default: return state
    }
}


export default reducer