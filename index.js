import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const dbURL = `mongodb+srv://admin:admin@cluster0.rygruxs.mongodb.net/test`

const app = express();

app.use(express.json());
app.use(fileUpload({}))
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(dbURL);
        app.listen(PORT, () => console.log('server on' + PORT));
    } catch (e) {
        console.log(e);
    }

}

startApp()
