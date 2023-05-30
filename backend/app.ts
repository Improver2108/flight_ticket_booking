import express,{Application,Request,Response,NextFunction,} from "express";
import cors from 'cors';

const app:Application=express();

app.use(cors());
const jsonParser=express.json();
const urlencoded=express.urlencoded({extended:false})

app.get('/',(req:Request,res:Response)=>{
    res.send('hey');
})
app.get('/flights/search/:fromCity/:toCity/:adult/:child/:infant/:class/:fromDate',(req:Request,res:Response)=>{
    res.json(req.params)
})

app.post('/getFlightDetals',jsonParser,(req:Request,res:Response)=>{
    res.send(req.body);
})


app.listen(5000,()=>console.log('server running'))