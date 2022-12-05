<?php
    $data = [
        ["name" => "Dr. Programo Zoltán", "color" => "#517d81", "schedule" => [9 => 2, 12 => 4]],
        ["name" => "Koaxk Ábel", "color" => "orange", "schedule" => [11 => 1, 13 => 3]],
        ["name" => "Locsolók Anna", "color" => "red", "schedule" => []],
        ["name" => "Trap Pista", "color" => "navy", "schedule" => [10 => 4, 15 => 2]],
        ["name" => "Wincs Eszter", "color" => "hotpink", "schedule" => [9 => 2, 12 => 3, 15 => 1]],
        ["name" => "Zsíros B. Ödön", "color" => "greenyellow", "schedule" => [9 => 8]]
    ];

    $hours = 0;
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Projektmenedzsment</title>
</head>
<body>
    <h1>Projektmenedzsment</h1>
    <table>
        <thead>
        <tr>
            <th>Név</th>
            <?php for ($i = 9; $i < 17; $i++): ?>
                <th><?= $i . ":00" ?></th>
            <?php endfor; ?>
        </tr>
        </thead>
        <tbody>
        <tr>
            <?php foreach ($data as $d): ?>
                <tr>
                <th><?= $d['name'] ?></th>
                <?php
                    $i = 9;
                    while ($i < 17){
                        if (isset($d['schedule'][$i])){
                            echo "<td style='background-color: {$d['color']}' colspan='{$d['schedule'][$i]}'></td>";
                            $hours += $d['schedule'][$i];
                            $i += $d['schedule'][$i];
                        } else{ 
                            echo "<td></td>";
                            $i++;
                        }
                    }
                ?>
                </tr>
            <?php endforeach; ?>
        </tr>
        </tbody>
    </table>
    <b>Összes munkaóra: </b> <?= $hours ?> óra
</body>
</html>
