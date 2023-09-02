import * as THREE from 'three';
import Environment from "../Utils/Environment";
import Resources from "../Utils/Resources";
import View from "../View";
import Floor from "./Floor";

export default class World {
    constructor() {
        this.view = new View()
        this.scene = this.view.scene
        this.resources = this.view.resources

        this.resources.event.on('ready', () => {
            this.floor = new Floor()
            this.environment = new Environment()
        })

        // Add test Object
        this.addTestObject()
    }

    addTestObject() {
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.MeshStandardMaterial({ wireframe: false })
        )
        testMesh.position.y = 1
        testMesh.castShadow = true
        this.scene.add(testMesh)
    }

}