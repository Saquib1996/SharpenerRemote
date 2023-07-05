// const promiseObj = new Promise((resolve, reject) => {
//     let num = 10;
//     resolve(num)
// }).then(
//     (value) => {
//         console.log(value);
//         return value + 10
//     }
// ).then(
//     (value) => { console.log(value); }
// )

// function find(n){
// if(n===0){
//     return 1;
// }
// let answer = 0;

// if(n%2==0){
//     answer += find(n-2)
// }else{
//     answer += find(n-1)+n;
//     return answer;
// }
// }

// console.log(find(0));

/*******************************************************************************************************************/

// Async/Await



// async function harry(){
//     return 5;
// }

// harry().then((value) => {
//     console.log(value);
// })

async function weather(){

    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('25 Degree')
        }, 1000);
    })
    let bangloreWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('20 Degree')
        }, 8000);
    })

    // delhiWeather.then((value) =>{
    //     console.log(value);
    // })
    // bangloreWeather.then((value) =>{
    //     console.log(value);
    // })

    let delhiW = await delhiWeather;
    let bangloreW = await bangloreWeather;

}
console.log(`Welcome to weather control room`);
let a=weather();
console.log(a);
