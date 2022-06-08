    import express from 'express'
    import cors from 'cors'
    import 'dotenv /config'
    import vilaoController from './controller/vilaocontolher.js'

    const server = express();

    server.use(cors());
    server.use(express.json());
    server.use(vilaoController);
    server.listen(process.env.PORT, () => 
                    console.log(`API está online na porta ${process.env.PORT}`));