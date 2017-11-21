(function() {
  /* Get Our Elements */
  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress__filled');
  const togglePlayBtn = player.querySelector('.toggle-play');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const volumeRange = player.querySelector('input[name=volume]');
  const playbackRateRange = player.querySelector('input[name=playbackRate]');
  const toggleMuteBtn = player.querySelector('.mute');
  const fullScreen = player.querySelector('.screen');

  /* Build out functions */
  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    // alternatively:
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
  }

  function updatePlayButton() {
    const icon = this.paused ? '►' : '❚❚';
    togglePlayBtn.textContent = icon;
  }

  function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
  }

  function handlePlaybackRateUpdate() {
    video[this.name] = this.value;
  }

  function mute() {
    video.muted = true;
    toggleMuteBtn.title = 'Unmute';
    toggleMuteBtn.innerHTML = '<i class="fa fa-volume-up fa-lg" aria-hidden="true"></i>';
  }

  function unmute() {
    video.muted = false;
    toggleMuteBtn.title = 'Mute';
    toggleMuteBtn.innerHTML = '<i class="fa fa-volume-off fa-lg" aria-hidden="true"></i>';
  }

  function handleVolumeRangeUpdate(e) {
    if (event.target.value === '0') {
      mute();
    } else {
      unmute()
      video.volume = parseFloat(event.target.value);
    }
  }

  function toggleMute() {
    if (video.muted) {
      unmute();
      volumeRange.value = '0.01';
      video.value = parseFloat(volumeRange.value);
    } else {
      mute();
      volumeRange.value = '0';
      video.value = parseFloat(volumeRange.value);
    }
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function toogleFullScreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }

  /* Hook up the event listners */
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updatePlayButton);
  video.addEventListener('pause', updatePlayButton);
  video.addEventListener('timeupdate', handleProgress);

  togglePlayBtn.addEventListener('click', togglePlay);
  skipButtons.forEach(button => button.addEventListener('click', skip));

  playbackRateRange.addEventListener('change', handlePlaybackRateUpdate);
  playbackRateRange.addEventListener('mousemove', handlePlaybackRateUpdate);

  let volumeRangeMousedown = false;
  volumeRange.addEventListener('change', handleVolumeRangeUpdate);
  volumeRange.addEventListener('mousemove', (e) => {
    if(volumeRangeMousedown) {
      handleVolumeRangeUpdate(e);
    }
  });
  volumeRange.addEventListener('mousedown', () => volumeRangeMousedown = true);
  volumeRange.addEventListener('mouseup', () => volumeRangeMousedown = false);

  let progressBarMousedown = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) => {
    if(progressBarMousedown) {
      scrub(e);
    }
  });
  // alternatively:
  // progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
  progress.addEventListener('mousedown', () => progressBarMousedown = true);
  progress.addEventListener('mouseup', () => progressBarMousedown = false);

  fullScreen.addEventListener('click', toogleFullScreen);
  toggleMuteBtn.addEventListener('click', toggleMute);
})();
