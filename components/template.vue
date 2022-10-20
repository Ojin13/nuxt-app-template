<template>
    <div class="">

    </div>
</template>



<script>
//import x from '../components/x.vue';
//import y from '../services/jsFile';

export default {
    components: {
        //x,
        //y
    },

    props: {
        testingProp: {
            type: String,
            required: true,
            default: "default value"
        },
    },

    data() {
        return{
            
        }
    },

    async asyncData({ route, store, app }){

    },

    methods: {

    },

    computed: {

    },

    mounted: function() {
        
    },

    created: function(){
      // Always initialize page data from route params here
      // this.someVariable = this.$route.params.nameOfParam
    },

}
</script>


<style lang="scss" scoped>
    @use "sass:math";
    @import "/assets/sass/variables";
</style>
