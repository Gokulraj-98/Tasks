class Circle{
    constructor(radius =1.0,color="red"){
        this.radius=radius;
        this.color=color
    }
    getArea(){
        return 3.14*this.radius*this.radius
    }
    getCircumference(){
        return 3.14*2*this.radius
    }
}

var res = new Circle()
console.log(res.getArea());