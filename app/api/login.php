<?php
session_start();
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] === "POST"){

    $usuario = trim($_POST['usuario']);
    $senha = trim($_POST['senha']);

    if(empty($usuario) || empty($senha)){
        echo "<script>
                    alert('Preencha todos os campos!');
                    window.location.href = 'localhost://app/index.html';
                </script>";
                exit;
    }

    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE usuario = ? AND senha = PASSWORD(?)");
    $stmt->bind_param("ss", $usuario, $senha);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1){
        $_SESSION['usuario'] = $usuario;
        echo "<script>
                alert('Login realizado com sucesso!');
                window.location.href = 'http://localhost/app/cad.html';
            </script>";
                
    }else{
        echo "<script>
                alert('Usuario ou senha incorreto!');
                window.location.href = 'http://localhost/app/index';
            </script>";
        exit;
    }

    $stmt->close();
    $conn->close();
    exit;

}else{
    header("Location: http://localhost/app/index.html");
    exit;
}

?>