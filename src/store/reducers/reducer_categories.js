const initialState = {
    categories: [],
    addStatus: false,
    redirect: false
};
export default function(state = initialState, action){
    switch (action.type){
        case 'GET_CATEGORIES':
            console.log(action);
            return initialState;
        default:
            return state;
    }
}