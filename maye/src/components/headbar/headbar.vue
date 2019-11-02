<template>
	<div id="headbar">
		<div class="headbar">
			<div class="lef"><span @click="goback" class="icon iconfont">&#xe609;</span></div>
			<div class="mid">{{txt1}}</div>
			<div class="rig" @click="toNext">{{txt2}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"headbar",
		props:['txt1','txt2','tourl','getdata'],
		methods:{
			toNext(){
				console.log(this.tourl)
				this.$router.push(this.tourl);
				//保存各种信息,发送给后台
				console.log(this.getdata)
			},
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	@import"../../../static/iconfont/iconfont.css"
	#headbar{
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
	}
	.headbar{
		width: 21.7rem;
		height: 3rem;
		display: flex;
		justify-content: space-between;
		line-height: 3rem;
	}
	.headbar .lef{
		flex: 1;
		text-align: left;
	}
	.headbar .mid{
		flex: 3;
		font-size: 1.2rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		text-align: center;
	}
	.headbar .rig{
		flex: 1;
		font-size:1rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		text-align: right;
	}
</style>