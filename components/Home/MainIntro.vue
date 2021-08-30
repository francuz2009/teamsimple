<template>
  <div
    id="intro"
    ref='vantaRef'
    class="intro"
  >
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          В сфере IT-технологий профессиональная поддержка имеет большое значение
        </h1>
        <h2 class="intro__suptitle" >
          Оставьте заявку и наш менеджер свяжется с Вами и проконсультирует по интересующим вопросам
        </h2>
        <div class="intro__btn">
          <div id="neon__btn">
            <a
              class="neon_btn"
              data-modal="#modal_hire_me"
              @click="showModal">
              <span />
              <span />
              <span />
              <span />
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom__shape">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="bottom__shape-fill" />
      </svg>
    </div>
    <Popup v-if="isShowModalVisible" :close-action="closeModal" />
  </div>
</template>

<script>
	import GLOBE from 'vanta/src/vanta.globe'
  import Popup from "./Popup.vue"

	export default {
		components:{
			Popup,
		},
		props:{},
		data(){
			return {
				isShowModalVisible: false
			}
		},
		methods:{
			showModal(){
				this.isShowModalVisible = true;
			},
			closeModal() {
				this.isShowModalVisible = false;
			}
		},
		mounted() {
      this.vantaEffect = GLOBE({
        el: this.$refs.vantaRef
        })
      },
    beforeDestroy() {
      if (this.vantaEffect) {
        this.vantaEffect.destroy()
        }
      },
    watch: {
      isShowModalVisible: function() {
        if(this.isShowModalVisible){
          document.documentElement.style.overflow = 'hidden'
        return
        }
        document.documentElement.style.overflow = 'auto'
        }
    }
  }

</script>

