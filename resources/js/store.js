export default {
    state: {
        welcomeMessage: "Bienvenidos a la App"
    },
    getters: {
        welcome(state){
            return state.welcomeMessage
        }
    },
    mutations:{},
    actions: {}
}