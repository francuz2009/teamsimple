<template>
  <div class="container">
    <h2 class ="stages__title" data-aos="fade-in" data-aos-delay="300">В чем преимущества IP-видеонаблюдения?</h2>
      <div class="stages__inner video-benefits" >
				<p  v-for="(benefit, indexVideo) in videoBenefitsData" :key="indexVideo" data-aos="fade-in" data-aos-delay="400"><i class="fas fa-caret-right"></i>{{benefit}}</p>
			</div>
   
  </div>
</template>

<script >
export default {
  data() {
    return{
      videoBenefitsData: ['Высокое разрешение IP-камер', 'Возможность выполнения видеоанализа изображения на IP-камере', 'Интеграция с сетевыми приложениями и облачными сервисами', 'Масштабируемость', 'Нет единой точки отказа', 'Кодирование (сжатие) видео на IP-камер'],
    }
  }
}
</script>