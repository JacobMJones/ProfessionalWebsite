import * as THREE from "three";
import alphaTexture from "./blue-stars.jpg";

export default scene => {
  var raycaster = new THREE.Raycaster();
  var lastMouse = {x:null, y:null}
  var clicked;
  const group = new THREE.Group()

  const subjectGeometry = deformGeometry(new THREE.IcosahedronGeometry(12, ));

  const subjectMaterial = new THREE.MeshStandardMaterial({
    color: 0x093145,
    transparent: false,
    side: THREE.DoubleSide,
    alphaTest: 0.1
  });
  subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
  subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
  subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
  subjectMaterial.alphaMap.repeat.y = 12;

  const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);
  subjectMesh.position.set(0, -10, -10);
  group.add(subjectMesh);
  scene.add(group);

  group.rotation.z = Math.PI / 6;

  let speed = 0.2;
  const textureOffsetSpeed = .15;

  function deformGeometry(geometry) {
    for (let i=0; i<geometry.vertices.length; i+=8) {
        const scalar = 1 - Math.random() * .2;
        geometry.vertices[i].multiplyScalar(scalar)
    }

    return geometry;
  }

  function update(time, mouse, camera, mouseClicked) {
  
    if (mouseClicked) {
      console.log('second ball aware of mouseclick', lastMouse, mouse.x)
      
      
      raycaster.setFromCamera(mouse, camera);
      var intersects = raycaster.intersectObjects([subjectMesh]);
      if (intersects.length > 0) {
        if (clicked) {
          subjectMaterial.alphaMap.repeat.y = 12;
        } else {
          subjectMaterial.alphaMap.repeat.y = 2;
        }
      }
      clicked = !clicked;   
    }
   
    const angle = time * speed;

    subjectMesh.rotation.y = angle;
    subjectMesh.rotation.x = angle;
    subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;
    subjectMaterial.alphaMap.offset.x = 0.55 + time * textureOffsetSpeed;


    const scale = (Math.sin(angle * 6) + 8) / 5;
    subjectMesh.scale.set(scale, scale, scale)
    lastMouse = mouse.x;
  }

  
  return {
    update
  };
};