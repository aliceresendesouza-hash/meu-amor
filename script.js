// Lista de Frases Românticas
const phrases = {
  1: "Seu sorriso é a minha coisa favorita no mundo inteiro. Ele ilumina até os meus dias mais difíceis! 🥰",
  2: "Eu amo a forma como você cuida de mim, a sua risada e como a vida fica mil vezes melhor quando estou do seu lado. ❤️",
  3: "Queria estar abraçadinha com você agora, sentindo seu cheirinho e ouvindo o seu coração bater. 🧸",
  4: "Eu quero construir todos os meus amanhãs ao seu lado. Você é o meu presente e o meu futuro ideal! 💍✨",
  random: [
    "Sabe qual é o meu lugar favorito no mundo? Dentro do seu abraço. 🏡❤️",
    "Você é a razão do meu sorriso mais sincero! 😁🥰",
    "Te amar é a coisa mais fácil e bonita que eu já fiz na vida. 🌹",
    "Eu te amo mais do que ontem e muito menos do que amanhã! 🚀❤️",
    "Você não é apenas meu namorado, é meu melhor amigo e porto seguro. 🔒✨"
  ]
};

// Função para alterar a frase na tela
function showMessage(type) {
  const textElement = document.getElementById('phraseText');
  const boxElement = document.getElementById('messageBox');
  
  // Efeito visual de clique na caixa
  boxElement.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    if (type === 'random') {
      const randomIndex = Math.floor(Math.random() * phrases.random.length);
      textElement.innerText = phrases.random[randomIndex];
    } else {
      textElement.innerText = phrases[type];
    }
    boxElement.style.transform = 'scale(1)';
  }, 150);
}

// Função para criar corações vermelhos caindo/subindo no fundo
function createHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart-bg');
  heart.innerText = '❤️';
  
  // Posição horizontal aleatória
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Duração e tamanho aleatórios
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  heart.style.fontSize = Math.random() * 10 + 12 + 'px';
  
  document.body.appendChild(heart);

  // Remove o coração da tela após a animação
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Gera um novo coração a cada 300ms
setInterval(createHearts, 300);
