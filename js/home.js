document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://cdn.mos.cms.futurecdn.net/pyNiK5m9ptytmf6mWmCqTF.jpg",
        "https://rockstarintel.com/wp-content/uploads/2023/12/gta-vi-pre-order-nope-fixed.webp",
        "https://www.hindustantimes.com/ht-img/img/2023/11/08/550x309/meme-1-5_1680835922484_1699445349275.jpeg"
    ];

    let currentImageIndex = 0;
    const imageElement = document.getElementById("trailerImage");

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
    }

    setInterval(changeImage, 3000); 
});
