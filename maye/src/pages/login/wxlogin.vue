<template>
	<div id="wxlogin">
		
		<div class="wxlogin">
			<div class="head"><span @click="goback" class="icon iconfont">&#xe609;</span></div>
			<div class="icon">
				<img src="../../../static/img/maye.png" />
			</div>
			<p class="p1">maye</p>
			<div class="con">
				<p class="p2"></p>
				<p class="p3">登录后开发者将获得以下权限</p>
				<div class="content">
					<p class="cont">·</p>
					<p class="p4">获得你的公开信息（昵称、头像、地区及性别）</p>
				</div>
			</div>
			<div class="login">
				确认登录
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"wxlogin",
		components:{
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	/*html,body,#wxlogin{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		margin: 0 auto;
		padding: 0;
		font-size: 13px;
	}*/
	#wxlogin{
		width: 100%;
		height: 100%;
		/*display: flex;*/
		/*flex-direction: column;*/
		/*justify-content: center;*/
		/*align-items: center;*/
	}
	
	.wxlogin{
		height: 100%;
		display: flex;
		flex-direction: column;
		/*justify-content: center;*/
		align-items: center;
	}
	#wxlogin .head{
		width: 21.7rem;
		height: 3rem;
		padding-left: 0;
		line-height: 3rem;
	}
	#wxlogin .icon{
		width: 5.4rem;
		margin-top: 3rem;
	}
	#wxlogin .icon img{
		width: 100%;
	}
	#wxlogin .p1{
		/*width:4rem;*/
		font-size:1.4rem;
		font-family:Microsoft YaHei;
		font-weight:400;
		color:rgba(0,0,0,1);
		margin-top: 1rem;
	}
	#wxlogin .con{
		width: 21rem;
	}
	#wxlogin .p2{
		width: 21rem;
		height:1px;
		background:rgba(221,221,221,1);
		margin-top: 2.3rem;
	}
	#wxlogin .p3{
		color:rgba(0,0,0,1);
		text-align: left;
		margin-top: 2rem;
		font-size:1.1;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(0,0,0,1);
	}
	#wxlogin .content{
		display: flex;
		flex-direction: row;
		height: 2.3rem;
		margin-top: 1.7rem;
		color:rgba(153,153,153,1);
	}
	#wxlogin .content .cont{
		width: 0.4rem;
		height: 0.4rem;
		/*margin-top: 1.7rem;*/
		text-align: center;
	}
	#wxlogin .p4{
		width:19.3rem;
		font-size:1rem;
		font-family:Microsoft YaHei;
		font-weight:400;
		line-height:1.3rem;
		margin-left: 0.6rem;
		
	}
	#wxlogin .login{
		width:23rem;
		height:3.3rem;
		background:rgba(24,173,21,1);
		border-radius:0.2rem;
		color: white;
		text-align: center;
		line-height: 3.3rem;
		font-size: 1.26rem;
		margin-top: 1.6rem;
	}
	
</style>