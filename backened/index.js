import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOptions = {
    origin :'http//localhost:5173',
    credentails:true
}

app.use(cors(corsOptions));

const PORT =  5000

app.listen(PORT ,  ()=>{
    console.log(`Server running at port ${PORT}`);
})