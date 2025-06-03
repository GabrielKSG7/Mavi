document.addEventListener('DOMContentLoaded', function() {
    const musica = document.getElementById('musicaFundo');
    
    // Tenta tocar a música. Alguns navegadores bloqueiam o autoplay
    // se o usuário não interagiu com a página.
    // Um clique em qualquer lugar da página pode ser uma "interação".
    if (musica) {
        const playPromise = musica.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Autoplay iniciado com sucesso.
                console.log("Música tocando!");
            }).catch(error => {
                // Autoplay foi bloqueado.
                console.log("Autoplay da música bloqueado. Tentaremos tocar após interação.");
                // Você pode adicionar um botão de "Clique para ouvir" ou
                // tentar tocar a música após o primeiro clique do usuário na página.
                // Exemplo: document.body.addEventListener('click', () => musica.play(), { once: true });
                // Para uma página de desculpas, queremos que toque direto, mas é bom saber das restrições.
                // Por ora, vamos manter simples e confiar no atributo autoplay.
                // Se não funcionar, uma mensagem para o usuário clicar e ativar o som pode ser uma alternativa.
            });
        }
    }
});