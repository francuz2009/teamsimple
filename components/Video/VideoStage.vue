<template>
  <div class="container">

			<h2 class ="stages__title" data-aos="fade-in" data-aos-delay="300">Виды устанавливаемых камер видеонаблюдения:</h2>
      <div class="stages__inner">
			<div class="stage__item video-stage" v-for="item in stageVideoData" :key="item.id">
				
				<div class="stage__item video">
					<img class="stage__icon" :src="require(`@/assets/images/video/${item.icon}.png`)" alt="" data-aos="fade-in" data-aos-delay="400">
					<h2 class="stage__title vd-title" data-aos="fade-in" data-aos-delay="500">{{item.title}}</h2>
					<div class="stage__text vd-text" data-aos="fade-in" data-aos-delay="600"> {{item.text}}</div>
				</div>
        </div>	

			</div>      
  </div>
</template>

<script>
export default {
  data() {
    return{
      stageVideoData:[
        {
          icon: 'Распознование лиц в режиме реального времени',
          title: 'РАСПОЗНАВАНИЕ ЛИЦ В РЕЖИМЕ РЕАЛЬНОГО ВРЕМЕНИ',
          text: 'Система обнаружит черты лица, игнорируя посторонние объекты в объективе'
        },
        {
          icon: 'Датчики движения',
          title: 'ДАТЧИКИ ДВИЖЕНИЯ',
          text: 'Система обнаружит черты лица, игнорируя посторонние объекты в объективе'
        },
        {
          icon: 'Распознование номерных знаков',
          title: 'РАСПОЗНАВАНИЕ НОМЕРНЫХ ЗНАКОВ',
          text: 'Распознавание номерных знаков, проезжающих транспортных средств. Автоматизация въезда и выезда'
        },
        {
          icon: 'Особый температурный режим',
          title: 'ОСОБЫЙ ТЕМПЕРАТУРНЫЙ РЕЖИМ',
          text: 'Виды камер видеонаблюдения под аномально высокие или низкие температуры'
        }
      ]
    }
  },
}
</script>
