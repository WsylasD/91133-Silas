document.addEventListener("DOMContentLoaded", function() {
    // Página de login
    const loginForm = document.getElementById("loginform");
    if (loginForm) {
      const msgErro = document.getElementById("msgErro"); // Certifique-se de que este elemento existe
      loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário
  
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Validação dos campos
        if (!username || !password) {
          if (msgErro) msgErro.textContent = "Por favor, preencha todos os campos!";
          return;
        }
  
        if (password.length < 8) {
          if (msgErro) msgErro.textContent = "A senha deve ter pelo menos 8 caracteres!";
          return;
        }
  
        // Salva o nome de usuário no localStorage
        localStorage.setItem("username", username);
  
        // Exibe mensagem de sucesso antes do redirecionamento
        alert("Login bem sucedido!");
  
        // Redireciona para a tela de cadastro de produtos
        window.location.href = "produtos.html";
      });
    }

    // Recuperando o nome do usuário do localStorage
    const username = localStorage.getItem("username");

    // Se o nome do usuário estiver armazenado, exibe uma mensagem personalizada
    if (username){
        document.getElementById("user-session").textContent = `Usuário: ${username}`;
    }else{
        document.getElementById("user-session").textContent = "Nome de usuário não encontrado!";
    }

    // Função para sair (destruir a sessão e voltar para o login)
    document.getElementById("logoutBtn").addEventListener("click",
        function(){
            // Remove o nome de usuário do localStorage
            localStorage.removeItem("username");

            // Redireciona o usuario de volta para a pagina de login
            window.location.href = "index.html"; // Alterar para o caminho da pagina de login
        }
    )
  
    // Lógica da página de cadastro de produtos
    const priceInput = document.getElementById("price");
    const amountInput = document.getElementById("amount");
    const totalSpan = document.getElementById("total-valor");
    const calcButton = document.getElementById("calcButton");
    const cadprodForm = document.getElementById("cadprod");
  
    // Função que calcula e atualiza o total
    function calcularTotal() {
      const price = parseFloat(document.getElementById("price").value);
      const amount = parseFloat(document.getElementById("amount").value);
      const totalSpan = document.getElementById("total-valor");
      const totalHidden = document.getElementById("total-hidden");
      
      if (!isNaN(price) && !isNaN(amount)) {
        const total = (price * amount).toFixed(2);
        totalSpan.textContent = total;
        totalHidden.value = total; // Atualiza o campo hidden
      } else {
        totalSpan.textContent = "0";
        totalHidden.value = "0";
      }
    }
  
    // Se os inputs existirem, adiciona os eventos para atualização em tempo real
    if (priceInput && amountInput) {
      priceInput.addEventListener("input", calcularTotal);
      amountInput.addEventListener("input", calcularTotal);
    }
  
    // Tratamento do submit do formulário de cadastro de produtos
    if (cadprodForm) {
      cadprodForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        alert("Produto cadastrado com total de R$ " + totalSpan.textContent);
      });
    }
  });
  