<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
        <router-link to="/home"><li>推荐</li></router-link>
        <router-link to="/News"><li>消息</li></router-link>
        <router-link to="/car"><li>购物车</li></router-link>
        <router-link to="/me"><li>我的</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ff8000;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 25%;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size:0.6rem;
    color: #333;
    text-align: center;
  }
  .footer-cont li:active{
    background-color: #eee;
  }
  .router-link-active li{
    background-color: #ff8000;
    color: #fff;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
