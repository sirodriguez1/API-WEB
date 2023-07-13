const Router = require('koa-router');

const router = new Router();

router.post("players.create","/",async(ctx)=>{
    try{
        
        if (!ctx.request.body.userId) {
            ctx.body = { message: 'userId es requerido' };
            ctx.status = 400;
            return;
        }

        
        const game = await ctx.orm.Game.findOne({ where: { status: 'waiting' } });
        if (!game) {
            ctx.body = { message: 'No hay juegos disponibles' };
            ctx.status = 400;
            return;
        }

        
        const player = await ctx.orm.Player.create({ ...ctx.request.body, gameId: game.id });
        
        
        await game.increment('playersCount');
        if (game.playersCount + 1 === 4) {
            await game.update({ status: 'in progress' });
        }

        ctx.body = player;
        ctx.status = 201;
    } catch(error){
        console.error(error);
        ctx.body = error;
        ctx.status = 400;
    }
})



router.post("players.newposition","/newposition/:gameId/:id", async(ctx)=>{
    try{
        const player = await ctx.orm.Player.findOne({where:{id:ctx.params.id}});
        let newPosition = player.position + ctx.request.body.position; 

        if (newPosition > 64) {
            newPosition = 64 - (newPosition - 64); 
        }

        
        const game = await ctx.orm.Game.findOne({where: {id: ctx.params.gameId}});
        const gameBoard = JSON.parse(game.gameBoard);

        let message = `El jugador se ha movido a la casilla ${newPosition}`;

        
        if (gameBoard.escaleras[newPosition]) {
            newPosition = gameBoard.escaleras[newPosition].fin;
            message = `¡El jugador encontró una escalera y ha avanzado a la casilla ${newPosition}!`;
        }

        
        if (gameBoard.serpientes[newPosition]) {
            newPosition = gameBoard.serpientes[newPosition].fin;
            message = `¡Oh no! El jugador ha caído en una serpiente y ha retrocedido a la casilla ${newPosition}.`;
        }

        
        if (newPosition === 64) {
            message = `¡Felicidades! El jugador ha llegado a la casilla 64 y ha ganado el juego.`;
        }

        await player.update({position: newPosition});
        ctx.body = {
            player,
            message
        };
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})





router.get("players.list","/",async(ctx)=>{
    try{
        const players = await ctx.orm.Player.findAll();
        ctx.body = players;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.get("players.show","/:id",async(ctx)=>{
    try{
        const player = await ctx.orm.Player.findOne({where:{id:ctx.params.id}});
        ctx.body = player;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})


module.exports = router;

    