import express, { application } from "express";
import logger from "morgan";
import cors from "cors";
import compression from "compression";

import shoppingListRouter from "./routes/shoppingList.js";
// const PORT = 3005;
const app = express();
//compress all responses
app.use(compression())

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/items", shoppingListRouter);


// app.listen(PORT, ()=>{console.log(`This server is running on ${PORT}`)})

export default app;
