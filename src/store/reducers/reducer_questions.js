const initialState = {
    questions: [],
    addStatus: false,
    redirect: false
};
export default function(state = initialState, action){
    switch (action.type){
        case 'GET_QUESTIONS':
            console.log(action);
            return initialState;
        case 'GET_QUESTIONS_SUCCESS':
            console.log("action", action);
            console.log("data", action.payload);
            let questions = [];
            let data = action.payload;
            data.forEach((row) => {
                questions.push({...row.data(), id: row.id});
            });
            return {
                ...state,
                questions: questions,
                redirect: true
            };
        case 'ADD_QUESTION':
            console.log(action);
            return state;
        case 'ADD_QUESTION_SUCCESS':
            console.log(action);
            return {
                ...state,
                addStatus: true,
                redirect: true
            };
        default:
            return state;
    }
}