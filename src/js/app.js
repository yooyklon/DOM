const tds = document.querySelectorAll('.board-item');

setInterval(() => {
  tds.forEach((el) => el.classList.remove('goblin'));
  const randomNumber = Math.floor(Math.random() * tds.length);
  tds[randomNumber].classList.add('goblin');
}, 2000);
