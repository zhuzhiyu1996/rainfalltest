<template>
    <div class="wrap">
        <!-- 左半部分图文信息 -->
        <div class="details"></div>

        <!-- 右边登录注册部分 -->
        <!-- login -->
        <div class="login" v-if="showLogin">
            <img class="login-logo" src="../../assets/logo11.png" alt="logo">
            <i-input prefix="ios-contact-outline"
                     clearable
                     placeholder="请输入用户名" 
                     style="width: 280px; height: 60px; margin-top:24px"
                     v-model="userName" />
            <i-input prefix="ios-lock-outline"
                     clearable
                     placeholder="请输入密码"
                     style="width: 280px"
                     v-model="userPwd" />
            <i-button style="width: 280px; margin-top: 48px"
                      class="login-btn">登录</i-button>
            <p class="login-tips" @click="ToRegister">还没账号？点我注册</p>
        </div>

        <!-- register -->
        <div class="register" v-if="showRegister">
            <img class="register-logo" src="../../assets/logo11.png" alt="logo">
            <i-input prefix="ios-contact-outline"
                     clearable
                     placeholder="请设置用户名" 
                     style="width: 280px; height: 60px; margin-top:24px" />
            <i-input prefix="ios-lock-outline"
                     clearable
                     placeholder="请设置密码"
                     style="width: 280px" />
            <i-button style="width: 280px; margin-top: 48px"
                      class="register-btn">注册</i-button>
            <p class="register-tips" @click="ToLogin">已有账号？点我登录</p>
        </div>
    </div>
</template>


<script>

import axios from "axios";

export default {

    data () {
        return{
            showLogin: true,
            showRegister: false,
            userName:'',
            userPwd:''
        }
    },
    methods: {
        ToRegister(){
            this.showRegister = true
            this.showLogin = false
        },
        ToLogin(){
            this.showRegister = false
            this.showLogin = true
        }
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
            box-shadow: 0 0 12px rgba(0, 0, 0, .1) inset;
        }
        // 右边登录注册部分
        .login, .register {
            width: 350px;
            height: 500px;
            background-color: rgba(123, 148, 189, .6);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            .login-logo, .register-logo {
                display: block;
                width: 150px;
                height: 150px;
                margin-top: 16px;
            }
            // 用户名、密码正确/错误
            .username-yes {
                position: absolute;
                right: 10px;
                top: 194px;
                color: rgb(0, 226, 19);
                font-size: 20px;
            }
            .username-no {
                position: absolute;
                right: 12px;
                top: 195px;
                color: rgb(255, 65, 65);
            }
            .userpsw-yes {
                position: absolute;
                right: 10px;
                top: 194px;
                color: rgb(0, 226, 19);
                font-size: 20px;
            }
            .userpsw-no {
                position: absolute;
                right: 12px;
                top: 255px;
                color: rgb(255, 65, 65);
            }
            .login-btn {
                background-color: rgba(63, 115, 206, .4);
                color: #ffffff;
                border: 0;
                letter-spacing: 6px;
            }
            .register-btn {
                color: rgba(63, 115, 206, .6);
                background-color: #ffffff;
                border: 0;
                letter-spacing: 6px;
                // box-shadow: 0 2px 24px rgba(0, 0, 0, .1);
            }
            .login-btn:hover, .register-btn:hover {
                box-shadow: 0 2px 18px 2px rgba(110, 110, 110, 0.1),
                            0 4px 36px 2px rgba(110, 110, 110, 0.1),
                            0 10px 48px rgba(110, 110, 110, 0.1);
            }
            .login-tips, .register-tips {
                margin-top: 24px;
                color: rgba(0, 0, 0, .4);
                font-size: 14px;
                cursor: pointer;
            }
        }
    }

</style>


