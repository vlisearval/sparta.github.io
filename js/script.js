// Данные товаров
const featuredProducts = [
    {
        id: 1,
        name: 'Оптический кабель ОКЛ-01',
        price: '45 200 ₽',
        inStock: true,
        manufacturer: 'Кабельный завод',
        image: 'images/opticheskiy-kabel-okk.png'
    },
    {
        id: 2,
        name: 'Силовой кабель ВВГнг 3x2.5',
        price: '320 ₽/м',
        inStock: true,
        manufacturer: 'Электрокабель',
        image: 'images/unnamed.jpg'
    },
    {
        id: 3,
        name: 'Кабель связи КСПВ 4x2x0.5',
        price: '180 ₽/м',
        inStock: false,
        manufacturer: 'Связькабель',
        image: 'images/723374755_w6405.jpg'
    },
    {
        id: 4,
        name: 'Оптический патч-корд LC-LC',
        price: '850 ₽',
        inStock: true,
        manufacturer: 'Focom',
        image: 'images/43kuak1o6tkqckgq1kmb6xh5lcp6yqhn.jpeg'
    },
    {
        id: 5,
        name: 'Кабельный лоток 100x50',
        price: '650 ₽/м',
        inStock: true,
        manufacturer: 'Электромонтаж',
        image: 'images/snl3510_1.jpg'
    },
    {
        id: 7,
        name: 'Монтажный комплект СКС',
        price: '12 500 ₽',
        inStock: true,
        manufacturer: 'Legrand',
        image: 'images/42740753399611e881340cc47a151b15_5719805c258811ea81460cc47a151b15-800x800.jpg'
    },
    {
        id: 8,
        name: 'Оптический кросс 19"',
        price: '8 900 ₽',
        inStock: true,
        manufacturer: 'Focom',
        image: 'images/01.jpg'
    },
    {
        id: 9,
        name: 'Кабель КВК-П 2x0.5',
        price: '95 ₽/м',
        inStock: true,
        manufacturer: 'Кабельный завод',
        image: 'images/PicMax_N0000106222.jpg'
    }
];

const newProducts = [
    {
        id: 6,
        name: 'Монтажный комплект СКС',
        price: '12 500 ₽',
        inStock: true,
        manufacturer: 'Legrand',
        image: 'images/42740753399611e881340cc47a151b15_5719805c258811ea81460cc47a151b15-800x800.jpg'
    },
    {
        id: 7,
        name: 'Оптический кросс 19"',
        price: '8 900 ₽',
        inStock: true,
        manufacturer: 'Focom',
        image: 'images/01.jpg'
    },
    {
        id: 8,
        name: 'Кабель КВК-П 2x0.5',
        price: '95 ₽/м',
        inStock: true,
        manufacturer: 'Кабельный завод',
        image: 'images/PicMax_N0000106222.jpg'
    }
];

// DOM элементы
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
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDots = document.querySelectorAll('.dot');
const featuredProductsContainer = document.getElementById('featuredProducts');
const productsPrev = document.getElementById('productsPrev');
const productsNext = document.getElementById('productsNext');
const newProductsContainer = document.querySelector('.products-grid');

// Текущий слайд
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;

// Текущая позиция слайдера товаров
let productSliderPosition = 0;
const productsPerView = 4;

// Функция создания карточки товара
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <span class="product-stock ${product.inStock ? '' : 'out'}">
                ${product.inStock ? 'В наличии' : 'Нет в наличии'}
            </span>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="product-counter">
                <button class="counter-btn">-</button>
                <input type="text" class="counter-input" value="1" readonly>
                <button class="counter-btn">+</button>
            </div>
            <div class="product-actions">
                <button class="action-btn add-to-cart">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="action-btn add-to-compare">
                    <i class="fas fa-balance-scale"></i>
                </button>
                <button class="action-btn add-to-favorites">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
}

// Инициализация товаров
function initProducts() {
    // Хиты продаж
    featuredProducts.forEach(product => {
        featuredProductsContainer.innerHTML += createProductCard(product);
    });
    
    // Новинки
    newProducts.forEach(product => {
        newProductsContainer.innerHTML += createProductCard(product);
    });
}

// Функции слайдера
function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + totalSlides) % totalSlides;
    
    slides[currentSlide].classList.add('active');
    sliderDots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Функции слайдера товаров
function updateProductSlider() {
    const productCards = document.querySelectorAll('.product-card');
    const cardWidth = productCards[0]?.offsetWidth + 20; // 20px gap
    
    if (productCards.length > 0) {
        featuredProductsContainer.style.transform = `translateX(-${productSliderPosition * cardWidth}px)`;
    }
}

function nextProducts() {
    const productCards = document.querySelectorAll('.product-card');
    if (productSliderPosition < productCards.length - productsPerView) {
        productSliderPosition++;
        updateProductSlider();
    }
}

function prevProducts() {
    if (productSliderPosition > 0) {
        productSliderPosition--;
        updateProductSlider();
    }
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация товаров
    initProducts();
    setTimeout(initProductSlider, 100);
    // Каталог меню
    catalogBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        catalogDropdown.style.display = catalogDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    document.addEventListener('click', function() {
        catalogDropdown.style.display = 'none';
    });
    
    catalogDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Мобильное меню
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Модальное окно
    loginBtn.addEventListener('click', function() {
        loginModal.classList.add('active');
    });
    
    modalClose.addEventListener('click', function() {
        loginModal.classList.remove('active');
    });
    
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });
    
    // Табы в модальном окне
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`${tabName}Form`).classList.add('active');
        });
    });
    
    // Главный слайдер
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Точки слайдера
    sliderDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });
    
    // Автопрокрутка слайдера
    setInterval(nextSlide, 5000);
    
    // Слайдер товаров
    productsPrev.addEventListener('click', prevProducts);
    productsNext.addEventListener('click', nextProducts);
    
    // Форма подписки
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Спасибо за подписку! На адрес ${email} будут приходить наши новости.`);
        this.reset();
    });
    
    // Формы входа/регистрации
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Вход выполнен успешно!');
        loginModal.classList.remove('active');
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Регистрация прошла успешно! Проверьте вашу почту для подтверждения.');
        loginModal.classList.remove('active');
    });
    
    // Добавление товаров в корзину/избранное/сравнение
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart')) {
            alert('Товар добавлен в корзину!');
        }
        
        if (e.target.closest('.add-to-favorites')) {
            alert('Товар добавлен в избранное!');
        }
        
        if (e.target.closest('.add-to-compare')) {
            alert('Товар добавлен в сравнение!');
        }
    });
    
    
    // Адаптивность
    window.addEventListener('resize', function() {
        updateProductSlider();
    });
    
    // Инициализация слайдера товаров
    updateProductSlider();
});
//ого 
// Функции слайдера товаров
function initProductSlider() {
    const productCards = document.querySelectorAll('.product-card');
    const productsContainer = document.querySelector('.products-container');
    const prevBtn = document.querySelector('.products-prev');
    const nextBtn = document.querySelector('.products-next');
    
    if (!productCards.length || !productsContainer) return;
    
    let currentPosition = 0;
    let itemsPerView = calculateItemsPerView();
    const totalItems = productCards.length;
    
    // Функция для расчета количества видимых товаров
    function calculateItemsPerView() {
        const width = window.innerWidth;
        if (width < 480) return 1;
        if (width < 768) return 2;
        if (width < 1024) return 3;
        return 4;
    }
    
    // Функция обновления слайдера
    function updateSlider() {
        itemsPerView = calculateItemsPerView();
        const cardWidth = productCards[0].offsetWidth + 20; // 20px gap
        const maxPosition = Math.max(0, totalItems - itemsPerView);
        
        // Ограничиваем позицию
        currentPosition = Math.min(currentPosition, maxPosition);
        
        // Применяем трансформацию
        productsContainer.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        productsContainer.style.transition = 'transform 0.3s ease';
        
        // Обновляем состояние кнопок
        updateButtonsState();
    }
    
    // Функция обновления состояния кнопок
    function updateButtonsState() {
        if (prevBtn) {
            prevBtn.disabled = currentPosition === 0;
            prevBtn.style.opacity = currentPosition === 0 ? '0.5' : '1';
            prevBtn.style.cursor = currentPosition === 0 ? 'not-allowed' : 'pointer';
        }
        
        if (nextBtn) {
            const maxPosition = Math.max(0, totalItems - itemsPerView);
            nextBtn.disabled = currentPosition >= maxPosition;
            nextBtn.style.opacity = currentPosition >= maxPosition ? '0.5' : '1';
            nextBtn.style.cursor = currentPosition >= maxPosition ? 'not-allowed' : 'pointer';
        }
    }
    
    // Функция следующего слайда
    function nextSlide() {
        const maxPosition = Math.max(0, totalItems - itemsPerView);
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateSlider();
        }
    }
    
    // Функция предыдущего слайда
    function prevSlide() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSlider();
        }
    }
    
    // Обработчики событий для кнопок
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Обработка ресайза окна
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            currentPosition = 0; // Сбрасываем позицию при ресайзе
            updateSlider();
        }, 250);
    });
    
    // Инициализация слайдера
    updateSlider();
    
    // Добавляем свайп для мобильных устройств
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    productsContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        productsContainer.style.transition = 'none';
    });
    
    productsContainer.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        const cardWidth = productCards[0].offsetWidth + 20;
        
        // Временно смещаем слайдер при свайпе
        const tempTranslate = -currentPosition * cardWidth - diff;
        productsContainer.style.transform = `translateX(${tempTranslate}px)`;
    });
    
    productsContainer.addEventListener('touchend', function() {
        if (!isDragging) return;
        isDragging = false;
        productsContainer.style.transition = 'transform 0.3s ease';
        
        const diff = startX - currentX;
        const cardWidth = productCards[0].offsetWidth + 20;
        const threshold = cardWidth / 3; // Порог для смены слайда
        
        if (diff > threshold && currentPosition < totalItems - itemsPerView) {
            // Свайп влево - следующий слайд
            nextSlide();
        } else if (diff < -threshold && currentPosition > 0) {
            // Свайп вправо - предыдущий слайд
            prevSlide();
        } else {
            // Возвращаемся к текущему слайду
            updateSlider();
        }
    });
}