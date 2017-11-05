(() => {
  const panels = document.querySelectorAll('.panel');
  const author = document.querySelector('.author');

  function togglePanelOpen() {
    this.classList.toggle('open');
  }

  function toggleAuthorDisplay() {
    author.classList.toggle('show');
  }

  function checkPanels() {
    const panelsOpen = [...panels]
      .map(panel => panel.classList.contains('open'))
      .reduce( ( aggr, item) => {
        return aggr && item;
      }, true);

    const panelsActiv = [...panels]
      .map(panel => panel.classList.contains('open-active'))
      .reduce( ( aggr, item) => {
        return aggr && item;
      }, true);

    if(panelsOpen) {
      panels.forEach(panel => panel.classList.add('open-active'));
      setTimeout(toggleAuthorDisplay, 2500);
    } 
    else if(panelsActiv) {
      panels.forEach(panel => panel.classList.remove('open-active'));
      toggleAuthorDisplay();
    }
    return;
  }

  panels.forEach(panel => {
    panel.addEventListener('click', togglePanelOpen);
    panel.addEventListener('click', checkPanels);
  });
})();
