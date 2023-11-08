'use strict'
document.querySelector('.add-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Отправляем AJAX запрос на сервер с помощью Fetch API
  fetch('server.php', {
    method: 'POST',
    body: new FormData(event.target) // Отправляем данные формы
  })
  .then(response => {
    // Перезагружаем страницу
    location.reload();
  })
  .catch(error => {
    console.error('Error:', error);
  });
});