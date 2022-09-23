// para usar Three.js, se debe crear una esena, camara y un render.
const scene = new THREE.Scene();

//Se está usando la camara PerspectiveCamera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//enderiza lo creado en camera en el canvas por medio de WebGL
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Es lo que se va a dibujar
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x3f67c0 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 7;

//Renderizado de la imagen.
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();
