export const state = () => ({
    todoList: [],
})
  
export const getters = {
    all(state) {
        return state.todoList
    },
    progress(state) {
        return state.todoList.filter(function (item) {
        return !item.isComplete
        })
    },
    done(state) {
        return state.todoList.filter(function (item) {
        return item.isComplete
        })
    },
}

export const mutations = {
    store(state, data) {
        state.todoList = data
    },

    add(state, content) {
        state.todoList.push(content)
    }
}

export const actions = {
    getTodoList(vuexContext) {
        return this.$axios
        .$get('https://66f21ee64153791915531781.mockapi.io/api/todo/todoList')
        .then((res) => {
            vuexContext.commit('store', res)
        })
    },

    addTodo(vuexContext, content) {
        return this.$axios
            .$post('https://66f21ee64153791915531781.mockapi.io/api/todo/todoList', {
            content,
            isComplete: false,
            })
            .then(function (res) {
            vuexContext.commit('add', res)
            })
            .catch(function (err) {
            alert(err)
            })
    }
}

export default {
state,
actions,
mutations,
getters,
};