<template>
	<div id="example-3">
		<ul class="news">
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/timg1.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>我的电脑<small class="f-l">10:06</small></p>
					<p><small>你已在电脑登录，可传文件到电脑</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/t02.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>蘑菇俏公主<small class="f-l">11:06</small></p>
					<p><small>明天晚上在哪里聚餐啊？</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/timg1.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>我的电脑<small class="f-l">10:06</small></p>
					<p><small>你已在电脑登录，可传文件到电脑</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/t02.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>蘑菇俏公主<small class="f-l">11:06</small></p>
					<p><small>明天晚上在哪里聚餐啊？</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/timg1.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>我的电脑<small class="f-l">10:06</small></p>
					<p><small>你已在电脑登录，可传文件到电脑</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/t02.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>蘑菇俏公主<small class="f-l">11:06</small></p>
					<p><small>明天晚上在哪里聚餐啊？</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/timg1.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>我的电脑<small class="f-l">10:06</small></p>
					<p><small>你已在电脑登录，可传文件到电脑</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/t02.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>蘑菇俏公主<small class="f-l">11:06</small></p>
					<p><small>明天晚上在哪里聚餐啊？</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/timg1.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>我的电脑<small class="f-l">10:06</small></p>
					<p><small>你已在电脑登录，可传文件到电脑</small></p>
				</div>				
			</li>
			<li>
				<div style="width: 2.0rem;padding: 0.4rem;">
					<img src="../assets/image/t02.jpg"/>
				</div>				
				<div class="news-info" style="flex-grow:1">
					<p>蘑菇俏公主<small class="f-l">11:06</small></p>
					<p><small>明天晚上在哪里聚餐啊？</small></p>
				</div>				
			</li>
		</ul>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import CommonFooter from '../components/commonFooter'
	import Vue from 'vue'
//	new Vue({
//		el: '#example-3',
//		data:{
//			info:"123123"
//		},
//		methods: {
//		    howDeleteButton() {
//		    clearInterval(this.Loop);//再次清空定时器，防止重复注册定时器
//		    this.Loop=setTimeout(function(){
//		        this.isDeleting = true;
//		    },1000);
//			},
//			clearLoop() {
//			    clearInterval(this.Loop);
//			},
//		}
//	})
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
	.f-l{float: right;}
	.news{margin-bottom: 1.8rem;}
	ul.news li{display:flex;display: -webkit-flex; /* Safari */border-bottom:1px solid #eee;}
	ul.news li img{display: block;width: 100%;border-radius: 50%;height: 2.0rem;}
	.news-info{padding: 0.4rem;}
	.news-info p{font-size: 0.8rem;color: #333333;}
	.news-info p small{color: #969696;font-size: 0.6rem;}
</style>