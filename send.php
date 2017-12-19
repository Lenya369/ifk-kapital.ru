<?php 
    $to = 'lenya369@gmail.com, kolyanvl@rambler.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    
    if ((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['select']))) {
        $subject = 'Обратный звонок'; //Загаловок сообщения
        // $headers = "From: Отправитель lenya369@gmail.com\r\n"; //Наименование и почта отправителя
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Услуга: ' .$_POST['select'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    }
    
    if ((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['descr_form']))) {
        $subject = 'Вопрос клиента'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Вопрос клиента: ' .$_POST['descr_form'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    }
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>