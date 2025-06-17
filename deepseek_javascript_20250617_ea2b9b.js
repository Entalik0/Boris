// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем на весь экран
tg.MainButton.hide(); // Скрываем кнопку (если не нужна)

// Показываем выбранный раздел
function showSection(sectionId) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
    window.scrollTo(0, 0); // Прокрутка вверх
    
    // Дополнительно: вибрация на мобильных
    if (navigator.vibrate) navigator.vibrate(50);
}

// Возврат в меню
function backToMenu() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById('main-menu').classList.remove('hidden');
}

// Добавляем эффект нажатия на все кнопки
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});