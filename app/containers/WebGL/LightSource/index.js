import { vec3 } from 'gl-matrix';

export default class Light {
    constructor(x, y, z, r, g, b, ambient){
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        this.g = g;
        this.b = b;
        this.ambient = ambient;
    }

    getPosition = () => vec3.fromValues(this.x, this.y, this.z);
    getColor = () => vec3.fromValues(this.r, this.g, this.b);
    getAmbient = () => this.ambient;
}