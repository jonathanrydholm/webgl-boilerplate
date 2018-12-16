import Locations from './locations';

export default `
    precision mediump float;
    attribute vec3 ${Locations.POSITION};
    varying vec3 color;
    uniform mat4 transformationMatrix;

    void main(void) {
        color = ${Locations.POSITION};
        gl_Position = transformationMatrix * vec4(${Locations.POSITION}, 1.0);
    }

`;