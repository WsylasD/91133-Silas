<?php

// Configuração do banco de dados
$host = "localhost";
$user = "root";
$pass = ""; // Senha do MySQL
$dbname = "cadastro_produtos";

// Conexão com o banco
$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error){
    die("Conexão falhou: " . $conn->connect_error);
}

echo "Conexão bem sucedida!";

// Captura e valida os dados
$produto = trim($_POST['product'] ?? '');
$preco = floatval($_POST['price'] ?? 0);
$quantidade = intval($_POST['amount'] ?? 0);
$total = floatval($_POST['total-valor'] ?? 0);

if ($produto === "" || $preco <= 0 || $quantidade <= 0){
    echo "Dados Inválidos!";
    exit;
}

// Prepara a inserção
$sql = "INSERT INTO produtos (produto, preco, quantidade, total) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Erro na preparação: " . $conn->error);
}

$stmt->bind_param("sdid", $produto, $preco, $quantidade, $total);

// Executa e verifica
if ($stmt->execute()){
    echo "Cadastro realizado com Sucesso!!!";
}else{
    echo "Erro ao Cadastrar!: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
