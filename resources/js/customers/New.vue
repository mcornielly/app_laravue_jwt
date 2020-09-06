<template>
    <div>
        <form action="" method="post" @submit.prevent="addCustomer">
            <div class="row form-group">
                <div class="col-md-3">
                <label for="">Nombre</label>
                </div>
                <div class="col-md-9">

                <input type="text" name="" id="" class="form-control" placeholder="Ingrese Nombre del Cliente" aria-describedby="helpId" v-model="customer.name">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-3">

                <label for="">Email</label>
                </div>
                <div class="col-md-9">
                <input type="email" name="" id="" class="form-control" placeholder="Ingrese Email" aria-describedby="helpId" v-model="customer.email">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-3">
                <label for="">N° Telefono</label>
                </div>
                <div class="col-md-9">
                <input type="tel" name="" id="" class="form-control" placeholder="Ingrese N° Teléfono" aria-describedby="helpId" v-model="customer.phone">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-3">
                    <label for="">URL - Web Site</label>
                </div>
                <div class="col-md-9">
                    <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" v-model="customer.website">
                    <small id="helpId" class="text-muted">Help text</small>
                </div>
            </div>
        </form>
        <div  v-if="errors">
            <div class="alert alert-danger" role="alert">
                <ul v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <li>
                        <strong>{{ fieldName }}</strong> {{ fieldsError[0] }} 
                    </li>
                </ul>
            </div>
        </div>
            <hr>
            <div>
                <router-link to="/customers" class="btn btn-default float-left">Cancelar</router-link>
                <button type="button" class="btn btn-primary float-right" @click.prevent="addCustomer">Guardar</button>
            </div>
    </div>
            
</template>

<script>
import validate from 'validate.js'

    export default {
        name: 'customer-new',
        data() {
            return {
                customer:{
                    name: '',
                    email: '',
                    phone: '',
                    website: ''
                },
                errors: null
            }
        },
        computed: {
            currentUser(){
                return this.$store.getters.currentUser;
            }
        },
        methods:{
            addCustomer() {
                this.errors = null;
                const constraints = this.getConstrains();

                const errors = validate(this.$data.customer, constraints);

                if(errors){
                    this.errors = errors;
                    return;
                }

                // axios.post('/api/customer/new', this.$data.customer, {
                //     headers: {
                //         "Authorization": `Bearer ${this.currentUser.token}` 
                //     }
                // }).then((response) => {
                //     this.$router.push('/customers');
                // })

                axios.post('/api/customer/new', this.$data.customer)
                    .then((response) => {
                        this.$router.push('/customers');
                    });
            },
            getConstrains(){
                return {
                    name: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: 'Debe contener minimo 3 caracteres'
                        }
                    },
                    email:{
                        presence: true,
                        email: true
                    },
                    phone: {
                        presence: true,
                        numericality: true,
                        length: {
                            minimum: 10,
                            message: 'Debe contener minimo 10 caracteres'
                        }
                    },
                    website:{
                        presence: true,
                        url: true
                    },
                };
            }
        }
    }
</script>