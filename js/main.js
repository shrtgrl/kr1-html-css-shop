// ===== Окно быстрого просмотра товара =====
const productDialog = document.getElementById('product-dialog');

// Скрипт работает только на страницах, где есть окно товара.
if (productDialog) {
  const productCards = document.querySelectorAll('.product-card');

  // Копирует данные из карточки в окно и открывает его.
  function openProductDialog(card) {
    const image = card.querySelector('.product-card__image');

    document.getElementById('product-dialog-image').src = image.src;
    document.getElementById('product-dialog-image').alt = image.alt;
    document.getElementById('product-dialog-title').textContent = card.querySelector('.product-card__title').textContent;
    document.getElementById('product-dialog-description').textContent = card.querySelector('.product-card__description').textContent;
    document.getElementById('product-dialog-price').textContent = card.querySelector('.product-card__price').textContent;
    document.getElementById('product-dialog-link').href = card.querySelector('.product-card__link').href;

    productDialog.showModal();
  }

  productCards.forEach((card) => {
    // Клик по карточке. Ссылки «Подробнее» и «Заказать» работают как обычно.
    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) {
        return;
      }
      openProductDialog(card);
    });

    // Enter, когда в фокусе сама карточка.
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && event.target === card) {
        openProductDialog(card);
      }
    });
  });
}