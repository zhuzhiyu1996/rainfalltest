<template>
    <div class="wrap">
        <!-- 左半部分图文信息 -->
        <div class="details">
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide><i class="iconfont icon-tubiao-"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san16"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san17"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yusan10"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san15"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yusan9"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-zhangxuyangcansaitubiao_huaban"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san14"></i></swiper-slide>
            </swiper>
            <swiper :options="swiperOption2">
                <swiper-slide><i class="iconfont icon-san13"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san12"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-ziyuan"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san11"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san10"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san9"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yiji-shujubaohusan"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yusan8"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san8"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-sanbaoxian-"></i></swiper-slide>
            </swiper>
            <swiper :options="swiperOption3">
                <swiper-slide><i class="iconfont icon-yusan6"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yusan01"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon--yusan"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san7"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-gudandelan_yusan"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yusan5"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yusan4"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-xinyongzusan"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-_icon_yusan"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san4"></i></swiper-slide>
            </swiper>
            <swiper :options="swiperOption4">
                <swiper-slide><i class="iconfont icon-piaoliusanicon-"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san3"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-san2"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-sansan"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-sence"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-sanxian"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-umbra"></i></swiper-slide>
                <swiper-slide><i class="iconfont icon-yusan-"></i></swiper-slide>
            </swiper>
        </div>

        <!-- 右边登录注册部分 -->
        <!-- login -->
        <div class="login" v-if="showLogin">
            <img class="login-logo" src="../../assets/logo11.png" alt="logo">
            <i-input prefix="ios-contact-outline"
                     clearable
                     placeholder="请输入用户名" 
                     style="width: 280px; height: 60px; margin-top:24px"
                     v-model="username" />
            <i-input prefix="ios-lock-outline"
                     clearable
                     placeholder="请输入密码"
                     style="width: 280px"
                     v-model="password" />
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
                     v-model="username" 
                     style="width: 280px; height: 60px; margin-top:24px" />
            <i-input prefix="ios-lock-outline"
                     clearable
                     placeholder="请设置密码"
                     v-model="password"
                     style="width: 280px" />
            <i-button style="width: 280px; margin-top: 48px"
                      class="register-btn"
                      @click="axiosRegisterUser">注册</i-button>
            <p class="register-tips" @click="ToLogin">已有账号？点我登录</p>
        </div>
    </div>
</template>


<script>

import axios from 'axios'
// 引入服务接口API
import url from '@/serviceAPI.config.js'

export default {

    data () {
        return{
            showLogin: true,
            showRegister: false,
            username:'',
            password:'',
            // 轮播组件
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 30,
                freeMode: true,
                autoplay: {
                        delay: 3200,
                        disableOnInteraction: false
                },
                loop: true
            },
            swiperOption2: {
                slidesPerView: 5,
                spaceBetween: 30,
                freeMode: true,
                autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                },
                loop: true
            },
            swiperOption3: {
                slidesPerView: 5,
                spaceBetween: 30,
                freeMode: true,
                autoplay: {
                        delay: 3200,
                        disableOnInteraction: false
                },
                loop: true
            },
            swiperOption4: {
                slidesPerView: 4,
                spaceBetween: 30,
                freeMode: true,
                autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                },
                loop: true
            }
        }
    },
    methods: {
        ToRegister(){
            this.showRegister = true
            this.showLogin = false
            this.$Message.success({
                content: "注册成功!",
                duration: 2,
                top: 70
            });
        },
        ToLogin(){
            this.showRegister = false
            this.showLogin = true
        },
        //*********axios注册用户方法********
        axiosRegisterUser(){
                axios({
                url: url.registerUser,
                method: 'post',
                data:{
                    userName:this.username,
                    password:this.password 
                }
                })
                .then(response => {
                    console.log(response)
                    //如果返回code为200，代表注册成功，我们给用户作Toast提示
                    if(response.data.code == 200){
                        this.$Message.axiosRegisterUser('注册成功')
                    }else{
                        console.log(response.data.message)
                        this.$Message.axiosRegisterUser('注册失败')
                    }
                        console.log(response.data.code)
                })
                .catch((error) => {   
                    this.$Message.axiosRegisterUser('注册失败')  
                })
            
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
            padding: 15px;
            .swiper-container {
                height: 120px;
                margin-top: 15px;
                margin-left: 26px;
                i {
                    font-size: 18px;
                }
            }
            .swiper-container:first-child, .swiper-container:last-child {
                margin-left: 50px;
            }
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


