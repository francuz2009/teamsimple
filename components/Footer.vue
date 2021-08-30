<template>
  <div>
    <div id="footer" class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__logo">
            <a href="/"><img class="footer__logo" href="/" src="@/assets/images/logo.png" alt=""></a>
          </div>
          <div class="footer__contacts">
            <ul class="contacts__list">
              <li>
                <i class="fa fa-phone fa-rotate-90" aria-hidden="true"/>
                <a class="contacts__text" href="tel:89181305395"> +7(918) 130-53-95</a>
              </li>
              <li>
                <i class="fa fa-phone fa-rotate-90" aria-hidden="true"/>
                <a class="contacts__text" href="tel:89094540819"> +7(909) 454-08-19</a>
              </li>
              <li>
                <i class="fa fa-phone fa-rotate-90" aria-hidden="true"/>
                <a class="contacts__text" href="tel:89654720224">+7(965) 472-02-24</a>
              </li>
              <li>
                <i class="fa fa-envelope-o" aria-hidden="true" />
                <a class="contacts__text" href="#"> mail@WAYSIMPLE.RU</a>
              </li>
            </ul>
          </div>
          <div class="footer__social">
					<ul class="footer__social-list">
						<li><a href="#" class="footer__social-icon"><i class="fab fa-whatsapp" /></a></li>
						<li><a href="#" class="footer__social-icon"><i class="fab fa-telegram-plane" /></a></li>
						<li><a href="#" class="footer__social-icon"><i class="fab fa-instagram" /></a></li>
					</ul>
          </div>
          <div class="footer__callback">
            <div class="form__section">
              <form>
                <h3 class="contact-form__title">
                  ОБРАТНАЯ СВЯЗЬ
                </h3>
                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="Site Name">
                <input type="hidden" name="admin_email" value="lifeforfun2010@yandex.ru">
                <input type="hidden" name="form_subject" value="Form Subject">
                <!-- END Hidden Required Fields -->
                <input type="text" name="Name" class="contact-form__input footer-form" placeholder="Ваше имя" required>
                <br>
                <input type="text" name="Phone" class="contact-form__input footer-form" placeholder="Введите ваш телефон" required>
                <br>
                <input type="text" name="E-mail" class="contact-form__input footer-form" placeholder="Введите ваш email">
                <br>
                <button class="contact-form__btn">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="stars-container">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div class="container">
        <div class="footer__after-inner">
          <h6 class="footer__after-title">
            P.S.
          </h6>
          <p class="footer__after-suptitle">
            Мы специально сделали сайт в шуточно-деловой стилистике, так как надоели
            однообразные и скучные сайты. Подавляющее большинство web студий и частных специлистов пишут гору
            отзывов о «себе любимых» и пускают пыль в глаза. Наше мнение которое всегда было и остаётся — понять
            профессионализм человека или команды можно по портфолио или практической работе. Остальное вода.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
