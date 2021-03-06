class Drops {
  constructor(x, y, r) {
    var options = {
     isStatic: false,
     'friction': 0.1
   }
   this.x = x;
   this.y = y;
   this.body = Bodies.circle(x, y, r, options);
   World.add(world, this.body);
  }

  update() {
    if(this.body.y > height) {
      Matter.Body.setPosition(this.body, {x:random(0, 800), y:random(0, 400)});
    }
  }
  
  display() {
   var dropPos = this.body.position;
   var maxDrops = 100;

   push();
   
   for(var i=0; i<maxDrops; i++) {
     Drops.push(new createDrop(random(0, 400), random(0,400)));
   }

   translate(dropPos.x, dropPos.y);
   rectMode(CENTER);
   ellipse(this.x, this.y, this.r);
   pop();
 }
}