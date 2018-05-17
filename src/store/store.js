import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fields: []
    },
    mutations: {
        ADD_FIELD(state, field){
            state.fields.push({
                fieldName: field.newFieldName,
                item: field.newItem
            })
        }
    },
    actions: {
        addField({ commit }, field){
            commit('ADD_FIELD', field)
        }
    },
    getters: {
        fields: state => state.fields
    }
})
