import GLC from '../../GLCommander';
import Shader from '../../Shaders/ModelShader';

export default class ModelRenderer {

    constructor(){
        this.shader = new Shader();
        this.models = {};
    }

    registerNewModel = (model, id) => {
        if(!this.models[id]) {
            this.models[id] = {
                type: model,
                instances: [],
            }
        }
    }

    addInstance = (instance, id) => {
        this.models[id].instances.push(instance);
    }


    preRender = () => {
        GLC.viewport();
        GLC.depthTest(true);
    }

    render = (light, camera) => {
        this.preRender();
        this.shader.use();
        this.shader.enableLight(light);
        camera.enable(this.shader);
        Object.keys(this.models).forEach(model => {
            this.models[model].type.use(this.shader);
            this.models[model].instances.forEach(instance => {
                this.shader.enableTransformationMatrix(instance.getTransformationMatrix());
                GLC.drawTriangles(this.models[model].type.indices.length);
            })
        })
    }
}