<template>
  <div class="areas__work">
    <div class="container">
      <div class="areas__inner">
        <div
          v-for="item in areasWorkData"
          :key="'areas-'+item.id"
          class="areas__item"
        >
          <div
            class="stage__title w"
            :style="{'background-image': 'url(' + require(`@/assets/images/site/icons/${item.iconBG}.png`) + ')'}"
            data-aos="fade-up" data-aos-delay="300"
          >
            {{ item.title }}
          </div>
          <img
            :src="require(`@/assets/images/site/icons/${item.icon}.png`)"
            alt=""
            class="areas__icon"
            data-aos="fade-up" data-aos-delay="400"
          >
          <div class="areas__text" data-aos="fade-up" data-aos-delay="500">
            {{ item.subtitle }}
          </div>
          <div class="areas__plus">
            <h6 class="areas__plus-title" data-aos="fade-up" data-aos-delay="500">
              Плюсы
            </h6>
            <p
              v-for="(plus, index) in item.pluses"
              :key="index"
              class="areas__plus-text"
              data-aos="fade-up" data-aos-delay="600"
            >
              <img
                class="areas__plus-icon"
                src="@/assets/images/site/icons/plus.png"
                alt=""
              >
              {{ plus }}
            </p>
            <h6 class="areas__plus-title" data-aos="fade-up" data-aos-delay="650">
              Минусы
            </h6>
            <p
              v-for="(minus, index) in item.minuses"
              :key="index"
              class="areas__plus-text"
              data-aos="fade-up" data-aos-delay="700"
            >
              <img
                class="areas__plus-icon"
                src="@/assets/images/site/icons/minus.png"
                alt=""
              >
              {{ minus }}
            </p>
          </div>
          <img
            class="areas__line"
            src="@/assets/images/site/icons/line.png"
            alt=""
            data-aos="fade-up" data-aos-delay="750"
          >
          <div class="areas__after" data-aos="fade-up" data-aos-delay="750">
            <p class="areas__info">
              Примерная стоимость:
            </p>
            <p class="areas__equal">
              {{ item.cost }}
            </p>
            <p class="areas__info">
              Примерные сроки:
            </p>
            <p class="areas__equal">
              {{ item.timing }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return{
      areasWorkData: [
        {
          id: 11,
          iconBG: '1',
          icon: 'leaflet',
          title: 'КЛАССИКА',
          subtitle: 'Классические сайты (интернет магазины, визитки)',
          pluses: [
            'Индивидуальный дизайн',
            'Более сильный функционал',
            'Простое внесение правок и корректировок',
            'Наличие исходников (PSD, код верстки)'
          ],
          minuses: [
            'Более высокий бюджет',
            'Долгие сроки'
          ],
          cost: '40-150т.р.',
          timing: '1 — 3 месяца'
        },
        {
          id: 12,
          iconBG: '2',
          icon: 'robot',
          title: 'ШАБЛОН',
          subtitle: 'Шаблонные сайты (шаблон это прототип+дизайн+верстка)',
          pluses: [
            'Более дешевый',
            'Более быстро создается',
            'Заранее выбираете как сайт будет выглядеть',
            'Большой выбор шаблонов'
          ],
          minuses: [
            'Невозможность переделки шаблона под себя',
            'Покупка «кота в мешке»'
          ],
          cost: '30-60 т. р.',
          timing: '2 — 4 недели'
        },
        {
          id: 13,
          iconBG: '3',
          icon: 'rocket',
          title:'ЛЕНДИНГИ',
          subtitle: 'Лендинги, квизы, «пули» и прочее мракобесие',
          pluses: ['Самый быстрый по времени создания', 'Самый дешевый по бюджету'],
          minuses: [
            'Невозможность в seo продвижение',
            'Невозможность прикрутить функционал',
            'Неудобное управление контентом',
            'Хуже продают чем большие сайт'
          ],
          cost: '15-40 т. р.',
          timing: '5 — 14 дней'
        }
      ]
    }
  }
}
</script>
