document.getElementById('btn').addEventListener('click', makeRequest);

// function makeRequest() {
//     console.log('Button Clicked');
//     axios('data.json', { 'method': 'get' })
//         .then((res) => {
//             console.log(res);
//             console.log(res.data.name);
//             console.log(res.data.roll);
//             document.querySelector('#divData1').innerText=res.data.name;
//             document.querySelector('#divData2').innerText=res.data.roll;
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//         .then(() => {
//             console.log('Clean');
//         })
// }

// Async Await | Error Handling

async function makeRequest() {
    try {
        console.log('Button Clicked');
        const res = await axios('data.json', { 'method': 'get' })
        console.log(res);
        console.log(res.data.name);
        console.log(res.data.roll);
        document.querySelector('#divData1').innerText = res.data.name;
        document.querySelector('#divData2').innerText = res.data.roll;
    } catch (error) {
        console.log(error)
    }
}