<template>
    <div class="w-full h-screen bg-gray-200 pt-8 flex justify-center items-center">
        <div class="bg-white p-5 max-w-md mx-auto container">
            <div class="text-center">
                <h1 class="text-3xl font-bold">ToDo App</h1>
                <div class="mt-4 flex">
                    <input class="w-80 border-b-2 border-gray-500 text-black" type="text" placeholder="Enter your task here" v-model="newTodo" name="newTodo"/>
                    <button @click="addTodo()" class="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">   
                        Add
                    </button>
                </div>        
            </div>
            <div class="mt-8">
                <ul>
                    <li class="p-2 rounded-lg" v-for="(todo, index) in defaultData" :key="index">
                        <div class="flex align-middle flex-row justify-between">
                            <div class="p-2">
                                <input type="checkbox" class="h-6 w-6 " :checked="todo.done" @click="toggleTodoStatus(todo)" />
                            </div>
                            <div class="p-2">
                                <p class="text-lg" :class="{ done: todo.done }">{{ todo.content }}</p>
                            </div>
                            <button class="flex text-red-700 border-2 border-red-500 p-2 rounded-lg" @click="removeTodo(index)">
                                Remove
                            </button>
                        </div>
                        <hr class="mt-2"/>
                    </li>
                </ul>
            </div>
            <div class="mt-8">
                <button class="border-2 border-red-500 p-2 text-red-700" @click="clearCompleteTask()">Clear Completed Task</button>
                <button class="border-2 border-indigo-500 p-2 text-indigo-500 ml-4" @click="resetTodoList()">Reset Todo List</button>
            </div>
        </div>    
    </div>
</template>

<script setup lang="ts">
    interface Todo {
        done: Boolean
        content: String
    }

    let newTodo = ref('')
    let defaultData= ref<Todo[]>(
        [{
            done: false,
            content: 'Training NuxtJS'
        },
        {
            done: false,
            content: 'Training Laravel'
        }]);

    function addTodo() {
        if (newTodo.value) {  
            defaultData.value = [...defaultData.value, {  
                done: false,  
                content: newTodo.value  
            }];  
            newTodo.value = '';  
        }
    }

    function toggleTodoStatus(todo: Todo) { 
        todo.done = !todo.done;        
    }
    
    function removeTodo(index: number) {
        defaultData.value.splice(index, 1);
    }

    function clearCompleteTask() {
        defaultData.value = defaultData.value.filter((todo: Todo) => todo.done !== true);
    }

    function resetTodoList() {
        defaultData.value = [];
    }
</script>

<style>
.done {
    text-decoration: line-through;
    color: rgb(172, 170, 170);
}

.container {
    background-color: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 90%;
}
</style>