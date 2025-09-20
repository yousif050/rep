function changeMessage() {
    const messages = [
      "Te amo con todo mi corazón",
      "Eres mi vida",
      "Eres mi todo",
      "Te adoro",
      "Siempre serás mi amor"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.querySelector('.message').textContent = messages[randomIndex];
  }
  