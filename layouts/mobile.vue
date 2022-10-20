<template>
  <div>
      <p>Mobile</p>
      <Nuxt />
      <mobileBottomMenu></mobileBottomMenu>
  </div>
</template>


<script>
  import mobileBottomMenu from '../components/mobile/bottomMenu.vue';

  export default {
    components: {
      mobileBottomMenu
    }
  }
</script>