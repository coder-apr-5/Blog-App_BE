const config=require('./config')
const mongoose=require('mongoose')
const DBURL=config.db.url
mongoose.connect(DBURL)
.then(()=>{
    console.log("Db is connected")
})
.catch((error)=>{
    console.log("db is not connected")
    console.log(error)
    process.exit(1)
})