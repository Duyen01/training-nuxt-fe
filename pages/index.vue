<template>
    <div class="flex justify-center table-css">
        <div class="flex mx-auto my-auto grid grid-cols-1 divide-x">
            <table class="w-full lg:w-3/4 xl:w-4/5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400">
                    <tr class=" dark:text-white">
                        <th scope="col" class="px-10 py-3">ID</th>
                        <th scope="col" class="px-10 py-3">Name</th>
                        <th scope="col" class="px-10 py-3">Email</th>
                        <th scope="col" class="px-10 py-3">Phone</th>
                        <th scope="col" class="px-10 py-3">Address</th>
                        <th scope="col" class="px-10 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, index) in employees" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ employee.id }}</th>
                        <td class="px-10 py-4">{{ employee.name }}</td>
                        <td class="px-10 py-4">{{ employee.email }}</td>
                        <td class="px-10 py-4">{{ employee.phone }}</td>
                        <td class="px-10 py-4">{{ employee.address }}</td>
                        <td class="px-10 py-4">
                            <nuxt-link :to="`/employees/${employee.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </nuxt-link>
                            <button type="button" @click="deleteEmployee(employee.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'listEmployee',
    data() {
        return{
            employees: {},
            isLoading: true
        }
    },

    mounted() {
        this.getEmployees();
    },

    methods: {
        getEmployees() {
            axios.get(`http://127.0.0.1:8000/api/list-employee`).then(res => {
                if (res.status = 200) {
                    this.employees = res.data.data
                    this.isLoading = false
                }
                
                console.log(res, 'res');
            })
        },
        deleteEmployee(employeeId){
            if(confirm('Are you sure, you want to delete this data?')){
                axios.delete(`http://127.0.0.1:8000/api/delete/${employeeId}`).then(res => {
                    //event.target.innerText = 'Delete';
                    this.getEmployees()
                })
            }
        }
    },

}
</script>

<style>
.table-css {
    margin: 50px;

}
</style>