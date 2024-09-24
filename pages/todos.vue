<template>
    <div>
        <h1>ToDo App</h1>
        <form @submit.prevent="addTodo()">
            <label>New ToDo </label>
            <input v-model="newTodo" name="newTodo" autocomplete="off" />
            <button>Add ToDo</button>
        </form>
        <h2>ToDo List</h2>
        <ul>
            <li v-for="(todo, index) in defaultData" :key="index">
                <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{ todo.content }}</span>
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
        <h4 v-if="defaultData.length === 0">Empty list.</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodo : '',
            defaultData: [
                {
                    done: true,
                    content: 'Training NuxtJS'
                },
                {
                    done: false,
                    content: 'Training Laravel'
                }
            ],
        }
    },

    methods: {
        addTodo() {
            const todos = {}
            if (this.newTodo) {
                todos['done'] = false
                todos['content'] = this.newTodo
                this.newTodo = ''
            }
            this.defaultData.push(todos)
        },

        doneTodo(todo) {
            todo.done = !todo.done
        },

        removeTodo(index) {
            this.defaultData.splice(index, 1)
        }
    },
}

</script>

<style lang="scss">
    $border: 2px solid

    rgba(
        $color: white,
        $alpha: 0.35
    );

    $size1: 6px;
    $size2: 12px;
    $size3: 18px;
    $size4: 24px;
    $size5: 48px;
    $backgroundColor: #27292d;
    $textColor: white;
    $primaryColor: #a0a4d9;
    $secondTextColor: #1f2023;

    body {
        margin: 0;
        padding: 0;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: $backgroundColor;
        color: $textColor;

    #__nuxt {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        h1 {
        font-weight: bold;
        font-size: 28px;
        text-align: center;
        }
        form {
        display: flex;
        flex-direction: column;
        width: 100%;
        label {
            font-size: 14px;
            font-weight: bold;
        }
        input,
        button {
            height: $size5;
            box-shadow: none;
            outline: none;
            padding-left: $size2;
            padding-right: $size2;
            border-radius: $size1;
            font-size: 18px;
            margin-top: $size1;
            margin-bottom: $size2;
        }
        input {
            background-color: transparent;
            border: $border;
            color: inherit;
        }
        }
        button {
        cursor: pointer;
        background-color: $primaryColor;
        border: 1px solid $primaryColor;
        color: $secondTextColor;
        font-weight: bold;
        outline: none;
        border-radius: $size1;
        }
        h2 {
        font-size: 22px;
        border-bottom: $border;
        padding-bottom: $size1;
        }
        ul {
        padding: 10px;
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: $border;
            padding: $size2 $size4;
            border-radius: $size1;
            margin-bottom: $size2;
            span {
            cursor: pointer;
            }
            .done {
            text-decoration: line-through;
            }
            button {
            font-size: $size2;
            padding: $size1;
            }
        }
        }
        h4 {
        text-align: center;
        opacity: 0.5;
        margin: 0;
        }
    }
}
</style>