export default `
    precision mediump float;
    
    varying vec3 surfaceNormal;
    varying vec3 lightVector;
    varying vec3 pass_lightColor;
    varying float pass_lightAmbient;

    void main(void) {
        
        vec3 unitNormal = normalize(surfaceNormal);
        vec3 unitLightVector = normalize(lightVector);

        float nDot = dot(unitNormal, unitLightVector);
        float brightness = max(nDot, pass_lightAmbient);
        vec3 diffuse = brightness * vec3(pass_lightColor);

        gl_FragColor = vec4(0.3, 0.3, 0.3, 1.0) * vec4(diffuse, 1.0);
    }
`;