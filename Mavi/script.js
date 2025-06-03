document.addEventListener('DOMContentLoaded', function() {
    const musica = document.getElementById('musicaFundo');
    const musicPermissionModal = document.getElementById('musicPermissionModal');
    const playMusicBtn = document.getElementById('playMusicBtn');
    const noMusicBtn = document.getElementById('noMusicBtn');

    // Verifica se todos os elementos necessários existem
    if (musica && musicPermissionModal && playMusicBtn && noMusicBtn) {
        
        // Mostra o modal assim que o DOM estiver carregado
        // O modal já é visível por padrão pelo CSS, esta linha é mais para garantir caso haja um .hidden inicial no HTML
        musicPermissionModal.classList.remove('hidden'); 

        playMusicBtn.addEventListener('click', function() {
            musica.play().then(() => {
                console.log("Música tocando com permissão do usuário.");
            }).catch(error => {
                console.error("Erro ao tentar tocar música:", error);
                // Você pode adicionar um alerta ou mensagem para o usuário aqui se o play() falhar
                // alert("Desculpe, não foi possível iniciar a música. Seu navegador pode estar bloqueando.");
            });
            musicPermissionModal.classList.add('hidden'); // Esconde o modal
        });

        noMusicBtn.addEventListener('click', function() {
            musicPermissionModal.classList.add('hidden'); // Esconde o modal
            console.log("Usuário optou por não tocar a música.");
        });

    } else {
        console.error("Um ou mais elementos do modal de música ou o elemento de áudio não foram encontrados no DOM.");
        // Se os elementos do modal não existem, é melhor esconder qualquer parte visível para evitar uma UI quebrada.
        if (musicPermissionModal) {
            musicPermissionModal.classList.add('hidden');
        }
    }
});
