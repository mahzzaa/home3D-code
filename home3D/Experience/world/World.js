import Experience from "../Experience";
import * as THREE from "three";
import Floor from "./Floor";
import Room from "./Room";
import Controls from "./Controls"
import Enviroment from "./Enviroment";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready",()=>{
            this.enviroment = new Enviroment();
            this.room = new Room();
            this.floor = new Floor();
            this.controls = new Controls();
        });

        
    }

    resize() {

    }

    update() {
        if(this.room){
            this.room.update();
        }
        if(this.controls){
            this.controls.update();
        }

    }
}