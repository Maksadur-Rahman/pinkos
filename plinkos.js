class Plinkos{

    constructor(x,y,r){
        var opction={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,r,opction);
        this.r=r;
        World.add(world,this.body);


    }
    display(){

        var pos=this.body.position;

        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body,0,0,this.r);
        pop()
    }
}