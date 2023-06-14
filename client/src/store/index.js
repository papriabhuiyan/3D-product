import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#EFBD4E',
    isLogoTexture: false,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state