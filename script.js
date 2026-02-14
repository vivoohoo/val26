let messageIndex = 0;

const messages = [
  "Are you sure? 😢",
  "Think again 💔",
  "I'll be very sad 🥺",
  "But I bought chocolates 🍫",
  "Pretty please? 😭",
  "You are breaking my heart 💔",
  "Last chance! 😢",
  "Pookieeee PLEASE🥺",
  "YES is the better choice 😌"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.15}px`;
}

function moveNoButton() {
  const noButton = document.querySelector(".no-button");

  const maxMove = 80; // keeps movement visible on small screens
  const x = Math.random() * maxMove - maxMove / 2;
  const y = Math.random() * maxMove - maxMove / 2;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
  document.body.style.backgroundImage = "url('vs2.jpeg')";
  document.body.style.backgroundSize = "potrait";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  document.body.innerHTML = `
    <div style="
      display:flex;
      height:100vh;
      justify-content:center;
      align-items:center;
      font-family:Arial;
      text-align:center;
      color:white;
      flex-direction:column;
      padding:20px;
      backdrop-filter: blur(2px);
    ">
      <h1>YAYYYYY!!! 💖💖💖</h1>
      <h2>You just made me the happiest person alive 😍</h2>
      <p>I promise unlimited love, hugs, and snacks 🍫💕</p>
    </div>
  `;
}
