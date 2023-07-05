// const promiseObj = new Promise((resolve, reject) => { 
//     let req= 0;
//     if(req == true){
//         resolve("Request Success");
//     }else{
//         reject("Request Rejected");
//     }
// }).then(
//     (value) => {console.log(value);}
// ).catch(
//     (error) => {console.log(error);}
// )


/******************************************************************* */

const promiseObj = new Promise((resolve, reject) => {
    let req = 0;
    if (req == true) {
        resolve("Request Success");
    } else {
        reject("Request Rejected");
    }
}).then(
    (value) => {
        console.log(value);
    }).catch(
        (error) => {
            console.log(error);
        }).finally(
            () => { console.log("Cleaned"); }
        )