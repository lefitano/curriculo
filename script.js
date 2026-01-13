// ============================================
// ANIMAÇÕES AO CARREGAR A PÁGINA
// ============================================

// Função que é executada quando o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os elementos que devem ter animação de entrada
    const elementosAnimados = document.querySelectorAll('.secao, .projeto-card, .tech-card');
    
    // Adiciona animação de fade-in (aparecer gradualmente) para cada elemento
    elementosAnimados.forEach((elemento, index) => {
        // Define um pequeno delay para cada elemento (efeito cascata)
        setTimeout(() => {
            elemento.style.opacity = '0'; // Começa invisível
            elemento.style.transform = 'translateY(20px)'; // Começa um pouco abaixo
            elemento.style.transition = 'all 0.6s ease'; // Transição suave
            
            // Força o navegador a recalcular os estilos
            elemento.offsetHeight;
            
            // Aplica os estilos finais (visível e na posição correta)
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }, index * 100); // Cada elemento aparece 100ms depois do anterior
    });
    
    // Chama a função que adiciona efeito parallax ao scroll
    adicionarEfeitoParallax();
    
    // Chama a função que adiciona animação aos badges de tecnologia
    animarBadges();
});

// ============================================
// EFEITO PARALLAX NO SCROLL
// ============================================

function adicionarEfeitoParallax() {
    const header = document.querySelector('.header');
    
    // Adiciona evento de scroll na página
    window.addEventListener('scroll', function() {
        // Pega a posição atual do scroll
        const scrollPosition = window.pageYOffset;
        
        // Move o header mais devagar que o resto da página (efeito parallax)
        // O valor 0.5 controla a velocidade (quanto menor, mais lento)
        header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        
        // Adiciona um leve efeito de opacidade ao rolar
        const opacidade = Math.max(0.3, 1 - (scrollPosition / 500));
        header.style.opacity = opacidade;
    });
}

// ============================================
// ANIMAÇÃO DOS BADGES DE TECNOLOGIA
// ============================================

function animarBadges() {
    // Seleciona todos os badges de tecnologia nos projetos
    const badges = document.querySelectorAll('.tech-badge');
    
    // Adiciona efeito hover personalizado em cada badge
    badges.forEach(badge => {
        // Quando o mouse entra no badge
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)'; // Aumenta e rotaciona levemente
            this.style.transition = 'all 0.3s ease';
        });
        
        // Quando o mouse sai do badge
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)'; // Volta ao normal
        });
    });
}

// ============================================
// CONTADOR ANIMADO PARA TECNOLOGIAS
// ============================================

// Função para criar um efeito de contagem nas listas de tecnologias
function animarContagemTecnologias() {
    // Seleciona todas as listas de tecnologias
    const listas = document.querySelectorAll('.tech-lista');
    
    listas.forEach(lista => {
        // Pega todos os itens da lista
        const itens = lista.querySelectorAll('li');
        
        // Adiciona animação sequencial para cada item
        itens.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 150); // Delay crescente para cada item
        });
    });
}

// ============================================
// SCROLL SUAVE PARA SEÇÕES (CASO ADICIONE NAVEGAÇÃO)
// ============================================

// Função útil caso você queira adicionar links de navegação no futuro
function scrollSuave(elementoAlvo) {
    elementoAlvo.scrollIntoView({
        behavior: 'smooth', // Scroll suave
        block: 'start'      // Alinha no topo
    });
}

// ============================================
// OBSERVER PARA ANIMAÇÕES AO ENTRAR NA VIEWPORT
// ============================================

// Cria um observador que detecta quando elementos entram na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Se o elemento está visível na tela
        if (entry.isIntersecting) {
            // Adiciona classe para ativar animação
            entry.target.classList.add('visivel');
            
            // Para de observar este elemento (animação ocorre apenas uma vez)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Elemento precisa estar 10% visível para disparar
});

// Observa todos os cards de projeto
document.querySelectorAll('.projeto-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// EFEITO DE DIGITAÇÃO NO TÍTULO (OPCIONAL)
// ============================================

// Função que cria efeito de texto sendo digitado
function efeitoDigitacao(elemento, texto, velocidade = 100) {
    let index = 0;
    elemento.textContent = ''; // Limpa o texto
    
    // Adiciona cada letra com um intervalo
    const intervalo = setInterval(() => {
        if (index < texto.length) {
            elemento.textContent += texto.charAt(index);
            index++;
        } else {
            clearInterval(intervalo); // Para quando terminar
        }
    }, velocidade);
}

// Exemplo de uso (descomente para ativar):
// const tituloProfissional = document.querySelector('.titulo-profissional');
// efeitoDigitacao(tituloProfissional, tituloProfissional.textContent, 50);

// ============================================
// ADICIONA CLASSE AO SCROLL PARA MUDAR ESTILOS
// ============================================

window.addEventListener('scroll', function() {
    const body = document.body;
    
    // Se rolou mais de 50px, adiciona classe
    if (window.pageYOffset > 50) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});

// ============================================
// CONSOLE LOG PERSONALIZADO (REMOVA EM PRODUÇÃO)
// ============================================

console.log('%c🚀 Currículo carregado com sucesso!', 
    'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cDesenvolvido com HTML, CSS e JavaScript', 
    'color: #8b5cf6; font-size: 12px;');
