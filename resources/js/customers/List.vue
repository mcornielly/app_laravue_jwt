<template>
    <div>
        <div class="btn-wraper float-right pb-3">
            <router-link to="/customers/new" class="btn btn-primary btn-sm" title="nuevo cliente">Nuevo Cliente</router-link>
        </div> 
        <table class="table table-responsive table-striped">
            <thead>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <template v-if="!customers.length">
                    <tr>
                        <td colspan="4" class="text-center">No Clientes Disponibles</td>
                    </tr>
                </template>
                <template v-else>
                        <tr v-for="customer in customers" :key="customer.id">
                            <td>{{ customer.name }}</td>  
                            <td>{{ customer.email }}</td>  
                            <td>{{ customer.phone }}</td>  
                            <td>
                               <router-link :to="`/customers/${customer.id}`">View</router-link> 
                            </td>  
                        </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'customer-list',
        mounted() {
            if(this.customers.length){
                return;
            }
            
            this.$store.dispatch('getCustomers');
        },
        computed:{
            customers() {
                return this.$store.getters.customers;
            }
        }
    }
</script>