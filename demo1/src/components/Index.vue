<template>
    <div class="wrap">
        <!-- 顶部 -->
        <div class="header">
            <!-- logo图片 -->
            <a class="header-logo" @click="startloadingbar" href=""><img src="../assets/logo9.png" alt="logo"></a>
            <!-- 购物车及登录状态icon -->
            <div class="header-icon">
                <dropdown placement="bottom-end" @on-click="changeMenu">
                    <i class="iconfont icon-geren user-icon"></i>
                    <dropdown-menu slot="list">
                        <dropdown-item name="myorder">我的订单</dropdown-item>
                        <dropdown-item name="manage">管理账号</dropdown-item>
                        <dropdown-item name="login">登录/注册</dropdown-item>
                    </dropdown-menu>
                </dropdown>
                <Badge :count="goodsnum">
                    <i class="iconfont icon-gouwuche1 shoppingcart-icon" @click="Toshoppingcart"></i>
                </Badge>
                <i class="iconfont icon-guanyu1 about-icon" @click="draweract = true" type="primary"></i>
            </div>
        </div>

        <!-- 轮播图 -->
        <div class="carousel-content">
            <el-carousel type="card" :interval="113500" height="480px">
                <el-carousel-item v-for="(banner, index) in bannerPicArray" :key="index">
                    <img :src="banner.imageUrl" alt="bannerpic" width="100%">
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- 图表详情 -->
        <div class="chart">
            <div class="rain-rate">
                <Progress vertical :percent="35" />
                <Progress vertical :percent="55" status="active" />
                <Progress vertical :percent="15" status="wrong" />
                <Progress vertical :percent="25" />
            </div>
        </div>

        <!-- “关于”抽屉 -->
        <drawer title="雨幕" placement="left" :closable="false" v-model="draweract">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </drawer>

        <!-- 我的产品介绍 -->
        <div class="myproduct"></div>

        <!-- 商品列表 -->
        <div class="goods">
            <!-- 排序导航 -->
            <div class="goods-sort">
                <i-menu mode="horizontal" active-name="3">
                    <submenu name="3">
                        <template slot="title">
                            <i class="iconfont icon-paixu"></i>
                            排序方式
                        </template>
                            <menu-item name="3-1"><i class="iconfont icon-redu2"></i>热度</menu-item>
                            <menu-item name="3-2"><i class="iconfont icon-shangxin1"></i>上新</menu-item>
                            <menu-item name="3-3"><i class="iconfont icon-jiage"></i>价格</menu-item>
                    </submenu>
                </i-menu>
                <!-- 搜索框 -->
                <div class="search">
                    <i-input search placeholder="请输入例如：文件夹便携伞" />
                </div>
            </div>
            <!-- 商品列表 -->
            <div class="goods-list">
                <div class="goods-list-items" :key="item.id" v-for="item in goodsList">
                    <!-- 商品图片 -->
                    <div class="goods-list-items-img">
                        <img :src="'/static/' + item.productImg" alt="商品图片"/>
                    </div>
                    <!-- 右侧内容区块 -->
                    <div class="goods-list-items-content">
                        <div class="goods-list-items-data">
                            {{item.productName}}
                        </div>
                        <div class="goods-list-items-btn">
                            <span class="iconfont">add</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- 合作伙伴 -->
        <div class="partner">
            <div class="platform">
                <h3 class="myh3">合作平台</h3>
                <div>
                    <i class="iconfont icon-taobao"></i>
                    <i class="iconfont icon-tianmao"></i>
                    <i class="iconfont icon-weibiaoti--"></i>
                </div>
            </div>

            <div class="brand">
                <i-circle
                    :size="270"
                    :trail-width="4"
                    :stroke-width="5"
                    :percent="75"
                    stroke-color="rgba(63, 115, 206, .8)">
                    <div class="demo-Circle-custom">
                        <h1>42,001,776</h1>
                        <p>消费人群规模</p>
                        <span>
                            总占人数
                            <i>75%</i>
                        </span>
                    </div>
                </i-circle>
            </div>
        </div>

        <!-- 返回顶部按钮 -->
        <back-top :bottom="100" :right="40"></back-top>

        <!-- 页脚 -->
        <div class="footer"></div>

    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Index',
  data () {
    return {
        // 轮播图
        bannerPicArray: [
            {imageUrl: '/static/logo9.png'},
            {imageUrl: '/static/logo11.png'},
            {imageUrl: '/static/logo9.png'},
            {imageUrl: '/static/logo11.png'},
        ],
        draweract: false,
        goodsnum: 6,
        goodsList: []
    }
  },
  mounted: function () {
    this.GetGoodslist ();
  },
  methods: {
        startloadingbar () {
            this.$Loading.start();
        },
        // 用户icon下拉菜单选项绑定路由跳转
        changeMenu (name) {
            if (name=="login") {
                this.$router.push({ path: '/login' })
            }else if (name=="myorder") {
                this.$router.push({ path: '/order' })
            }else if (name=="manage") {
                this.$router.push({ path: '/manage' })
            }
        },
        Toshoppingcart () {
            this.$router.push({ path: '/shoppingcart' })
        },
        //调用商品列表mock数据
        GetGoodslist () {
            axios.get ('/goodslist').then((result)=>{
                var res = result.data;
                this.goodsList = res.data.result;
                console.log(this.goodsList);
            })
        }
    }
    
}
</script>

<style lang="less" scoped>
    
    .wrap {
        margin: 0;
        padding: 0;
        border: 0;
        // box-sizing: content-box;
        // 顶部
        .header {
            position: relative;
            height: 100px;
            width: 100vw;
            box-shadow: 0 0 24px rgba(0, 0, 0, .1);
            // logo图片
            .header-logo {
                display: inline-block;
                margin-left: 10px;
                img {
                    width: 97px;
                    border-radius: 100%;
                    border-bottom: 2px solid #b4bdde;
                }
            }
            .header-icon {
                position: absolute;
                right: 32px;
                bottom: 16px;
                display: inline-block;
                // 个人中心icon,购物车icon
                .user-icon, .shoppingcart-icon, .about-icon {
                    font-size: 34px;
                    color: #7b94bd;
                    margin-left: 20px;
                    border-radius: 100%;
                    text-align: center;
                    // text-shadow: 0 0 1px #475669;
                    transition: all ease-in .2s;
                    display: inline-block;
                    width: 38px;
                    height: 38px;
                    line-height: 38px;
                }
                .about-icon {
                    font-size: 31px;
                    line-height: 40px;
                }
                .user-icon:hover, .shoppingcart-icon:hover, .about-icon:hover {
                    color: #ffffff;
                    background-color:  rgba(63, 115, 206, .85);
                }
            }
            
        }

        // 轮播图
        .carousel-content {
            width: 96vw;
            height: 480px;
            margin: 20px 2vw;
            .el-carousel__item .h3 {
                color: #475669;
                font-size: 14px;
                opacity: 0.75;
                width: 90vw;
                line-height: 480px;
                margin: 0;
            }

            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }

        // 图表详情
        .chart {
            background-color: rgba(180, 180, 197, 0.3);
            width: 90vw;
            height: 500px;
            margin: 64px 5vw 20px;
            border-radius: 8px;
            display: flex;
            box-shadow: 0 2px 24px rgba(0, 0, 0, .1);
            .rain-rate {
                flex: 1 50%;
                height: 500px;
                padding: 100px 0 80px 150px;
            }
        }

        // 我的产品介绍
        .myproduct {
            margin: 36px 0vw;
            width: 100vw;
            height: 500px;
            box-shadow: 0 0 56px rgba(100, 100, 100, 0.1) inset;
            background-color: rgba(235, 233, 229, .25);
        }

        // 商品列表
        .goods {
            background-color: rgba(211, 220, 230, .1);
            width: 90vw;
            height: 750px;
            margin: 24px 5vw;
            box-shadow: 0 0 64px rgba(0, 0, 0, .1);
            .goods-sort {
                width: 100%;
                height: 60px;
                box-shadow: 0 0 2px rgba(0, 0, 0, .1) inset;
                position: relative;
                .search {
                    position: absolute;
                    right: 20px;
                    top: 15px;
                    width: 36px;
                    z-index: 999;
                    transition: all ease-in .6s;
                    /deep/.ivu-input:hover, /deep/.ivu-input:focus {
                        box-shadow: 0 0 15px 1px rgba(0, 0, 0, .12);
                        border: 1px solid #dcdee2;
                    }
                    /deep/.ivu-input {
                        border-radius: 25px;
                    }
                }
            }
            .goods-list {
                height: 690px;
                background-color: transparent;
                padding: 12px;
                overflow-y: auto;
                display: flex;
                flex-wrap: wrap;
                .goods-list-items {
                    display: flex;
                    width: 40%;
                    height: 300px;
                    margin: 16px 5%;
                    background-color: rgba(71, 86, 105, .08);
                    border-radius: 6px;
                    .goods-list-items-img {
                        width: 300px;
                        height: 300px;
                        img {
                            display: block;
                            width: 300px;
                            height: 300px;
                        }
                    }
                    // .goods-list-items-content {
                        
                    // }
                }
                .goods-list-items:hover {
                    box-shadow: 0 0 36px rgba(0, 0, 0, .16);
                    transition: all ease-in-out .2s;
                }
            }
        }
        .goods:hover {
                .search {
                    width: 280px;
                    transition: all ease-in-out .3s;
                }
        }

        // 合作平台、品牌
        .partner {
            width: 90vw;
            height: 500px;
            margin: 36px 5vw;
            background-color: transparent;
            display: flex;
            .platform, .brand {
                flex: 1 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: transparent;
                padding: 50px;
                .demo-Circle-custom{
                    & h1{
                        color: #3f414d;
                        font-size: 28px;
                        font-weight: normal;
                    }
                    & p{
                        color: #657180;
                        font-size: 14px;
                        margin: 10px 0 15px;
                    }
                    & span{
                        display: block;
                        padding-top: 15px;
                        color: #657180;
                        font-size: 14px;
                        &:before{
                            content: '';
                            display: block;
                            width: 50px;
                            height: 1px;
                            margin: 0 auto;
                            background: #e0e3e6;
                            position: relative;
                            top: -15px;
                        };
                    }
                    & span i{
                        font-style: normal;
                        color: #3f414d;
                    }
                }
            }
        }

        // 页脚
        .footer {
            width: 100vw;
            height: 400px;
            margin-top: 48px;
            background-color: rgba(123, 148, 189, .3);
            box-shadow: 0 2px 36px rgba(123, 148, 189, .8) inset;
        }

    }
</style>


