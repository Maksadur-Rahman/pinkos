class Ground{

    constructor(x,y,width,height){

        var opction={

            isStatic:true,
            'density':0.5,
            'restitution':0.3,
            'friction':0.6
        }

        this.body=Bodies.rectangle(x,y,width,height,opction);
        this.x=x;
        this.y=y;
        World.add(world,this.body);


    }
    display(){

        var pos=this.body.position;

        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("blue");
        rect(this.body,0,0,this.width,this.height);
        pop()
    }
    
}