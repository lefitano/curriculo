document.addEventListener('DOMContentLoaded', function() {
    
    const elementosAnimados = document.querySelectorAll('.secao, .projeto-card, .tech-card');
    
    elementosAnimados.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.style.opacity = '0';
            elemento.style.transform = 'translateY(20px)';
            elemento.style.transition = 'all 0.6s ease';
            
            elemento.offsetHeight;
            
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    adicionarEfeitoParallax();
    
    animarBadges();
});

function adicionarEfeitoParallax() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        
        const opacidade = Math.max(0.3, 1 - (scrollPosition / 500));
        header.style.opacity = opacidade;
    });
}

function animarBadges() {
    const badges = document.querySelectorAll('.tech-badge');
    
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

function animarContagemTecnologias() {
    const listas = document.querySelectorAll('.tech-lista');
    
    listas.forEach(lista => {
        const itens = lista.querySelectorAll('li');
        
        itens.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 150);
        });
    });
}

function scrollSuave(elementoAlvo) {
    elementoAlvo.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.projeto-card').forEach(card => {
    observer.observe(card);
});

function efeitoDigitacao(elemento, texto, velocidade = 100) {
    let index = 0;
    elemento.textContent = '';
    
    const intervalo = setInterval(() => {
        if (index < texto.length) {
            elemento.textContent += texto.charAt(index);
            index++;
        } else {
            clearInterval(intervalo);
        }
    }, velocidade);
}

window.addEventListener('scroll', function() {
    const body = document.body;
    
    if (window.pageYOffset > 50) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});

console.log('%c🚀 Currículo carregado com sucesso!', 
    'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cDesenvolvido com HTML, CSS e JavaScript', 
    'color: #8b5cf6; font-size: 12px;');