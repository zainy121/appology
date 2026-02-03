/* ===== PAGE NAVIGATION ===== */
function nextPage(pageNum) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + pageNum).classList.add('active');
}

/* ===== NO BUTTON MOVEMENT ===== */
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const messages = [
  "Please give me a chance 🥺",
  "I really need to say this 😢",
  "It’ll only take a moment 💌",
  "Don’t shut me out 😔"
];
let i = 0;

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const x = Math.floor(Math.random() * 160) - 80; // move left/right
  const y = Math.floor(Math.random() * 80) - 40;  // move up/down
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  question.innerText = messages[i];
  i = (i + 1) % messages.length;
}

/* ===== FLOATING HEARTS ===== */
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000); // remove after animation
}, 300);

/* ===== SONG + LYRICS HIGHLIGHT ===== */
const song = document.getElementById("song");
const lyrics = document.querySelectorAll(".lyrics p");

// Convert time string to seconds (already in seconds)
function timeToSeconds(time) {
  return Number(time);
}

song.addEventListener("timeupdate", () => {
  const currentTime = song.currentTime;

  lyrics.forEach((line, index) => {
    const lineTime = timeToSeconds(line.dataset.time);
    const nextLineTime = lyrics[index + 1] ? timeToSeconds(lyrics[index + 1].dataset.time) : Infinity;

    if (currentTime >= lineTime && currentTime < nextLineTime) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
});
song.addEventListener("ended", () => {
  nextPage(5);
});
/* ===== END OF SCRIPT ===== */