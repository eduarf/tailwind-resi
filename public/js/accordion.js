const accordionItems = document.querySelectorAll('#accordion-item');



accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('#accordion-header');
    const accordionContent = item.querySelector('#accordion-content');
    const chevron = item.querySelector('#chevron');
    accordionHeader.addEventListener('click', () => {
        const isActive = accordionContent.classList.contains('active');
        closeAllItems();

        if(!isActive) {
            accordionContent.classList.add('active');
            accordionContent.style.maxHeight = '10rem';
            chevron.setAttribute('class', 'fa-solid fa-chevron-up');
            accordionHeader.classList.add('text-primary');
        }
    });
});


const closeAllItems = () => {
    accordionItems.forEach((item) => {
        const accordionContent = item.querySelector('#accordion-content');
        const accordionHeader = item.querySelector('#accordion-header');
        const chevron = item.querySelector('#chevron');
        accordionContent.classList.remove('active');
        accordionContent.style.maxHeight = '0';
        chevron.setAttribute('class', 'fa-solid fa-chevron-down');
        accordionHeader.classList.remove('text-primary');
    });
}; 