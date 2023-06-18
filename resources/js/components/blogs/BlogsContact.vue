<template>
    <navigation></navigation>
    <br>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12" id="app">
            <div class="card">
                

                <div class="card-body">
                    
    
                    <h1>Blogs contact</h1>
   <router-link :to="{ name: 'blogs.index' }" class="btn btn-primary">Index</router-link>
                    
                </div>
            </div>
        </div>
    </div>
</div>
    


</template>


<script>
import { reactive } from "vue";
import navigation from './BlogsNav.vue'
export default {
    components: {
        navigation,
  },
}
</script>