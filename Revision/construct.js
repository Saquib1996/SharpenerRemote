// function nikeProduct(n,t,p){
//     let obj = {
//         name:n,
//         type:t,
//         price:p
//     };
//     // return obj;
// }

// let x = nikeProduct('Shoe','sneaker',2000);
// console.log('x:',x);

// function nikeProduct(n,t,p){
//     let obj = {};
//     obj.name = n;
//     obj.type = t;
//     obj.price = p;
//     return obj;
// }

// let x = nikeProduct('shoe','sneaker',2000);
// console.log('x:',x);

// function NikeProduct(n,t,p){
//     this.name = n;
//     this.type = t;
//     this.price = p;
// }

// let y = new NikeProduct('shoe','sneaker',2000);
// console.log(y);

let bedroom = {
    name:"Bedroom"
};

let LR = {
    name:"Living Room"
};

let kitchen = {
    name:'Kitchen',
    cookFood:function(order){
        console.log(`Serving ${order} in ${this.name}`);
    }
}
kitchen.cookFood("maggie");
kitchen.cookFood.call(bedroom,"Biryani");
kitchen.cookFood.call(LR,"Pulav");


// let bedroom = {
//     name:"Bedroom"
// };

// let kitchen = {
//     name:'Kitchen',
//     cookFood:function(order){
//         console.log(`Serving ${order} in ${this.name}`);
//     }
// }
// kitchen.cookFood("maggie");
// kitchen.cookFood.call(bedroom,"Biryani");