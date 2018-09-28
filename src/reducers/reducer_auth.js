const initState = {
    isAuthenticated: false
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const AuthReducer = (state = initState, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...state, isAuthenticated: true};
        default:
            return state;
    }
    return state;
}

export default AuthReducer;