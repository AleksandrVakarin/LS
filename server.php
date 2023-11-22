<?php
// Проверяем, был ли отправлен POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем наличие данных
    if (isset($_POST['name']) && isset($_POST['price']) && isset($_POST['quantity']) && isset($_FILES['image'])) {
        $name = $_POST['name'];
        $price = $_POST['price'];
        $quantity = $_POST['quantity'];
        // Проверяем существование файла
        if (isset($_FILES['image']['name']) && $_FILES['image']['error'] == 0) {
            $image = $_FILES['image'];
            // Проверяем, является ли файл изображением
            if (exif_imagetype($image['tmp_name']) == IMAGETYPE_JPEG) {
                // Создаем уникальное имя файла
                $fileName = uniqid() . '_' . $image['name'];
                // Целевая директория
                $targetDirectory = 'uploads/';
                // Полный путь
                $targetPath = $targetDirectory . $fileName;
                // Перемещаем файл
                if (move_uploaded_file($image['tmp_name'], $targetPath)) {
                    // Получение содержимого JavaScript-файла
                    $script = file_get_contents('orderItem.js');
                  
                    // Парсинг содержимого JavaScript-файла в виде массива
                    preg_match('/const items = \[(.*?)\];/', $script, $matches);
                    $itemsArrayString = $matches[1];
                    $itemsArray = explode(', ', $itemsArrayString);
                  
                    // Создание уникального идентификатора для нового элемента
                    $counter = file_get_contents("counter.txt");
                    $counter++;
                    file_put_contents("counter.txt", $counter);
                  
                    // Добавление нового элемента в массив JavaScript
                    $itemsArray[] = "'item-$counter'";
                  
                    // Обновление содержимого JavaScript-файла
                    $updatedScript = str_replace($itemsArrayString, implode(', ', $itemsArray), $script);
                    file_put_contents('orderItem.js', $updatedScript);
                    
                    // Создаем HTML-код нового элемента
                    $element = "<article class='card'>";
                    $element .= "<p id='item_$counter'>$name<br><img src='$targetPath' alt='item_$counter' tabindex='0'><br>Цена: $price</p>";
                    $element .= "<details>";
                    $element .= "<summary class='open-form'></summary>";
                    $element .= "<form class='order-form__item-$counter'>";
                    $element .= "<h4 id='form-head'>Введите данные!</h4>";
                    $element .= "<div class='order-form'>";
                    $element .= "<label class='order-form__content' id='label-name' for='text-input-name-item-$counter'>Имя</label>";
                    $element .= "<div class='order-form__star-1'>*";
                    $element .= "<input class='order-form__input' id='text-input-name-item-$counter' placeholder='Введите ваше имя'>";
                    $element .= "</div>";
                    $element .= "</div>";
                    $element .= "<div class='order-form'>";
                    $element .= "<label class='order-form__content' id='label-phone' for='text-input-phone-item-$counter'>Номер телефона</label>";
                    $element .= "<div class='order-form__star-2'>*";
                    $element .= "<input class='order-form__input' id='text-input-phone-item-$counter' placeholder='Введите ваш номер'>";
                    $element .= "</div>";
                    $element .= "</div>";
                    $element .= "<button id='order-form__button' value='submit'>Заказать</button>";
                    $element .= "<p class='product-status' style='display: none;'>Товар закончился</p>";
                    $element .= "</form>";
                    $element .= "</details>";
                    $element .= "В наличии: <b class='quantity'>$quantity</b>";
                    $element .= "</article>";
                    
                    // Считываем содержимое файла index.html
                    $htmlContent = file_get_contents("index.html");
                    
                    // Находим позицию <div id="gallery"> в файле index.html
                    $position = strpos($htmlContent, '<div id="gallery">') + strlen('<div id="gallery">');
                    
                    // Вставляем HTML код элемента после <div id="gallery"> в файле index.html
                    $updatedHtmlContent = substr_replace($htmlContent, $element, $position, 0);
                    
                    // Сохраняем обновленное содержимое в файл index.html
                    file_put_contents("index.html", $updatedHtmlContent);
                    
                    echo "Элемент успешно добавлен в массив JavaScript и создан HTML-код нового элемента!";
                } else {
                    echo "Ошибка при сохранении файла";
                }
            } else {
                echo "Не удалось сохранить файл. Это не изображение.";
            }
        } else {
            echo "Файл не найден.";
        }
    } else {
        echo "Не все данные были отправлены.";
    }
} else {
    echo "Метод запроса не POST.";
}
?>


