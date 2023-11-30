<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем наличие данных
    if (isset($_POST['delete'])) {
        $itemName = $_POST['delete'];
        
        // Считываем содержимое файла index.html
        $htmlContent = file_get_contents("index.html");

        // Формируем паттерн для поиска блока <article class='card'> с заданным именем внутри <p>
        $pattern = "/<article class='card'>\s*<p>([^<]*)<\/p>\s*<\/article>/";

        // Ищем все совпадения с паттерном
        preg_match_all($pattern, $htmlContent, $matches, PREG_OFFSET_CAPTURE);

        // Перебираем найденные совпадения
        foreach ($matches[0] as $match) {
            // Проверяем, содержит ли найденный блок заданное имя
            if (strpos($match[0], $itemName) !== false) {
                // Удаляем найденный элемент из содержимого файла index.html
                $updatedHtmlContent = substr_replace($htmlContent, '', $match[1], strlen($match[0]));

                // Сохраняем обновленное содержимое в файл index.html
                file_put_contents("index.html", $updatedHtmlContent);

                echo "Элемент успешно удален!";
                exit; // Прерываем цикл после удаления первого совпадения
            }
        }

        echo "Не удалось найти элемент с указанным именем.";
    } else {
        echo "Не все данные были отправлены.";
    }
} else {
    echo "Метод запроса не POST.";
}
?>
