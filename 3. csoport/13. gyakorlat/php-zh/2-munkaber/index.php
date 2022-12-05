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
        <input type="text" name="fullname" id="i1"> <br>
        <label for="i2">Munkakör:</label> <input type="text" name="job_title" id="i2"> <br>
        <label>Részleg:</label> <br>
        <input type="radio" value="man" name="department" id="i3_man"> <label for="i3_man">menedzsment</label><br>
        <input type="radio" value="rd" name="department" id="i3_rd"> <label for="i3_man">kutatás-fejlesztés (R&D)</label><br>
        <input type="radio" value="hr" name="department" id="i3_hr"> <label for="i3_man">emberi erőforrások (HR)</label><br>
        <label for="i4">Bruttó munkabér:</label>
        <input type="text" name="gross_income" id="i4"> <br>
        <input type="checkbox" name="tax_free" id="i5"><label for="i5">SZJA-mentesség</label> <br>
        <button type="submit">Számítás</button>
    </form>

    <!-- ha nincs hiba: -->
    <output>Nettó munkabér: ... Ft</output>
    

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
