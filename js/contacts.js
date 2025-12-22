// Инициализация страницы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const openMapBtn = document.querySelector('.open-map');
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Обработка формы обратной связи
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Сбор данных формы
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                department: document.getElementById('department').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Валидация телефона
            const phonePattern = /^[\+]?[78][\s\(]?\d{3}[\)\s]?\s?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
            if (!phonePattern.test(formData.phone)) {
                alert('Пожалуйста, введите корректный номер телефона');
                return;
            }
            
            // Валидация email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }
            
            // Здесь должна быть отправка данных на сервер
            console.log('Данные формы:', formData);
            
            // Показываем сообщение об успехе
            showSuccessMessage();
            
            // Очищаем форму
            contactForm.reset();
        });
    }
    
    // Функция показа сообщения об успешной отправке
    function showSuccessMessage() {
        // Создаем модальное окно с сообщением
        const modal = document.createElement('div');
        modal.className = 'modal success-modal active';
        modal.innerHTML = `
            <div class="modal-content success-modal-content">
                <button class="modal-close success-modal-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Сообщение отправлено!</h3>
                <p>Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время.</p>
                <p class="success-note">Обычно мы отвечаем в течение 1 рабочего дня.</p>
                <button class="btn btn-primary success-close-btn">OK</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Обработчики для закрытия модального окна
        const closeBtn = modal.querySelector('.success-modal-close');
        const successBtn = modal.querySelector('.success-close-btn');
        
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });
        
        successBtn.addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    // Открытие карты в Яндекс.Картах
    if (openMapBtn) {
        openMapBtn.addEventListener('click', function() {
            const address = encodeURIComponent('г. Москва, ул. Промышленная, 15');
            const yandexMapsUrl = `https://yandex.ru/maps/?text=${address}`;
            window.open(yandexMapsUrl, '_blank');
        });
    }
    
    // Аккордеон для FAQ
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Закрываем все остальные элементы
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-question i').classList.remove('fa-chevron-up');
                    item.querySelector('.faq-question i').classList.add('fa-chevron-down');
                }
            });
            
            // Переключаем текущий элемент
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value[0] === '7' || value[0] === '8') {
                    value = value.substr(1);
                }
                
                let formattedValue = '+7 ';
                
                if (value.length > 0) {
                    formattedValue += '(' + value.substr(0, 3);
                }
                if (value.length > 3) {
                    formattedValue += ') ' + value.substr(3, 3);
                }
                if (value.length > 6) {
                    formattedValue += '-' + value.substr(6, 2);
                }
                if (value.length > 8) {
                    formattedValue += '-' + value.substr(8, 2);
                }
                
                this.value = formattedValue;
            }
        });
    }
    
    // Инициализация карты (заглушка)
    // В реальном проекте здесь будет интеграция с Яндекс.Картами или Google Maps
    function initMap() {
        const mapContainer = document.querySelector('.map-placeholder');
        if (mapContainer) {
            // Здесь можно добавить реальную карту
            // Например, используя API Яндекс.Карт
        }
    }
    
    // Вызов функции инициализации карты
    initMap();
    
    // Стили для страницы контактов
    const style = document.createElement('style');
    style.textContent = `
        .contact-item {
            display: flex;
            gap: 20px;
            padding: 20px;
            background: var(--white-color);
            border-radius: 8px;
            box-shadow: var(--shadow);
            margin-bottom: 15px;
            transition: var(--transition);
        }
        
        .contact-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: var(--white-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            flex-shrink: 0;
        }
        
        .contact-content h3 {
            font-size: 18px;
            margin-bottom: 10px;
            color: var(--dark-color);
        }
        
        .contact-content p {
            margin-bottom: 5px;
            color: var(--dark-color);
        }
        
        .contact-note {
            font-size: 14px;
            color: var(--gray-dark);
            margin-top: 5px;
        }
        
        .form-description {
            margin-bottom: 30px;
            color: var(--gray-dark);
            font-size: 16px;
        }
        
        .contact-form .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .contact-form .form-group {
            margin-bottom: 20px;
        }
        
        .contact-form label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--dark-color);
        }
        
        .contact-form input,
        .contact-form select,
        .contact-form textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid var(--gray-light);
            border-radius: 4px;
            font-size: 16px;
            transition: var(--transition);
        }
        
        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 2px rgba(221, 42, 27, 0.1);
        }
        
        .contact-form textarea {
            resize: vertical;
            min-height: 120px;
        }
        
        .btn-submit {
            width: 100%;
            padding: 15px;
            font-size: 18px;
            margin-top: 20px;
        }
        
        .map-container {
            background: var(--white-color);
            border-radius: 8px;
            box-shadow: var(--shadow);
            overflow: hidden;
            margin-bottom: 40px;
        }
        
        .map-placeholder {
            padding: 60px 20px;
            text-align: center;
            background: var(--gray-color);
        }
        
        .map-placeholder h3 {
            margin-bottom: 10px;
            color: var(--dark-color);
        }
        
        .map-placeholder p {
            color: var(--gray-dark);
            margin-bottom: 20px;
        }
        
        .branches-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .branch-card {
            background: var(--white-color);
            padding: 25px;
            border-radius: 8px;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }
        
        .branch-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }
        
        .branch-card h3 {
            font-size: 18px;
            margin-bottom: 15px;
            color: var(--dark-color);
            padding-bottom: 10px;
            border-bottom: 1px solid var(--gray-light);
        }
        
        .branch-card p {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: var(--dark-color);
        }
        
        .branch-card i {
            color: var(--primary-color);
            width: 20px;
        }
        
        .faq-accordion {
            background: var(--white-color);
            border-radius: 8px;
            box-shadow: var(--shadow);
            overflow: hidden;
        }
        
        .faq-item {
            border-bottom: 1px solid var(--gray-light);
        }
        
        .faq-item:last-child {
            border-bottom: none;
        }
        
        .faq-question {
            width: 100%;
            padding: 20px;
            background: none;
            border: none;
            text-align: left;
            font-size: 16px;
            font-weight: 500;
            color: var(--dark-color);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: var(--transition);
        }
        
        .faq-question:hover {
            background: var(--gray-light);
        }
        
        .faq-question i {
            color: var(--primary-color);
            transition: var(--transition);
        }
        
        .faq-answer {
            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .faq-answer p {
            padding: 0 0 20px;
            color: var(--gray-dark);
            line-height: 1.6;
        }
        
        .faq-item.active .faq-question {
            background: var(--gray-light);
        }
        
        .success-modal-content {
            text-align: center;
            max-width: 400px;
        }
        
        .success-icon {
            width: 80px;
            height: 80px;
            background: #E8F5E9;
            color: #2E7D32;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 40px;
        }
        
        .success-modal-content h3 {
            font-size: 24px;
            margin-bottom: 15px;
            color: var(--dark-color);
        }
        
        .success-modal-content p {
            color: var(--gray-dark);
            margin-bottom: 10px;
        }
        
        .success-note {
            font-size: 14px;
            margin-bottom: 20px;
        }
        
        .success-close-btn {
            min-width: 120px;
        }
        
        @media (max-width: 768px) {
            .contacts-grid {
                grid-template-columns: 1fr;
            }
            
            .contact-form .form-row {
                grid-template-columns: 1fr;
            }
            
            .contact-item {
                flex-direction: column;
                text-align: center;
            }
            
            .contact-icon {
                margin: 0 auto;
            }
            
            .branches-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});