const myLangReducer =( state = false , action) => {
    switch (action.type){
        case 'GET_LANG':
            return  state = action.payload;
        default:
            return false;

    }
};
export default myLangReducer;
