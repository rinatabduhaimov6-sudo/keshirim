const no = document.getElementById("no");

no.addEventListener("touchstart", move);
no.addEventListener("mouseover", move);

function move() {
    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 60);

    no.style.left = x + "px";
    no.style.top = y + "px";
}

document.getElementById("yes").onclick = function () {
    alert("Рахмет ❤️");
};