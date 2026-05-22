// Слайдер на главной (hero)
document.addEventListener('DOMContentLoaded', () => {
    const heroRight = document.getElementById('hero-slider');
    if (heroRight) {
        const images = [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=1200&h=900&fit=crop'
        ];
        let current = 0;
        heroRight.style.backgroundImage = `url('${images[0]}')`;
        setInterval(() => {
            current = (current + 1) % images.length;
            heroRight.style.backgroundImage = `url('${images[current]}')`;
        }, 4000);
    }

    // Фильтрация портфолио
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');
    if (filterBtns.length && items.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                items.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Форма обратной связи
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('form-message');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.reset();
            if (msg) {
                msg.style.display = 'block';
                setTimeout(() => { msg.style.display = 'none'; }, 4000);
            }
        });
    }
});