<template lang="html">
	<div>
		<div class="me-bg">
			<ul class="ul-me list-group">
				<li><i class="fa fa-home fa-fw"></i>&nbsp; 个人信息</li>
				<li><i class="fa fa-book fa-fw"></i>&nbsp; 密码设置</li>
				<li><i class="fa fa-pencil fa-fw"></i>&nbsp; 我的钱包</li>
				<li><i class="fa fa-cog fa-fw"></i>&nbsp; 通用设置</li>
				<li><i class="fa fa-camera-retro fa-fw"></i>&nbsp; 退出登录</li>
				</ul>
		</div>		
		<common-footer></common-footer>
	</div>	
</template>

<script>
import CommonFooter from '../components/commonFooter'

export default {
  data () {
    return {

    }
  },
  components: {
    CommonFooter
  }
}
</script>

<style>
	.ul-me li{
		font-size: 0.7rem;
		height: 2.0rem;
		line-height: 2.0rem;
		border-bottom: 1px solid #eee;
		padding-left: 0.5rem;
	}
	.ul-me li:active{
		background: #FF8000;
		color: #FFFFFF;
		opacity: 0.8;
	}
	.me-bg{
		color: #fff;
		width: 100%;
		background-image: url(../assets/image/timg.jpg);
		background-size:cover;
		/*-webkit-filter: blur(1px);
        -moz-filter: blur(1px);
        -o-filter: blur(1px);
        -ms-filter: blur(1px);
        filter: blur(1px);*/
	}
</style>