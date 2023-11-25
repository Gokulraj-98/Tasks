class Circle{
    constructor(radius =1.0,color='red'){
        this.radius=radius;
        this.color=color;
    }
    
    getArea(){
        return (3.141*this.radius*this.radius)
    }
    getCircumference(){
         return 3.141*2*this.radius
    }
}

const result = new Circle(2.4,' ');
console.log(result.getArea())
console.log(result.getCircumference())
