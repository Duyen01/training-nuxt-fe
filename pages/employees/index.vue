<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Employee List
                    <nuxt-link to="employees/create" class="btn btn-primary fload end">Add Employee</nuxt-link>
                </h4>
            </div>
            <div class="card-body">
                <div v-if="isLoading">
                    <Loading title="Loading" />
                </div>
                <div v-else>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(employee, index) in employees" :key="index">
                                <td>{{ employee.id }}</td>
                                <td>{{ employee.name }}</td>
                                <td>{{ employee.email }}</td>
                                <td>{{ employee.phone }}</td>
                                <td>{{ employee.address }}</td>
                                <td>
                                    <nuxt-link :to="`/employees/${employee.id}`" class="btn btn-success btn-sm mx-2">Edit</nuxt-link>
                                    <button type="button" @click="deleteEmployee(employee.id)" class="btn btn-danger btn-sm mx-2">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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

</style>