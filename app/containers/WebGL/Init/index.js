import GLC from '../GLCommander';
import ModelRenderer from '../Render/ModelRenderer';
import ModelType from '../Models/ModelType';

export default (id) => {
    const canvas = document.querySelector(`#${id}`);

    if(!canvas) {
        return;
    }

    const gl = canvas.getContext('webgl');

    if(!gl) {
        return;
    }

    GLC.init(gl);

    const vertices = [
        0.0, 0.5, 0.0,
        -0.5, -0.5, 0.0,
        0.5, -0.5, 0.0
    ];

    const indices = [0,1,2];

    const modelRender = new ModelRenderer();
    modelRender.registerNewModel(new ModelType(vertices, indices), 'triangle');
    modelRender.addInstance('instance1', 'triangle');
    GLC.clear(1.0, 1.0, 1.0, 1.0);
    modelRender.render();
}