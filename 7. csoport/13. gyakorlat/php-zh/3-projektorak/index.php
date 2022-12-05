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
            <!-- alkalmazottak neve egyszer -->
        </select><br>
        <label for="project_name">Projekt neve:</label><input type="text" name="project_name"> <br>
        <label for="project_hours">Munkaórák:</label><input type="number" name="project_hours" value="0" step="1"> <br>
        <button type="submit">Hozzáad és mutat</button>
    </form>
</body>
</html>
