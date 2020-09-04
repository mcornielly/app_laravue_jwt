<template>
    <div class="row pt-4">
        <div class="container">
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'home',

        computed: {
            user(){
                const user = store.state.currentUser;
            }
        }
    }
</script>
