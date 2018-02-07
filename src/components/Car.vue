<template>
	<div>
		<div class="no"><i class="fa fa-car fa-fw"></i>&nbsp; 您暂未挑选任何商品</div>
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
	.no{
		height: 10.0rem;
		line-height: 10.0rem;
		font-size: 0.6rem;
		text-align: center;
		color: #969696;
	}
</style>