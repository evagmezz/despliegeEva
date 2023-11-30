import {Name} from "./script/test.js";

import express from "express";

import mongoose from "mongoose";

import cors from "cors";

const app = express();

const uri = 'mongodb://root:password@despliegue-mongo:27017/example?authSource=admin';
await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors())
app.use(express.json());

app.get('/example', async (req, res) => {
    const names = await Name.find().select('name').exec();
    const namesArray = names.map(name => name.name);
    res.send(namesArray);
})

app.post('/example', async (req, res) => {
    const name = new Name({name: req.body.name});
    await name.save();
    res.send(name);
})

app.listen(3003, () => {
    console.log('Servidor escuchando en puerto 3003');
})