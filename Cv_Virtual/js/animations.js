document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.75) {
                element.classList.add('visible');
            }
        });
    }
    
    // Verificar al cargar la página
    checkScroll();
    
    // Verificar al hacer scroll
    window.addEventListener('scroll', checkScroll);
});
