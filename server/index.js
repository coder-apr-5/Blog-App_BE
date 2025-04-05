const app=require('./app')
const config=require("./config/config")
const port=config.app.port;
const hostname='127.0.0.1'



app.listen(port,hostname,()=>{
     console.log(`My server is running at http://${hostname}:${port}`)
    
})
