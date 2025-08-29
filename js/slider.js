// Testimonial Slider
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;

    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Show testimonial by index
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Go to specific testimonial
    function goToTestimonial(index) {
        if (index < 0) index = testimonials.length - 1;
        if (index >= testimonials.length) index = 0;
        showTestimonial(index);
    }

    // Event listeners for buttons
    prevBtn.addEventListener('click', () => goToTestimonial(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToTestimonial(currentIndex + 1));

    // Auto-advance testimonials
    let slideInterval = setInterval(() => {
        goToTestimonial(currentIndex + 1);
    }, 5000);

    // Pause auto-advance on hover
    const slider = document.querySelector('.testimonial-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            goToTestimonial(currentIndex + 1);
        }, 5000);
    });

    // Initialize first testimonial
    showTestimonial(0);
});
