import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { scene } from './index.js';
import { panorama1 } from './panorama1.js';
import { display } from './display_panorama1';
import { panorama3 } from './panorama3.js';

//panorama image

const geometry = new THREE.SphereGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
geometry.scale(- 1, 1, 1);

const texture = new THREE.TextureLoader().load('./kawiarnia3.png');
const material = new THREE.MeshBasicMaterial({ map: texture });

// function panoramaAdd(){
//   const panorama2 = new THREE.Mesh(geometry, material);
//   return panorama2;
// }

//export const panorama1 = new THREE.Mesh(geometry, material);
export const panorama2 = new THREE.Mesh(geometry, material);



//navigation

//nav element1
const imageDiv = document.createElement('img');
imageDiv.className = 'imagenav';
imageDiv.id = 'nav2';
imageDiv.src = './pap_circle_up.png'
imageDiv.height = '5';
imageDiv.width = '5';
imageDiv.style.visibility = 'visible'

const navLabel = new CSS3DObject(imageDiv);
navLabel.position.set(20, -13, -30);
navLabel.element.style.overflow = 'visible';

panorama2.add(navLabel)

//nav element2

const imageDiv2 = document.createElement('img');
imageDiv2.className = 'imagenav';
imageDiv2.id = 'nav3';
imageDiv2.src = './pap_circle_up.png'
imageDiv2.height = '5';
imageDiv2.width = '5';
imageDiv2.style.visibility = 'visible'

const navLabel2 = new CSS3DObject(imageDiv2);
navLabel2.position.set(-7, -13, 40);
navLabel2.element.style.overflow = 'visible';

panorama2.add(navLabel2)

// navigation actions

imageDiv.addEventListener('pointerdown', () => {

  scene.remove(panorama2);
  imageDiv.style.visibility = 'hidden';
  imageDiv2.style.visibility = 'hidden';
  imageDivInfo.style.visibility = 'hidden';
  scene.add(panorama1);
  const nav1 = document.getElementById('nav1');
  nav1.style.visibility = 'visible';
  const info1 = document.getElementById('imageInfo1');
  info1.style.visibility = 'visible';

})

imageDiv2.addEventListener('pointerdown', () => {

  scene.remove(panorama2);
  imageDiv.style.visibility = 'hidden';
  imageDiv2.style.visibility = 'hidden';
  imageDivInfo.style.visibility = 'hidden';
  scene.add(panorama3);
  if (document.getElementById('nav4')) {
    const nav3 = document.getElementById('nav4');
    nav3.style.visibility = 'visible';
  }


})


// info nav

const imageDivInfo = document.createElement('img');
imageDivInfo.className = 'imageInfo1';
imageDivInfo.src = './pap_spot_white.png'
imageDivInfo.height = '5';
imageDivInfo.width = '5';
imageDivInfo.style.visibility = 'visible'

const navLabelInfo = new CSS3DObject(imageDivInfo);
navLabelInfo.position.set(30, 0, -30);
navLabelInfo.element.style.overflow = 'visible';

//1st option
//panorama1.add(navLabelInfo)

//2nd option with setTimeout callback
// setTimeout(function(){
//   panorama2.add(navLabelInfo)
// },500)




//info actiones

imageDivInfo.addEventListener('pointerdown', () => {
  console.log('click_info');
  //infoDiv.style.visibility='visible';
  imageDivInfo.style.visibility = 'hidden';
  document.body.appendChild(display);
  display.style.visibility = 'visible';


})

