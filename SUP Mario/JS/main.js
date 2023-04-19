const img2 = document.querySelector (".img2");
const img1 = document.querySelector (".img1");

const jump = () => {
    img2.classList.add ("jump");

    setTimeout(() => {
        img2.classList.remove ("jump")
    }, 500);
}

const loop = setInterval(() => {

    const imgPosition = img1.offsetLeft;
    const marioimg = window.getComputedStyle(img2).bottom.replace('px', '');

    if (imgPosition <= 80 && imgPosition > 0 && marioimg < 75) {

        img1.style.animation = 'none';
        img1.style.left =  `${imgPosition}px`;

        img2.style.animation = 'none';
        img2.style.bottom =  `${marioimg}px`;

        img2.src = 'img/death.png';
        img2.style.width = '50px';
        img2.style.marginLeft = '40px';

        clearInterval(loop);

    }

}, 10);


document.addEventListener("keydown", jump);