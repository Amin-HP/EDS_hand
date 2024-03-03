class Chain{
    constructor(x, y, length, stiffness, string, radius) {
        let prev = null;
        this.particles = [];
        this.engine = Engine.create();
        this.world = this.engine.world;
        for (let i = 0; i < string.length; i++) {
            let fixed = false;
            if (!prev) {
                fixed = true;
            }
            let p = new Particle(i * length + x, y, radius, string[i], fixed, this.world);
            this.particles.push(p);
            if (prev) {
                fixed = true;
                let options = {
                    bodyA: p.body,
                    bodyB: prev.body,
                    length: length,//20
                    stiffness: stiffness //0.9
                }

                let constraint = Constraint.create(options);
                World.add(this.world, constraint);
            }
            prev = p;
        }
    }

    show(isVisible) {
        Engine.update(this.engine);
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show(isVisible);
        }
        
    }
    update(x, y){
        if(this.particles.length > 0){
            this.particles[0].update(x, y);
        }
    }
}