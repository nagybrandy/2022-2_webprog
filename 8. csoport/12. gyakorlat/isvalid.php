<?php
    $errors = [];
    
    $d = $_POST;
    // IDE KÉSZÍTSD EL A VALIDÁLÁST!
    if(!isset($d['name'])) $errors []= "Név nem létezik";
    else if(strlen($d['name']) < 3) $errors []= "Név túl rövid";
    if(!isset($d['expdate']) || $d['expdate'] === '') $errors []= "Lejárati dátum nem létezik";

    // ITT ADD HOZZÁ A JSON FÁJLHOZ!
    if(!$errors){
        $str = file_get_contents('food.json', true);
        $arr = json_decode($str, true);
        
        $new_arr = [
            'name' => $d['name'],
            'number' => $d['number'],
            'type' => $d['type'],
            'date' => date('Y-m-d'),
            'expdate' => $d['expdate']
        ];
        array_push($arr, $new_arr);

        $json = json_encode($arr, JSON_PRETTY_PRINT);
        file_put_contents('food.json', $json);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új kaja érkezett</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/elte-fi/www-assets@19.10.16/styles/mdss.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Mentés</title>
</head>
<body>
   
    <?php if(!$errors): ?>
        <!-- Ez jelenjen meg, ha valid -->
        <h1>Sikeres hozzáadás! 😍</h1>
        <a href='index.php'>Vissza a főoldalra</a>
    <?php else: ?>
        <!-- Ez pedig, ha nem valid -->
        <h1>Sikertelen hozzáadás! 😢😭</h1>
        <a href='addfood.php'>Új hozzzáadása</a>
    <?php endif; ?>

<?php if ($errors) : ?>
        <ul style="font-size: 25px;color: red;">
        <?php foreach($errors as $error) : ?>
            <li><?= $error ?></li>
            <?php endforeach; ?>
        </ul>
<?php endif; ?>
</body>
</html>