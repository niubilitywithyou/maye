<template>
	<div id="home">
		<div class="head">
			<div class="icon"></div>
			<div class="tit">Maye</div>
		</div>
		<div class="box">
			<div class="top">
				<div class="text">
					<div class="time">
						{{times}}
					</div>
					<div class="cont">
						距大姨妈还有 21 天
					</div>
					<div class="res">周期：第 8 天</div>
				</div>
				<div class="img">
					月经期
				</div>
			</div>
			<div class="date-staus">
	        	<div class="staus-yima staus-item">
	        		<div class="yima-color icon"></div>
	        		<p><span>月经期</span></p>
	        	</div>
	        	<div class="staus-safe staus-item">
	        		<div class="safe-color icon"></div>
	        		<p>安全期</p>
	        	</div>
	        	<div class="staus-painuan staus-item">
	        		<div class="painuan-color icon"></div>
	        		<p>排暖期</p>
	        	</div>
	        	<div class="staus-theday staus-item">
	        		<div class="day-color icon"></div>
	        		<p>排暖日</p>
	        	</div>
	        </div>
		</div>
		<div class="fun">
			<div class="fun1 fun_item">
				<div class="fun1_icon icon" @click="recordFirst">
					<img />
				</div>
				<p class="fun_txt">症状记录</p>
			</div>
			<div class="fun2 fun_item">
				<div class="fun2_icon icon" @click="recordAction">
					<img />
				</div>
				<p class="fun_txt">行为记录</p>
			</div>
			<div class="fun3 fun_item" >
				<div class="fun3_icon icon" @click="recordMemory">
					<img />
				</div>
				<p class="fun_txt">日记记录</p>
			</div>
			<div class="fun4 fun_item">
				<div class="fun4_icon icon" @click="recordJingqi">
					<img />
				</div>
				<p class="fun_txt">经期记录</p></div>
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
				this.times = this.day.join("-")
			},
			recordFirst(){
				this.$router.push('/record')
			},
			recordAction(){
				this.$router.push('/action')
			},
			recordMemory(){
				this.$router.push('/memory')
			},
			recordJingqi(){
				this.$router.push('/jingqi')
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	#home{
		display: flex;
		flex-direction: column;
		align-items: center;
		.head{
			width: 100%;
			height: 3rem;
			display: flex;
			position: relative;
			.icon{
				width: 2rem;
				height: 2rem;
				border: solid 1px salmon;
				border-radius: 50%;
				margin-left: 1rem;
				margin-top: 0.5rem;
			}
			.tit{
				text-align: center;
				font-size: 1.2rem;
				position: absolute;
				left:50%;
				top:50%; 
				transform:translate(-50%,-50%);
			}
		}
		.box{
			width: 23rem;
			height: 17.7rem;
			background:rgba(238,238,238,1);
			opacity:0.5;
			border-radius:5px;
			margin-top: 1rem;
			/*display: flex;
			flex-direction: column;
			align-items: center;*/
			.top{
				display: flex;
				margin-top: 3rem;
				justify-content: space-between;
				.text{
					height:8.3rem;
					margin-left: 1rem;
					font-size: 0.87rem;
					.time{
						margin-top: 1.6rem;
					}
					.cont{
						margin-top: 1.5rem;
						font-size:1.2rem;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(51,51,51,1);
					}
					.res{
						margin-top: 0.8rem;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(102,102,102,1);
					}
				}
				.img{
						margin-right: 1rem;
						width:8.3rem;
						height:8.3rem;
						background:linear-gradient(0deg,rgba(255,147,185,1) 0%,rgba(253,50,93,1) 100%);
						border-radius:50%;
						text-align: center;
						line-height: 8.3rem;
				}
			}
			.date-staus{
				width: 21.7rem;
				display: flex;
				height: 1.67rem;
				opacity:0.5;
				border-radius:0.33rem;
				background-color: white;
				justify-content: space-between;
				margin-top: 3.3rem;
				margin-left: 0.67rem;
				.staus-item{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					&.staus-yima{
						.yima-color{
							width: 0.53rem;
							height: 0.53rem;
							border-radius: 50%;
							background:linear-gradient(90deg,rgba(255,88,167,1),rgba(255,128,187,1));
						}
						p{
							margin-left: 0.4rem;
							span{
								/*margin-left: 0.4rem;*/
								display: inline-block;
								/*font-size:1.47rem;*/
								font-size: 0.8rem;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(51,51,51,1);
								opacity:0.8;
							}
						}
					}
					&.staus-safe{
						.safe-color{
							width:8px;
							height:8px;
							background:linear-gradient(90deg,rgba(75,236,204,1),rgba(129,200,255,1));
							border-radius:50%;
						}
						p{
							margin-left: 0.4rem;
							display: inline-block;
							/*font-size:1.47rem;*/
							font-size: 0.8rem;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(51,51,51,1);
							opacity:0.8;
						}
					}
					&.staus-painuan{
						.painuan-color{
							width:8px;
							height:8px;
							background:linear-gradient(90deg,rgba(206,126,252,1),rgba(255,152,210,1));
							border-radius:50%;
						}
						p{
							margin-left: 0.4rem;
							display: inline-block;
							/*font-size:1.47rem;*/
							font-size: 0.8rem;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(51,51,51,1);
							opacity:0.8;
						}
					}
					&.staus-theday{
						.day-color{
							width:9px;
							height:8px;
							background:linear-gradient(90deg,rgba(247,30,76,1),rgba(255,196,82,1));
						}
						p{
							margin-left: 0.4rem;
							display: inline-block;
							/*font-size:1.47rem;*/
							font-size: 0.8rem;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(51,51,51,1);
							opacity:0.8;
						}
					}
				}
			}
		}
		.fun{
			display: flex;
			width: 23rem;
			.fun_item{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 3.5rem;
				.icon{
					width: 3.3rem;
					height: 3.3rem;
					background-color: salmon;
				}
				.fun_txt{
					margin-top: 0.4rem;
					text-align: center;
					font-family:PingFang SC;
					font-size: 0.87rem;
					font-weight:400;
					color:rgba(102,102,102,1);
				}
			}
		}
	}
</style>