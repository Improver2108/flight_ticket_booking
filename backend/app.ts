import express,{Application,Request,Response,NextFunction} from "express";
import cors from 'cors';

const app:Application=express();

app.use(express.json());
app.use(cors());

app.get('/',(req:Request,res:Response)=>{
    res.send('hey');
})
app.get('/flights/search/:fromCity/:toCity/:adult/:child/:infant/:class/:fromDate',(req:Request,res:Response)=>{
    res.send(req.params);
})
app.get('/flights/search/:fromCity/:toCity/:adult/:child/:infant/:class/:fromDate/:toDate',(req:Request,res:Response)=>{
    res.send(req.params);
})


app.listen(5000,()=>console.log('server running'))