<template>
  <div>
    <transition name="fade" appear>
      <div class="modal-overlay" />
    </transition>
    <transition name="slide" appear>
      <div class="modal">

        <button class="modal__btn" @click="closeAction">
           <svg height="50px" width="50px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">

            </style><g class="st2" id="cross"><g class="st0"><line class="st1" x1="112.5" x2="401" y1="112.5" y2="401"/><line class="st1" x1="401" x2="112.5" y1="112.5" y2="401"/></g></g><g id="cross_copy"><path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z"/></g></svg>
        </button>
        <div class="modal__header">
          <!-- <img class="modal__logo" src="../static/logo.png" alt=""> -->
          <h5 class="Modal__title">
            Форма обратной связи
          </h5>
          <h6 class="modal__suptitle">
            Simple Way
          </h6>
          <hr>
        </div>
        <form class="modal__callback">
          <input type="hidden" name="project_name" value="Site Name">
          <input type="hidden" name="admin_email" value="lifeforfun2010@yandex.ru">
          <input type="hidden" name="form_subject" value="Form Subject">
          <!-- END Hidden Required Fields -->
          <input type="text" name="Name" class="contact-form__input" placeholder="Ваше имя" required><br>
          <input type="text" name="Phone" class="contact-form__input" placeholder="Введите ваш телефон." required><br>
          <button class="contact-form__btn popup__btn">
            Отправить
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'Popup',
  props:["closeAction"],
  data() {
    return{}
  }

}
</script>
