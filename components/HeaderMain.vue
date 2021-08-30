<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <a href="/"
            ><img
              src="@/assets/images/logo.png"
              class="logo__img"
              alt="Создание сайтов Краснодар"
          /></a>
        </div>
        <div class="menu__nav">
          <nav
            v-for="(menu, index) in HeaderMainMenuList"
            id="menu"
            :key="'header-'+index"
            class="header__menu"
          >
            <nuxt-link class="menu__link" :to="menu.path">
              {{ menu.name }}

            </nuxt-link>
          </nav>
        </div>
             <button class="menu " onclick="this.classList.toggle('opened');this.setAttribute('opened', this.classList.contains('aria-expanded'))" ia-label="Main Menu"  @click="showModal = !showModal">
               <svg width="70" height="70" viewBox="0 0 100 100">
                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path class="line line2" d="M 20,50 H 80" />
                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
      <Navigation v-if="showModal" />
      </div>
    </div>
  </div>
</template>

<script>
import icon from "./Navigation/icon.vue";
import Navigation from './Navigation.vue'

export default {
  name: "MainMenuPage",
  components: {
    icon,
    Navigation
    },
  data() {
    return {
      HeaderMainMenuList: [
        { name: "О нас", path: "/#about" },
        { name: "Услуги", path: "/#services" },
        { name: "Работы", path: "/#works" },
        { name: "Контакты", path: "/#footer" }
      ],
      showModal: false,
    };
  },
   methods: {

        closeModal() {
          this.showModal = false
          }
    },

  computed: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>