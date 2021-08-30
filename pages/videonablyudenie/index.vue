<template>
  <div>
    <VideoIntro/> 
    <VideoBenefits />
    <VideoStage />
    <ChooseUs />
    <EquipmentAndFeedBack />
  </div>
</template>

<script>
import VideoIntro from '~/components/Video/VideoIntro.vue'
import ChooseUs from '~/components/Video/ChooseUs.vue'
import EquipmentAndFeedBack from '~/components/Video/EquipmentAndFeedBack.vue'
import VideoBenefits from '~/components/Video/VideoBenefits.vue'
import VideoStage from '~/components/Video/VideoStage.vue'

export default {
  layout: 'LayoutPage',
  head:{
    title: 'SimpleWay - видеонаблюдение Краснодар',
    meta: [
      {
        hid:'description',
        name: 'description',
        content: 'Создание сайтов Краснодар, видеонаблюдение Краснодар, ИТ обслуживание'
      },
      {
        name: 'keywords',
        content: 'Краснодар, видеонаблюдение, магазин, видеонаблюдения, камеры, видеорегистраторы, купить, системы, комплекты, монтаж, установка, цены, ip, ahd, hd sdi, аналоговые, wifi, беспроводные, уличные, внутренние, антивандальные'
      }
    ],
  },
   components: {
    VideoIntro: () => import('~/components/Video/VideoIntro'),
    ChooseUs: () => import('~/components/Video/ChooseUs'),
    EquipmentAndFeedBack: () => import('~/components/Video/EquipmentAndFeedBack'),
    VideoBenefits: () => import('~/components/Video/VideoBenefits'),    
    VideoStage: () => import('~/components/Video/VideoStage'),
   }
}

</script>
