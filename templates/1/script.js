document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    const styleChanger = document.getElementById('styleChanger');
    const body = document.body;

    // 1. "Гризь-гризь" Магія (Простий інтерактив)
    magicButton.addEventListener('click', () => {
        alert("Гризь-гризь! 🦫 Ви активували Бобровий Клік! Тепер змініть цю функцію!");
        
        // Змінюємо текст після кліку
        magicButton.textContent = "Магія Спрацювала!";
    });

    // 2. Зміна Стилю (Навчання роботі з класами CSS)
    styleChanger.addEventListener('click', (e) => {
        e.preventDefault(); // Запобігаємо переходу за посиланням
        
        // Перевіряємо, чи має body клас "krinzh-mod"
        if (body.classList.contains('krinzh-mod')) {
            body.classList.remove('krinzh-mod');
            alert("Повертаємося до "Ква-ква" стилю!");
            styleChanger.textContent = "Змінити Стиль";
        } else {
            body.classList.add('krinzh-mod');
            alert("Ласкаво просимо у "Крінж-Мод"! 💾");
            styleChanger.textContent = "Повернути Стиль";
        }
    });

    // 3. Додавання нового "шляпного" проєкту (Маніпуляція DOM)
    // Просто для прикладу, можна додати функціонал, що дозволяє вводити користувачеві свій проєкт.
    const projectList = document.getElementById('projectList');
    const newItem = document.createElement('li');
    newItem.textContent = "✨ Мій новий проєкт, доданий за допомогою JS!";
    projectList.appendChild(newItem);
    
    // Вітання з консолі
    console.log("Ква-ква! Гризь-гризь! 🐸🦫 Ви відкрили консоль. Почніть вивчати JS!");
});
