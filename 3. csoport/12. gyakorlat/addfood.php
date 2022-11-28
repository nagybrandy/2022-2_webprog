<?php
    session_start();
    echo $_SESSION['name'];
    echo $_SESSION['pw'];
    if(!isset($_SESSION['name'])) {
        echo 'Nem vagy bejelentkezve!';
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új kaja érkezik!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/elte-fi/www-assets@19.10.16/styles/mdss.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Új Kaja érkezik!</h1>


<form method='post' action='isvalid.php'> 
    <label>Étel neve</label> <br> 
    <input type="text" name="name"> <br><br>
    <label>Típus</label><br> 
    <select name="type">
        <option value="nincs">Nincs</option>
        <option value="zöldség">zöldség</option>
        <option value="húsféle">húsféle</option>
        <option value="tejtermék">tejtermék</option>
    </select> <br><br>
    <label>Darab</label><br> <input type="number" name="number"> <br><br>
    <label>Lejárati dátum</label><br> <input type="date" name="expdate"> <br><br>
    <input type="submit" value="Küldés">
<form>

</body>
</html>