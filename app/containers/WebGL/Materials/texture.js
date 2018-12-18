import GLC from '../GLCommander';

export default class Texture {
    constructor(){
        this.texture = GLC.createTexture();
        GLC.bindTexture(this.texture);
        GLC.defineDummyTexture();
    }

    loadTexture = (url) => {
        const img = new Image();
        img.setAttribute('crossOrigin', '');
        img.onload = () => this.onLoad(img);
        img.src = url;
    }

    onLoad = (img) => {
        GLC.bindTexture(this.texture);
        GLC.defineTexture(img);
        if (this.isPowerOf2(img.width) && this.isPowerOf2(img.height)) {
            GLC.texturePowerOfTwo();
        } else {
            GLC.textureNoPowerOfTwo();
        }
        this.done = true;
    }

    isPowerOf2 = (side) => (side & (side -1)) === 0;

    enable = () => GLC.bindTexture(this.texture);
    hasTexture = () => !!this.done;
}