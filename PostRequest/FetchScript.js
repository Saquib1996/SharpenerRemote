document.getElementById('btn').addEventListener('click', makeRequest);

// Promise Then

// function makeRequest() {
//     console.log('Button clicked');
//     const myInit = {
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:'{"name":"Saquib Hassan","job":"Web Development"}'
//     }
//     fetch('https://reqres.in/api/users',myInit)
//     .then((res) => {
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log('error')
//     })
// }

// Async and Await

async function makeRequest() {
    try {

        console.log('Button clicked');
        const myInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{"name":"Saquib Hassan","job":"Web Development"}'
        }
       const res = await fetch('https://reqres.in/api/users', myInit)
       if(!res.ok){
        throw Error(res.statusText)
       }
       const data=await res.json()
    } catch (error) {

    }

}
