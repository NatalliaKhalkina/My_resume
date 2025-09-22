import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

const skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 90 },
    { name: 'Flexbox Layout, GridLayout', percent: 90 },
    { name: 'препроцессор (SaSS)', percent: 80 },
    { name: 'Javascript', percent: 70 },
    { name: 'ООП', percent: 60 },
    { name: 'Фреймворки (React, Angular)', percent: 60 },
    { name: 'TypeScript', percent: 70 },
    { name: 'Git', percent: 70 },
    { name: 'API', percent: 50 },
]

// ловим контейнер с навыками
const container = document.getElementById('main_container_skills_hard');

skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'main_container_skills_hard_count';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'main_container_skills_hard_count_name';
    nameDiv.textContent = skill.name;

    const progressDiv = document.createElement('div');
    progressDiv.className = 'main_container_skills_hard_count_progress';

    const barDiv = document.createElement('div');
    barDiv.className = 'main_container_skills_hard_count_progress_bar';
    barDiv.setAttribute('data-percent', skill.percent);

    // Делаем вложенность
    progressDiv.appendChild(barDiv);
    skillDiv.appendChild(nameDiv);
    skillDiv.appendChild(progressDiv);
    container.appendChild(skillDiv);


    // Обработчик при наведении
    skillDiv.addEventListener('mouseenter', () => {
        barDiv.style.width = barDiv.getAttribute('data-percent') + '%';
    });
    // Обработчик при уходе мыши
    skillDiv.addEventListener('mouseleave', () => {
        barDiv.style.width = '0';
    });
})

// Слайдер опыта
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

//Форма - обратная связь
// Ловим кнопки и саму форму
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const form = document.getElementById('contactForm');

// при клике показываем форму
btnYes.addEventListener('click', () => {
    form.style.display = 'block';
})

// Убегающая кнопка
btnNo.addEventListener('mouseenter', () => {
    const container = document.getElementById('jobOffer');
    // получаем размеры контейнера
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // координаты смещения кнопки Нет
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // генерируем случайные координаты для смещение
    const newLeft = Math.floor(Math.random() * maxX);
    const newTop = Math.floor(Math.random() * maxY);

    // позиция кнопки
    btnNo.style.position = 'relative';
    btnNo.style.left = newLeft + 'px';
    btnNo.style.top = newTop = 'px';
});

// отправка формы
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Спасибо! Ваши контакты: ${form.contacts.value || form.querySelector('input').value}`);
    form.reset();
});



