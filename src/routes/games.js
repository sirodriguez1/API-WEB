const Router = require('koa-router');
const authUtils = require('../lib/auth/jwt')

const router = new Router();

router.post("games.create","/create",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.create(ctx.request.body);
        ctx.body = game;
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.delete("games.delete", "/:id", authUtils.isAdmin, async(ctx) => {
    try{
        const game = await ctx.orm.Game.findOne({ where: { id: ctx.params.id } });
        if(game) {
            await game.destroy();
            ctx.body = { message: 'Game successfully deleted' };
            ctx.status = 200;
        } else {
            ctx.body = { message: 'Game not found' };
            ctx.status = 404;
        }
    } catch(error){
        ctx.body = error;
        ctx.status = 500;
    }
})

router.get("games.list","/list", authUtils.isAdmin, async(ctx)=>{
    try{
        const games = await ctx.orm.Game.findAll();
        ctx.body = games;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.get("games.show","/show/:id",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        ctx.body = game;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.post("games.newstatus","/newstatus/:id",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        await game.update({status:ctx.request.body.status});
        ctx.body = game;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.post("games.newplayerscount","/newplayerscount/:id",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        await game.update({playerCounter:ctx.request.body.playerCounter});
        ctx.body = game;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.post("games.newwinner","/newwinner/:id",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        await game.update({winner:ctx.request.body.winner});
        ctx.body = game;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.post("games.newturn","/newturn/:id",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        await game.update({turn:ctx.request.body.turn});
        ctx.body = game;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})







router.get("games.gameboard","/gameboard/:id",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        console.log(game);
        const gameboard = game.gameBoard;
        ctx.body = gameboard;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.post("games.updateposition","/gameboard/updateposition/:playerId/:id", async(ctx)=>{
    try {
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        console.log(game);
        const player = await ctx.orm.Player.findOne({where:{id:ctx.params.playerId}});
        console.log(player);

        const gameboard = JSON.parse(game.gameBoard); 

        gameboard.jugadores[ctx.params.playerId].casilla = player.position;

        game.gameBoard = JSON.stringify(gameboard); 

        await game.save();

        ctx.body = game;
        ctx.status = 200;
    } catch(error) {
        console.log(error);
        ctx.body = error;
        ctx.status = 400;
    }
});







router.post("games.newplayerid","/gameboard/newplayerid/:id/:newId",async(ctx)=>{
    try{
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}});
        const newId = parseInt(ctx.params.newId);
        const gameboard = game.gameBoard;

        let oldId = null;
        if(gameboard.jugadores.hasOwnProperty("J1")) {
            oldId = "J1";
        } else if(gameboard.jugadores.hasOwnProperty("J2")) {
            oldId = "J2";
        } else if(gameboard.jugadores.hasOwnProperty("J3")) {
            oldId = "J3";
        } else if(gameboard.jugadores.hasOwnProperty("J4")) {
            oldId = "J4";
        }

        if(oldId && oldId != newId) {
            const playerData = {...gameboard.jugadores[oldId]};
            delete gameboard.jugadores[oldId];
            gameboard.jugadores[newId] = playerData;
            await game.update({gameBoard: gameboard});
            ctx.body = game;
            ctx.status = 200;
        } else if (oldId === newId) {
            ctx.body = "The old ID and the new ID are the same. No changes were made.";
            ctx.status = 400;
        } else {
            ctx.body = "No players found to update";
            ctx.status = 404;
        }

    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
});


    








module.exports = router;