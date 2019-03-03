import * as THREE from "three";
import alphaTexture from "./Images/clean-grey-gradient.jpg";
import { Vector3 } from "three";

export default scene => {
  var raycaster = new THREE.Raycaster();
  var lastMouse;
  const group = new THREE.Group();
  var speed = 1;
  const subjectGeometry = deformGeometry(new THREE.IcosahedronGeometry(14, 5));

  const subjectMaterial = new THREE.MeshStandardMaterial({
    color: "transparent",
    transparent: true,
    side: THREE.DoubleSide,
    alphaTest: 0.1
  });
  subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
  subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
  subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
  subjectMaterial.alphaMap.repeat.y = 5;

  const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);

  subjectMesh.callback = function() {
  
      console.log("clicked");
    
  };
  console.log(subjectMesh);

  group.add(subjectMesh);
  // group.add(subjectWireframe);
  scene.add(group);

  subjectMesh.rotation.z = Math.PI / 2;

  const textureOffsetSpeed = 0.5;

  function deformGeometry(geometry) {
    // for (let i=0; i<geometry.vertices.length; i+=8) {
    //     const scalar = 1 - Math.random() * .2;
    //     geometry.vertices[i].multiplyScalar(scalar)
    // }

    return geometry;
  }

  function update(time, mouse, camera, mouseClick, reset) {
    if (mouseClick) {
      raycaster.setFromCamera(mouse, camera);
      var intersects = raycaster.intersectObjects([subjectMesh]);
      if (intersects.length > 0) {
      subjectMaterial.alphaMap.repeat.y = 15;
      reset();
      }

      lastMouse = mouse.x;
    }

    const angle = time * speed;

    subjectMesh.rotation.y = angle;

    subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

    // subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );

    const scale = (Math.sin(angle * 8) + 6.4) / 5;
    // subjectWireframe.scale.set(scale, scale, scale)
  }

  return {
    update
  };
};
