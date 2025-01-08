const tabheader = document.querySelector(".tabheader__items");
let mamlakat = document.querySelector('.country');
tabheader.addEventListener('click', (events) =>{
    if(events.target.matches('.tabheader__item'))
        tabheader.querySelectorAll('.tabheader__item').forEach(item => item.classList.remove('tabheader__item_active'))
        events.target.classList.add('tabheader__item_active');
        const text = events.target.textContent.trim(); 
        mamlakat.textContent = text;
});



