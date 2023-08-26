const gallery = document.querySelector(".gallery");
const images = gallery.querySelectorAll("img");
let currentIndex = 0;
let intervalId;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

function startSlideshow() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000); // Cambiar de imagen cada 3 segundos (ajusta según desees)
}

function stopSlideshow() {
    clearInterval(intervalId);
}

showImage(currentIndex);
startSlideshow();