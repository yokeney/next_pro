const Koa = require("koa");
const next = require("next");
const Router=require("koa-router");
const dev = process.env.NOVE_ENV !== "production";
const app = next({ dev });
const handle=app.getRequestHandler();//处理http请求响应
app.prepare().then(()=>{
    const  server=new Koa()
    const router=new Router();
    router.get('/a/:id',async (ctx)=>{
        const id=ctx.params.id;
        await handle(ctx.req,ctx.res,{
            pathname:'/a',
            query:{id}
        })
        ctx.respond=false
    })
    server.use(router.routes())
    server.use(async (ctx,next)=>{
        await handle(ctx.req,ctx.res);
        ctx.respond=false
    })
    server.listen(3000,()=>{
        console.log('koa server listening on 3000')
    })
})
