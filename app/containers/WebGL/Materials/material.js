import Texture from './texture';
import GLC from '../GLCommander';

export default class Material {
    constructor(){
        this.diffuse = new Texture();
    }

    addDiffuse = (url) => {
        this.diffuse.loadTexture(url);
        return this;
    }

    _enableDiffuse = (shader) => {
        GLC.activeTexture(0);
        this.diffuse.enable();
        GLC.uploadInt(shader.diffuseTexture, 0);
        GLC.uploadBool(shader.hasDiffuseTexture, this.diffuse.hasTexture());
    }

    enable = (shader) => {
        this._enableDiffuse(shader);
    }
}