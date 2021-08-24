let num = 0;
const phases = [
    "Initial Positions",
    "Optical Sight Bait",
    "First Lightning + Water",
    "Missile Command",
    "Second Lightning + Water",
    "Limit Cut + Flarethrower",
    "Third Lightning + Water",
    "Gavel"
];

document.onkeypress = e => {
    e = e || window.event;
    if (e.key == "d") {
        num = (num + 1) % 8;
    } else if (e.key == "a") {
        if (num == 0) num = 7;
        else num -= 1;
    }
    document.getElementById("slide").src = `bjcc${num}.png`;
    document.getElementById("phase").innerText = phases[num];
};

document.getElementById("slide").onclick = _ => {
    num = (num + 1) % 8;
    document.getElementById("slide").src = `bjcc${num}.png`;
    document.getElementById("phase").innerText = phases[num];
};