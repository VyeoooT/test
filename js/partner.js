document.addEventListener("DOMContentLoaded", function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderInner = document.querySelector('.slider-inner');
    const images = sliderInner.querySelectorAll('img');

    // Sao chép hình ảnh để tạo hiệu ứng cuộn liên tục
    images.forEach(img => {
        const clone = img.cloneNode(true);
        sliderInner.appendChild(clone);
    });

    const imageWidth = images[0].offsetWidth;
    const totalWidth = sliderInner.scrollWidth / 4; // Chiều rộng của một vòng lặp
    let scrollAmount = 0;
    const speed = 0.5;

    function scroll() {
        scrollAmount += speed;

        if (scrollAmount >= totalWidth) {
            scrollAmount = 0;
        }

        sliderInner.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
});
