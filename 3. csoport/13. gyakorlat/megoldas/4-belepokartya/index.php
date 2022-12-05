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

    $_SESSION['current'] ??= 'porta';
    $_SESSION['log'] ??= [[
        'from' => 'külvilág',
        'to' => 'porta',
        'when' => date('Y.m.d. H:i:s')
    ]];

    $goto = $_GET['goto'] ?? '';
    if ($goto !== ''){
        $_SESSION['log'][] = [
            'from' => $_SESSION['current'],
            'to' => $goto,
            'when' => date('Y.m.d. H:i:s')
        ];
        $_SESSION['current'] = $goto;
    }

    $back = end($_SESSION['log'])['from'];
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
    Jelenlegi terem: <b><?= $_SESSION['current'] ?></b>

    <h2>Merre tovább?</h2>
    <?php foreach($rooms[$_SESSION['current']] as $i): ?>
        <a href="index.php?goto=<?= $i ?>"> <?= $i ?> </a><br>
    <?php endforeach; ?>

    <br><a href="index.php?goto=<?= $back ?>">Vissza az előző terembe (<?= $back ?>)</a>
    
    <h2>Napló</h2>
    <table>
        <thead>
            <th>Honnan</th>
            <th>Hová</th>
            <th>Mikor</th>
        </thead>
        <tbody>
            <?php foreach($_SESSION['log'] as $i): ?>
            <tr>
                <td><?= $i['from'] ?></td>
                <td><?= $i['to'] ?></td>
                <td><?= $i['when'] ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
