<template>
  <div>
    <IntroSite />
    <StageSite />
    <AreasWork />
    <SiteForm />
  </div>
</template>

<script>

export default {
  head: {
    title: 'SimpleWay - создание и продвижение сайтов Краснодар',
    meta: [
      {
        hid:'description',
        name: 'description',
        content: 'Профессиональная разработка сайтов и интернет-маркетинг в Краснодаре.Разрабатываем лендинги (одностраничные сайты), корпоративные сайты и каталоги, интернет-магазины'
      },
      {
        name: 'keywords',
        content: 'Создание сайтов, продвижение сайтов, раскрутка сайтов, разработка сайтов, сайтов, сайт, создание сайтов Краснодар, заказать сайт в краснодаре, купить сайт, дизайн, логотипы'
      }
    ],
  },    
  components: {
    IntroSite: () => import('~/components/site/IntroSite'),
    StageSite: ()=>import('~/components/site/StageSite'),
    AreasWork: ()=>import('~/components/site/AreasWork'),
    SiteForm: ()=>import('~/components/site/SiteForm')
  },
  layout: 'LayoutPage'

}

</script>
