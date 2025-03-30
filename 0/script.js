// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inquiry button functionality
document.getElementById('inquire-button').addEventListener('click', function() {
    alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');
});
