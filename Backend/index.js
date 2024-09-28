import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";
import contactRoutes from "./Route/contact.route.js"

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.mongoDB;
// connect to mongoDB
try{
  mongoose.connect(URI,{
    // this is included by default in new version
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
}
catch(error){
  console.log("Error: ",error);
}

app.use(express.urlencoded({ extended: true }));

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute)
app.use('/user',contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})