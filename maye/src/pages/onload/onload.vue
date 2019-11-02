<template>
	<div id="onload1">
		<Headbar id="headbar" txt1="选择阶段" txt2="下一步" :tourl="selected()"></Headbar>
		<div class="txt">
			<p class="p1">请选择当前所在阶段</p>
			<p class="p2">可以在"我的"中修改</p>
		</div>
		<div class="cir1 cir">
			<div class="cir-box1">
				<div class="circle1 circle" @click="toJingqi"></div>
				<p>经期记录</p>
			</div>
			<div class="cir-box2">
				<div class="circle2 circle" @click="toReadybaby"></div>
				<p>备孕阶段</p>
			</div>
		</div>
		<div class="cir2 cir">
			<div class="cir—box3">
				<div class="circle3 circle" @click="toGetbaby"></div>
				<p>怀孕阶段</p>
			</div>
			<div class="cir-box4">
				<div class="circle4 circle" @click="toHasbaby"></div>
				<p>已有宝宝</p>
			</div>
		</div>
		<p class="my">我的出生年月</p>
		<Tpicker class="time" @userChoose="getuserData"></Tpicker>
	</div>
</template>

<script>
	
	import Headbar from "@/components/headbar/headbar"
	import Tpicker from "@/components/picker/timepicker"
	import dataFun from "../../config/getData"
	export default{
		name:"onload1",
		data(){
			return{
				tourl:"",
				userId:"",
				usertToken:"",
				userStaus:"",
				userBirth:""
			}
		},
		components:{
			Headbar,
			Tpicker
		},
		methods:{
			toJingqi(){
				this.userStaus = "jingqi",
				this.tourl = "/onload2"
			},
			toReadybaby(){
				this.userStaus = "readybaby"
				this.tourl = "/onload3"
			},
			toGetbaby(){
				this.userStaus = "getbaby"
				this.tourl = "/onload4"
			},
			toHasbaby(){
				this.userStaus = "hasbaby"
				this.tourl = "/onload5"
			},
			getuserData(y,m,d){
				this.userBirth =`${y}${m}${d}`
			},
			selected(){
				//判断跳转路由以及用户信息是否是空
				if(this.tourl&&this.userBirth){
					//然后自己拿到存储到vuex
					this.$store.state.userStaus = this.userStaus
					console.log(this.$store.state.userStaus)
					//往后台发送请求，提交数据
					dataFun.post(this.userStaus).then(res => {
						//后台返回200实现跳转
						console.log(res)
					})
					return this.tourl
				}
				
//				this.$router.push(this.tourl)
			}
		}
	}
</script>

<style scoped="scoped">
	/*html,body{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		margin: 0 auto;
		padding: 0;
		font-size: 15px;
	}*/
	#onload1{
		width: 100%;
		height: 100%;
	}
	#headbar{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.txt{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2.4rem;
	}
	.txt .p1{
		font-size: 1.2rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		/*letter-spacing: 0.2rem;*/
	}
	.txt .p2{
		font-size: 0.9rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		margin-top: 0.7rem;
	}
	.cir{
		margin-top: 1.6rem;
		margin-left: 4.3rem;
		margin-right: 4.3rem;
		/*border: solid 1px #55A532;*/
		display: flex;
		justify-content: space-between;
	}
	.cir p{
		margin-top: 0.75rem;
		text-align: center;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.cir .circle{
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		background:rgba(221,221,221,1);
	}
	.my{
		font-size:1.25rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		text-align: center;
		margin-top: 3rem;
	}
	.time{
		margin-top: 2.1rem;
	}
</style>