<template>
  <div ref='vantaRef' class="intro__page">
    <div class="container">
      <p class="autsorsing__title">Аутсорсинг – это способ оптимизации основной деятельности предприятия за счет передачи непрофильных функций внешним специализированным поставщикам услуг. ИТ-аутсорсинг – это передача функций обслуживания и сопровождения ИТ-инфраструктуры и ИТ-систем предприятия.</p>
    </div>
  </div>
</template>

<script>
import NET from 'vanta/src/vanta.net'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default {
  mounted() {
    this.vantaEffect = NET({
      el: this.$refs.vantaRef
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>
