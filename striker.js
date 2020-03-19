class Striker extends ParentClass{
    constructor(x,y){
       super(x,y,50,50);
       this.image = loadImage("2.png.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,200,100);
    }
}