export default (container, SceneManager, canvasOptions) => {
  
  const canvas = createCanvas(document, container);
  const sceneManager = new SceneManager(canvas, canvasOptions);

  let canvasHalfWidth;
  let canvasHalfHeight;

  bindEventListeners(canvas);
  render();

  function createCanvas(document, container) {
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);
    return canvas;
  }

  function bindEventListeners(canvas) {
    canvas.onresize = resizeCanvas;
    canvas.onmousemove = mouseMove;
    canvas.onclick = onClick;
    resizeCanvas();
  }

  function resizeCanvas() {
    canvas.style.width = canvasOptions.width;
    canvas.style.height = canvasOptions.height;

    // canvas.width = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;

    // canvasHalfWidth = Math.round(canvas.offsetWidth / 2);
    // canvasHalfHeight = Math.round(canvas.offsetHeight / 2);

   // sceneManager.onWindowResize();
  }

//   CANVAS API
  function mouseMove({ screenX, screenY }) {
    sceneManager.onMouseMove(
      screenX - canvasHalfWidth,
      screenY - canvasHalfHeight
    );
  }

  function onClick() {
    sceneManager.onClick();
  }


  function render(time) {
    requestAnimationFrame(render);
    sceneManager.update();
  }
};
