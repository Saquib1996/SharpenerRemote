function makeRequest(e) {
    e.preventDefault()
    let name=document.querySelector('#name').value;
    let Job=document.querySelector('#job').value;
    console.log('Button clicked');
    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:name,job:Job})
    }
    console.log('Body:',myInit.body);
    fetch('https://reqres.in/api/users', myInit)
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log('error')
        })
}