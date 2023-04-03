const lamparas = document.querySelectorAll('.lampara');

lamparas.forEach((lampara, i) => {
    lampara.addEventListener('click', function() {
        const lamp = lampara.querySelector('.luz');
        const text = lampara.querySelector('.texto');
        const activado = lampara.querySelector('.point-active');
        lamp.classList.toggle(`l${i}`);
        text.classList.toggle(`t${i}`);
        activado.classList.toggle(`hidden`);
    });
});