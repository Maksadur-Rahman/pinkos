class Division{

    constructor(x,y,w,h){
        var opction={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,w,h,opction);
        this.w=w;
        this.h=h;
        World.add(world,this.body);


    }
    display(){

        var pos=this.body.position;

        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(this.body,0,0,this.w,this.h);
    }
}