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
//     fetch('data.txt')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }
//             console.log(res);
//             return res.text()
//         })
//         .then((data) => {
//             console.log(data);
//             document.getElementById('divData').innerText = data;
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

// async function makeRequest() {
//     try {
//         console.log('Button Clicked');
//         const res = await fetch('data1.txt')
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         const data = await res.text()
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
        const res = await fetch('data.txt')
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res)
        const data = await res.text()
        console.log(data);
        document.getElementById('divData').innerText=data;
    }
    catch (error) {
        console.log(error);
    }
}
