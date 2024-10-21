import mongoose from "mongoose";
import { app } from "./app";
import config from "./config";
const port = 3000


async function main() {
    try {
        await mongoose.connect(config.db_url as string);
  

        app.listen(port, () => {
            console.log(`Example app listening on port ${config.port}`)
          })
          
    } catch (error) {
        console.log(error);
        
    }
 


  }


  main()