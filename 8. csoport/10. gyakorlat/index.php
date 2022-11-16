<?php 
echo $_SERVER['REMOTE_ADDR'];
echo phpversion();
if(startsWith($_SERVER['REMOTE_ADDR'], "157.181")){
  echo "\nYeeey, eltés vagy!";
} else {
  echo "\nNe nézz ide, nem vagy eltés!";
}
echo startsWith($_SERVER['REMOTE_ADDR'], "157.181") ? 
                                                    "\nYeeey, eltés vagy!" : 
                                                    "\nNe nézz ide, nem vagy eltés!";
function startsWith ($string, $startString)
{
  $len = strlen($startString);
  return (substr($string, 0, $len) === $startString);
}

$i = $_GET;
$errors = [];
$data = [];

validate($i, $errors, $data);

function validate($i, &$errors, &$data) {
  // név validalása: létezzen, legyen mondjuk legalább 3 hosszú

  if(!isset($i['name']) || trim($i['name']) === ''){
    $errors []= "Nem adtál meg nevet!";
  } else if(strlen($i['name']) < 3) {
    $errors []= "A névnek legalább 3 karakter hosszúnak kell lennie!";
  } else {
    $data['name'] = $i['name'];
  }

  // kor validalása
  if(!isset($i['age']) || trim($i['age']) === ''){
    $errors []= "Nem adtál meg kort!";
  } else if(!is_numeric($i['age'])) {
    $errors []= "A kornak számot adj meg!";
  } else {
    $data['age'] = $i['age'];
  }

  // háttérszín: nem lehet fekete, nem lesz kötelező mező
  if($i['bg'] === "#000000" || !isset($i['bg']) || trim($i['name']) === '') {
    $data['bg'] = '#efefef';
  } else {
    $data['bg'] = $i['bg'];
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
        @import url("https://cdn.jsdelivr.net/gh/elte-fi/www-assets@19.10.16/styles/mdss.min.css");
    ul {
      color: red;
    }

    div {
      padding:5px;
      border-radius: 1em;
    }
  </style>
</head>
<body>
  <h1>Hello <?= $_GET['name'] ?? ', regisztrálj!'?>!</h1>

  <h2>Töltsd ki a formot!</h2>
  <form action="index.php" method="get">
    <h3>Név</h3>
    <input type="text" name="name" value='<?= $data['name'] ?? ''?>'>

    <h3>Kor</h3>
    <input type="text" name="age" value='<?= $data['age'] ?? ''?>'>

    <h3>Háttérszín</h3>
    <input type="color" name="bg" value='<?= $data['bg'] ?? ''?>'>

    <h3>Legyen-e kép? <input type="checkbox" name="kep" id=""></h3>

    <h3>Link</h3>
    <input type="text" name="link" value='<?= $data['link'] ?? ''?>'>

    <h3>Ide kattintva küldheted el:</h3>
    <input type="submit" value="Küldés">
  </form>

  <?php if(count($errors) === 0): ?>
    <div style='background-color: <?= $data['bg'] ?>'>
      <h2>Sikeres regisztráció!</h2>
      <table>
        <thead><tr><th>Cím</th><th>Adat</th></tr></thead>
        <?php foreach($data as $k => $v): ?>
          <tr>
            <td><?= $k?></td>
            <td><?= $v?></td>
          </tr>
        <?php endforeach; ?>
      </table>
      <img src="" alt="">
    </div>
  <?php else: ?>
    <h2>Sikertelen regisztráció!</h2>
    <ul>
      <?php foreach($errors as $e): ?>
        <li><?= $e ?></li>
      <?php endforeach; ?>
    </ul>
  <?php endif;?>
</body>
</html>