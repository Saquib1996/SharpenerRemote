const dbConnect = require('./MongoDB2-1')
// console.log(dbConnect());

// dbConnect().then((res) => {
//     res.find({ name: 'U10' }).toArray().then((data) => {
//         console.warn(data);
//     })
// })

// Using Async/Await

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();