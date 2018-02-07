<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <img src="../assets/image/54205424_big.jpg" alt="" />
      <p class="site-title">树懒果园 泰国进口大金煌芒果</p>      
      <p class="site-cont">2018年央视春晚主持阵容发布，看看都有谁金鸡辞旧春风劲，玉犬迎新好运多。2018年春节联欢晚会筹备已进入倒计时阶段。伴随着节目打磨日臻完善，排练合成逐步成熟，演出阵容也逐渐浮出水面。首批公布的参演人员，就是备受关注的主持人阵容。今年，春晚将继续延用“北京主会场+各地分会场”的直播模式，主会场设5位主持人，分会场8位主持人，在除夕夜陪伴全球观众共度佳节。一、主会场主持人
</p>
      <router-link to="/detail/msg">更多详情</router-link>
      <div class="show">
        <router-view></router-view>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import CommonFooter from '../components/commonFooter'

export default {
  data () {
    return {

    }
  },
  components: {
    DetailHeader,
    CommonFooter
  }
}
</script>

<style lang="css">
  .detail {
    padding: 0.25rem;
    font-size: 12px;
    margin-bottom: 1.8rem;
  }
  .detail > img,div.show p img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-align: left;
    /*padding-bottom: 0.5rem;*/
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  p.site-cont {
    color: #666;
    font-size: 0.6rem;    
  }
  div.show{
    color: #666;
    font-size: 0.6rem;
    line-height: 1.2rem;
  }
</style>
