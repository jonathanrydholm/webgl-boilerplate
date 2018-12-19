import { mat4, vec3 } from 'gl-matrix';

export const toRadians = (deg) => deg * (Math.PI/180);

export const createTransformationMatrix = (x, y, z, rx, ry, rz, scale) => {
    const matrix = [];
    mat4.identity(matrix);
    mat4.translate(matrix, matrix, vec3.fromValues(x, y, z));
    mat4.rotateX(matrix, matrix, toRadians(rx));
    mat4.rotateY(matrix, matrix, toRadians(ry));
    mat4.rotateZ(matrix, matrix, toRadians(rz));
    mat4.scale(matrix, matrix, vec3.fromValues(scale, scale, scale));
    return matrix;
}