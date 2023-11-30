'use strict'

const showAutorAdminPanel = document.querySelector('#show-autorization-admin__panel');
const autorAdminForm = document.querySelector('#autorization-admin__form');
const addItemForm = document.getElementById('add-item__form');
const deleteItemForm = document.getElementById('delete-item__form');

let isFormVisible = false;
hideForm();

showAutorAdminPanel.addEventListener('click', () => {
  isFormVisible ? hideForm() : showForm();
});

function showForm() {
  autorAdminForm.style.display = 'block';
  isFormVisible = true;
  showAutorAdminPanel.textContent = 'Отмена';
}

function hideForm() {
  autorAdminForm.style.display = 'none';
  addItemForm.style.display = 'none'; // Скрываем также форму с id="add-item__form"
  deleteItemForm.style.display= 'none';
  document.getElementById('login').value = '';
  document.getElementById('password').value = '';
  isFormVisible = false;
  showAutorAdminPanel.textContent = 'Для администратора';
}

autorAdminForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let login = document.getElementById('login').value;
  let password = document.getElementById('password').value;

  if (login === 'Lev' && password === '1111') {
    // Показываем форму с id="add-item__form"
    addItemForm.style.display = 'block';
    deleteItemForm.style.display= 'block';
  } else {
    alert('Неверный логин или пароль');
  }
}




// autorForm.addEventListener('submit', handleSubmit);



//  function submitForm(event) {
//             event.preventDefault();

//     var login = document.getElementById('login').value;
//     var password = document.getElementById('password').value;
//     var script;

//     if (login === 'Lev' && password === '1111') {
//         // Начинаем сессию
//         sessionStorage.setItem('admin', 'true');
//         script = 'adminPanel.html';
//     } else {
//         script = 'adminAuthor.html';
//     }

//     // Перенаправляем на нужную страницу
//     window.location.href = script;
// }