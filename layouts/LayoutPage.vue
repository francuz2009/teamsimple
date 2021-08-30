<template>
  <div>
    <HeaderPage />
    <transition
      name="fade"
      mode="out-in"
    >
      <Nuxt />
       </transition>
      <Footer />
   
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage'
import Footer from '@/components/Footer'


export default {
  components: {
    HeaderPage,
    Footer
  },
  data() {
    return {
     }
  }
 
}
</script>

<style>
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s ease-out;
  }
</style>
