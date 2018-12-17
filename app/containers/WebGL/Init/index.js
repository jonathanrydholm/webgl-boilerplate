import GLC from '../GLCommander';
import ModelRenderer from '../Render/ModelRenderer';
import ModelType from '../Models/ModelType';
import ModelInstance from '../Models/ModelInstance';
import Cube from './cube';
import Light from '../LightSource';

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

    const vertices = Cube.vertices;

    const indices = Cube.indices;

    const normals = Cube.normals;

    const modelRender = new ModelRenderer();
    const light = new Light(100, 100, -100, 1.0, 1.0, 1.0, 0.4);
    modelRender.registerNewModel(new ModelType(vertices, indices, normals), 'cube');
    const instance = new ModelInstance(0, 0, 0, 0, 0, 0, 0.5);
    modelRender.addInstance(instance, 'cube');

    const render = () => {
        GLC.clear(1.0, 1.0, 1.0, 1.0);
        instance.updateRotation(1, 1, 1);
        modelRender.render(light);
        window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
}