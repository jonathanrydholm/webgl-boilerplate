import GLC from '../../GLCommander';
import Material from '../../Materials/material';

export default class ModelType {
    constructor(vertices, indices, normals, textureCoords) {
        this.vertices = vertices;
        this.indices = indices;
        this.normals = normals;
        this.textureCoords = textureCoords;
        this._genTextureCoordBuffer();
        this._genVertexBuffer();
        this._genIndexBuffer();
        this._genNormalBuffer();
        this.material = new Material();
    }

    _genTextureCoordBuffer = () => {
        this.textureCoordBuffer = GLC.createBuffer();
        GLC.bindArrayBuffer(this.textureCoordBuffer);
        GLC.addArrayBufferData(this.textureCoords);
        GLC.unbindArrayBuffer();
    }

    _genNormalBuffer = () => {
        this.normalBuffer = GLC.createBuffer();
        GLC.bindArrayBuffer(this.normalBuffer);
        GLC.addArrayBufferData(this.normals);
        GLC.unbindArrayBuffer();
    }

    _genVertexBuffer = () => {
        this.vertexBuffer = GLC.createBuffer();
        GLC.bindArrayBuffer(this.vertexBuffer);
        GLC.addArrayBufferData(this.vertices);
        GLC.unbindArrayBuffer();
    }

    _genIndexBuffer = () => {
        this.indexBuffer = GLC.createBuffer();
        GLC.bindElementArrayBuffer(this.indexBuffer);
        GLC.addElementArrayBufferData(this.indices);
        GLC.unbindElementArrayBuffer();
    }

    addMaterial = (material) => {
        this.material = material;
    }

    use = (shader) => {
        GLC.bindArrayBuffer(this.vertexBuffer);
        shader.enablePosition();
        GLC.bindArrayBuffer(this.textureCoordBuffer);
        shader.enableTextureCoords();
        GLC.bindArrayBuffer(this.normalBuffer);
        shader.enableNormals();
        GLC.bindElementArrayBuffer(this.indexBuffer);
        this.material.enable(shader);
    }
}