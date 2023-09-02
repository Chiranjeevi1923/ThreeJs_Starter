import Camera from "./Camera"
import Renderer from "./Renderer"
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import * as THREE from 'three'
import World from "./World/World"
import Resources from "./Utils/Resources"
import sources from "./sources"
import Debug from "./Utils/Debug"

let _instance = null
export default class View {
    constructor(canvas) {
        if(_instance) {
            return _instance
        }
        _instance = this


        // Instantiate all the utilities
        this.canvas = canvas
        this.debug = new Debug()
        this.resources = new Resources(sources)
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene  = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        



        // Window resize lisener
        this.sizes.event.on('resize', () => {
            this.resize()
        })

        // Time tick listener
        this.time.event.on('tick', () => {
            this.update()
        })


    }

    resize() {
        this.camera.resize()
        this.renderer.resize()

    }

    update() {
        this.camera.update()
        this.renderer.update()
    }
}