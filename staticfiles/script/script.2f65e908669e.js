// Navegação entre seções
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // Função para mostrar seção
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId + '-section');
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Atualizar link ativo
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Voltar ao topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Fechar menu mobile se estiver aberto
        navLinksContainer.classList.remove('active');
        navToggle.classList.remove('active');
    }

    // Event listeners para os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Menu mobile toggle
    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Fechar menu mobile ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
            navLinksContainer.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Fechar menu mobile ao redimensionar tela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinksContainer.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Animação de entrada dos cards
function animateCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observar todos os cards que podem ser animados
    const animatedElements = document.querySelectorAll('.step-card, .tutorial-card, .download-card, .about-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Atualizar barra de progresso (apenas para seção modpack)
// function updateProgress() {
//     const modpackSection = document.getElementById('modpack-section');
//     if (!modpackSection || !modpackSection.classList.contains('active')) {
//         return;
//     }

//     const totalSteps = modpackSection.querySelectorAll('.step-card').length;
//     const visibleSteps = modpackSection.querySelectorAll('.step-card.visible').length;
//     const progress = totalSteps > 0 ? (visibleSteps / totalSteps) * 100 : 0;
    
//     const progressBar = document.getElementById('progressBar');
//     if (progressBar) {
//         progressBar.style.width = progress + '%';
//     }
// }

// Voltar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/ocultar botão flutuante
function handleFloatingButton() {
    const floatingBtn = document.querySelector('.floating-action');
    if (window.scrollY > 300) {
        floatingBtn.style.display = 'flex';
    } else {
        floatingBtn.style.display = 'none';
    }
}

// Efeitos de hover nos botões
function initButtonEffects() {
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(-2px) scale(1)';
        });
    });

    const tutorialLinks = document.querySelectorAll('.tutorial-link');
    tutorialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(-2px) scale(1)';
        });
    });
}

// Efeito de clique nos cards
function initCardClickEffects() {
    const cards = document.querySelectorAll('.step-card, .tutorial-card, .download-card, .about-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Não ativar se o clique foi em um link
            if (e.target.tagName !== 'A' && !e.target.closest('a')) {
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 100);
            }
        });
    });
}

// Smooth scroll para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar navegação
    initNavigation();
    
    // Inicializar animações
    animateCards();
    
    // Esconder botão flutuante inicialmente
    const floatingBtn = document.querySelector('.floating-action');
    if (floatingBtn) {
        floatingBtn.style.display = 'none';
    }
    
    // Inicializar efeitos
    initButtonEffects();
    initCardClickEffects();
    initSmoothScroll();
    
    // Configurar observador para atualizar progresso
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Atualizar progresso apenas se estivermos na seção modpack
                //setTimeout(updateProgress, 100);
            }
        });
    }, { threshold: 0.1 });

    // Observar step-cards para progresso
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach(card => {
        observer.observe(card);
    });
});

// Event listeners para scroll
window.addEventListener('scroll', () => {
    handleFloatingButton();
});

// Função para navegação programática (pode ser chamada externamente)
window.navigateToSection = function(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Prevenir comportamento padrão em links vazios
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && (e.target.getAttribute('href') === '#' || e.target.getAttribute('href') === '')) {
        e.preventDefault();
    }
});