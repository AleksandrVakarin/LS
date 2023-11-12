'use strict';



const items = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9', 'item-10', 'item-11', 'item-12', 'item-13', 'item-14', 'item-15', 'item-16', 'item-17', 'item-18', 'item-19', 'item-20', 'item-21', 'item-22'];

for (let i = 0; i < items.length; i++) {
  (function () {
    let item = items[i];

    const form = document.querySelector('.order-form__' + item);


    form.addEventListener('submit', handleSubmit);

    async function handleSubmit(event) {
      event.preventDefault();

      const nameInput = document.querySelector('#text-input-name-' + item);
      const phoneNumberInput = document.querySelector('#text-input-phone-' + item);

      const name = nameInput.value.trim();
      const phoneNumber = phoneNumberInput.value.trim();

      resetErrors(); // <-- Добавлен вызов функции resetErrors

      // Валидация полей
      if (!name) {
        showErrorItem(nameInput, 'Пожалуйста, введите имя');
        return;
      }

      if (!validateNameItem(name)) {
        showErrorItem(nameInput, 'Имя не валидное');
        return;
      }

      if (!phoneNumber) {
        showErrorItem(phoneNumberInput, 'Пожалуйста, введите номер');
        return;
      }

      if (!validatePhoneItem(phoneNumber)) {
        showErrorItem(phoneNumberInput, 'Номер телефона не валидный');
        return;
      }

      // Отправка данных на сервер
      const message = 'Клиент ' + name + ' - ' + phoneNumber + ' заказал: ' + item;
      await sendMessage(message);

      nameInput.value = '';
      phoneNumberInput.value = '';

      resetErrors(); // <-- Добавлен вызов функции resetErrors

      alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
      
      hideForm();
    }

    async function sendMessage(message) {
      const token = TOKEN;
      const chatId = CHAT_ID;

      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message })
        });

        if (response.ok) {
          console.log('Сообщение успешно отправлено в Telegram');
        } else {
          console.log('Ошибка при отправке сообщения в Telegram');
        }
      } catch (error) {
        console.log('Произошла ошибка:', error);
      }
    }

    function showErrorItem(inputItem, message) {
      const container = inputItem.parentElement;

      // Проверка наличия сообщения об ошибке
      const existingErrorSpan = container.querySelector('.error');
      if (existingErrorSpan) {
        existingErrorSpan.textContent = message;
        return;
      }

      // Создание нового сообщения об ошибке
      const errorSpan = document.createElement('span');
      errorSpan.className = 'error';
      errorSpan.textContent = message;
      errorSpan.style = 'color: red; margin-left: 25px; font-size: 17px; font-style: italic; display: block';

      container.appendChild(errorSpan);
    }

    function resetErrors() {
      const errorSpans = document.querySelectorAll('.error');
      errorSpans.forEach((span) => {
        span.remove();
      });
    }

    function hideForm() {
    const detailsList = document.querySelectorAll('details');
    for (let details of detailsList) {
    details.removeAttribute('open');
    }
  }

    function validateNameItem(name) {
      const regex = /^[А-ЯЁІЇЄҐA-Z][а-яёіїєґa-z']+([- ][А-ЯЁІЇЄҐA-Z][а-яёіїєґa-z']+)*$/u;
      return regex.test(name);
    } 

    function validatePhoneItem(phone) {
      const regex = /^\+?[\d\s-]+$/;
      return regex.test(phone);
    }
  })();
}

const items = ['item-1', 'item-2', 'item-3', 'item-4'];

for (let i = 0; i < items.length; i++) {
  (function () {
    let item = items[i];

    const form = document.querySelector('.order-form__' + item);


    form.addEventListener('submit', handleSubmit);

    async function handleSubmit(event) {
      event.preventDefault();

      const nameInput = document.querySelector('#text-input-name-' + item);
      const phoneNumberInput = document.querySelector('#text-input-phone-' + item);

      const name = nameInput.value.trim();
      const phoneNumber = phoneNumberInput.value.trim();

      resetErrors(); // <-- Добавлен вызов функции resetErrors

      // Валидация полей
      if (!name) {
        showErrorItem(nameInput, 'Пожалуйста, введите имя');
        return;
      }

      if (!validateNameItem(name)) {
        showErrorItem(nameInput, 'Имя не валидное');
        return;
      }

      if (!phoneNumber) {
        showErrorItem(phoneNumberInput, 'Пожалуйста, введите номер');
        return;
      }

      if (!validatePhoneItem(phoneNumber)) {
        showErrorItem(phoneNumberInput, 'Номер телефона не валидный');
        return;
      }

      // Отправка данных на сервер
      const message = 'Клиент ' + name + ' - ' + phoneNumber + ' заказал: ' + item;
      await sendMessage(message);

      nameInput.value = '';
      phoneNumberInput.value = '';

      resetErrors(); // <-- Добавлен вызов функции resetErrors

      alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');

      hideForm();
    }

    async function sendMessage(message) {
      const token = TOKEN;
      const chatId = CHAT_ID;

      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message })
        });

        if (response.ok) {
          console.log('Сообщение успешно отправлено в Telegram');
        } else {
          console.log('Ошибка при отправке сообщения в Telegram');
        }
      } catch (error) {
        console.log('Произошла ошибка:', error);
      }
    }

    function showErrorItem(inputItem, message) {
      const container = inputItem.parentElement;

      // Проверка наличия сообщения об ошибке
      const existingErrorSpan = container.querySelector('.error');
      if (existingErrorSpan) {
        existingErrorSpan.textContent = message;
        return;
      }

      // Создание нового сообщения об ошибке
      const errorSpan = document.createElement('span');
      errorSpan.className = 'error';
      errorSpan.textContent = message;
      errorSpan.style = 'color: red; margin-left: 25px; font-size: 17px; font-style: italic; display: block';

      container.appendChild(errorSpan);
    }

    function resetErrors() {
      const errorSpans = document.querySelectorAll('.error');
      errorSpans.forEach((span) => {
        span.remove();
      });
    }

    function hideForm() {
		const detailsList = document.querySelectorAll('details');
		for (let details of detailsList) {
		details.removeAttribute('open');
		}
	}

    function validateNameItem(name) {
      const regex = /^[А-ЯЁІЇЄҐA-Z][а-яёіїєґa-z']+([- ][А-ЯЁІЇЄҐA-Z][а-яёіїєґa-z']+)*$/u;
      return regex.test(name);
    } 

    function validatePhoneItem(phone) {
      const regex = /^\+?[\d\s-]+$/;
      return regex.test(phone);
    }
  })();
}