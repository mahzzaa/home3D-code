import Experience from "../Experience";
import * as THREE from "three"

export default class Enviroment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.setSunlight();
    }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#FBF8E6", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 5;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.5;

         const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
         this.scene.add(helper);

        this.sunLight.position.set(0, 7, 3);
        this.scene.add(this.sunLight);

        this.AmbientLight = new THREE.AmbientLight("#ffffff", 1);
        this.scene.add(this.AmbientLight);
    }

    resize() {

    }

    update() {


    }
}