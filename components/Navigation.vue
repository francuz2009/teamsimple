<template>
  <div class="main__form">
      <div id="navigation-mobile stars-container">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <transition name="slideNav" appear>
             <div class="container">
              <nav v-for="(menu, index) in HeaderMainMenuList" :key="'menuList-'+index" class="main__form-nav" >
                <nuxt-link class="main__form-link" :to="menu.path">
                  {{ menu.name }}
                </nuxt-link>
              </nav>
            </div>

        </transition>
      </div>

  </div>
</template>

<script>
// import { HeaderMenuList } from '../data/data.base'
export default {
  name: 'Popup',
  
  data () {
    return {
      HeaderMainMenuList: [
        { name: 'Создание сайтов', path: '/cozdanie-sajta' },
        { name: 'Сопровождение', path: '/informatsionnoe-soprovozhdenie' },
        { name: 'Видеонаблюдение', path: '/videonablyudenie' },
        { name: 'Контакты', path: '/contacts' }
      ]
    }
  },
  methods: {
  }
}

</script>

