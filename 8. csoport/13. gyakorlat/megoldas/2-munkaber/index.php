<?php
    $fullname = $_GET['fullname'] ?? '';
    $job_title = $_GET['job_title'] ?? '';
    $department = $_GET['department'] ?? '';
    $gross_income = $_GET['gross_income'] ?? '';
    $tax_free = $_GET['tax_free'] ?? false;
    $tax_free = filter_var($tax_free, FILTER_VALIDATE_BOOLEAN);
    $errors = [];
    if (count($_GET)){
        if (trim($fullname) === '')
            $errors['fullname'] = 'A név megadása kötelező!'; 
        else if (count(explode(' ', $fullname)) < 2)
            $errors['fullname'] = 'A név legalább két szóból álljon!'; 

        if (trim($job_title) === '')
            $errors['job_title'] = 'A munkakör megadása kötelező!'; 

        if (trim($department) === '')
            $errors['department'] = 'A részleg megadása kötelező!'; 
        else if (!in_array($department, ['man', 'rd', 'hr']))
            $errors['department'] = 'Érvénytelen részleg!';

        if (trim($gross_income) === '')
            $errors['gross_income'] = 'A bruttó munkabér megadása kötelező!';
        else if (filter_var($gross_income, FILTER_VALIDATE_INT) === false)
            $errors['gross_income'] = 'A bruttó munkabár csak egész szám lehet!';
        else {
            $gross_income = intval($gross_income);
            if ($gross_income <= 200000) $errors['gross_income'] = 'A bruttó munkabár csak 200 000 Ft-nál nagyobb lehet!';
        }

        $errors = array_map(function($e) { 
            return "<span style='color: red'>$e</span>";
        }, $errors);
    }
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Munkabér</title>
</head>
<body>
    <h1>Munkabér</h1>
    <form action="index.php" method="get" novalidate>
        <label for="i1">Munkavállaló neve:</label>
        <input type="text" name="fullname" id="i1" value="<?= $fullname ?>"> <?= $errors['fullname'] ?? '' ?> <br>
        <label for="i2">Munkakör:</label> <input type="text" name="job_title" id="i2" value="<?= $job_title ?>"> <?= $errors['job_title'] ?? '' ?> <br>
        <label>Részleg:</label> <?= $errors['department'] ?? '' ?> <br>
        <input type="radio" value="man" name="department" id="i3_man" <?= $department == 'man' ? 'checked' : '' ?> > <label for="i3_man">menedzsment</label><br>
        <input type="radio" value="rd" name="department" id="i3_rd" <?= $department == 'rd' ? 'checked' : '' ?>> <label for="i3_man">kutatás-fejlesztés (R&D)</label><br>
        <input type="radio" value="hr" name="department" id="i3_hr" <?= $department == 'hr' ? 'checked' : '' ?>> <label for="i3_man">emberi erőforrások (HR)</label><br>
        <label for="i4">Bruttó munkabér:</label>
        <input type="text" name="gross_income" id="i4" value="<?= $gross_income ?>"> <?= $errors['gross_income'] ?? '' ?>  <br>
        <input type="checkbox" name="tax_free" id="i5" <?= $tax_free ? 'checked' : '' ?>><label for="i5">SZJA-mentesség</label> <?= $errors['tax_free'] ?? '' ?>  <br>
        <button type="submit">Számítás</button>
    </form>
    <?php if (count($_GET) > 0 && count($errors) === 0): ?>
        <output>Nettó munkabér: <?= round($gross_income * ($tax_free ? 0.815 : 0.665), 0) ?> Ft</output>
    <?php endif; ?>
    <h2>Érvénytelen tesztadatok</h2>
        <a href="index.php?fullname=&job_title=&gross_income=">fullname=&job_title=&gross_income=</a><br>
        <a href="index.php?fullname=Eszter&job_title=&gross_income=">fullname=Eszter&job_title=&gross_income=</a><br>
        <a href="index.php?fullname=Winch+Eszter&job_title=&gross_income=">fullname=Winch+Eszter&job_title=&gross_income=</a><br>
        <a href="index.php?fullname=Winch+Eszter&job_title=adattudós&gross_income=">fullname=Winch+Eszter&job_title=adattudós&gross_income=</a><br>
        <a href="index.php?fullname=Winch+Eszter&job_title=adattudós&department=b&gross_income=">fullname=Winch+Eszter&job_title=adattudós&department=b&gross_income=</a><br>
        <a href="index.php?fullname=Winch+Eszter&job_title=adattudós&department=rd&gross_income=">fullname=Winch+Eszter&job_title=adattudós&department=rd&gross_income=</a><br>
        <a href="index.php?fullname=Winch+Eszter&job_title=adattudós&department=rd&gross_income=3.1415">fullname=Winch+Eszter&job_title=adattudós&department=rd&gross_income=3.1415</a><br>
        <a href="index.php?fullname=Winch+Eszter&job_title=adattudós&department=rd&gross_income=131415">fullname=Winch+Eszter&job_title=adattudós&department=rd&gross_income=131415</a><br>
    <h2>Érvényes tesztadatok</h2>
        (232 750 Ft) <a href="index.php?fullname=Winch+Eszter&job_title=adattud%C3%B3s&department=rd&gross_income=350000">fullname=Winch+Eszter&job_title=adattud%C3%B3s&department=rd&gross_income=350000</a><br>
        (285 250 Ft) <a href="index.php?fullname=Winch+Eszter&job_title=adattud%C3%B3s&department=rd&gross_income=350000&tax_free=on">fullname=Winch+Eszter&job_title=adattud%C3%B3s&department=rd&gross_income=350000&tax_free=on</a><br>
    </body>
</html>
