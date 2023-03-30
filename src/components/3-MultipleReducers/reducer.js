import { combineReducers } from "redux"

const BUY_LAPTOP = "BUY_LAPTOP"
const BUY_MOBILE = "BUY_MOBILE"


export const buyLaptop = (qty) => {
    return {
        type: BUY_LAPTOP,
        payload: qty
    }
}
export const buyMobile = (qty) => {
    return {
        type: BUY_MOBILE,
        payload: qty
    }
}


const initialLaptopState = {
    laptopQty: 30
}

const initialMobileState = {
    mobileQty: 50
}


const LaptopReducer = (state = initialLaptopState, action) => {
    switch (action.type) {
        case BUY_LAPTOP:
            
            return {
                ...state,
                laptopQty: state.laptopQty - action.payload
            }

        default: return state
    }
}

const MobileReducer = (state = initialMobileState, action) => {
    switch (action.type) {
        case BUY_MOBILE:
            
            return {
                ...state,
                mobileQty: state.mobileQty - action.payload
            }

        default: return state
    }
}

const rootReducer  = combineReducers({LaptopValue: LaptopReducer, MobileValue: MobileReducer})

export default rootReducer