<?php
    session_start();
    if(isset($_GET['logout'])) {
        session_destroy();
    }

    $logged = false;
   if($_POST && $_POST['name'] === 'Bendi' && $_POST['pw'] === '123') {
        $_SESSION['name'] = $_POST['name'];
        $_SESSION['pw'] = $_POST['pw'];
        $logged = true;
        echo 'Hello ' . $_SESSION['name'] . '! 🥰';
   } else echo 'Nem vagy bejelentkezve!';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi van a hűtőmban?</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/elte-fi/www-assets@19.10.16/styles/mdss.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <h1>Mi van a hűtőmban?</h1>
    <table>
        <tr>
            <th>Név</th>
            <th>Darab</th>
            <th>Típus</th>
            <th>Hűtőberakás dátuma</th>
            <th>Lejárati dátum</th>
        </tr>
        <!-- Ide írd a kódod-->
        <?php 
            $str = file_get_contents('food.json', true);
            $arr = json_decode($str, true);
            
            foreach($arr as $e): ?>
                <tr class='<?= $e['expdate'] <= date('Y-m-d') ? "lejart" : "" ?>'>
                    <td><?=$e['name'] ?></td>
                    <td><?=$e['number'] ?></td>
                    <td><?=$e['type'] ?></td>
                    <td><?=$e['date'] ?></td>
                    <td><?=$e['expdate'] ?></td>
                </tr>
            <?php endforeach; ?>
    </table>
    <?php if($logged): ?>
        <a href='addfood.php'>Elem hozzáadása</a><br>
        <a href='index.php?logout=1'>Kijelentkezés</a>
    <?php else: ?>
        <a href='login.php'>Bejelentkezés</a>
    <?php endif; ?>
</body>
</html>