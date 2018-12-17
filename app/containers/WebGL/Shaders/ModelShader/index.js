import GLC from '../../GLCommander';
import VertexSource from './vertex';
import FragmentSource from './fragment';
import Locations from './locations';


export default class ModelShader {
    constructor(){
        const vertexShader = GLC.createVertexShader();
        GLC.addShaderSource(vertexShader, VertexSource);
        GLC.compileShader(vertexShader);

        const fragmentShader = GLC.createFragmentShader();
        GLC.addShaderSource(fragmentShader, FragmentSource);
        GLC.compileShader(fragmentShader);

        const program = GLC.createShaderProgram();
        GLC.attachShaderToProgram(program, vertexShader);
        GLC.attachShaderToProgram(program, fragmentShader);
        GLC.linkProgram(program);

        this.positionAttribute = GLC.getAttribLocation(program, Locations.POSITION);
        this.normalAttribute = GLC.getAttribLocation(program, Locations.NORMAL);
        this.transformationMatrix = GLC.getUniformLocation(program, 'transformationMatrix');
        this.lightPosition = GLC.getUniformLocation(program, 'lightPosition');
        this.lightColor = GLC.getUniformLocation(program, 'lightColor');
        this.lightAmbient = GLC.getUniformLocation(program, 'lightAmbient');
        this.program = program;
    }

    use = () => {
        GLC.useProgram(this.program);
    }

    enablePosition = () => {
        GLC.enableVertexAttribArray(this.positionAttribute);
        GLC.pointToAttribute(this.positionAttribute, 3);
    }

    enableNormals = () => {
        GLC.enableVertexAttribArray(this.normalAttribute);
        GLC.pointToAttribute(this.normalAttribute, 3);
    }

    enableTransformationMatrix = (matrix) => {
        GLC.uploadMatrix4fv(this.transformationMatrix, matrix);
    }

    enableLight = (light) => {
        GLC.uploadVec3f(this.lightPosition, light.getPosition());
        GLC.uploadVec3f(this.lightColor, light.getColor());
        GLC.uploadFloat(this.lightAmbient, light.getAmbient());
    }
}