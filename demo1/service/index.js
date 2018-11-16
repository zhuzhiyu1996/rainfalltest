
const Router = require('koa-router')
let user = require('./appApi/User')

const bodyParser = require('koa-bodyparser')


const cors = require('koa2-cors')

const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init')

// 装载子路由
let router = new Router();
router.use('/user',user.routes())

// 加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

app.use(bodyParser());

app.use(cors())



//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
    // const User = mongoose.model('User')
    // let oneUser = new User({userName:'zzy3', password:'20181117'})
    // oneUser.save().then(()=>{
    //     console.log('插入成功')
    // })
    // let  users = await  User.findOne({}).exec()
    // console.log('------------------')
    // console.log(users)
    // console.log('------------------')

})()


app.use(async(ctx)=>{
    ctx.body = '<h1>Koa2</h1>'
})
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})