export default class Sizes {
    constructor() {
        this.width = window.innerWidth;
        this.height = this.window.innerHeight;
        this.aspect = this.width / this.height;
        this.pixelRatio = MAth.min(window.devicePixelRatio, 2)

        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = this.window.innerHeight;
            this.aspect = this.width / this.height;
        })
    }
}