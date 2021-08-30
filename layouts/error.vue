<template>
<div>
  <Header :data="HeaderMenuList"/>
  <div class="intro__error" ref='vantaRef'>
    <div class="container">
      <h2 class = "error__title"> УПС! ВЫ зашли не туда!</h2>
			<div class="error__btn">
				<div id="neon__btn" >
					<a href="/" class="error__text" >
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						На главную
					</a>
				</div>
			</div>
    </div>
  </div>
  
</div>
</template>

<script>
import HALO from 'vanta/src/vanta.globe'

export default {
  layout: 'LayoutPage',
  props: ['error'],
  mounted() {
    this.vantaEffect = HALO({
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