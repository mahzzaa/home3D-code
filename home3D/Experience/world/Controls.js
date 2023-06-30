import Experience from "../Experience";
import * as THREE from "three"

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;

        this.progress = 0;
        this.dummyVector = new THREE.Vector3(0, 0, 0);

        this.setPath();
        this.onWheel();
    }

    setPath() {
        this.curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, 10),
            new THREE.Vector3(-5, 5, 5),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(5, -5, 5),
            new THREE.Vector3(10, 0, 10)
        ], true);


        this.curve.getPointAt(this.progress, this.dummyVector);
        this.camera.orthographicCamera.position.copy(this.dummyVector);


        const points = this.curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

        // Create the final object to add to the scene
        const curveObject = new THREE.Line(geometry, material);

        this.scene.add(curveObject);

    }

    onWheel(){
        window.addEventListener("wheel",(e)=>{
            console.log(e);
            if(e.deltaY>0){
                this.progress+= 0.1;
            }else{
                this.progress -= 0.1;
                if(this.progress<0){
                    this.progress = 1;
                }
            }
        });
    }

    resize() {

    }

    update() {
        this.curve.getPointAt(this.progress % 1, this.dummyVector);
        // this.progress -= 0.01;
       
        this.camera.orthographicCamera.position.copy(this.dummyVector);
    }
}