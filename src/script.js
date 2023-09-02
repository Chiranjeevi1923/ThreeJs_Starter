import View from "./View/View";

const view = new View(document.querySelector('canvas.webgl'))

// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// import * as dat from 'lil-gui'

// THREE.ColorManagement.enabled = false

// /**
//  * Base
//  */
// // Debug
// // const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()


// /**
//  * Textures
//  */
// const textureLoader = new THREE.TextureLoader()

// const matcapTexture = textureLoader.load('/textures/matcaps/8.png')


// /**
//  * Fonts
//  */
// const fontLoader = new FontLoader()
// const font = fontLoader.load(
//     'fonts/helvetiker_regular.typeface.json',
//     (font) => {
//         const textGeometry = new TextGeometry('Chiranjeevi Omkaram',
//             {
//                 font,
//                 size: 0.5,
//                 height: 0.09,
//                 curveSegments: 3,
//                 bevelEnabled: true,
//                 bevelThickness: 0.03,
//                 bevelSize: 0.02,
//                 bevelOffset: 0,
//                 bevelSegments: 5
//             })

//         textGeometry.center()
//         const matcapMaterial = new THREE.MeshMatcapMaterial({
//             matcap: matcapTexture
//         })
//         // textMaterial.wireframe = true

//         const text = new THREE.Mesh(
//             textGeometry,
//             matcapMaterial
//         )
//         scene.add(text)


//         console.time('donuts')
//         // Add donuts
//         const donutGeo = new THREE.TorusGeometry(0.2, 0.12, 50, 100)
//         for(let i = 0; i < 400; i++) {
//             const donut = new THREE.Mesh(
//                 donutGeo,
//                 matcapMaterial
//             )
//             donut.position.x = (Math.random() - 0.5) * 20
//             donut.position.y = (Math.random() - 0.5) * 20
//             donut.position.z = (Math.random() - 0.5) * 20

//             donut.rotation.x  = Math.random() * Math.PI;
//             donut.rotation.y  = Math.random() * Math.PI;
//             scene.add(donut)


//         }
//         console.timeEnd('donuts')
        
//     }
// )
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 1
// camera.position.y = 1
// camera.position.z = 4
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.outputColorSpace = THREE.LinearSRGBColorSpace
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime()

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()