const initState = {
    isAuthenticated: false,
    error: {},
    redirect: false
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const AuthReducer = (state = initState, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...state, isAuthenticated: true, error: {}, redirect: true};
        case "LOGIN_FAIL":
            console.log(action);
            return { ...state, isAuthenticated: false, error: action.error, redirect: false}
        default:
            return state;
    }
}

export default AuthReducer;