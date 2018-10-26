<template>
 <div class="wrap">
    <!-- 小坏蛋，你还没下过单呢！ -->
    <div class="tips" v-if="showtips">
        <div class="tips-p">
            小坏蛋，没付过钱就想看人家?
        </div>
        <span class="tips-span">商店这边走</span>
        <span class="iconfont icon-zhuye back-home" @click="Tohome"></span>
    </div>
    <!-- 订单表单 -->
    <div class="order" v-if="showorder">

    </div>
 </div>
</template>


<script>
 export default {
   data () {
     return {
         showtips: true,
         showorder: false
     }
   },
   methods: {
        // 返回主页
        Tohome () {
           this.$router.push({ path: '/' })
        },
        // 显示切换
        Totips(){
            this.showtips = true
            this.showorder = false
        },
        Toorder(){
            this.showtips = false
            this.showorder = true
        }
   },
   components: {

   }
 }
</script>


<style lang="less" scoped>
    .wrap {

        // 小坏蛋，你还没下过单呢！
        .tips {
            width: 30vw;
            height: 300px;
            margin: 160px 35vw;
            text-align: center;
            .tips-p {
                font-size: 18px;
                color: rgba(0, 0, 0, .45);
            }
            .tips-span {
                font-size: 14px;
                color: rgba(0, 0, 0, .45);
            }
            .back-home {
                display: inline-block;
                margin-top: 24px;
                font-size: 48px;
                color: rgba(63, 115, 206, .6);
                cursor: pointer;
            }
        }
    }

</style>

