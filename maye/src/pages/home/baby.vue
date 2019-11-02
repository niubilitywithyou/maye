<template>
	<div id="home">
		<div class="head">
			<div class="icon"></div>
			<div class="tit">Maye</div>
		</div>
		<div id="box">
			<div class="box">
				<div class="top">
					<div class="tolef"></div>
					<div class="mid">
						
					</div>
					<div class="torig"></div>
				</div>
				<div id="data">
					<div class="data">
						<div class="data_height"></div>
						<div class="data_weight"></div>
					</div>
					<div class="change"></div>
				</div>
				<div id="baby">
					<div class="baby">
						<div class="fri"></div>
						<div class="sec">宝宝名称&nbsp;&nbsp;35天</div>
						<div class="thi">{{times}}</div>
						<div class="thr">...</div>
					</div>
				</div>
				<div id="yuer">
					<div class="yuer">
						<span class="yuer_tit">宝宝发育：</span>
						<span>哭是宝宝天生的本领！TA通过哭闹，告诉妈妈自己的感受和需求。不同的哭声含义各异，妈妈要...</span>
					</div>
				</div>
			</div>
		</div>
		<div id="fun">
			<ul class="fun">
				<li class="fun1 fun_item">
					<div class="fun1_icon icon">
						<img />
					</div>
					<p class="fun_txt">宝宝状态</p>
				</li>
				<li class="fun2 fun_item">
					<div class="fun2_icon icon">
						<img />
					</div>
					<p class="fun_txt">日记记录</p>
				</li>
				<li class="fun3 fun_item">
					<div class="fun3_icon icon">
						<img />
					</div>
					<p class="fun_txt">行为记录</p>
				</li>
				<li class="fun4 fun_item">
					<div class="fun4_icon icon">
						<img />
					</div>
					<p class="fun_txt">症状记录</p>
				</li>
				<li class="fun5 fun_item">
					<div class="fun5_icon icon">
						<img />
					</div>
					<p class="fun_txt">周期调整</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import navbottom from "@/components/navbottom/navbottom"
	export default {
		name:"home",
		components:{
			navbottom
		},
		data(){
			return{
				day:["","",""],
				times:""
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
			}
		}
	}
</script>

<style scoped="scoped">
	#box,#staus,#baby,#yuer,#fun{
		display: flex;
		justify-content: center;
		margin-top: 1rem;
	}
	#home>.head{
		width: 100%;
		height: 3rem;
		display: flex;
		position: relative;
	}
	#home>.head>.icon{
		width: 2rem;
		height: 2rem;
		border: solid 1px salmon;
		border-radius: 50%;
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
	#home>.head>.tit{
		text-align: center;
		font-size: 1.2rem;
		position: absolute;
		left:50%;
		top:50%; 
		transform:translate(-50%,-50%);
	}
	#box .box{
		width: 23rem;
		height: 17.7rem;
		background:rgba(238,238,238,1);
		opacity:0.5;
		border-radius:5px;
	}
	#box .box .top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
	}
	#box .box .top .mid{
		width:8rem;
		height:8rem;
		background:linear-gradient(0deg,rgba(255,147,185,1) 0%,rgba(253,50,93,1) 100%);
		border-radius:50%;
	}
	#box .box .top .tolef{
		border: solid 1px silver;
		width: 2rem;
		height: 2rem;
	}
	#box .box .top .torig{
		border: solid 1px silver;
		width: 2rem;
		height: 2rem;
	}
	#box .box #data{
		display: flex;
		justify-content: center;
		margin-top: 0.8rem;
		position: relative;
	}
	#box .box #data .data{
		display: flex;
		justify-content: space-between;
		width: 12rem;
	}
	#box .box .data div{
		width: 5.3rem;
		height: 1.3rem;
		opacity:0.2;
		border-radius:10px
	}
	#box .box .data_height{
		background:rgba(255,134,222,1);
	}
	#box .box .data_weight{
		background:rgba(137,152,255,1);
	}
	#box .box #data .change{
		position: absolute;
		width: 0.9rem;
		height: 0.9rem;
		border: solid 1px saddlebrown;
		right: 4rem;
		top: 0.1rem;
	}
	#baby{
		margin-top: 1.5rem;
		
	}
	.baby{
		width: 21.7rem;
		height: 1.33rem;
		background-color: antiquewhite;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}
	.baby .fri{
		width: 0.3rem;
		height: 1.33rem;
		background:rgba(255,119,184,1);
		border-radius:3px;
	}
	.baby .sec{
		font-size:1.27rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.baby .sec{
		margin-left: 0.67rem;
		font-size:1.27rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.baby .thi{
		margin-bottom: -0.5rem;
		margin-left: 1rem;
		font-size:0.9rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.baby .thr{
		position: absolute;
		top: -0.4rem;
		right: 0;
	}
	#yuer{
		margin-top: 0.8rem;
	}
	#yuer .yuer{
		width: 21.7rem;
		font-size:0.87rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(102,102,102,1);
		line-height:1.3rem;
	}
	.fun{
		width: 21rem;
	}
	.fun_item{
		float: left;
		margin-left: 2.35rem;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.6rem;
	}
	.fun_item:nth-child(4n+1){
		margin-left: 0;
	}
	/*.fun_item{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 3.5rem;
	}*/
	.fun_item>.icon{
		width: 2.5rem;
		height: 2.5rem;
		background-color: salmon;
	}
	.fun_item>.fun_txt{
		margin-top: 0.8rem;
		text-align: center;
		font-family:PingFang SC;
		font-size: 0.87rem;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	
	
</style>