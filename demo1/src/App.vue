<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/* 引入iconfont样式文件 */
@import url("//at.alicdn.com/t/font_883547_1lihkdka34.css");

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  border: 0;
}


/* .el-carousel__mask {
  width: 90vw;
} */
/* .el-carousel__item--card {
  width: 50vw;
} */

/* 降水概率图表 */
/* 柱状图间隔 */
.ivu-progress-vertical .ivu-progress-inner {
    margin-left: 56px;
  }
  /* 进度条背景色 */
  .ivu-progress-bg {
    background-color: rgba(63, 115, 206, .9);
    transition: all .4s linear;
  }
  .ivu-progress-wrong .ivu-progress-bg {
    background-color: rgba(177, 165, 177, .9);
  }
  .ivu-icon-ios-close-circle:before {
    color: rgba(177, 165, 177, .9);
    font-size: 18px;
  }
  .ivu-progress-text {
    color: rgba(63, 115, 206, 1);
  }
  
  /* 返回顶部按钮 */
  .ivu-back-top-inner {
    background-color: rgba(63, 115, 206, .7);
    border-radius: 3px;
  }
  .ivu-back-top-inner:hover {
    border-radius: 6px;
    background-color: rgba(63, 115, 206, .9);
    transition: all ease-out .15s;
  }
  
  
  /* “关于”抽屉 */
  .ivu-drawer.ivu-drawer-left {
    width: 40vw !important;
    opacity: .9;
  }
  .ivu-drawer-header {
    box-shadow: 0 2px 48px rgba(0, 0, 0, .1);
  }
  /* title */
  .ivu-drawer-header-inner {
    font-size: 32px;
    color: rgba(63, 115, 206, .7);
    text-align: center;
    font-weight: 1;
    height: 32px;
    line-height: 32px;
    letter-spacing: 16px;
  }

  /* 购物车角标 */
  .ivu-badge-count {
    background-color: rgb(253, 132, 33);
    border: 0;
    line-height: 20px;
  }

  /* 商品列表导航 */
  .ivu-icon.ivu-icon-ios-arrow-down.ivu-menu-submenu-title-icon {
    display: none;
  }
  .ivu-menu-submenu {
    font-size: 16px;
    letter-spacing: 3px;
  }
  .ivu-menu.ivu-menu-light.ivu-menu-horizontal {
    background-color: transparent !important;
  }
  .ivu-menu-submenu-title {
    line-height: 60px !important;
  }
  .ivu-menu-submenu.ivu-menu-opened {
    border-bottom: 2px solid rgba(63, 115, 206, .9) !important;
  }
  .ivu-menu-submenu:hover {
    color: rgba(63, 115, 206, .9) !important;
  }
  .ivu-menu-item {
    text-align: center;
  }
  .ivu-menu-item>i {
    margin-right: 18px;
  }
  .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected {
    color: rgba(63, 115, 206, 1) !important;
  }


</style>
