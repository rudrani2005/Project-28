class Luncher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB;
        this.luncher = Constraint.create(options);
        World.add(world, this.luncher);
    }
    attach(body){
        this.luncher.bodyA = body;
    }
    fly(){
        this.luncher.bodyA = null;

    }

    display(){
        if(this.luncher.bodyA){
            var pointA = this.luncher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
        
    }
    
}
