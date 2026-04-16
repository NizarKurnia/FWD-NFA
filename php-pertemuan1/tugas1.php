<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="POST">
        <Label>Nama</Label> <br>
        <input type="text" name="fullname"> <br><br>
        <Label>Email</Label><br>
        <input type="email" name="email" id=""> <br><br>
        <Label>Nilai</Label><br>
        <input type="number" name="nilai" id="" min="0" max="100"><br><br>
        <input type="submit" name="hasil" id="">
    </form>

    <?php
    if (isset($_POST['hasil'])) {
        $nama = $_POST['fullname'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        if ($nilai >= 70 && $nilai <= 100) {
            echo "Selamat $nama, Kamu Lulus";
        } else if ($nilai >= 0 && $nilai < 70) {
            echo "Maaf $nama, Kamu Tidak Lulus Harus Remedial";
        } else {
            echo "Nilai Error";
        }
    }
    ?>

</body>

</html>