import './style.css';

function createFace() {
  const faceElement = document.createElement('div');
  faceElement.classList.add('face');
  return faceElement;
}

function createFaceText(innerText) {
  const faceTextElement = document.createElement('div');
  faceTextElement.classList.add('face-text');
  faceTextElement.innerText = innerText;
  return faceTextElement;
}

function createCubeFace(innerText) {
  const face = createFace();
  const faceText = createFaceText(innerText);
  face.appendChild(faceText);
  return face;
}

const cube = document.createElement('div');
cube.classList.add('cube');
document.body.appendChild(cube);

const frontFaceElement = createCubeFace('Front');
frontFaceElement.classList.add('front-face');
cube.appendChild(frontFaceElement);

const leftFaceElement = createCubeFace('Left');
leftFaceElement.classList.add('left-face');
cube.appendChild(leftFaceElement);

const rightFaceElement = createCubeFace('Right');
rightFaceElement.classList.add('right-face');
cube.appendChild(rightFaceElement);

const rearFaceElement = createCubeFace('Rear');
rearFaceElement.classList.add('rear-face');
cube.appendChild(rearFaceElement);

const topFaceElement = createCubeFace('Top');
topFaceElement.classList.add('top-face');
cube.appendChild(topFaceElement);

const bottomFaceElement = createCubeFace('Bottom');
bottomFaceElement.classList.add('bottom-face');
cube.appendChild(bottomFaceElement);
