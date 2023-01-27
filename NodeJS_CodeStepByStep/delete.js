const dbConnect = require('./MongoDB2-1');
const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany({ name: "mi note 5 pro" });
    console.warn(result);
    if(result.acknowledged){
        console.log('Record Deleted');
    }
}
deleteData();