<template>
  <div>
    <main-intro />
    <About />
    <Clients />
    <ClientsIf />
    <Services />
    <Portfolio />
  </div>
</template>

<script>

export default {
  components: {
    MainIntro: () => import('~/components/Home/MainIntro'),
    About: () => import('~/components/Home/About'),
    Clients: () => import('~/components/Home/Clients'),
    ClientsIf: () => import('~/components/Home/ClientsIf'),
    Services: () => import('~/components/Home/Services'),
    Portfolio: () => import('~/components/Home/Portfolio'),
  },
  layout: 'LayoutHome',
  head: {
    title: 'Создание сайтов Краснодар, видеонаблюдение Краснодар, ИТ обслуживание',
    meta: [
      {
        hid:'description',
        name: 'description',
        content: 'Создание сайтов Краснодар, видеонаблюдение Краснодар, ИТ обслуживание'
      },
      {
        name: 'keywords',
        content: 'ит аутсорсинг, it аутсорсинг Краснодар, создание сайтов в Краснодаре'
      }
    ],
    }
  }

</script>
