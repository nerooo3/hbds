const music = document.getElementById("music");
const button = document.getElementById("surpriseBtn");

button.addEventListener("click", () => {
    music.play();

    alert(`💖 Happy Birthday Soma! 💖

You are my sunshine ☀️

I hope your birthday is filled with happiness, love, smiles, and sunshine.

Love,
Nero ❤️`);
});

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = -30;

    const timer = setInterval(() => {
        y += 4;
        heart.style.top = y + "px";

        if (y > window.innerHeight) {
            clearInterval(timer);
            heart.remove();
        }
    }, 20);
}

setInterval(createHeart, 400);
