<template>
  <div id="clientsif" class="section if">
    <div class="shape__top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="clientsif__fiil-top" />
      </svg>
    </div>
    <Popup v-if="isShowModalVisible" :close-action="closeModal" />
    <div class="container ">
      <div class="clients">
        <div class="section__header">
          <h2 class="section__title w" data-aos="fade-up" data-aos-delay="300">
            Если . . .          </h2>
          <div class="clients__table">
            <div class="clients__table-info" data-aos="fade-up" data-aos-delay="300">
              <ul>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="400">
                  <i class="fa fa-times"></i>
                  Вы хотите сделать лучший интернет магазин за 5000-10000 рублей
                </li>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="450">
                  <i class="fa fa-times"></i>
                  Вы хотите ультра быстрого повления вашего сайта в топ-10 за пару дней
                </li>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="500">
                  <i class="fa fa-times"></i>
                  Хотите сверх дешовое (бесплатное) решение для организации
                </li>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="550">
                  <i class="fa fa-times"></i>
                  Хорошее видеонаблюдение за "не дорого"
                </li>
              </ul>
            </div>
            <div class="clients__table-info" data-aos="fade-up" data-aos-delay="650">
              <ul>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="650">
                  <i class="fa fa-check" aria-hidden="true"/>
                  Вам нужна консультация по сайтам или прочим IT-услугам
                </li>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="700">
                  <i class="fa fa-check" aria-hidden="true"/>
                  Вам нужен БЕСПЛАТНЫЙ анализ вашего проекта/сайта или консультация инженера
                </li>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="750">
                 <i class="fa fa-check" aria-hidden="true"/>
                  Вы осознано понимаете что вам нужно но не знаете как это реализовать
                </li>
                <li class="clients__list-neg" data-aos="fade-up" data-aos-delay="800">
                  <i class="fa fa-check" aria-hidden="true"/>
                  Хотите пообщаться или угостить нас хорошим алкоголем
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clients__table-after">
          <div class="clients__content">
            <img class="about__img-arr" src="@/assets/images/arrows/strelka-2.png" alt="" data-aos="fade-up" data-aos-delay="500">
            <p class="clients__suptitle" data-aos="fade-up" data-aos-delay="550">
              Пожалуйста, закройте наш сайт и не связывайтесь с нами :)
            </p>
          </div>
          <div class="clients__content">
            <img class="about__img-arr" src="@/assets/images/arrows/strelka-2.png" alt="" data-aos="fade-up" data-aos-delay="800">
            <div id="btn__border" data-modal="#modal_hire_me" @click="showModal" data-aos="fade-in" data-aos-delay="850">
              <a>Связаться с нами</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clients__bot__shape">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="clients__bot__shape-fill" />
      </svg>
    </div>
  </div>
</template>

<script>
import Popup from '../Home/Popup.vue'
export default {
  components: {
    Popup
  },
  props: {},
  data() {
    return {
      isShowModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isShowModalVisible = true
    },
    closeModal() {
      this.isShowModalVisible = false
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

