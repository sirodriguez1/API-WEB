const Router = require('koa-router');
const bcrypt = require('bcrypt');
const authUtils = require('../lib/auth/jwt')

const router = new Router();


router.get("users.list","/", authUtils.isAdmin, async(ctx)=>{
    try{
        const users = await ctx.orm.User.findAll();
        ctx.body = users;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.get("user.show","/:id",async(ctx)=>{
    try{
        const user = await ctx.orm.User.findOne({where:{id:ctx.params.id}});
        ctx.body = user;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.post("users.create","/",async(ctx)=>{
    try{
        ctx.request.body.password = await bcrypt.hash(ctx.request.body.password, 10);
        
        const user = await ctx.orm.User.create(ctx.request.body);
        ctx.body = user;
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.delete("users.delete", "/:id", authUtils.isAdmin, async(ctx) => {
    try{
        const user = await ctx.orm.User.findOne({ where: { id: ctx.params.id } });
        if(user) {
            await user.destroy();
            ctx.body = { message: 'User successfully deleted' };
            ctx.status = 200;
        } else {
            ctx.body = { message: 'User not found' };
            ctx.status = 404;
        }
    } catch(error){
        ctx.body = error;
        ctx.status = 500;
    }
})





module.exports = router;