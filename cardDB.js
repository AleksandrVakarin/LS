'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'aleks8n5.beget.tech',
  user: 'Card',
  password: '',
  database: ''
});

connection.connect((error) => {
  if (error) {
    console.error('Ошибка подключения к базе данных:', error);
  } else {
    console.log('Успешное подключение к базе данных');
  }
});

const sql = 'SELECT * FROM table_name';

connection.query(sql, (error, results) => {
  if (error) {
    console.error('Ошибка выполнения запроса:', error);
  } else {
    console.log('Результаты запроса:', results);
  }
});

connection.end((error) => {
  if (error) {
    console.error('Ошибка закрытия соединения с базой данных:', error);
  } else {
    console.log('Соединение с базой данных закрыто');
  }
});