async function test(){
    const Redis=require('ioredis')
    const redis=new Redis({
        port:6378,
        password:123456
    })
    await redis.set('dd',"999")
    const keys=await redis.keys("*")
    const name=await redis.get('dd')
    const expire=await redis.setex('xxx',20,123)
    console.log(expire)
}
test()