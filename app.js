const express= require("express")
const nameRouter =require("./routers/name")
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors');
app.use(cors());


app.use(express.json())

app.use("/name", nameRouter)


app.get("/", (req, res) => {
    res.json({ message: "Hello World." });
  });


app.use((err, res, next)=>{
    console.log(err.message, err.stack)
    res.status(err.statusCode||500).json({message:err.message})
    return

})

app.listen(3000, ()=>console.log("A (Https) server fut a 3000-es porton!"));
