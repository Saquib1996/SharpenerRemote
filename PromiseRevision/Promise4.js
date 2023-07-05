const promiseObj1 = new Promise((resolve, reject) => {
    let req = true;
    if (req == true) {
        resolve([1, 2, 3, 4, 5, 6])
    } else {
        reject("Request Rejected")
    }
}).then(
    (value) => { console.log(value) },
    // (error) => { console.log(error) },
).catch((error)=>{
    console.log("Request Rejected");
})