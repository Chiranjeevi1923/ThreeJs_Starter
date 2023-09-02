import View from "../View";
import * as THREE from 'three'

export default class Environment {
    constructor() {
        this.view = new View()

        this.scene = this.view.scene
        this.debug = this.view.debug
        this.resources = this.view.resources
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Environment')
        }

        this.setDirectionalLight()
        this.setEnvironmentMap()

    }

    setDirectionalLight() {

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 2)
        this.directionalLight.castShadow = true
        this.directionalLight.shadow.camera.far = 15
        this.directionalLight.shadow.mapSize.set(1024, 1024)
        this.directionalLight.shadow.normalBias = 0.05
        this.directionalLight.position.set(3, 2.5, - 2.25)
        this.scene.add(this.directionalLight)

    }

    setEnvironmentMap() {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = this.resources.items.environmentCubeTexture
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace

        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () => {
            this.scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()
        if (this.debug.active) {
            this.debugFolder
                .add(this.environmentMap, 'intensity', 0, 4, 0.001).onChange(this.environmentMap.updateMaterials)
            this.debugFolder
                .add(this.directionalLight.position, 'x')
                .name('sunLightX')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.directionalLight.position, 'y')
                .name('sunLightY')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.directionalLight.position, 'z')
                .name('sunLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)
        }
    }
}