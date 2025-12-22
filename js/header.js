// Код для работы с хедером (бургер-меню, каталог, модальные окна)
document.addEventListener('DOMContentLoaded', function() {
    // Элементы хедера
    const catalogBtn = document.getElementById('catalogBtn');
    const catalogDropdown = document.getElementById('catalogDropdown');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const modalClose = document.getElementById('modalClose');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    
    // Каталог меню
    if (catalogBtn && catalogDropdown) {
        catalogBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            catalogDropdown.style.display = catalogDropdown.style.display === 'block' ? 'none' : 'block';
        });
        
        document.addEventListener('click', function() {
            if (catalogDropdown) {
                catalogDropdown.style.display = 'none';
            }
        });
        
        if (catalogDropdown) {
            catalogDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
    
    // Мобильное меню
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Закрытие мобильного меню при клике вне его
    if (mobileMenu) {
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn') && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Модальное окно входа/регистрации
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function() {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (modalClose && loginModal) {
        modalClose.addEventListener('click', function() {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Табы в модальном окне
    if (authTabs.length > 0 && authForms.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabName = this.getAttribute('data-tab');
                
                authTabs.forEach(t => t.classList.remove('active'));
                authForms.forEach(f => f.classList.remove('active'));
                
                this.classList.add('active');
                const form = document.getElementById(`${tabName}Form`);
                if (form) {
                    form.classList.add('active');
                }
            });
        });
    }
    
    // Формы входа/регистрации
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Здесь должна быть отправка на сервер
            alert('Вход выполнен успешно!');
            if (loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Здесь должна быть отправка на сервер
            alert('Регистрация прошла успешно! Проверьте вашу почту для подтверждения.');
            if (loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Добавьте этот код в конец файла header.js
    // Закрытие меню при ресайзе окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (loginModal && loginModal.classList.contains('active')) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (loginModal && loginModal.classList.contains('active')) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});