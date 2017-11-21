(() => {
  const pressedKeys = [];
  const phraseToMatch = 'klawikord';

  window.addEventListener('keyup', (event) => {
    let key = event.key.toLowerCase();
    pressedKeys.push(key);
    pressedKeys.splice(-phraseToMatch.length - 1, pressedKeys.length - phraseToMatch.length);

    if (pressedKeys.join('').includes(phraseToMatch)) {
      alert('A unicorn is comming!');
      cornify_add();
    }
  });
})();
