import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';


export function create_info_icon(x,y,z,idname){

const imageDivInfo = document.createElement('img');
imageDivInfo.className = 'imageInfo';
imageDivInfo.id = idname;
imageDivInfo.src = './pap_spot_white.png';
imageDivInfo.height = '5';
imageDivInfo.width = '5';
imageDivInfo.style.visibility = 'visible';

const navLabelInfo = new CSS3DObject(imageDivInfo);
navLabelInfo.position.set(x, y, z);
navLabelInfo.element.style.overflow = 'visible';
return navLabelInfo;
}