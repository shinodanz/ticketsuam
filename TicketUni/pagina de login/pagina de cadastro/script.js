const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmarSenha');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio do formulário

  const email = emailInput.value.trim();
  const senha = senhaInput.value;
  const confirmarSenha = confirmarSenhaInput.value;

  // Verificar se o email é válido
  if (!email.includes('@') || !email.includes('.')) {
    errorMsg.textContent = 'Por favor, insira um e-mail válido.';
    errorMsg.style.color = '#ff6b6b'; // Cor de erro
    return;
  }

  // Verificar se a senha tem pelo menos 6 caracteres
  if (senha.length < 6) {
    errorMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    errorMsg.style.color = '#ff6b6b'; // Cor de erro
    return;
  }

  // Verificar se as senhas conferem
  if (senha !== confirmarSenha) {
    errorMsg.textContent = 'As senhas não coincidem.';
    errorMsg.style.color = '#ff6b6b'; // Cor de erro
    return;
  }

  // Se tudo estiver certo
  errorMsg.textContent = 'Cadastro realizado com sucesso!';
  errorMsg.style.color = 'lightgreen'; // Cor de sucesso
  alert('Cadastro realizado com sucesso!');
});