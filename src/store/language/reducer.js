export  const myLangReducer =( state = false , action) => {
    switch (action.type){
        case 'GET_LANG':
            return  action.payload;
        default:
            return false;

    }
    return state;
};

export  const setMyLangReducer =( state = true , action) => {
    switch (action.type){
        case 'SET_LANG':
            return   action.payload;
        default:
            return false;
    }
    return state;
};

