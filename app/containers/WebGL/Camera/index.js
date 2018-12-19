import { vec3, mat4 } from 'gl-matrix';
import { toRadians } from '../Utils/maths';
import GLC from '../GLCommander';
import MouseEvent from '../EventHandlers/mouse';

export default class Camera {
    constructor(x = 0, y = 0, z = 3, pitch = 0, yaw = 0, roll = 0, near = 0.1, far = 1000, fov = 40){
        this.x = x;
        this.y = y;
        this.z = z;
        this.pitch = pitch;
        this.roll = roll;
        this.yaw = yaw;
        this.near = near;
        this.far = far;
        this.fov = fov;
        this.generateMatrices();
        MouseEvent.subscribeToDrag(this);
        MouseEvent.subscribeToWheel(this);
    }

    onDrag = (dx, dy) => {
        this.x += dx * 0.01;
        this.y -= dy*0.01;
        this.generateMatrices();
    }

    onWheel = (e) => {
        this.z += e.deltaY * 0.01;
        this.generateMatrices();
    }

    enable = (shader) => {
        shader.enableViewProjectionMatrices(this.viewMatrix, this.projectionMatrix);
    }

    generateMatrices = () => {
        this.viewMatrix = this.createViewMatrix();
        this.projectionMatrix = this.createProjectionMatrix();
    }

    createViewMatrix = () => {
        const matrix = [];
        mat4.identity(matrix);
        mat4.rotateX(matrix, matrix, toRadians(this.pitch));
        mat4.rotateY(matrix, matrix, toRadians(this.yaw));
        mat4.rotateZ(matrix, matrix, toRadians(this.roll));
        mat4.translate(matrix, matrix, vec3.fromValues(-this.x, -this.y, -this.z));
        return matrix;
    }

    createProjectionMatrix = () => {
        const aspectRatio = GLC.gl.canvas.width / GLC.gl.canvas.height;
        const matrix = [];
        mat4.perspective(matrix, toRadians(this.fov), aspectRatio, this.near, this.far);
        return matrix;
    }
}