import Experience from "../Experience";
import * as THREE from "three"

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        this.setModel();
        this.setAnimation();
    }

    setModel() {
        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow = true;


            if (child instanceof THREE.Group) {
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                })
            }

            if(child.name === "water"){
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set(0x549dd2);
                child.material.ior = 3;
                child.material.transmission = 1;
                child.material.opacity = 0.5;
                
            }

            if(child.name === "screen"){
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
                

            }
        });
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11, 0.111, 0.11);
    }

    setAnimation(){
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        this.swim1 =  this.mixer.clipAction(this.room.animations[183]);
        this.swim2 =  this.mixer.clipAction(this.room.animations[185]);
        this.swim1.play();
        this.swim2.play();

    }

    resize() {

    }

    update() {
        this.mixer.update(this.time.delta * 0.0009);

    }
}