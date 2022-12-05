<?php
    include('storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    
    $en = $_POST['employee_name'] ?? '';
    $pn = $_POST['project_name'] ?? '';
    $ph = intval($_POST['project_hours'] ?? 0); 
    if ($en !== ''){
        if ($pn !== ''){
            $record = $stor -> findOne(['employee_name' => $en, 'project_name' => $pn]);
            if ($record !== null){
                $record['project_hours'] += $ph;
                if ($record['project_hours'] > 0)
                    $stor -> update($record['id'], $record);
                else $stor -> delete($record['id']);
            } else if ($ph > 0) {
                $stor -> add([
                    'employee_name' => $en,
                    'project_name' => $pn,
                    'project_hours' => $ph
                ]);
            }
        }
    }

    $names = array_unique(array_column($stor -> findAll(), 'employee_name'));
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Projektórák</title>
</head>
<body>
    <h1>Projektórák</h1>
    <form action="index.php" method="post">
        <label for="employee_name">Munkavállaló:</label><select name="employee_name">
            <?php foreach ($names as $i): ?>
                <option value="<?= $i ?>" <?= $i == $en ? 'selected' : '' ?>><?= $i ?></option>
            <?php endforeach; ?>
        </select><br>
        <label for="project_name">Projekt neve:</label><input type="text" name="project_name"> <br>
        <label for="project_hours">Munkaórák:</label><input type="number" name="project_hours" value="0" step="1"> <br>
        <button type="submit">Hozzáad és mutat</button>
    </form>
    <?php if($en !== ''): ?>
    <h2><?= $en ?> munkaórái projektenként</h2>
    <?php foreach($stor -> findAll(['employee_name' => $en]) as $p): ?>
        <?= $p['project_name'] ?> → <?= $p['project_hours'] ?> óra <br>
    <?php endforeach; ?>
    <?php endif; ?>
</body>
</html>
