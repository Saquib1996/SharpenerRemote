document.getElementById('btn').addEventListener('click', makeRequest);

// | Promise .then | Single Data | Showing data in Browser |

// function makeRequest() {
//     console.log('Button Clicked');
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }

//             return res.json();
//         })
//         .then((data) => {
//             console.log('Data:', data);
//             document.getElementById('pid').innerText = `ID:----${data.id}`;
//             document.getElementById('title').innerText = `Title:----${data.title}`;
//             document.getElementById('body').innerText = `Body:----${data.body}`;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// | Promise .then | Multiple Data |

// function makeRequest() {
//     console.log('Button Clicked');
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }

//             return res.json();
//         })
//         .then((data) => {
//             console.log('Data:', data);
//             data.forEach((el)=>{
//                 // document.getElementById('pid').innerText = `ID:----${el.id}`;
//                 // document.getElementById('title').innerText = `Title:----${el.title}`;
//                 // document.getElementById('body').innerText = `Body:----${el.body}`;
//                 console.log("ID:",el.id);
//                 console.log("Title:",el.title);
//                 console.log("Body:",el.body);
//             })

//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// | Promise .then | Multiple Data | Showing data in Browser |

// function makeRequest() {
//     console.log('Button Clicked');
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }

//             return res.json();
//         })
//         .then((data) => {
//             console.log('Data:', data);
//             data.forEach((el) => {
//                 let fbody = document.getElementById('allPost')
//                 let div1 = document.createElement('div')
//                 div1.innerText = `ID:----${el.id}`
//                 let div2 = document.createElement('div')
//                 div2.innerText = `Title:----${el.title}`
//                 let div3 = document.createElement('div')
//                 div3.innerText = `Body:----${el.body}`
//                 fbody.append(div1, div2, div3);
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// | Promise .then | Multiple Data | Showing data in Browser(Another Method) |

// function makeRequest() {
//     console.log('Button Clicked');
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }

//             return res.json();
//         })
//         .then((data) => {
//             console.log('Data:', data);
//             let output = document.getElementById('allPost')
//             data.forEach((el) => {
//                 output.innerHTML +=
//                     `<div>ID: ${el.id}</div>
//                 <div>Title: ${el.title}</div>
//                 <div>Body: ${el.body}</div> <hr>
//                 `
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// | Async and Await | Multiple Data | Showing data in Browser(Another Method) |

async function makeRequest() {

    try {
        console.log('Button Clicked');
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (!res.ok) {
            throw Error(res.statusText)
        }
        const data = await res.json()
        console.log('Data:',data);
        console.log('ID:',data.id);
        console.log('Title:',data.title);
        console.log('Body:',data.body);
    } catch (error) {}
}


