const openBtn = document.getElementById('openBtn');
const eyeContainer = document.getElementById('eyeContainer');
const mainContent = document.getElementById('mainContent');

// Elementos da Fase Extra
const extraBtn = document.getElementById('extraBtn');
const transitionLayer = document.getElementById('psychoTransition');
const extraContentContainer = document.getElementById('extraContentContainer');

// ------------------------------------------
// 1. ANIMAÇÃO DE INTRODUÇÃO (OLHO)
// ------------------------------------------
openBtn.addEventListener('click', () => {
  openBtn.classList.add('fade-out');

  setTimeout(() => {
    openBtn.style.display = 'none';
    eyeContainer.classList.add('active');

    setTimeout(() => {
      document.body.classList.add('light-mode');
      
      // Adicionamos transições aqui caso o MainContent precise sumir depois
      mainContent.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
      mainContent.classList.add('visible');
    }, 8500); 

  }, 1000);
});

// ------------------------------------------
// 2. TRANSIÇÃO PSICODÉLICA (BOTÃO EXTRA)
// ------------------------------------------
if (extraBtn) {
  extraBtn.addEventListener('click', () => {
    
    // Passo 1: Fade Out suave em todo o conteúdo da apresentação atual
    mainContent.style.opacity = "0";
    mainContent.style.transform = "scale(0.95)"; // Dá um leve efeito de distanciamento
    document.body.style.overflow = "hidden"; // Trava a barra de rolagem temporariamente

    // Passo 2: Inicia a transição psicodélica vindo das bordas (após o fade out)
    setTimeout(() => {
      transitionLayer.classList.add('active');
    }, 800); 

    // Passo 3: Esconde a parte antiga, prepara e revela a nova página com as estatísticas
    setTimeout(() => {
      mainContent.style.display = "none"; 
      extraContentContainer.style.display = "block"; // Libera a renderização da tela extra
      
      // Um timer minúsculo garante que o navegador aplique a classe css visível com animação
      setTimeout(() => {
         extraContentContainer.classList.add('visible');
         document.body.style.overflow = "auto"; // Devolve a rolagem para o novo conteúdo
      }, 50);
      
    }, 800 + 3000); // Aguarda o fim total da transição (Fade 800ms + Animação Extra 3s)
  });
}