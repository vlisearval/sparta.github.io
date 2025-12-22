// Данные для сравнения
const compareData = [
    {
        id: 1,
        name: 'Оптический кабель ОКЛ-01',
        price: '45 200 ₽',
        image: 'images/opticheskiy-kabel-okk.png',
        manufacturer: 'Кабельный завод',
        inStock: true,
        specs: {
            type: 'Волоконно-оптический',
            fibers: '12',
            diameter: '8.5 мм',
            material: 'Полиэтилен',
            temperature: '-40°C до +70°C',
            weight: '120 кг/км',
            warranty: '5 лет'
        }
    },
    {
        id: 2,
        name: 'Оптический кабель FOC-24',
        price: '68 500 ₽',
        image: 'images/PicMax_N0000106222.jpg',
        manufacturer: 'Focom',
        inStock: true,
        specs: {
            type: 'Волоконно-оптический',
            fibers: '24',
            diameter: '10.2 мм',
            material: 'Полиэтилен',
            temperature: '-40°C до +70°C',
            weight: '150 кг/км',
            warranty: '3 года'
        }
    },
    {
        id: 3,
        name: 'Силовой кабель ВВГнг 3x2.5',
        price: '320 ₽/м',
        image: 'images/unnamed.jpg',
        manufacturer: 'Электромонтаж',
        inStock: false,
        specs: {
            type: 'Силовой',
            fibers: '—',
            diameter: '15.3 мм',
            material: 'ПВХ',
            temperature: '-25°C до +50°C',
            weight: '450 кг/км',
            warranty: '2 года'
        }
    }
];

// Инициализация страницы сравнения
document.addEventListener('DOMContentLoaded', function() {
    const compareTable = document.querySelector('.compare-table');
    const productRow = compareTable.querySelector('.product-row');
    const priceRow = compareTable.querySelector('.price-row');
    const alternativeContainer = document.getElementById('alternativeProducts');
    
    // Функция отображения товаров для сравнения
    function displayComparison() {
        // Очищаем существующие колонки товаров
        const existingColumns = compareTable.querySelectorAll('td[data-product]');
        existingColumns.forEach(col => col.remove());
        
        // Очищаем заголовки
        const existingHeaders = compareTable.querySelectorAll('.product-column');
        existingHeaders.forEach(header => header.remove());
        
        // Добавляем товары в таблицу
        compareData.forEach((product, index) => {
            // Добавляем заголовок товара
            const productHeader = document.createElement('th');
            productHeader.className = 'product-column';
            productHeader.innerHTML = `
                <div class="compare-product-header">
                    <button class="remove-from-compare" data-id="${product.id}">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="compare-product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <h4 class="compare-product-title">${product.name}</h4>
                </div>
            `;
            compareTable.querySelector('thead tr').appendChild(productHeader);
            
            // Добавляем ячейку с названием товара
            const productCell = document.createElement('td');
            productCell.className = 'product-cell';
            productCell.setAttribute('data-product', product.id);
            productCell.innerHTML = `
                <div class="compare-product-cell">
                    <div class="compare-product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <h4 class="compare-product-title">${product.name}</h4>
                </div>
            `;
            productRow.appendChild(productCell);
            
            // Добавляем ячейку с ценой
            const priceCell = document.createElement('td');
            priceCell.className = 'price-cell';
            priceCell.setAttribute('data-product', product.id);
            priceCell.innerHTML = `
                <div class="compare-price">
                    <div class="price">${product.price}</div>
                    <div class="compare-actions">
                        <button class="btn btn-sm add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> В корзину
                        </button>
                        <button class="btn btn-sm add-to-favorites" data-id="${product.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            priceRow.appendChild(priceCell);
        });
        
        // Обновляем счетчик в шапке
        updateCompareCounter();
    }
    
    // Функция отображения альтернативных товаров
    function displayAlternativeProducts() {
        alternativeContainer.innerHTML = '';
        
        alternativeProducts.forEach(product => {
            alternativeContainer.innerHTML += `
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
        });
    }
    
    // Обновление счетчика в шапке
    function updateCompareCounter() {
        const counter = document.querySelector('.compare .icon-counter');
        if (counter) {
            counter.textContent = compareData.length;
        }
    }
    
    // Инициализация
    displayComparison();
    displayAlternativeProducts();
    
    // Обработчики событий
    // Удаление товара из сравнения
    document.addEventListener('click', function(e) {
        if (e.target.closest('.remove-from-compare')) {
            const button = e.target.closest('.remove-from-compare');
            const productId = parseInt(button.dataset.id);
            const product = compareData.find(p => p.id === productId);
            
            if (product) {
                // Удаляем из массива
                const index = compareData.findIndex(p => p.id === productId);
                if (index !== -1) {
                    compareData.splice(index, 1);
                    displayComparison();
                    alert(`Товар "${product.name}" удален из сравнения`);
                }
            }
        }
        
        // Добавление в корзину из сравнения
        if (e.target.closest('.add-to-cart')) {
            const button = e.target.closest('.add-to-cart');
            if (button.dataset.id) {
                const productId = parseInt(button.dataset.id);
                const product = compareData.find(p => p.id === productId);
                if (product) {
                    alert(`Товар "${product.name}" добавлен в корзину`);
                }
            } else {
                alert('Товар добавлен в корзину');
            }
        }
        
        // Добавление в избранное из сравнения
        if (e.target.closest('.add-to-favorites')) {
            const button = e.target.closest('.add-to-favorites');
            if (button.dataset.id) {
                const productId = parseInt(button.dataset.id);
                const product = compareData.find(p => p.id === productId);
                if (product) {
                    alert(`Товар "${product.name}" добавлен в избранное`);
                }
            } else {
                alert('Товар добавлен в избранное');
            }
        }
        
        // Печать сравнения
        if (e.target.closest('.print-comparison')) {
            window.print();
        }
        
        // Очистка всего сравнения
        if (e.target.closest('.clear-comparison')) {
            if (compareData.length > 0) {
                if (confirm('Вы уверены, что хотите очистить всё сравнение?')) {
                    compareData.length = 0;
                    displayComparison();
                    alert('Сравнение очищено');
                }
            } else {
                alert('В сравнении нет товаров');
            }
        }
        
        // Добавление к сравнению из альтернативных товаров
        if (e.target.closest('.add-to-compare')) {
            if (compareData.length >= 4) {
                alert('Максимальное количество товаров для сравнения - 4');
                return;
            }
            
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            
            // Добавляем новый товар для сравнения
            const newProduct = {
                id: Date.now(),
                name: productName,
                price: productCard.querySelector('.product-price').textContent,
                image: productCard.querySelector('img').src, // Берем src из картинки
                manufacturer: productCard.querySelector('.product-manufacturer').textContent,
                inStock: !productCard.querySelector('.product-stock').classList.contains('out'),
                specs: {
                    type: 'Волоконно-оптический',
                    fibers: '12',
                    diameter: '8.5 мм',
                    material: 'Полиэтилен',
                    temperature: '-40°C до +70°C',
                    weight: '120 кг/км',
                    warranty: '5 лет'
                }
            };
            
            compareData.push(newProduct);
            displayComparison();
            alert(`Товар "${productName}" добавлен к сравнению`);
        }
    });
    
    // Стили для анимаций и кнопок
    const style = document.createElement('style');
    style.textContent = `
        .btn-sm {
            padding: 8px 12px;
            font-size: 12px;
        }
        
        .compare-actions {
            display: flex;
            gap: 5px;
            margin-top: 10px;
        }
        
        .compare-actions .btn {
            flex: 1;
        }
        
        .remove-from-compare {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 24px;
            height: 24px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            transition: var(--transition);
        }
        
        .remove-from-compare:hover {
            background: var(--primary-dark);
            transform: scale(1.1);
        }
        
        @media print {
            .header, .footer, .breadcrumbs, .compare-controls, 
            .alternative-products, .compare-notes {
                display: none !important;
            }
            
            .compare-table {
                width: 100% !important;
                font-size: 12px !important;
            }
            
            .compare-table-container {
                overflow: visible !important;
            }
        }
    `;
    document.head.appendChild(style);
});