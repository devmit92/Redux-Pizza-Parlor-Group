const customerInfoReducer = (state = {}, action) => {
    if (action.type === 'ENTER_CUSTOMER_INFO') {
        return action.payload;
    }
    return state;
}

export default customerInfoReducer;