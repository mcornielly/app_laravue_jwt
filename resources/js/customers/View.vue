<template>
    <div class="customer-info" v-if="customer">
        <div class="user-img">
            <img src="" alt="">
        </div>
        <div class="user-info">
            <table class="table table-striped">
                <tr>
                    <th>ID</th>
                    <td>{{ customer.id }}</td>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <td>{{ customer.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email }}</td>
                </tr>
                <tr>
                    <th>Teléfono</th>
                    <td>{{ customer.phone }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
            </table>
            <router-link to="/customers">Volver</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'customer-view',
        created() {
            if(this.customers.length){
                this.customer = this.customer.find((customer) => customer.id == this.$route.params.id)
            }else{
                axios.get(`/api/customer/${this.$route.params.id}`)
                    .then((response) => {
                        this.customer = response.data.customer;
                    });
            }
            // axios.get(`/api/customer/${this.$route.params.id}`, {
            //     headers: {
            //         "Authorization": `Bearer ${this.currentUser.token}` 
            //     }
            // })
            // .then((response) => {
            //     this.customer = response.data.customer;
            // })
        },
        data() {
            return {
                customer: null
            }
        },
        computed: {
            currentUser(){
                return this.$store.getters.currentUser;
            },
            customers(){
                return this.$store.getters.customers;
            }
        }
    }
</script>