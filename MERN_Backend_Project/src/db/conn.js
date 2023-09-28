const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/youtubeRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    console.log(`Connection is Successful`);
}).catch((error)=>{
    console.log(`No Connection`);
    console.log(error.message)

})