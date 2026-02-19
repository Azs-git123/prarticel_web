// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Particles
const count = 2000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

geometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
  color: 0x00ffff,
  size: 0.03
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

let targetX = 0;
let targetY = 0;

const hands = new Hands({
  locateFile: file =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7
});

hands.onResults(results => {
  if (results.multiHandLandmarks) {
    const tip = results.multiHandLandmarks[0][8]; // index finger
    targetX = (tip.x - 0.5) * 6;
    targetY = -(tip.y - 0.5) * 4;
  }
});

const video = document.getElementById("video");

const cameraMP = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 640,
  height: 480
});
cameraMP.start();

function animate() {
  requestAnimationFrame(animate);

  const pos = particles.geometry.attributes.position.array;

  for (let i = 0; i < pos.length; i += 3) {
    pos[i] += (targetX - pos[i]) * 0.002;
    pos[i + 1] += (targetY - pos[i + 1]) * 0.002;
  }

  particles.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}

animate();
