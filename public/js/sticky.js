const header = document.querySelector('#header');
const nav = document.querySelector('#nav');

const callBack = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting){
        nav.classList.remove('relative');
        nav.classList.add('fixed','w-full','bg-resi-white' ,'shadow-stickyShadow', 'z-30');
    }
    else {
        nav.classList.remove('fixed', 'shadow-stickyShadow');
        nav.classList.add('relative');
    }
};

const observer = new IntersectionObserver(callBack, {
    threshold: 1,
});

observer.observe(header);