<template>
  <div class="container">
    <h2 class="stages__title">
      Вы можете доверить нам решение следующих задач:
    </h2>
    <div class="stages__inner">
      <div
        v-for="itemSite in stageSiteData"
        :key="itemSite"
        class="stage__item"
      >
        <img
          :src="require(`@/assets/images/site/${itemSite.icon}.png`)"
          class="stage__icon it"
          alt=""
          
        >
        <h5 class="stage__title" >
          {{ itemSite.title }}
        </h5>
        <p class="stage__text" >
          {{ itemSite.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      stageSiteData: [
        {
          icon: 'протипирование сайтов',
          title: 'ПРОТОТИПИРОВАНИЕ',
          text:
'На первом этапе мы проводим анализ рынка, конкурентов и их сайтов, зарубежных сайтов по вашей и схожей тематике и так далее. Обобщаем эти данные и приступаем к созданию мокапов/скетчей. То есть на выходе у вас должен получится скетчи каждой страницы будущего сайта'
        },
        {
          icon: 'дизайн сайтов',
          title: 'ДИЗАЙН',
          text:
  'На основе скетча рисуется дизайн каждой страницы сайта. Если у вас нет логотипа и стилистики, то создается с нуля'
        },
        {
          icon: 'верстка сайтов',
          title: 'ВЁРСТКА',
          text: 'Верстка дизайна — если сельским языком, то дизайн превращается в код. Пуфф.. и магия свершилась'
        },
        {
          icon: 'CMS',
          title: 'CMS',
          text:
'Верстка сажается на необходимую вам CMS. Это могут быть самые разные движки. Bitrix, WordPress, Opencart, Joomla, MODx и так далее. Нет плохих движков, есть неправильно подобранные под определенные задачи'
        }
      ]
    }
  }
}
</script>

