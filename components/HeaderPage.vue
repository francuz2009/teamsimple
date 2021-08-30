<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <a href="/">
            <img
              class="logo__img"
              src="@/assets/images/logo.png"
              alt="Создание сайтов Краснодар"
            >
          </a>
        </div>
        <div
          
          class="header__menu"
        >
          <nav
            v-for="(menu, index) in HeaderMainMenuList"
            :key="'menu-'+index"
          >
            <nuxt-link
              :to="menu.path"
              class="menu__link"
            >
              {{ menu.name }}
            </nuxt-link>
          </nav>
        </div>
        
        <ul class="menu__contacts">
          <a
            href="tel:+79094540819"
            target="_blank"
          >
            <li class="menu__contacts-links">
              <i class="fa fa-phone fa-rotate-90" aria-hidden="true"/> +7 (909) 454-08-19</li>
          </a>
          <a
            href="mailto:mail@waysimple.ru"
            target="_blank"
          >
            <li class="menu__contacts-links">
             <i class="fa fa-envelope-o" aria-hidden="true" /> mail@waysimple.ru
            </li>
          </a>
        </ul>
        <div
          class="menu-icon"
          @click="showNav = !showNav"
        >
          <i class="fa fa-bars" aria-hidden="true" />
        </div>
        <transition name="fade" appear>
          <div class="navigation-mobile" v-if="showNav">
      
            <nav class="navigation-mobile__menu" id="menu"
              v-for="(menu, index) in HeaderMainMenuList"
             
              :key="'MainMtnu-2'+index">
            <nuxt-link 
              @click="showNav = !showNav"
              :to="menu.path"
              class="navigation-mobile__link"
              
            >
              {{menu.name}}
            </nuxt-link>
          </nav>

        </div>
      </transition>        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainMenuPage',
  data() {
    return {
      HeaderMainMenuList: [
        { name: 'Создание сайтов', path: '/cozdanie-sajta' },
        { name: 'Сопровождение', path: '/informatsionnoe-soprovozhdenie' },
        { name: 'Видеонаблюдение', path: '/videonablyudenie' },
        { name: 'Контакты', path: '/contacts' }
      ],
      showNav: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

