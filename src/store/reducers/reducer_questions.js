const initialState = {};
export default function(state = initialState, action){
    switch (action.type){
        case 'GET_QUESTIONS':
            console.log(action);
            return state;
        case 'GET_QUESTIONS_SUCCESS':
            console.log("action", action);
            console.log("questions", action.payload);
            return action.payload;
        case 'ADD_QUESTION':
            console.log(action);
            return state;
        default:
            return state;
    }
}