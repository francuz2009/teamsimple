<template>
  <div
    ref='vantaRef' 
    class="intro__page"
  >
    <div class="container">
      <p class="intro__text" >
        Создать сайт не очень сложно, а вот <strong>правильно</strong> создать <strong>правильный</strong>
        сайт это уже задача потрудней. Поэтому перед созданием сайта Вы (или мы) должный четко понимать
        зачем вам сайт и какие задачи на него возложены.
        В зависимости от исходных данных и задач, в поймете какой именно вид сайта вам нужен. 
        Но в любом случае, необходимо понимать процесс создания сайта.
      </p>
    </div>
  </div>
</template>

<script>
import BIRDS from 'vanta/src/vanta.birds'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default {

  mounted() {
    this.vantaEffect = BIRDS({
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

