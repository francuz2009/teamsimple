<template>
  <div id="services" class="sec__works">
    <div class="container">
      <Popup v-if="isShowModalVisible" :close-action="closeModal" />
      <div class="works">
        <div class="section__header">
          <h2 class="section__title gr" data-aos="fade-up" data-aos-delay="300">
            Какие услуги всё же мы можем вам предложить...
          </h2>
        </div>
        <div class="works__table">
          <div v-for="item in servicesData" :key="'works-'+item.id" class="works__way" data-aos="fade-up" data-aos-delay="400">
            <h3 class="works__title">
              {{ item.title }}
            </h3>
            <h4 class="works__suptitle">
              {{ item.suptitle }}
            </h4>
            <div class="works__way-li">
              <ul>
                <li v-for="(service, index) in item.serviceWay" :key="'serv-'+index" class="black">
                  <i class="fa fa-check" aria-hidden="true"/>
                  {{ service }}                  
                </li>
              </ul>
            </div>
            <p class="works__way-suptitle">
              {{ item.text }}
            </p>
            <div id="btn__border__bl" @click="showModal" data-aos="fade-up" data-aos-delay="500">
              <a>Связаться с нами</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clients__bot__shape">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="services__bot__shape-fill" />
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
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShowModalVisible: false,
      servicesData: [
        {
          id: 1,
          title: 'Информационное сопровождение организации',
          suptitle: 'УСТАНОВКА И НАСТРОЙКА ПО / НАСТРОЙКА СЕТИ И ПЕРЕФЕРИЙНЫХ УСТРОЙСТВ',
          serviceWay: ['Аутсорсинг', 'Установка ПО', 'Прокладка сети', 'Настройка оборудовани'],
          text: 'Самое главное наше достоинство это то что мы не занимаем место у вас в офисе :)'
        },
        {
          id: 2,
          title: 'Создание сайтов под ключ',
          suptitle: 'ЛЕНДИНГ/МНОГОСТРАНИЧНЫЙ САЙТ/ ИНТЕРНЕТ-МАГАЗИН',
          serviceWay: [
            'Уникальный дизайн',
            'До 3-х форм обратной связи',
            'Проработку и SEO-оптимизацию вашего контента',
            'Статистика посещаемости', 'Виджет обратного звонка',
            'Каталог товаров с возможностью покупок', 'Возможность управления товарами', 'Фотогалерею'
          ]
        },
        {
          id: 3,
          title: 'Видеонаблюдение',
          suptitle: 'МОНТАЖ / УСТАНОВКА СИСТЕМ ВИДЕОНАБЛЮДЕНИЯ',
          serviceWay: [
            'Анализ и внесение предложений по проекту',
            'Подбор решений согласно критериям и требованиям',
            'Монтаж сетей и оборудования',
            'Настройка оборудования'],
          text: 'Только проверенные поставщики и чистая работа :)'
        }
      ]
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
