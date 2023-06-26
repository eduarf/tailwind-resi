const scroll = document.querySelector('#scroll');

window.addEventListener('scroll', () => {
    //scroll.classList.toggle('active', window.scrollY > 200);
    if (window.scrollY > 200) {
         scroll.classList.remove('invisible', 'opacity-0', 'bottom-96');
         scroll.classList.add('visible', 'opacity-100', 'bottom-20');
    }
    else {
        scroll.classList.remove('visible', 'opacity-100', 'bottom-20');
        scroll.classList.add('invisible', 'opacity-0', 'bottom-96');
    }

});

scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});