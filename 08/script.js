const canvasColor = document.querySelector('#draw-color');
const canvasBlack = document.querySelector('#draw-black');

[canvasColor, canvasBlack].forEach(canvas => {
  canvas.width = window.innerWidth / 2.1;
  canvas.height = window.innerHeight / 1.2;
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
});

const ctxColor = canvasColor.getContext('2d');
const ctxBlack = canvasBlack.getContext('2d');

ctxColor.strokeStyle = '#bada55';
ctxColor.lineJoin = 'round';
ctxColor.lineCap = 'round';
ctxColor.lineWidth = 10;

ctxBlack.strokeStyle = '#000000';
ctxBlack.lineJoin = 'bevel';
ctxBlack.lineCap = 'round';
ctxBlack.lineWidth = 10;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let increasing = true;


function drawOnCtx(ctx) {
  return function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
}

function rotateHue() {
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  ctxColor.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}

function rotateStrokeSize() {
  if (ctxColor.lineWidth >= 100 || ctxColor.lineWidth <= 1) {
    increasing = !increasing;
  }

  if (increasing) {
    ctxColor.lineWidth++;
  } else {
    ctxColor.lineWidth--;
  }
}

const onDrawingBlack = drawOnCtx(ctxBlack);

const drawOnColor = drawOnCtx(ctxColor);
function onDrawingColor(e) {
  drawOnColor(e);
  rotateHue();
  rotateStrokeSize();
}

canvasColor.addEventListener('mousemove', onDrawingColor);
canvasBlack.addEventListener('mousemove', onDrawingBlack);
