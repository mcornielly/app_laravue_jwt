<template>
    <div id="main">
        <Header></Header>
        <div class="row">
            <div class="container pt-4">
                <router-view></router-view>
            </div>
        </div>    
    </div>
</template>

<script>
import Header from './Header.vue';
    export default {
        name: 'main-app',
        components:{
            Header
        }
    }
</script>
