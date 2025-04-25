<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost/app/index.html");
    exit;
}

$produto = $_POST['produto'];
$tipo = $_POST['tipo'];
$quantidade = $_POST['quantidade'];

$sql = "INSERT INTO produtos (produto, tipo, quantidade) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $produto, $tipo, $quantidade);

$stmt->execute();
$stmt->close();

?>