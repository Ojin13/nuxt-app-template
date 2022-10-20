//access like this: this.$store.state.auth.JWT
export const state = () => {
    JWT: ''
    UID: ''
    userName: ''
    userImage: ''
}

// call this.$store.commit('auth/set_JWT', this.token) to use
export const mutations = {
    set_JWT(state, token) {
        state.JWT = token;
    },
    set_username(state, name) {
        state.userName = name;
    },
    set_UID(state, uid) {
        state.UID = uid;
    },
    set_user_image(state, url) {
        state.userImage = url;
    },
}

// call this.$store.dispatch('auth/set_JWT_and_save_to_localstorage', this.token) to use
export const actions = {
    save_JWT(context, token){
        if(process.client) {
            localStorage.setItem("JWT", token);
        }
        context.commit('set_JWT', token);
    },
    save_username(context, name){
        if(process.client) {
            localStorage.setItem("userName", name);
        }
        context.commit('set_username', name);
    },
    save_UID(context, id){
        if(process.client) {
            localStorage.setItem("UID", id);
        }
        context.commit('set_UID', id);
    },
    save_user_image(context, id){
        if(process.client) {
            localStorage.setItem("userImage", id);
        }
        context.commit('set_user_image', id);
    },
}

export const getters = {
    getJWT: (state) => {
        return state.JWT;
    },
    getUID: (state) => {
        return state.UID;
    },
}