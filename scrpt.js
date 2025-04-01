document.getElementById('icone-olho').addEventListener('click', function() {
    console.log('Ícone clicado!'); // Veirificar se aparece no console

    const input = document.getElementById('senha');
    const isPassword = input.type === 'password';
    
    input.type = isPassword ? 'text' : 'password';
    const newImage = isPassword 
      ? "url('../Imagens/Iconoir-Team-Iconoir-Eye-empty.512.png')"
      : "url('../Imagens/Iconoir-Team-Iconoir-Eye-off.512.png')";

      console.log('Tentando carregar: ', newImage);
      this.style.backgroundImage = newImage;
  });
