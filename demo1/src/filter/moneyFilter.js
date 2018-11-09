// 对钱的格式进行过滤
export function toMoney(money){
    let newMoney = money;
    if(newMoney){
        newMoney = newMoney.toFixed(2)
    }else{
        newMoney=0
        newMoney=newMoney.toFixed(2)
    }
    return newMoney
}

// 优化我们的filter通用方法
// export function toMoney(money = 0){
//     return money.toFixed(2)
// }

// 如何引入
// import {toMoney} from '@/filter/moneyFilter.js'

// 在vue文件里编写属性
// filters:{
//     moneyFilter(money){
//         return toMoney(money)
//     }  
// },


// fitler的名字可以随便起，但是你用的toMoney方法，要和你上边引入的一样


// 在template中使用filter
// 直接在使用价格的地方使用{{item.price | moneyFilter}}就可以了。