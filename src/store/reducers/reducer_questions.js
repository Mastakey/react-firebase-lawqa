const initialState = [];
export default function(state = initialState, action){
    switch (action.type){
        case 'GET_QUESTIONS':
            console.log(action);
            return state;
        case 'GET_QUESTIONS_SUCCESS':
            console.log("action", action);
            console.log("data", action.payload);
            let questions = [];
            let data = action.payload;
            data.forEach((row) => {
                questions.push({...row.data(), id: row.id});
            });
            return questions;
        case 'ADD_QUESTION':
            console.log(action);
            return state;
        default:
            return state;
    }
}