export default class Sizes {
    constructor() {
      this.start =Date.now();
      this.current =  this.start;
      this.elapsed = 0;
      this.delta = 16;

      this.update();
    }

    update(){
        const currentTime = Date.now();
        this.delta = currentTime- this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;
        console.log(this.delta);
        window.requestAnimationFrame(()=> this.update);

    }
}