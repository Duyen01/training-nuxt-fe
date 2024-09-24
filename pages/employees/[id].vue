<template>
    <div class="mt-5 container">
    <div class="card">
        <div class="card-header">
            <h4>Edit Employee
                <nuxt-link to="/employees" class="btn btn-danger float-end">Back</nuxt-link>
            </h4>
        </div>
        <div class="card-body">
            <div v-if="isLoading">
                <Loading :title="isLoadingTitle" />
            </div>
            <div v-else>
                <form @submit.prevent="updateEmployee">
                    <div class="mb-3">
                        <label>Name</label>
                        <input type="text" v-model="employee.name" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label>Phone Number</label>
                        <input type="text" v-model="employee.phone" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label>Email</label>
                        <input type="text" v-model="employee.email" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label>Address</label>
                        <input type="text" v-model="employee.address" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "editEmployee",
    data() {
        return {
            employeeId: '',
            employee: {},
            isLoading: false,
            isLoadingTitle: 'Loading',

        }
    },
    
    mounted() {
        this.employeeId = this.$route.params.id

        this.getEmployee(this.employeeId);
    },

    methods: {
        updateEmployee() {
            this.isLoading = true;
            this.isLoadingTitle = 'Updating';
            axios.post(`http://127.0.0.1:8000/api/employee/${this.employeeId}`, this.employee).then(res => {
                console.log(res, 'respo');
                if(res.status = 200) {
                    this.employee.name = '';
                    this.employee.email = '';
                    this.employee.phone = '';
                    this.employee.address = '';
                    this.isLoading = false;
                    this.isLoadingTitle = 'Loading'
                    this.$router.go(-1)
                }
            })
            .catch(function (error) {
                if (error.status != 200) {
                    alert('Error!!!!!')
                }
                
                this.isLoading = false;
            })
            
        },

        getEmployee(employeeId) {
            axios.get(`http://127.0.0.1:8000/api/employee/detail/${employeeId}`).then(res => {
                this.employee = res.data.data
                this.isLoading = false
            })
        }
    },

}
</script>

<style>

</style>