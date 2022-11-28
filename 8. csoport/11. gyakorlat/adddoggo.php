<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új kutyus érkezett!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="main">
        <h1>Új kutyus érkezett!</h1>
</div>

<form id="ujkutya" action='isvalid.php' method='get' novalidate> 
    <label>Kutya neve</label> <br> 
    <input type="text" name="nev"> <br><br>
    <label>Szín</label><br> 
    <select name="szin">
        <option value="0">vörös</option>
        <option value="1">barna-fehér</option>
        <option value="2">szürkésbarna-fehér</option>
        <option value="3">fehér</option>
        <option value="4">sötétbarna</option>
        <option value="5">szürke</option>
    </select> <br><br>
    <label>Születési idő</label><br> <input type="date" name="szulido"> <br><br>
    <label>Nem</label> <br> 
        Kan <input type="radio" name="nem" value="kan"> <br>
        Szuka <input type="radio" name="nem" value="szuka"><br><br>
    <input type="submit" value="Küldés">
<form>

</body>
</html>