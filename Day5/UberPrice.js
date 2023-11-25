class UberPrice {
    constructor(km) {
        this.km =km;
    }

    getPrice() {
        return `price per km is 20 , 
             The fee for your ride is ${this.km * 20}`;
    }
}
const priceCheck = new UberPrice(25);
console.log(priceCheck.getPrice()); 
