import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionsReducer from './reducer_questions';
import ProjectReducer from './reducer_project';
import AuthReducer from './reducer_auth';
import FirebaseReducer from './reducer_firebase';

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    questions: QuestionsReducer,
    firebase: FirebaseReducer,
    form: formReducer
});

export default rootReducer;