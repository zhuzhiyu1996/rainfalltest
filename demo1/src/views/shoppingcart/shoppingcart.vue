<template>
    <div class="wrap">
        <!-- 顶部 -->
        <div class="header">
            <!-- logo图片 -->
            <a class="header-logo" href=""><img src="../../assets/雨幕logo9.png" alt="logo"></a>
        </div>

        <!-- 购物车主体 -->
        <div class="shoppingcart">
            <i-table height="520" ref="selection" :columns="columns" :data="data"></i-table>
            <div class="total">
                <span class="total-money">合计金额（元）：</span>
                <span class="money-sum">{{moneysum}}</span>
                <span class="total-pay" @click="Toform">提交订单</span>
            </div>
        </div>

        <!-- 提交信息表单 -->
        <div class="mask" v-if="showform">
            <div class="form" v-if="showform">
                <steps :current="current">
                    <step title="确认商品"></step>
                    <step title="填写信息"></step>
                    <step title="结算付款"></step>
                    <step title="提交成功"></step>
                </steps>
                <!-- 表单内容 -->
                <div class="content-1" v-if="showstepone">
                    step1
                </div>
                <i-button type="primary" @click="pre" class="pre"> 上一步</i-button>
                <i-button type="primary" @click="next" class="next">下一步</i-button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            showform: false,
            moneysum: 9999,
            current: 0,
            showstepone: true,
            columns: [
                    // 表单复选框
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    // 表单序号
                    // {
                    //     type: 'index',
                    //     width: 60,
                    //     align: 'center'
                    // },
                    {
                        title: '全选',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            
        }
    },
    mounted () {
        this.Showstep()
    },
    methods: {
        remove (index) {
            this.data.splice(index, 1);
        },
        Toform () {
            this.showform = true;
        },
        next () {
                if (this.current == 3) {
                    // 订单成功提交
                    this.$router.push({ path: '/' })
                } else {
                    var cur = this.current;
                    for (let i=0; i<=3; i++) {
                        if (cur==0) {
                            console.log(1)
                        }else if (cur==1) {
                            console.log(2)
                        }
                        cur +=1;
                    }
                    this.current += 1;
                }
        },
        pre () {
                if (this.current == 0) {
                    // 订单成功提交
                    console.log("爷到头辣")
                } else {
                    this.current -= 1;
                }
        },
        Showstep () {
            
        } 
    }
}
</script>


<style lang="less" scoped>
    .wrap {
        position: relative;
        .header {
            position: relative;
            height: 100px;
            .header-logo {
                display: inline-block;
                margin-left: 10px;
                img {
                    width: 97px;
                    border-radius: 100%;
                    border-bottom: 2px solid #b4bdde;
                }
            }
        }
        .shoppingcart {
            .ivu-table-wrapper {
                border-radius: 16px;
                border: 0;
            }
            margin-top: 30px;
            height: calc(100vh - 130px);
            box-shadow: 0 -2px 28px rgba(0, 0, 0, .1);
            .total {
                background-color: #f8f8f9;
                height: 90px;
                box-shadow: 0 0 36px rgba(0, 0, 0, .1);
                position: relative;
                line-height: 90px;
                .total-money {
                    font-size: 15px;
                    color: rgba(0, 0, 0, .5);
                    letter-spacing: 2px;
                    margin-left: 20px;
                }
                .money-sum {
                    font-size: 18px;
                    color: rgba(253, 132, 33, 1);
                }
                .total-pay {
                    position: absolute;
                    right: 0;
                    margin: 25px 10px;
                    display: inline-block;
                    width: 120px;
                    height: 40px;
                    background-color: rgba(49, 91, 163, .75);
                    color: #ffffff;
                    font-size: 16px;
                    letter-spacing: 2px;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 40px;
                    cursor: pointer;
                }
            }
        }

        // 遮罩层
        .mask {
            width: 100vw;
            height: 100vh;
            background-color: rgba(110, 110, 110, .85);
            top: 0;
            left: 0;
            z-index: 3;
            position: fixed;
            .form {
                position: fixed;
                background-color: #f8f8f9;
                width: 800px;
                height: 500px;
                left: 50%;
                margin-left: -400px;
                top: 50%;
                margin-top: -250px;
                border-radius: 8px;
                box-shadow: 0 8px 30px 2px rgba(0, 0, 0, .1);
            }
        }
    }
</style>