// Анимация счетчиков для блока статистики
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 30);
    });
}

// Инициализация страницы "О компании"
document.addEventListener('DOMContentLoaded', function() {
    // Анимация счетчиков при скролле
    const statsSection = document.querySelector('.stats-section');
    
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // Добавляем текущую дату в футер
    function updateCurrentDate() {
        const currentDateElement = document.getElementById('currentDate');
        if (currentDateElement) {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
            };
            currentDateElement.textContent = now.toLocaleDateString('ru-RU', options);
        }
    }
    
    updateCurrentDate();
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Добавляем эффект параллакса для героя
    const aboutHero = document.querySelector('.about-hero');
    if (aboutHero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.1;
            aboutHero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Добавляем анимацию появления элементов при скролле
    const animatedElements = document.querySelectorAll('.mission-card, .activity-card, .advantage-card, .certificate-card, .partner-card, .team-card');
    
    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        appearOnScroll.observe(element);
    });
    
    // Стили для анимации появления
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .appear {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .mission-card:nth-child(1) { transition-delay: 0.1s; }
        .mission-card:nth-child(2) { transition-delay: 0.2s; }
        .mission-card:nth-child(3) { transition-delay: 0.3s; }
        
        .activity-card { transition-delay: calc(0.1s * var(--index, 0)); }
        .advantage-card { transition-delay: calc(0.1s * var(--index, 0)); }
        .certificate-card { transition-delay: calc(0.1s * var(--index, 0)); }
        .partner-card { transition-delay: calc(0.1s * var(--index, 0)); }
        .team-card { transition-delay: calc(0.1s * var(--index, 0)); }
    `;
    document.head.appendChild(animationStyles);
    
    // Добавляем индексы для задержки анимации
    animatedElements.forEach((element, index) => {
        element.style.setProperty('--index', index);
    });
    
    // Интерактивная временная шкала
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    document.head.appendChild(printStyles);
});