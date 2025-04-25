<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost/app/index.html");
    exit;
}

include 'conexao.php';

include 'insere.php';

include '/view/conecta.php';

echo "<script>
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'http://localhost/app/index.html';
</script>";

?>