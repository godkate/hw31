const images = document.querySelectorAll('img');
const nextButton = document.querySelector('.buttonNext');
const prevButton = document.querySelector('.buttonPrev');
const img = document.querySelector('img');

let counter = 1;
prevButton.disabled = true;


nextButton.onclick = () => {
    showImg('next')
    counter += 1;
    if (counter >= images.length) {
        nextButton.disabled = true;
    }
    if (counter !== 1) {
        prevButton.disabled = false;
    }
 }

prevButton.onclick = () => {
    showImg('prev');
    counter -= 1;
    if (counter === 1) {
        prevButton.disabled = true;
    }
    if (counter < images.length) {
        nextButton.disabled = false;
    }
}

function dataActive() {
    images.forEach((img) => {
        if (img.classList.contains('active')) {
            img.dataset.active = 'true';
        } else {
            img.dataset.active = 'false';
        }
    })
}

dataActive();


function showImg (action) {
    const activeImg = document.querySelector('img[data-active="true"]');
    activeImg.classList.remove('active');
    activeImg.classList.add('hidden');
    if (action === 'next') {
        activeImg.nextElementSibling.classList.remove('hidden');
        activeImg.nextElementSibling.classList.add('active');
    } else if (action === 'prev') {
        activeImg.previousElementSibling.classList.remove('hidden');
        activeImg.previousElementSibling.classList.add('active');
    }
    dataActive();
}
