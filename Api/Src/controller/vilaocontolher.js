    import { Router } from 'express'
    import { adcionarVilao, ListarTodosVilao } from '../repository/vilaoREpository.js'

    const server = Router();

    server.post ('/vilao', async (req, resp) => {
        try
        {
            const novovilao = req.body;
            const inserirVilao = await adcionarVilao(novovilao);
            
            resp.send(inserirVilao)

        }
        catch (err) {
            resp.send(400).send({
                erro:err.message
            })
        }
    })

    server.get('/vilao', async (req, resp) => {
        try {
            const resposta = await ListarTodosVilao();
            resp.send(resposta);
        }
        catch (error) {
            resp.status(400).send({
                erro:message
            })
        }
    })

    export default server;