import './style.css';
import createCube from './cube/cube';
import createHouseScene from './house/house';

const cube = createCube();
document.body.appendChild(cube);

const houseScene = createHouseScene();
houseScene.style.display = 'none';
document.body.appendChild(houseScene);

let showingCube = true;
setInterval(() => {
  if (showingCube) {
    cube.style.display = 'none';
    houseScene.style.display = 'flex';
    showingCube = false;
  } else {
    houseScene.style.display = 'none';
    cube.style.display = 'flex';
    showingCube = true;
  }
}, 10000);
