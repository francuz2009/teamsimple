<template>
	<div class="call__back">
		<div class="container">
			<div class="call__back__inner">
				<div class="call__back__prev">
					<div class="stage__text stand cb" data-aos="fade-up" data-aos-delay="300"> Если Вы не знаете какой сайт нужен,то напишите. Перезвоним</div>
					<img class="call__back__icon" src="@/assets/images/arrows/strelka-4.png" alt="" data-aos="fade-up" data-aos-delay="400">
					<img class="call__back-img" src="@/assets/images/site/cozdanie-sajta.png" alt="" data-aos="fade-up" data-aos-delay="400">
				</div>
				<div class="call__back__form">
					<form class="modal__callback">
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
						
						<button class="contact-form__btn page__btn">Отправить</button>
					</form>
				</div>
        <div class="quote site">
          <div class="container">
            <div class="quote__icon site" data-aos="fade-up" data-aos-delay="400">Немного великих цитат</div>
            <p class="quote__text quote_bl" data-aos="fade-up" data-aos-delay="450">«Всегда пиши код так, как будто человек, который будет его саппортить — психопат-убийца, который знает, где ты живешь.»</p>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  props:{
 
  }
}
</script>

