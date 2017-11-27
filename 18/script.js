(() => {
  const videos = Array.from(document.querySelectorAll('[data-time]'));
  const button = document.querySelector('button');
  const paragraph = document.querySelector('p');

  const seconds = videos
    .map(video => video.dataset.time)
    .map(time => {
      const [mins, secs] = time.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce((aggr, vidSeconds) => aggr + vidSeconds);
    // .reduce((aggr, vidSeconds) => {
    //   return aggr + vidSeconds;
    // }, 0);


  // let secondsLeft = seconds;
  // const hours = Math.floor(secondsLeft / 3600);
  // secondsLeft = secondsLeft % 3600;
  // const mins = Math.floor(secondsLeft / 60);
  // secondsLeft = secondsLeft % 60;
  // console.log(hours, mins, secondsLeft);

  // alternative solutions:
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 3600 % 60);
  // console.log(h, m, s);
  const text = `Total videos duration: ${h} hours ${m} mins ${s} secs`;

  displayVideosDuration = () => {
    button.style.display = 'none';
    paragraph.innerHTML = text;
  };

  button.addEventListener('click', displayVideosDuration);
})();
