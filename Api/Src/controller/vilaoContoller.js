    import { Router } from 'express'
    import { adcionarVilao, ListarTodosVilao } from '../repository/vilaoRepository.js'
    

    const server = Router();

    server.post ('/vilao', async (req, resp) => {
        try
        {
            const novovilao = req.body;
            const resposta = await adcionarVilao(novovilao);
            
            resp.send(resposta)

        }
        catch (err) {
            resp.status(400).send({
                erro:err.message
            })
        }
    })

    server.get('/vilao', async (req, resp) => {
        try {
            const resposta = await ListarTodosVilao();
            resp.send(resposta);
        }
        catch (err) {
            resp.status(400).send({
                erro:err.message
            })
        }
    })

    export default server;