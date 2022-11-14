<?php 
echo $_SERVER["REMOTE_ADDR"];
if(startsWith($_SERVER['REMOTE_ADDR'], "157.181")) echo "Szia!";
else echo "Nem vagy eltés nem szia";

echo startsWith($_SERVER['REMOTE_ADDR'],"157.181") ? "Szia!" : "Nem vagy eltés nem szia";

function startsWith($string, $startString)
{
    $len = strlen($startString);
    return (substr($string, 0, $len) === $startString);
}

function validate(){
  $d = $_POST;
  global $errors;

  // név validálás
  if(strlen($d['name']) < 3) {
    $errors []= "A név túl rövid!";
  } else if(!$d['name']){
    $errors []= "Nem adtad meg a nevet!";
  }

  // kor validálás
  if(!$d['kor']){
    $errors []= "Nem adtad meg a kort!";
  }else if(!is_numeric($d["kor"])) {
    $errors []= "A kornak számot kell megadni!";
  }

  // háttérszín validáció
  if(!$d['szin']){
    $errors []= "Nem adtál meg színt!";
  } else if($d['szin'] === '#000000') {
    $errors []= "Ne fekete legyen a háttér mert akkor nem lácik semi te suta!";
  }

  return count($errors) === 0;
}



$errors = [];
$valid = validate();
echo "VALIDE" . $valid;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    input {
      margin-top: 10px;
    }
    ul {
      color:red;
    }
  </style>
  <title>Document</title>
</head>
<body style='background-color:<?= $_POST['szin'] && $_POST['szin'] !== "#000000" ? $_POST['szin'] : "#ffffff"?>'>
  <?= var_dump($_POST) ?>
  <h1>Hello <?= $_POST['name'] && $_POST['name'] !== "" ? $_POST['name'] : ", nem vagy bejelentkezve!"?></h1>
  <?php if($valid):?>
    <?= $_POST["kor"] ?>
  <?php endif; ?>
  <h2>Töltsd ki a formot!</h2>
  <form action="index.php" method="post">
    Név:<input type="text" name="name" id="" value="<?= $_POST['name'] ?? ''?>"><br>
    Kor:<input type="text" name="kor" value="<?= $_POST['kor'] ?? ''?>"><br>
    Háttérszín: <input type="color" name="szin"><br>
    Legyen kép?<input type="checkbox" name="kep" id=""><br>
    Link:<input type="text" name="link"><br>
    <input type="submit" value="Küldés">
  </form>
  <ul>
    <?php foreach($errors as $e): ?>
      <li><?= $e?></li>
    <?php endforeach; ?>
  </ul>
</body>
</html>