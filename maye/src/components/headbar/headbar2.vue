<template>
	<div id="headbar">
		<div class="headbar">
			<div class="lef" @click="before"><span class="iconfont">&#xe609;</span></div>
			<div class="mid">
				<p class="p1">{{tit}}</p>
				<p class="p2">今天&nbsp;{{times}}</p>
			</div>
			<div class="rig" @click="toNext">{{txt}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"headbar2",
		props:["tit","txt"],
		data(){
			return{
				day:["","",""],
				times:"",
//				blood:[]
			}
		},
		created(){
			this.time()
		},
		methods:{
			time(){
				var data = new Date();
				this.day[0] = data.getFullYear()
				this.day[1] = data.getMonth() + 1
				this.day[2] = data.getDate()
				this.times += `${this.day[0]}年${this.day[1]}月${this.day[2]}日`
//				this.times = this.day[0]+"年"
				console.log(this.day)
			},
			toNext(){
//				console.log(this.tourl)
				this.$router.push(this.tourl)
			},
			before(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	@import"../../../static/iconfont/iconfont.css"
	#headbar{
		width: 100%;
		height: 2.8rem;
	}
	.headbar{
		width: 21.7rem;
		height: 2.8rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.headbar .lef{
		flex: 1;
		height: 2.8rem;
		line-height: 2.8rem;
		text-align: left;
	}
	.headbar .mid{
		flex: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.headbar .mid .p1{
		font-size: 1.1rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.headbar .mid .p2{
		font-size: 0.75rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.headbar .rig{
		flex: 1;
		font-size:1rem;
		line-height: 2.8rem;
		font-family:PingFang SC;
		font-weight:400;
		text-align: right;
		color: #FF58A7
	}
</style>
