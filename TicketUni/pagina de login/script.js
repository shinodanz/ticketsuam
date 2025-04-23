const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      const senha = senhaInput.value;

      if (!email.includes('@') || !email.includes('.')) {
        errorMsg.textContent = 'Por favor, insira um e-mail válido.';
        return;
      }

      if (senha.length < 6) {
        errorMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
      }

    
      errorMsg.textContent = '';
      alert('Login realizado com sucesso!');
      
    });