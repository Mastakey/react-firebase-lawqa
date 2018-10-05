const initState = {
    isAuthenticated: false,
    error: {
        login: {},
        register: {}
    },
    redirect: false
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const AuthReducer = (state = initState, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...state, isAuthenticated: true, error: {}, redirect: true};
        case 'REGISTER_SUCCESS':
            return { ...state, isAuthenticated: true, error: {}, redirect: true };
        case 'REGISTER_FAIL':
            console.log('REGISTER_FAIL');
            console.log(action);
            return { ...state, isAuthenticated: false, error: {...state.error, register: action.error}, redirect: false};
        case "LOGIN_FAIL":
            console.log(action);
            return { ...state, isAuthenticated: false, error: {...state.error, login: action.error}, redirect: false};
        default:
            return state;
    }
}

export default AuthReducer;