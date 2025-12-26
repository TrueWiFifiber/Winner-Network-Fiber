document.addEventListener('DOMContentLoaded', function() {
    
    // --- Active Page Highlight Logic ---
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Swiper Slider Initialization ---
    const sliders = document.querySelectorAll('.campaign-slider');
    
    sliders.forEach(slider => {
        const slideCount = parseInt(slider.getAttribute('data-slides'), 10);
        let slidesPerViewDesktop;

        // *** อัปเดตตรรกะให้ครอบคลุมทุกกรณี ***
        if (slideCount === 8) {
            slidesPerViewDesktop = 2; // ถ้ามี 8 ให้แสดงแถวละ 4
        } else if (slideCount === 7) {
            slidesPerViewDesktop = 3; // ถ้ามี 6 ให้แสดงแถวละ 3
        } else if (slideCount === 6) {
            slidesPerViewDesktop = 3; // ถ้ามี 5 ให้แสดงแถวละ 4 (และเลื่อนดูได้)
        } else if (slideCount === 4) {
            slidesPerViewDesktop = 3; // ถ้ามี 4 ให้แสดงแถวละ 4
        } else if (slideCount === 3) {
            slidesPerViewDesktop = 3; // ถ้ามี 3 ให้แสดงแถวละ 3
        } else if (slideCount === 2) {
            slidesPerViewDesktop = 2; // ถ้ามี 2 ให้แสดงแถวละ 2
        } else {
            slidesPerViewDesktop = 4; // กรณีอื่นๆ ให้แสดง 4 เป็นค่าเริ่มต้น
        }

        // ถ้าจำนวนแพ็กเกจน้อยกว่าหรือเท่ากับจำนวนที่จะแสดง ให้ปิดการเลื่อนวนและซ่อนปุ่ม
        const loopMode = slideCount > slidesPerViewDesktop;
        if (!loopMode) {
            const nextBtn = slider.querySelector('.swiper-button-next');
            const prevBtn = slider.querySelector('.swiper-button-prev');
            if(nextBtn) nextBtn.style.display = 'none';
            if(prevBtn) prevBtn.style.display = 'none';
        }

        new Swiper(slider, {
            loop: loopMode,
            slidesPerView: 1.2, // บนมือถือ
            spaceBetween: 15,

            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev'),
            },

            // Responsive breakpoints
            breakpoints: {
                // จอเล็ก > 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // จอ Tablet > 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                // จอ Desktop > 1024px
                1024: {
                    slidesPerView: slidesPerViewDesktop,
                    spaceBetween: 30,
                },
            },
        });
    });
});
