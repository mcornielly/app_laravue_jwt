<template>
    <div class="container pt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                   <div class="card-header">
                       <h4 class="card-title">Clientes</h4>
                    </div> 
                   <div class="card-body">
                       <router-view></router-view>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'customer-main',
    }
</script>