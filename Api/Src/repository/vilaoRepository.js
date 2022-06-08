    import { con } from './connection.js'

    //POST
    export async function adcionarVilao (vilao){
        const comando = 
        `insert into (tb_vilao, ds_maldades, bt_poder )
        values(?,?,?)`;

        const [resposta] = await con.query(comando, [vilao.nome, vilao.maldades, vilao.poder])
        vilao.id = resposta.InsertID;
        return vilao;
    }


    //GET
    export async function ListarTodosVilao(){
        const comando = 
        `select id_vilao,
        nm_vilao,
        ds_maldades,
        bt_super_poder
        from tb_vilao`

        const [linhas] = await con.query(comando);
        return linhas;
    }