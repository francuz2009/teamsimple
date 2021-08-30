<template>
  <div id="works" class="portfolio">
    <div class="container">
      <h2 class="section__title w" data-aos="fade-up" data-aos-delay="400">
        Примеры наших работ
      </h2>
      <div class="portfolio__inner">
        <div v-for="item in portfolioData" :key="'portfolio-'+ item" class="portfolio__item">
          <div class="item__inner">
            <div class="image">
              <div class="item__img">
                <img :src="require(`@/assets/images/home/${item.img}.jpg`)" alt="" class="portfolio__img" data-aos="fade-up" data-aos-delay="450">
              </div>
            </div>
            <div class="item__text">
              <h3 class="item__header" data-aos="fade-up" data-aos-delay="500">
                {{ item.title }}
              </h3>
              <p data-aos="fade-up" data-aos-delay="550">
                {{ item.text }}
              </p>
              <router-link :to="'/' + item.page">
                <div class="portfolio__btn" data-aos="fade-up" data-aos-delay="600">
                  <button class="custom-btn portfolio-btn">
                    <span>Далее</span><span> Подробнее</span>
                  </button>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {}
  },
  data() {
    return {
      portfolioData: [
        {
          img: 'Site',
          title: 'Создание сайтов',
          text: 'В данном разделе вы можете увидеть примеры и этапы создание сайтов нашей командой',
          page: 'cozdanie-sajta',
        },
        {
          img: 'It',
          title: 'Информационное сопровождение',
          text: 'Основные принципы и более детальный разбор поддержки',
          page: 'informatsionnoe-soprovozhdenie',
        },
        {
          img: 'Video',
          title: 'Видеонаблюдение',
          text: 'Расчёты и примеры видеонаблюдения которые мы поможем вам реализовать',
          page: 'videonablyudenie'
        }
      ]
    }
  }
}
</script>
