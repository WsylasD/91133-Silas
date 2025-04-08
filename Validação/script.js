document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validação dos campos
    if (!username || !password) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (password.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres!");
        return;
    }

    // Salva o nome de usuário no localStorage
    localStorage.setItem("username", username);

    // Exibe mensagem de sucesso antes do redirecionamento
    alert("Login bem sucedido!");

    // Redireciona para o painel
    window.location.href = "painel.html";
});
