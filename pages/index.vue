<template>
    <div class="">

    </div>
</template>

<script>
//import x from '../components/x.vue';

export default {
    layout: ({isMobile}) => isMobile ? 'mobile' : 'desktop',
    
    // If auth needed
    // middleware: ['isAuthenticated'],
    components: {
        //x,
        //y
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