import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import routers from './routes/index'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views',path.join(__dirname, 'views'))
server.set('mustache',mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(routers);

server.use((req,res)=>{
    res.send('Pagina não existe')
})

server.listen(process.env.PORT);