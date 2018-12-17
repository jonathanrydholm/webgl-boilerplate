import GLC from '../../GLCommander';

export default class ModelType {
    constructor(vertices, indices, normals) {
        this.vertices = vertices;
        this.indices = indices;
        this.normals = normals;
        this._genVertexBuffer();
        this._genIndexBuffer();
        this._genNormalBuffer();
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

    use = (shader) => {
        GLC.bindArrayBuffer(this.vertexBuffer);
        shader.enablePosition();
        GLC.bindArrayBuffer(this.normalBuffer);
        shader.enableNormals();
        GLC.bindElementArrayBuffer(this.indexBuffer);
    }
}