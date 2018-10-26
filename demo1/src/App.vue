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
@import url("//at.alicdn.com/t/font_883547_5nlejbtosu7.css");

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
  box-sizing: content-box;
}

/* 组件样式修改 */


/* 降水概率图表 */
/* 柱状图间隔 */
  .rain-rate .ivu-progress-vertical .ivu-progress-outer .ivu-progress-inner {
    margin-left: 56px;
  }
  /* 进度条背景色 */
  .rain-rate .ivu-progress-vertical .ivu-progress-outer .ivu-progress-inner .ivu-progress-bg {
    background-color: rgba(63, 115, 206, .9);
    transition: all .4s linear;
  }
  .rain-rate .ivu-progress-vertical.ivu-progress-wrong .ivu-progress-outer .ivu-progress-inner .ivu-progress-bg {
    background-color: rgba(177, 165, 177, .9);
  }
  .ivu-progress-text-inner .ivu-icon-ios-close-circle:before {
    color: rgba(177, 165, 177, .9);
    font-size: 18px;
  }
  .ivu-progress-text .ivu-progress-text-inner{
    color: rgba(63, 115, 206, 1);
  }
  
  /* 返回顶部按钮 */
  .ivu-back-top.ivu-back-top-show .ivu-back-top-inner {
    background-color: rgba(63, 115, 206, .7);
    border-radius: 3px;
  }
  .ivu-back-top.ivu-back-top-show .ivu-back-top-inner:hover {
    border-radius: 6px;
    background-color: rgba(63, 115, 206, .9);
    transition: all ease-out .15s;
  }
  
  
  /* “关于”抽屉 */
  .ivu-drawer-mask {
    /* overflow-y: scroll; */
    margin-left: calc(100vw - 100%);
  }
  .ivu-drawer-wrap .ivu-drawer.ivu-drawer-left .ivu-drawer-content {
    width: 40vw !important;
    opacity: .9;
  }
  .ivu-drawer-wrap .ivu-drawer.ivu-drawer-left .ivu-drawer-content .ivu-drawer-header {
    box-shadow: 0 2px 48px rgba(0, 0, 0, .1);
  }
  /* title */
  .ivu-drawer-wrap .ivu-drawer.ivu-drawer-left .ivu-drawer-content .ivu-drawer-header .ivu-drawer-header-inner {
    font-size: 32px;
    color: rgba(63, 115, 206, .7);
    text-align: center;
    font-weight: 1;
    height: 32px;
    line-height: 32px;
    letter-spacing: 16px;
  }

  /* 用户下拉列表 */
  .header-icon .ivu-dropdown .ivu-select-dropdown .ivu-dropdown-menu .ivu-dropdown-item {
    text-align: center;
    letter-spacing: .8px;
  }

  /* 购物车角标 */
  .header-icon .ivu-badge .ivu-badge-count {
    background-color: rgb(253, 132, 33);
    border: 0;
    line-height: 20px;
  }

  /* 商品列表导航 */
  .ivu-icon.ivu-icon-ios-arrow-down.ivu-menu-submenu-title-icon {
    display: none;
  }
  .goods-sort .ivu-menu-submenu {
    font-size: 16px;
    letter-spacing: 3px;
  }
  .goods-sort .ivu-menu.ivu-menu-light.ivu-menu-horizontal {
    background-color: transparent !important;
  }
  .goods-sort .ivu-menu-submenu-title {
    line-height: 60px !important;
  }
  .goods-sort .ivu-menu-submenu.ivu-menu-opened {
    border-bottom: 2px solid rgba(63, 115, 206, .9) !important;
  }
  .goods-sort .ivu-menu-submenu:hover {
    color: rgba(63, 115, 206, .9) !important;
  }
  .goods-sort .ivu-menu-drop-list .ivu-menu-item {
    text-align: center;
  }
  .goods-sort .ivu-menu-drop-list .ivu-menu-item>i {
    margin-right: 18px;
  }
  .goods-sort .ivu-menu-drop-list .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected {
    color: rgba(63, 115, 206, 1) !important;
  }

  /* 购物车表单 */
  .ivu-table-row {
    height: 120px;
  }

  /* 购物车遮罩层表单 */
  .mask .form .ivu-steps .ivu-steps-head {
    background-color: transparent;
  }
  .mask .form .ivu-steps .ivu-steps-title{
    background-color: #f8f8f9;
  }
  .mask .ivu-steps.ivu-steps-horizontal{
    margin-top: 36px;
    margin-left: 48px;
  }
  .mask .form .ivu-steps .ivu-steps-head .ivu-steps-head-inner {
    border: 0;
    background-color: rgba(63, 115, 206, .8);
  }
  .mask .form .ivu-steps-item.ivu-steps-status-wait .ivu-steps-head-inner {
    background-color: #ffffff;
  }
  .mask .form .ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner {
    background-color: #ffffff;
  }
  .mask .form .ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail i::after {
    background-color: rgba(63, 115, 206, .8);
  }
  .mask .form .ivu-btn.ivu-btn-primary {
    border: 0;
    background-color: rgba(63, 115, 206, .8);
    position: absolute;
  }
  .mask .form .ivu-btn.ivu-btn-primary.pre {
    bottom: 20px;
    right: 110px;
  }
  .mask .form .ivu-btn.ivu-btn-primary.next {
    bottom: 20px;
    right: 30px;
  }

</style>
