function getData() {
    let city = document.getElementById('query').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&api=`;
    fetch(url)
    .then((res)=>{
        return res.json();
    }).then((res) => {
        console.log(res);
        append(res);
    }).catch((error)=>{
        console.log(error);
    })
}

function append(data){
    let container = document.getElementById('container');

    container.innerHTML = null;

    let h2 = document.createElement("h2");
    h2.innerText = data.name;

    let temp = document.createElement("p");
    temp.innerText = `Temperature is = ${data.main.temp}`;
    let min_temp = document.createElement("p");
    min_temp.innerText = `Min Temperature is = ${data.main.temp_min}`;
    let max_temp = document.createElement("p");
    max_temp.innerText = `Max Temperature is = ${data.max.temp_max}`;
    container.append(h2,temp,min_temp,max_temp);


}