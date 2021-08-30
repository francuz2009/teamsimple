<template>
  <div>
    <HeaderMain />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain'
import Footer from '@/components/Footer'
export default {
  components: {
    HeaderMain,
    Footer
  },
  data() {
    return {
    }
  }
}
</script>
