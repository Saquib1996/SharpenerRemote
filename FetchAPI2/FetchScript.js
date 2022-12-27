document.getElementById("btn").addEventListener('click', makeRequest)

// function makeRequest() {
//     console.log('Button Clicked');
//     const promiseObj = fetch('data.txt')
//     console.log(promiseObj);
//     promiseObj.then((res) => {
//         console.log(res);
//         return res.text()
//     })
//         .then((data) => {
//             console.log(data);
//         })
// }

// Promise .then

// function makeRequest() {
//     console.log('Button Clicked');
//     fetch('data.json')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }
//             console.log("Res",res);
//             const dt=res.json()
//             console.log("DT",dt);
//             return dt;
//         })
//         .then((data) => {
//             console.log("Data",data);
//             console.log(data.Name);
//             console.log(data.Roll);
//             document.getElementById('divData1').innerText = data.Name;
//             document.getElementById('divData2').innerText = data.Roll;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// Async Await

// async function makeRequest() {
//     console.log('Button Clicked');
//     const res = await fetch('data.txt')
//     console.log(res)
//     const data = await res.text()
//     console.log(data);
// }

//  Async Await Error handling

//  async function makeRequest() {
//     try {
//         console.log('Button Clicked');
//         const res = await fetch('data.json')
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         const data = await res.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// Async and Await | Showing data in browser

async function makeRequest() {
    try {
        console.log('Button Clicked');
        const res = await fetch('data.json')
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res)
        const data = await res.json()
        console.log(data);
        document.getElementById('divData1').innerText=data.Name;
        document.getElementById('divData2').innerText=data.Roll;
    }
    catch (error) {
        console.log(error);
    }
}
