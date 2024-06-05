<?php
$iphone = strpos($_SERVER['HTTP_USER_AGENT'], "iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'], "Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'], "webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'], "BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'], "iPod");
//Verifique se é um celular
if ($iphone || $android || $palmpre || $ipod || $berry == true) {
  header('Location: https://api.whatsapp.com/send?phone=5511958882218');
}
//Todos os outros
else {
  header('Location: https://web.whatsapp.com/send?phone=5511958882218');
}