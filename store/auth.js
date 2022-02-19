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
    cleanAuthentication(state) {
        state.user = {};
        state.isAuthenticated = false;
        state.token = '';
    }
}
