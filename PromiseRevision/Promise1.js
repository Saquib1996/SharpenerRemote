// Producing Code

const promiseObj = new Promise((resolve,reject) =>{
    let req = false;
    if(req == true){
        resolve('Request Success')
    }else{
        reject('Request Rejected')
    }
});

// Consuming Code

promiseObj.then(
    (value)=>{console.log(value);},
    (error)=>{console.log(error);},
);
// promiseObj.then((value)=>{
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error)
// })