import  express  from "express";
import { PORT, mongoDBurl} from "./config.js";
import mongoose from "mongoose";
import router from "./routes.js";
import cors from "cors"
const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors({origin: 'http://localhost:5173'}));

app.use('/books', router)


mongoose
    .connect(mongoDBurl)
    .then((result) => {
        console.log("App is connected to DB");
        app.listen(PORT, ()=> {
            console.log(`App is listening at port: ${PORT} `);
        })
    
    }).catch((err) => {
        console.log("Error in mongoDB connection ", err)
    });