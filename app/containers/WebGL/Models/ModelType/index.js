import GLC from '../../GLCommander';

export default class ModelType {
    constructor(vertices, indices) {
        this.vertices = vertices;
        this.indices = indices;
        this._genVertexBuffer();
        this._genIndexBuffer();
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
        GLC.bindElementArrayBuffer(this.indexBuffer);
    }
}