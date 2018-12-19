import Locations from './locations';

export default `
    precision mediump float;
    attribute vec3 ${Locations.POSITION};
    attribute vec2 ${Locations.TEXTURE_COORDS};
    attribute vec3 ${Locations.NORMAL};

    varying vec3 surfaceNormal;
    varying vec3 lightVector;
    varying vec2 pass_textureCoords;

    uniform mat4 ${Locations.TRANSFORMATION_MATRIX};
    uniform mat4 ${Locations.VIEW_MATRIX};
    uniform mat4 ${Locations.PROJECTION_MATRIX};
    uniform vec3 ${Locations.LIGHT_POSITION};

    vec4 getWorldPosition() {
        return ${Locations.PROJECTION_MATRIX} * ${Locations.VIEW_MATRIX} * ${Locations.TRANSFORMATION_MATRIX} * vec4(${Locations.POSITION}, 1.0);
    }

    vec3 getSurfaceNormal() {
        return (${Locations.PROJECTION_MATRIX} * ${Locations.VIEW_MATRIX} * ${Locations.TRANSFORMATION_MATRIX} * vec4(${Locations.NORMAL}, 0.0)).xyz;
    }

    void main(void) {
        vec4 worldPos = getWorldPosition();
        surfaceNormal = getSurfaceNormal();
        lightVector = ${Locations.LIGHT_POSITION} - worldPos.xyz;
        gl_Position = worldPos;
        pass_textureCoords = ${Locations.TEXTURE_COORDS};
    }

`;