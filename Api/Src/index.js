    import 'dotenv/config'
    import express from 'express'
    import cors from 'cors'
    import vilao from './controller/vilaoContoller.js'

    const server = express();

    server.use(cors());

    server.use(express.json());
    server.use(vilao);
    server.listen(process.env.PORT, () => 
                    console.log(`API está online na porta ${process.env.PORT}`));