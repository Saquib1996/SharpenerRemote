const dbConnect = require('./MongoDB2-1');
const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: 'U10' }, {
        $set: { name: 'Rimmi32' }
    }
    );
    console.warn(result);
}

updateData();