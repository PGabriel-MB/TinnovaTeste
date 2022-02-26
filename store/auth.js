export const state = () => ({
    user: {},
    isAuthenticated: false,
    token: ''
})

export const mutations = {
    setUser(state, userData) {
        state.user = {...userData};
    },
    setToken(state, token) {
        state.token = token;
    },
    setAuthentication(state, authentication) {
        state.user = authentication.user;
        state.token = authentication.token;
        state.isAuthenticated = authentication.isAuthenticated;
    },
    cleanAuthentication(state) {
        state.user = {};
        state.isAuthenticated = false;
        state.token = '';
    }
}
