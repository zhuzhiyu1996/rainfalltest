<template>
    <div class="wrap">
        <!-- 左半部分图文信息 -->
        <div class="details"></div>

        <!-- 右边登录注册部分 -->
        <!-- login -->
        <div class="login">
            
        </div>

        <!-- register -->
        <div class="register"></div>

    </div>
</template>


<script>
export default {
    data () {
        return{}
    }
}
</script>


<style lang="less" scoped>

    .wrap {
        width: 900px;
        height: 500px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -450px;
        margin-top: -250px;
        display: flex;
        border-radius: 8px;
        box-shadow:
            0 2px 30px rgba(0, 0, 0, .1), 
            0 30px 72px 5px rgba(0, 0, 0, .1);
        overflow: hidden;
        // 左半部分图文信息
        .details {
            width: 550px;
            height: 500px;
            background-color: rgba(63, 115, 206, .1);
        }
        // 右边登录注册部分
        .login {
            width: 350px;
            height: 500px;
            background-color: rgba(63, 115, 206, .3);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

</style>


