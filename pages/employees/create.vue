<template>
  <div class="mt-5 container">
    <div class="card">
        <div class="card-header">
            <h4>Add New Employee
                <nuxt-link to="/employees" class="btn btn-danger float-end">Back</nuxt-link>
            </h4>
        </div>
        <div class="card-body">
            <div v-if="isLoading">
                <Loading :title="isLoadingTitle" />
            </div>
            <div v-else>
                <form @submit.prevent="saveEmployee">
                    <div class="mb-3">
                        <label>Name</label>
                        <input type="text" v-model="employee.name" class="form-control" />
                        <span class="text-danger" v-if="this.errorList.name">{{ this.errorList.name[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label>Phone Number</label>
                        <input type="number" v-model="employee.phone" class="form-control" />
                        <span class="text-danger" v-if="this.errorList.phone">{{ this.errorList.phone[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label>Email</label>
                        <input type="text" v-model="employee.email" class="form-control" />
                        <span class="text-danger" v-if="this.errorList.email">{{ this.errorList.email[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label>Address</label>
                        <input type="text" v-model="employee.address" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>            
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "createEmployee",
    data() {
        return {
            employee: {
                name: '',
                phone: '',
                email: '',
                address: ''
            },
            isLoading: false,
            isLoadingTitle: 'Loading',
            errorList: {},
        }
    },
    
    methods: {
        saveEmployee() {
            this.isLoading = true;
            this.isLoadingTitle = 'Saving';
            var myThis = this;
            axios.post(`http://127.0.0.1:8000/api/create-employee`, this.employee).then(res => {
                if(res.status = 200) {
                    this.isLoading = false;
                    this.employee.name = '';
                    this.employee.email = '';
                    this.employee.phone = '';
                    this.employee.address = '';
                    this.$router.push('/employees')
                } else {
                    alert('Error!!!!!')
                }
            })
            .catch(function (error) {
               if(error.status = 422){
                console.log(error);
                myThis.errorList = error.response.data.errors
                
                console.log(error.response.data.errors.email[0]);
                this.isLoading = false;
               }
            })
            
        }
    },

}
</script>


<style>

</style>