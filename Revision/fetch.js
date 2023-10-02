// let x = fetch();
// console.log(x);

const url = "https://reqres.in/api/users?page=2";
fetch(url).then(function(res){
    console.log(res);
})