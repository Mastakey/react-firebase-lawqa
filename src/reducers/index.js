import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionsReducer from './reducer_questions';
const rootReducer = combineReducers({
    questions: QuestionsReducer,
    form: formReducer
});

export default rootReducer;