const slider = document.querySelector('.slider');
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    const caroussel = document.querySelector('.caroussel')
    var direction;

    prev.addEventListener('click', function() {
        if (direction = -1) {
            slider.appendChild(slider.firstElementChild);
            direction = 1;
        }
        caroussel.style.justifyContent = 'flex-end'
        slider.style.transform = 'translate(50%)';
    });
    
    next.addEventListener('click', function() {
        direction = -1;
        caroussel.style.justifyContent = 'flex-start'
        slider.style.transform = 'translate(-50%)';
    });

    slider.addEventListener('transitionend', function() {

        if (direction = -1) {
            slider.appendChild(slider.firstElementChild);
        } else if (direction = 1) {
            slider.prepend(slider.lastElementChild);
        }

        slider.style.transition = 'none';
        slider.style.transform = 'translate(0)';
        setTimeout(function() {
            slider.style.transition = 'all 0.5s'
        });
    });