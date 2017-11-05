const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand')

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if(secondsDegrees === 0) {
    allHands.forEach(hand => hand.style.transition = 'none'); // added inline style
  } else {
    allHands.forEach(hand => hand.style.transition = ''); // resets the inline style
  }

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setDate();
setInterval(setDate, 1000);
