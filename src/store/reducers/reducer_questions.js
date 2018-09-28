const initialState = [
    { id: '1', title: 'Question 1', content:'' },
    { id: '2', title: 'Question 2', content: '' },
    { id: '3', title: 'Question 3', content: '' }
];
export default function(state = initialState, action){
    switch (action.type){
        case 'GET_QUESTIONS':
            console.log(action);
        default:
            return state;
    }
}