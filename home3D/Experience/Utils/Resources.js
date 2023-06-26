import { EventEmitter } from "events";
import Experience from "../Experience"
import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"

export default class Resources extends EventEmitter {
    constructor(assets) {
        super();

        this.Experience = new Experience();
        this.renderer = this.Experience.renderer;
       this.assets = assets;

       this.items={

       };

       this.queue = this.assets.length;

       this.loaded = 0;
       this.setLoaders();
       this.startLoading();
    }

    setLoaders(){
        this.loaders={
        
        };
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco");
        this.loaders.gltfLoader.setDecoderLoader(this.loaders.dracoLoader);
    }

    startLoading(){
        for(const assets of this.assets){
            if (assets.type == "glbModel"){
                this.loaders.gltfLoader .loade(asset.path,(file)=>{
                    this.singleAssetLoaded(asset, file);
                });
            }
        }
    }

    singleAssetLoaded(asset, file) {
        this.items[asset.name] = file;
        this.loaded++;

        if (this.loaded === this.queue) {
            this.emit("ready");
        }
    }

}