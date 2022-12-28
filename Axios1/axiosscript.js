document.querySelector('#btn').addEventListener('click', makeRequest)
// function makeRequest(){
//     console.log('Button Clicked');
//     config={
//         method:'get',
//         url:'data.txt'
//     }
//     const promiseObj=axios(config)
//     promiseObj.then((res) => {
//         console.log(res);
//         console.log(res.data);
//
//     })
// }

//  Using Shorthand

// function makeRequest() {
//     console.log('Button Clicked');
//     axios.get('data.txt')
//     .then((res) =>{
//         console.log(res);
//         console.log(res.data);
//     })
// }

// using Shortand(we can skip using get after axios because it is by default)

// function makeRequest() {
//     console.log('Button Clicked');
//     axios('data.txt')
//     .then((res) =>{
//         console.log(res);
//         console.log(res.data);
//     })
// }


// function makeRequest() {
//         console.log('Button Clicked');
//         axios('data1.txt',{'method':'get'})
//         .then((res) =>{
//             console.log(res);
//             console.log(res.data);
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//         .then(()=>{
//             console.log('Clean');
//         })
//     }

//
// Showing data in browser 

// function makeRequest() {
//     console.log('Button Clicked');
//     axios('data.txt',{'method':'get'})
//     .then((res) =>{
//         console.log(res);
//         console.log(res.data);
//         document.querySelector('#divData').innerText=res.data
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// Using Async and Await



// async function makeRequest() {
//     console.log('Button Clicked');
//     const res = await axios('data.txt', { 'method': 'get' })
//     console.log(res);
//     console.log(res.data);
//     document.querySelector('#divData').innerText=res.data
// }

// Async and Await | Error handling

async function makeRequest() {
    try {
        console.log('Button Clicked');
        const res = await axios('data.txt', { 'method': 'get' })
        console.log(res);
        console.log(res.data);
        document.querySelector('#divData').innerText = res.data
    } catch (error) {
        console.log(error);
    }
}