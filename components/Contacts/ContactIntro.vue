<template>
  <div class="container">
    <h2 class="page__title">Контакты</h2>
      <div class="call__back__inner">
				<div class="contact__prev">
					<p class="contact__text">Скиньте нам ваш сайт и откройте госетвой доступ к аналитике (на почту). Сделаем анализ вашего сайта. После этого напишем предварительный план. В плане будут инструменты, которые предлагаем использовать, ориентировочные бюджеты и предварительный результат от этого моей работы. Все это <strong>БЕСПЛАТНО. </strong></p>
          <p class="contact__text">   Так же можете писать или звонить по вопросам информационного сопровождения и видеонаблюдения. Любая консультация совершенно <strong>БЕСПЛАТНО. </strong></p>
					<img class="call__back__icon" src="@/assets/images/arrows/strelka-1.png" alt="">
				</div>
				<div class="call__back__form">
					<form class="contact__callback">
						<input type="hidden" name="project_name" value="Site Name">
						<input type="hidden" name="admin_email" value="lifeforfun2010@yandex.ru">
						<input type="hidden" name="form_subject" value="Form Subject">
						<!-- END Hidden Required Fields -->
					
						<input type="text" name="Name" class="feedback-form__input" placeholder="Ваше имя" required><br>
						<input type="text" name="Phone" class="feedback-form__input" placeholder="Введите ваш телефон." required><br>
						<textarea name="Message" id="" сlass="feedback-form__input" placeholder ="Ваше сообщение"></textarea>	
						<div class="checkbox"> 
							<input type="checkbox" class="checkbox__input" disabled checked>
							<label for="formAgreement" class="chekbox__label">Нажимая кнопку «Отправить», вы даете согласие на обработку своих персональных данных.</label>
						</div>
						<button class="contact-form__btn page__btn cont__btn">Отправить</button>
					</form>
        <p class="contact__text-after">А после анализа можем встретиться или созвониться и пообщаться уже по проекту</p>
				</div>
      </div>
  </div>
</template>
