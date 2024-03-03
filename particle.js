class Particle{
    constructor(x, y, r, char, fixed, world) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.char = char;
        let options = {
            friction: 0,
            restitution: 0.95,
            isStatic: fixed
        }
        this.body = Bodies.circle(this.x, this.y, this.r,  options);
        Composite.add(world, this.body);
    }

    show(isVisible) {
        let pos = this.body.position;
        let angle = this.body.angle;
        if(isVisible){
            push();
            translate(pos.x, pos.y);
            // rotate(angle);
            rectMode(CENTER);
            strokeWeight(1);
            stroke(0)
            noFill();
            textAlign(CENTER,CENTER);
            textSize(this.r * 2.2);
            // ellipse(0, 0, this.r);
            
            noStroke();
            fill(255 , 60);
            text(this.char, this.r / 4 + 1, 1);
            fill(0);
            text(this.char, this.r / 4, 0);
            pop();
        }
       
    }
    update(x, y){
        Matter.Body.set(this.body, "position", {x, y})
    }
}