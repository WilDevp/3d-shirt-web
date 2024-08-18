import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: false,
    isFullTexture: false,
    isLogoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;