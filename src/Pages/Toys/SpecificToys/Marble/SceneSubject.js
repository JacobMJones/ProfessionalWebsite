import * as THREE from "three";
import alphaTexture from "./Images/clean-grey-gradient.jpg";
import { Vector3 } from "three";

export default scene => {
  var radius = 100,
    theta = 0;
  var raycaster = new THREE.Raycaster();
  var lastMouse;
  const group = new THREE.Group();

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
  subjectMesh.callback = () => {
    console.log("ya");
  };
  console.log(subjectMesh);

  group.add(subjectMesh);
  // group.add(subjectWireframe);
  scene.add(group);

  subjectMesh.rotation.z = Math.PI / 2;

  const speed = 0.3;
  const textureOffsetSpeed = 0.5;

  function deformGeometry(geometry) {
    // for (let i=0; i<geometry.vertices.length; i+=8) {
    //     const scalar = 1 - Math.random() * .2;
    //     geometry.vertices[i].multiplyScalar(scalar)
    // }

    return geometry;
  }

  function update(time, mouse, camera, mouseClick) {
    // camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
    // 		camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
    // 		camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
    // 		camera.lookAt( scene.position );
  

    if (lastMouse !== mouse.x) {
     raycaster.setFromCamera(mouse, camera);
     var intersects = raycaster.intersectObjects( [subjectMesh] ); 
console.log(intersects)
      console.log('new mounse', mouse);
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
