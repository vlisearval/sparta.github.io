// Данные для избранного
const favoritesData = [
    {
        id: 1,
        name: 'Оптический кабель ОКЛ-01',
        price: '45 200 ₽',
        inStock: true,
        manufacturer: 'Кабельный завод',
        image: 'images/opticheskiy-kabel-okk.png',
        dateAdded: '2025-10-15'
    },
    {
        id: 2,
        name: 'Силовой кабель ВВГнг 3x2.5',
        price: '320 ₽/м',
        inStock: true,
        manufacturer: 'Электрокабель',
        image: 'images/unnamed.jpg',
        dateAdded: '2025-10-14'
    },
    {
        id: 3,
        name: 'Монтажный комплект СКС',
        price: '12 500 ₽',
        inStock: true,
        manufacturer: 'Legrand',
        image: 'images/42740753399611e881340cc47a151b15_5719805c258811ea81460cc47a151b15-800x800.jpg',
        dateAdded: '2025-10-13'
    },
    {
        id: 4,
        name: 'Оптический кросс 19"',
        price: '8 900 ₽',
        inStock: false,
        manufacturer: 'Focom',
        image: 'images/01.jpg',
        dateAdded: '2025-10-12'
    },
    {
        id: 5,
        name: 'Кабельный лоток 100x50',
        price: '650 ₽/м',
        inStock: true,
        manufacturer: 'Электромонтаж',
        image: 'images/snl3510_1.jpg',
        dateAdded: '2025-10-10'
    }
];

const similarProducts = [
    {
        id: 6,
        name: 'Оптический патч-корд LC-LC',
        price: '850 ₽',
        inStock: true,
        manufacturer: 'Focom'
    },
    {
        id: 7,
        name: 'Монтажные хомуты 50мм',
        price: '45 ₽/шт',
        inStock: true,
        manufacturer: 'Электромонтаж'
    },
    {
        id: 8,
        name: 'Кабель КВК-П 2x0.5',
        price: '95 ₽/м',
        inStock: true,
        manufacturer: 'Кабельный завод'
    },
    {
        id: 9,
        name: 'Кабельные стяжки 200мм',
        price: '35 ₽/шт',
        inStock: true,
        manufacturer: 'Электромонтаж'
    }
];

// Инициализация страницы избранного
document.addEventListener('DOMContentLoaded', function() {
    const favoritesGrid = document.querySelector('.favorites-grid');
    const emptyFavorites = document.querySelector('.empty-favorites');
    const favoritesCount = document.querySelector('.favorites-count');
    const similarProductsContainer = document.getElementById('similarProducts');
    
    // Функция отображения товаров в избранном
    function displayFavorites(products) {
        favoritesGrid.innerHTML = '';
        
        if (products.length === 0) {
            emptyFavorites.style.display = 'block';
            favoritesCount.textContent = '0 товаров в избранном';
            return;
        }
        
        emptyFavorites.style.display = 'none';
        favoritesCount.textContent = `${products.length} товаров в избранном`;
        
        products.forEach(product => {
            const favoriteItem = createFavoriteItem(product);
            favoritesGrid.innerHTML += favoriteItem;
        });
    }
    
    // Функция создания карточки товара в избранном
    function createFavoriteItem(product) {
    return `
        <div class="favorite-item" data-id="${product.id}">
            <div class="favorite-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="favorite-item-info">
                <h3 class="favorite-item-title">${product.name}</h3>
                <p class="favorite-item-manufacturer">${product.manufacturer}</p>
                <div class="favorite-item-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? 'В наличии' : 'Нет в наличии'}
                </div>
                <div class="favorite-item-date">
                    Добавлено: ${formatDate(product.dateAdded)}
                </div>
            </div>
            <div class="favorite-item-price">
                <div class="price">${product.price}</div>
            </div>
            <div class="favorite-item-actions">
                <button class="btn btn-primary">
                    <i class="fas fa-shopping-cart"></i> В корзину
                </button>
            </div>
        </div>
    `;
}
    
    // Вспомогательные функции
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU');
    }
    
    function getIconForProduct(imageType) {
        const icons = {
            'cable-1': 'fas fa-cable-car',
            'cable-2': 'fas fa-bolt',
            'kit-1': 'fas fa-toolbox',
            'cross-1': 'fas fa-network-wired',
            'tray-1': 'fas fa-layer-group'
        };
        return icons[imageType] || 'fas fa-box';
    }
    
    // Инициализация
    displayFavorites(favoritesData);
    displaySimilarProducts();
});