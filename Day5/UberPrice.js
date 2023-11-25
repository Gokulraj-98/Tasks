class UberPrice{
    constructor(km = 1){
        this.km=km;
    }
    getPrice(){
        return `Minimum ride price is Rs.20, Your current ride price is ${this.km*20}`
    }
    
}

var res = new UberPrice(5)
console.log(res.getPrice());