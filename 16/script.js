(() => {
  const hero = document.querySelector('.hero');
  const emoji = document.querySelector('.emoji');
  const text = hero.querySelector('h1');
  const distance = 600; // 100px

  changeEmoji = () => {
    emoji.classList.remove('emoji');
    emoji.innerHTML = "💥";
  }

  shadow = (event) => {
    changeEmoji();

    // console.log(event.target);
    // console.log(this);

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = event;

    if (this !== event.target) {
      x = x + event.target.offsetLeft;
      y = y + event.target.offsetTop;
    }

    // console.log(x, y);

    const xDistance = Math.round((x / width * distance) - (distance / 2));
    const yDistance = Math.round((y / height * distance) - (distance / 2));

    text.style.textShadow = `
      ${xDistance}px ${yDistance}px 0 rgba(255,0,255,0.7),
      ${xDistance * -1}px ${yDistance}px 0 rgba(0,255,255,0.7),
      ${yDistance}px ${xDistance * -1}px 0 rgba(0,255,0,0.7),
      ${yDistance * -1}px ${xDistance}px 0 rgba(0,0,255,0.7)
    `;

  }

  hero.addEventListener('mousemove', shadow);

})();
