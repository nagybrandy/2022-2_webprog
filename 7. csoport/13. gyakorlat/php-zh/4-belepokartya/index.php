<?php
    session_start();
    $rooms = [
        'külvilág' => ['porta'],
        'porta' => ['menza', 'aula', 'konferenciaterem', 'külvilág'],
        'menza' => ['konyha', 'fagyasztó', 'porta'],
        'konyha' => ['fagyasztó', 'menza'],
        'fagyasztó' => ['konyha'],
        'aula' => ['iroda', 'raktár', 'porta'],
        'iroda' => ['igazgató', 'szerverszoba', 'aula'],
        'igazgató' => ['széf', 'iroda', 'szerverszoba'],
        'szerverszoba' => ['iroda', 'igazgató'],
        'raktár' => ['aula'],
        'konferenciaterem' => ['technika', 'porta'],
        'technika' => ['konferenciaterem'],
        'széf' => ['igazgató'],
    ];
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Belépőkártya</title>
</head>
<body>
    <h1>Belépőkártya</h1>
    Jelenlegi terem: <b>...</b>
    
    <h2>Merre tovább?</h2>
    <!-- egy-egy link szomszédos szobánként -->
    
    <h2>Napló</h2>
    <table>
        <thead>
            <th>Honnan</th>
            <th>Hová</th>
            <th>Mikor</th>
        </thead>
        <tbody>
            <!-- feltöltendő sorokkal a napló alapján -->
        </tbody>
    </table>
</body>
</html>
