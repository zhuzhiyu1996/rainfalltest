// 加入了LOCALURL常量的声明，用于存储本地请求路径，和在URL里增加了registerUser接口的地址配置。

const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    // getShoppingMallInfo:BASEURL+'index',
    // getGoodsInfo:BASEURL+'getGoodsInfo', 
    registerUser:LOCALURL+'user/login',   //用户注册接口
}
// 形成模块 暴露出去
module.exports = URL