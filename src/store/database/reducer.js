const myFireBaseReducer =( state = false , action) => {
    switch (action.type){
        case 'GETBASE':
            return  state = action.payload;
        default:
            return false;

    }
};
export default myFireBaseReducer;
