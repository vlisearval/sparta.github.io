// Данные новостей с картинками
const newsData = [
    {
        id: 1,
        title: 'Новая поставка оптических кабелей от ведущего производителя',
        excerpt: 'В наш ассортимент поступили оптические кабели нового поколения с улучшенными техническими характеристиками.',
        date: '2025-10-15',
        category: 'products',
        image: 'images/Gemini_Generated_Image_z4jf7iz4jf7iz4jf.png', 
        fullText: `
            <p>Мы рады сообщить о поступлении новой партии оптических кабелей от ведущего производителя. Новые кабели отличаются улучшенными техническими характеристиками и повышенной надежностью.</p>
            <p>Основные преимущества новых кабелей:</p>
            <ul>
                <li>Увеличенный срок службы до 25 лет</li>
                <li>Улучшенная защита от внешних воздействий</li>
                <li>Расширенный температурный диапазон работы</li>
                <li>Совместимость с любым сетевым оборудованием</li>
            </ul>
            <p>Кабели уже доступны для заказа в нашем интернет-магазине.</p>
        `
    },
    {
        id: 2,
        title: 'Семинар по монтажу структурированных кабельных систем',
        excerpt: 'Приглашаем всех желающих на бесплатный семинар по современным технологиям монтажа СКС.',
        date: '2025-10-10',
        category: 'events',
        image: 'images/Gemini_Generated_Image_a65lksa65lksa65l.png', 
        fullText: `
            <p>Компания "СПАРТА" проводит бесплатный семинар для специалистов по монтажу структурированных кабельных систем.</p>
            <p>На семинаре будут рассмотрены:</p>
            <ul>
                <li>Современные стандарты и требования к СКС</li>
                <li>Лучшие практики монтажа</li>
                <li>Новейшее оборудование и инструменты</li>
                <li>Типичные ошибки и как их избежать</li>
            </ul>
            <p>Семинар состоится 25 октября 2023 года в нашем учебном центре. Для участия необходима предварительная регистрация.</p>
        `
    },
    {
        id: 3,
        title: 'Расширение ассортимента электротехнической продукции',
        excerpt: 'В каталоге компании появились новые позиции электротехнической продукции от проверенных производителей.',
        date: '2025-10-05',
        category: 'products',
        image: 'images/Gemini_Generated_Image_s8gy8hs8gy8hs8gy.png', 
        fullText: `
            <p>Мы продолжаем расширять наш ассортимент электротехнической продукции. В октябре в каталоге появились новые позиции:</p>
            <ul>
                <li>Силовые кабели различных сечений</li>
                <li>Монтажные аксессуары</li>
                <li>Электроустановочные изделия</li>
                <li>Системы крепления и защиты кабелей</li>
            </ul>
            <p>Вся продукция сертифицирована и соответствует современным стандартам качества.</p>
        `
    },
    {
        id: 4,
        title: 'Компания "СПАРТА" отмечает 10-летний юбилей',
        excerpt: 'В этом году нашей компании исполняется 10 лет успешной работы на рынке.',
        date: '2025-09-28',
        category: 'company',
        image: 'images/Gemini_Generated_Image_vlwn2mvlwn2mvlwn.png', 
        fullText: `
            <p>В октябре 2023 года компания "СПАРТА" отмечает свой 10-летний юбилей. За эти годы мы прошли путь от небольшой компании до одного из ведущих дистрибьюторов материалов для связи и энергетики.</p>
            <p>Наши достижения за 10 лет:</p>
            <ul>
                <li>Более 1000 постоянных клиентов</li>
                <li>Поставки в 50 регионов России</li>
                <li>Сотрудничество с 30 ведущих производителей</li>
                <li>Более 5000 наименований продукции в каталоге</li>
            </ul>
            <p>Благодарим всех наших клиентов и партнеров за доверие и сотрудничество!</p>
        `
    },
    {
        id: 5,
        title: 'Новые технологии в области оптических сетей',
        excerpt: 'Представляем новые технологии, которые меняют подход к построению оптических сетей.',
        date: '2025-09-20',
        category: 'products',
        image: 'images/Gemini_Generated_Image_zhrppnzhrppnzhrp.png',
        fullText: `
            <p>Технологии в области оптических сетей не стоят на месте. Мы представляем новейшие разработки, которые уже доступны нашим клиентам:</p>
            <ul>
                <li>Кабели с повышенной плотностью волокон</li>
                <li>Решения для FTTH (оптика до дома)</li>
                <li>Компактные муфты и кроссы</li>
                <li>Системы мониторинга состояния кабелей</li>
            </ul>
            <p>Эти технологии позволяют создавать более надежные и эффективные сети с меньшими затратами.</p>
        `
    },
    {
        id: 6,
        title: 'Открытие нового склада в Московской области',
        excerpt: 'Рады сообщить об открытии нового современного склада площадью 5000 кв.м.',
        date: '2025-09-15',
        category: 'company',
        image: 'images/Gemini_Generated_Image_sixkhfsixkhfsixk.png', 
        fullText: `
            <p>Для улучшения логистики и ускорения доставки мы открыли новый современный склад в Московской области.</p>
            <p>Преимущества нового склада:</p>
            <ul>
                <li>Площадь 5000 кв.м.</li>
                <li>Современная система хранения</li>
                <li>Автоматизированный учет товара</li>
                <li>Круглосуточная охрана</li>
                <li>Удобная логистика для доставки</li>
            </ul>
            <p>Новый склад позволит нам обслуживать клиентов еще быстрее и эффективнее.</p>
        `
    }
];
// Инициализация страницы новостей
document.addEventListener('DOMContentLoaded', function() {
    const newsArchive = document.querySelector('.news-archive');
    const subscriptionForm = document.querySelector('.subscription-form');
    
    // Функция отображения новостей
    function displayNews() {
        // Отображаем все новости
        newsArchive.innerHTML = '';
        
        if (newsData.length === 0) {
            newsArchive.innerHTML = `
                <div class="no-news">
                    <img src="images/news/no-news.jpg" alt="Новостей нет" style="max-width: 200px; margin-bottom: 20px;">
                    <h3>Новости не найдены</h3>
                    <p>Новостей пока нет</p>
                </div>
            `;
            return;
        }
        
        newsData.forEach(news => {
            const newsCard = createNewsCard(news);
            newsArchive.innerHTML += newsCard;
        });
        
        // Добавление обработчиков для кнопок "Читать далее"
        addReadMoreHandlers();
    }
    
    // Функция создания карточки новости
    function createNewsCard(news) {
        const date = new Date(news.date);
        const formattedDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        const categoryNames = {
            'company': 'Новости компании',
            'products': 'Новые поступления',
            'events': 'События'
        };
        
        return `
            <article class="news-article" data-id="${news.id}">
                <div class="news-article-image">
                    <img src="${news.image}" 
                         alt="${news.title}" 
                         loading="lazy"
                         onerror="this.onerror=null; this.src='images/news/default-news.jpg';">
                </div>
                <div class="news-article-content">
                    <div class="news-article-meta">
                        <span class="news-category ${news.category}">${categoryNames[news.category] || 'Новости'}</span>
                        <span class="news-date">${formattedDate}</span>
                    </div>
                    <h3 class="news-article-title">${news.title}</h3>
                    <p class="news-article-excerpt">${news.excerpt}</p>
                    <button class="news-read-more" data-id="${news.id}">Читать далее <i class="fas fa-arrow-right"></i></button>
                </div>
            </article>
        `;
    }
    
    // Функция добавления обработчиков для кнопок "Читать далее"
    function addReadMoreHandlers() {
        const readMoreButtons = document.querySelectorAll('.news-read-more');
        readMoreButtons.forEach(button => {
            button.addEventListener('click', function() {
                const newsId = parseInt(this.dataset.id);
                showNewsModal(newsId);
            });
        });
    }
    
    // Функция отображения модального окна с полным текстом новости
    function showNewsModal(newsId) {
        const news = newsData.find(n => n.id === newsId);
        if (!news) return;
        
        const date = new Date(news.date);
        const formattedDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        const modal = document.createElement('div');
        modal.className = 'modal news-modal active';
        modal.innerHTML = `
            <div class="modal-content news-modal-content">
                <button class="modal-close news-modal-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="news-modal-header">
                    <div class="news-modal-category ${news.category}">
                        ${news.category === 'company' ? 'Новости компании' : 
                          news.category === 'products' ? 'Новые поступления' : 
                          news.category === 'events' ? 'События' : 'Новости'}
                    </div>
                    <div class="news-modal-date">${formattedDate}</div>
                </div>
                <h2 class="news-modal-title">${news.title}</h2>
                <div class="news-modal-image">
                    <img src="${news.image}" 
                         alt="${news.title}"
                         onerror="this.onerror=null; this.src='images/news/default-news.jpg';">
                </div>
                <div class="news-modal-text">
                    ${news.fullText}
                </div>
                <div class="news-modal-footer">
                    <button class="btn btn-primary share-news" data-id="${news.id}">
                        <i class="fas fa-share-alt"></i> Поделиться
                    </button>
                    <button class="btn btn-secondary print-news">
                        <i class="fas fa-print"></i> Печать
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Обработчики для модального окна
        const closeBtn = modal.querySelector('.news-modal-close');
        const shareBtn = modal.querySelector('.share-news');
        const printBtn = modal.querySelector('.print-news');
        
        closeBtn.addEventListener('click', () => {
            modal.remove();
            document.body.style.overflow = '';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
        
        shareBtn.addEventListener('click', () => {
            shareNews(news);
        });
        
        printBtn.addEventListener('click', () => {
            window.print();
        });
        
        // Блокируем прокрутку страницы
        document.body.style.overflow = 'hidden';
    }
    
    // Функция для поделиться новостью
    function shareNews(news) {
        const shareText = `${news.title}\n\n${news.excerpt}\n\nПодробнее на сайте СПАРТА`;
        const shareUrl = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: news.title,
                text: news.excerpt,
                url: shareUrl
            });
        } else {
            // Копируем в буфер обмена
            navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
                .then(() => {
                    alert('Ссылка на новость скопирована в буфер обмена');
                })
                .catch(err => {
                    console.error('Ошибка копирования: ', err);
                });
        }
    }
    
    // Инициализация
    displayNews();
    
    // Подписка на новости
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Здесь должна быть отправка на сервер
            alert(`Спасибо за подписку! На адрес ${email} будут приходить наши новости.`);
            this.reset();
        });
    }
});
    
    // Стили для новостей
    const style = document.createElement('style');
    style.textContent = `
        .news-article {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 25px;
            padding: 25px;
            background: var(--white-color);
            border-radius: 8px;
            box-shadow: var(--shadow);
            margin-bottom: 20px;
            transition: var(--transition);
        }
        
        .news-article:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .news-article-image {
            width: 120px;
            height: 120px;
            background: var(--gray-light);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
        }
        
        .news-article-content {
            display: flex;
            flex-direction: column;
        }
        
        .news-article-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .news-category {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .news-category.company {
            background: #E3F2FD;
            color: #1565C0;
        }
        
        .news-category.products {
            background: #E8F5E9;
            color: #2E7D32;
        }
        
        .news-category.events {
            background: #FFF3E0;
            color: #EF6C00;
        }
        
        .news-date {
            font-size: 14px;
            color: var(--gray-dark);
        }
        
        .news-article-title {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 15px;
            color: var(--dark-color);
        }
        
        .news-article-excerpt {
            color: var(--gray-dark);
            margin-bottom: 20px;
            line-height: 1.6;
        }
        
        .news-read-more {
            align-self: flex-start;
            background: none;
            border: none;
            color: var(--primary-color);
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0;
        }
        
        .news-read-more:hover {
            text-decoration: underline;
        }
        
        .no-news {
            text-align: center;
            padding: 60px 20px;
            background: var(--white-color);
            border-radius: 8px;
            box-shadow: var(--shadow);
        }
        
        .no-news h3 {
            font-size: 24px;
            margin-bottom: 10px;
            color: var(--dark-color);
        }
        
        .no-news p {
            color: var(--gray-dark);
        }
        
        .news-modal-content {
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
        }
        
        .news-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .news-modal-category {
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
        }
        
        .news-modal-title {
            font-size: 28px;
            margin-bottom: 20px;
            color: var(--dark-color);
        }
        
        .news-modal-image {
            width: 150px;
            height: 150px;
            background: var(--gray-light);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            color: var(--primary-color);
        }
        
        .news-modal-text {
            font-size: 16px;
            line-height: 1.8;
            color: var(--dark-color);
            margin-bottom: 30px;
        }
        
        .news-modal-text ul {
            margin: 15px 0;
            padding-left: 20px;
        }
        
        .news-modal-text li {
            margin-bottom: 8px;
        }
        
        .news-modal-footer {
            display: flex;
            gap: 15px;
            padding-top: 20px;
            border-top: 1px solid var(--gray-light);
        }
        
        @media (max-width: 768px) {
            .news-article {
                grid-template-columns: 1fr;
            }
            
            .news-article-image {
                width: 100%;
                height: 200px;
            }
            
            .news-modal-title {
                font-size: 22px;
            }
            
            .news-modal-footer {
                flex-direction: column;
            }
        }
        
        @media print {
            .header, .footer, .breadcrumbs, .news-filters,
            .news-subscription, .news-modal-footer {
                display: none !important;
            }
            
            .news-modal-content {
                max-width: 100% !important;
                max-height: none !important;
                box-shadow: none !important;
                padding: 0 !important;
            }
        }
    `;
    document.head.appendChild(style);
