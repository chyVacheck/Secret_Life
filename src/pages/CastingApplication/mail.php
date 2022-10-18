
<?php
$name = $_POST['name'];
$secon_name = $_POST['secondName'];
$city = $_POST['city'];
$age = $_POST['age'];
$height = $_POST['height'];
$tel = $_POST['tel'];
$instagram = $_POST['instagram'];
$email = $_POST['email'];
$nationality = $_POST['nationality'];
$tatoo = $_POST['tatoo'];
$bust = $_POST['bust'];
$waist = $_POST['waist'];
$hips = $_POST['hips'];
$comment = $_POST['comment'];

$path = $_FILES['photo']['name'];

$to = "sercetlife@prowoman.website";
$subject = "from Secret Life";
$message = "
<!DOCTYPE html>
<html>
  <head>
    <title>PROWOMAN</title>
  </head>
    <body>
        <h3>Вот еще одна заявка с сайта Secret Life</h3>
        <p>Имя: $name , Фамилия: $secon_name</p>
        <p>Город: $city</p>
        <p>Возраст: $age</p>
        <p>Рост: $height</p>
        <p>Телефон: $tel</p>
        <p>instagram: $instagram</p>
        <p>Email: $email</p>
        <p>Национальность: $nationality</p>
        <p>Тату: $tatoo</p>
        <p>Грудь: $bust</p>
        <p>Талия: $waist</p>
        <p>Бедра: $hips</p>
        <p>Сообщение: $comment</p>
        
    </body>
</html>
";

error_reporting(E_ALL);
ini_set('display_errors', '1');
if (mail($to, $subject, $message, "Content-type:text/html;charset=utf-8")) {
  header("Location: /");
} else {
  echo "error <a href='/'>return back</a>";
}
