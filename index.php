<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $nome = isset($_GET['nome']) ? $_GET['nome'] : '';
    $email = isset($_GET['email']) ? $_GET['email'] : '';
    $telefone = isset($_GET['tel']) ? $_GET['tel'] : '';
    $local = isset($_GET['select']) ? $_GET['select'] : '';
    $tipo_info = isset($_GET['info']) ? $_GET['info'] : '';
    $mensagem = isset($_GET['textarea']) ? $_GET['textarea'] : '';

    //Processando dados;
    echo "<h2>Dados do formulário recebidos:</h2>";
    echo "Nome: " . htmlspecialchars($nome) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Telefone: " . htmlspecialchars($telefone) . "<br>";
    echo "Local: " . htmlspecialchars($local) . "<br>";
    echo "Tipo de informação: " . htmlspecialchars($tipo_info) . "<br>";
    echo "Mensagem: " . htmlspecialchars($mensagem) . "<br>";
}
