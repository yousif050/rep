function changeMessage() {
    const messages = [
      "You make every moment special!",
      "Your smile is my favorite thing!",
      "I’m so lucky to have you by my side.",
      "You’re the best thing that ever happened to me.",
      "I love you more than words can say!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.querySelector('.message').textContent = messages[randomIndex];
  }
  