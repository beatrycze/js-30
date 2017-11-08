const createBox = ({selector, styles, changingHue, changingStrokeSize}) => {
  let canvas = document.querySelector(selector);
  canvas.width = window.innerWidth / 2.1;
  canvas.height = window.innerHeight / 1.2;

  let ctx = canvas.getContext('2d');
  Object.assign(ctx, styles);

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let increasing = true;

  function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function rotateHue() {
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  }

  function rotateStrokeSize() {
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      increasing = !increasing;
    }

    if (increasing) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }

  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
  canvas.addEventListener('mousemove', (e) => {
    draw(e);
    if (changingHue) {
      rotateHue(ctx, hue);
    }
    if (changingStrokeSize) {
      rotateStrokeSize(ctx, increasing);
    }
  });
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  const box = {
    canvas, ctx, isDrawing, lastX, lastY
  };
  return box;
};

const colorBox = createBox({
  selector: '#draw-color',
  changingHue: true,
  changingStrokeSize: true,
  styles: {
    strokeStyle: '#bada55',
    lineJoin: 'round',
    lineCap: 'round',
    lineWidth: 10
  }
});

const blackBox = createBox({
  selector: '#draw-black',
  changingHue: false,
  changingStrokeSize: false,
  styles: {
    strokeStyle: '#000000',
    lineJoin: 'bevel',
    lineCap: 'round',
    lineWidth: 10
  }
});
