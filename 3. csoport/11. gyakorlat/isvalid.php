<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új kutyus érkezett!</title>
    <link rel="stylesheet" href="style.css">
    <title>Mentés</title>
</head>
<body>
<?php
    $errors = [];

    function validate($a){
        return isset($a) && strlen(trim($a)) !== 0;
    }
    // array(4) { ["nev"]=> string(0) "" ["szin"]=> string(1) "0" ["szulido"]=> string(0) "" ["nem"]=> string(3) "kan" }
    $d = $_GET;
    
    if(!validate($d['nev'])) {
        $errors['nev'] = 'Add meg a nevet!';
    } else if(strlen($d['nev']) < 3) {
        $errors['nev'] = 'A név túl rövid!';
    }

    if(!preg_match('/[0-6]/', $d['szin'])){
        $errors['szin'] = 'Add meg a színt!';
    }

    if(!validate($d['szulido'])){
        $errors['szulido'] = 'Add meg a születési időt!';
    } 
    if(!validate($d['nem'])){
        $errors['nem'] = 'Add meg a nemét';
    } 

    if(!$errors) {
        $file = file_get_contents('kutyuk.json');
        $tomb = json_decode($file, true);

        $new = [
            'nev' => $d['nev'],
            'szin' => $d['szin'],
            'szulido' => $d['szulido'],
            'nem' => $d['nem'],
        ];

        array_push($tomb, $new);

        $newjson = json_encode($tomb, JSON_PRETTY_PRINT);
        file_put_contents('kutyuk.json', $newjson);
    }
?>
<div id="main">
        <h1><?= $errors ? 'Sikertelen hozzáadás! 😥' : 'Sikeres hozzáadás🐶' ?> </h1>
</div>

    <?php if($errors): ?>
        <button onclick="window.location.href='adddoggo.php'">Vissza a hozzáadáshoz</button>
    <?php else: ?>
        <button onclick="window.location.href='index.php'">Vissza a főoldalra!</button>
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