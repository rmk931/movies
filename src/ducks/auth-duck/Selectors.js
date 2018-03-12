export const selectToken = (state) => {
    return state.auth.requestToken;
};

export const selectAuthStatus = (state) => {
    return state.auth.isAuth;
};

export const selectError = (state) => {
    return state.auth.error;
};

