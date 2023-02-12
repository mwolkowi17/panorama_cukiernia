import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { scene } from './index.js';
import { panorama2 } from './panorama2.js';
import { display } from './display_panorama1';

//panorama image

const geometry = new THREE.SphereGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
geometry.scale(- 1, 1, 1);

const texture = new THREE.TextureLoader().load('./index.png');
const material = new THREE.MeshBasicMaterial({ map: texture });

function panoramaAdd() {
  const panorama = new THREE.Mesh(geometry, material);
  return panorama;
}

export const panorama1 = panoramaAdd();


//navigation

const imageDiv = document.createElement('img');
imageDiv.className = 'imagenav';
imageDiv.id = 'nav1'
imageDiv.src = './pap_circle_up.png'
imageDiv.height = '5';
imageDiv.width = '5';
imageDiv.style.visibility = 'visible'

const navLabel = new CSS3DObject(imageDiv);
navLabel.position.set(-12, -18, -30);
navLabel.element.style.overflow = 'visible';

panorama1.add(navLabel)

//mouse action
imageDiv.addEventListener('mouseover', () => {
  imageDiv.height = '6';
  imageDiv.width = '6';
})
imageDiv.addEventListener('mouseleave', () => {
  imageDiv.height = '5';
  imageDiv.width = '5';
}
)


// navigation actions

imageDiv.addEventListener('pointerdown', () => {


  scene.remove(panorama1);
  imageDiv.style.visibility = 'hidden';
  imageDivInfo.style.visibility = 'hidden';

  scene.add(panorama2);
  if (document.getElementById('nav2')) {
    const nav2 = document.getElementById('nav2');
    nav2.style.visibility = 'visible';
    imageDiv.height = '5';
    imageDiv.width = '5';
  }
  if (document.getElementById('nav3')) {
    const nav3 = document.getElementById('nav3');
    nav3.style.visibility = 'visible';
    imageDiv.height = '5';
    imageDiv.width = '5';

  }

  if (document.getElementById('display1')) {
    const display1 = document.getElementById('display1');
    display1.style.visibility = 'hidden';
  }

})

// info nav

const imageDivInfo = document.createElement('img');
imageDivInfo.className = 'imageInfo1';
imageDivInfo.id = 'imageInfo1'
imageDivInfo.src = './pap_spot_white.png'
imageDivInfo.height = '5';
imageDivInfo.width = '5';
imageDivInfo.style.visibility = 'visible'

const navLabelInfo = new CSS3DObject(imageDivInfo);
navLabelInfo.position.set(-30, 0, 30);
navLabelInfo.element.style.overflow = 'visible';

panorama1.add(navLabelInfo)

//mouse action
imageDivInfo.addEventListener('mouseover', () => {
  imageDivInfo.height = '6';
  imageDivInfo.width = '6';
})
imageDivInfo.addEventListener('mouseleave', () => {
  imageDivInfo.height = '5';
  imageDivInfo.width = '5';
}
)


//info actiones

imageDivInfo.addEventListener('pointerdown', () => {

  //infoDiv.style.visibility='visible';
  imageDivInfo.style.visibility = 'hidden';
  document.body.appendChild(display);
  display.style.visibility = 'visible';


})

