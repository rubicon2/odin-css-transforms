import './house.css';

function createWall() {
  const wall = document.createElement('div');
  wall.classList.add('wall');
  return wall;
}

function createRoofSide() {
  const roofWall = document.createElement('div');
  roofWall.classList.add('roof-side');
  return roofWall;
}

function createBackdrop() {
  const grass = document.createElement('div');
  grass.classList.add('grass');

  return grass;
}

function createHouse() {
  const house = document.createElement('div');
  house.classList.add('house');

  const frontWall = createWall();
  frontWall.classList.add('front-wall');
  frontWall.innerText = 'Front';
  house.appendChild(frontWall);

  const rearWall = createWall();
  rearWall.classList.add('rear-wall');
  rearWall.innerText = 'Rear';
  house.appendChild(rearWall);

  const rightWall = createWall();
  rightWall.classList.add('right-wall');
  house.appendChild(rightWall);

  const leftWall = createWall();
  leftWall.classList.add('left-wall');
  house.appendChild(leftWall);

  const leftSideRoof = createRoofSide();
  leftSideRoof.classList.add('left-roof-side');
  house.appendChild(leftSideRoof);

  const rightSideRoof = createRoofSide();
  rightSideRoof.classList.add('right-roof-side');
  house.appendChild(rightSideRoof);

  const frontRoof = createWall();
  frontRoof.classList.add('roof', 'front-roof');
  house.appendChild(frontRoof);

  const rearRoof = createWall();
  rearRoof.classList.add('roof', 'rear-roof');
  house.appendChild(rearRoof);

  return house;
}

export default function createHouseScene() {
  const scene = document.createElement('div');
  scene.classList.add('scene');

  scene.appendChild(createBackdrop());
  scene.appendChild(createHouse());

  return scene;
}
