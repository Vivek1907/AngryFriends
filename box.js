class Box extends ParentClass{
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("1.png");
    this.Visiblity = 255;
  }

 display(){
   if(this.body.speed < 3){
    var angle = this.body.angle;
    push();
    imageMode(CENTER);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    //fill(color);
    image(this.image,0,0,this.width,this.height);
    pop();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
 score(){
   if(this.Visiblity<0 && this.Visiblity>-10){
      score++;
   }
 }



};