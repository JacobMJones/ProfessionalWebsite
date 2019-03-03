import * as THREE from "three";
import SceneSubject from "../ThreeJSSceneSubject";
import GeneralLights from "../ThreeJSLights";

export default (canvas, canvasOptions, sceneOptions) => {

  var mouse = new THREE.Vector2();
  const clock = new THREE.Clock();
  var mouseClicked = false;
  
  const canvasDimensions = {
    width: canvasOptions.width,
    height: canvasOptions.height
  };


  const scene = buildScene();
  const renderer = buildRender(canvasDimensions);
  const camera = buildCamera(canvasDimensions);
  const sceneSubjects = createSceneSubjects(scene);

  function buildScene() {
    const scene = new THREE.Scene();
    return scene;
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.addEventListener("click", ()=>{console.log('pop')});
    return renderer;
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 4;
    const farPlane = 100;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );

    camera.position.z = sceneOptions.cameraPositionZ ? sceneOptions.cameraPositionZ : 40;

    return camera;
  }

  function createSceneSubjects(scene) {
    const sceneSubjects = [new GeneralLights(scene), new SceneSubject(scene)];

    return sceneSubjects;
  }



//   function updateCameraPositionRelativeToMouse() {
//     camera.position.x += (mouse.x * 0.01 - camera.position.x) * 0.01;
//     camera.position.y += (-(mouse.y * 0.01) - camera.position.y) * 0.01;
//     camera.lookAt(origin);
//   }

  function onWindowResize() {
    const { width, height } = canvas;

    canvasDimensions.width = width;
    canvasDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }

  function onMouseMove(event) {
    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  function onClick(event) {
    event.preventDefault();

    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    mouseClicked = true
  }

  function resetClick(){
      console.log('mouse has reset')
      mouseClicked = false;
  }
  function update() {
    const elapsedTime = clock.getElapsedTime();

    for (let i = 0; i < sceneSubjects.length; i++){
        sceneSubjects[i].update(elapsedTime, mouse, camera, mouseClicked, resetClick);
        // mouseClicked = false;
   //     console.log('scene subjects', scene.children[1].children)

    }

   // updateCameraPositionRelativeToMouse();

    renderer.render(scene, camera);
  }
  return {
    update,
    onWindowResize,
    onMouseMove,
    onClick
  };
};
