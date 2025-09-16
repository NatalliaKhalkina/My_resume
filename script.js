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

    // // Обработчик при наведении
    // skillDiv.addEventListener('mouseenter', () => {
    //     barDiv.style.width = barDiv.getAttribute('data-persent') + '%';
    // })

    // // Обработчик при уходе
    // skillDiv.addEventListener('mouseleave', () => {
    //     barDiv.style.width = '0';
    // })

    // Обработчик при наведении
    skillDiv.addEventListener('mouseenter', () => {
        // Анимация заполнения
        barDiv.style.width = barDiv.getAttribute('data-percent') + '%';
    });
    // Обработчик при уходе мыши
    skillDiv.addEventListener('mouseleave', () => {
        // Возврат к нулю
        barDiv.style.width = '0';
    });
})