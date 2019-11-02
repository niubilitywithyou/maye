<template>
	<div id="mymemory">
		<Headbar txt1="日记记录" txt2=""></Headbar>
		<div id="record">
			<div class="record">
				<p>今天</p>
				<div class="icon"></div>
				<div class="hide">
					<textarea></textarea>
				</div>
				<div class="txt">
					<div class="sanjiao"></div>
					<p>记录下今天的生活吧</p>
				</div>
			</div>
		</div>
		<div id="recorded">
			<ul class="recorded">
				<li>
					<div class="recorded_tit">
						<!--之前记录的时间从后台获取-->
						<div class="recorded_tit_day">
							<p class="p1">20</p>
							<p class="p2">07月</p>
						</div>
						<ul class="recorded_tit_moods">
							<li class="moods" v-for="item in moods"></li>
						</ul>
					</div>
					<div id="recorded_tit_txt">
					<div class="recorded_tit_txt">
						黄昏时看夕阳，回味的却是少年时光。人也是反刍动物，我们如今虎咽牛饮也是为了老年的咀嚼。但是，我并不愿青春吃的太多...
					</div>
					</div>
				</li>
				<li class="year">
					<div class="dec"></div>
					<div class="year_time">2018</div>
					<div class="dec"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Headbar from "@/components/headbar/headbar"
	export default{
		name:"mymemory",
		components:{
			Headbar
		},
		data(){
			return{
				moods:["henhao",""]
			}
		}
		
	}
</script>

<style scoped="scoped">
	#record,#recorded{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	#recorded{
		margin-top: 1.73rem;
	}
	#record .record{
		width: 21.7rem;
		display: flex;
		justify-content: flex-start;
	}
	#record .record p{
		font-size:1.25rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	#record .record .icon{
		width: 4rem;
		height: 4rem;
		margin-left: 1rem;
		border:1px dashed rgba(153,153,153,1);
		border-radius:5px;
	}
	#record .record .hide{
		display: none;
	}
	#record .record .txt{
		margin-top: 1.33rem;
		margin-left: 1.2rem;
		width: 9.6rem;
		height: 1.33rem;
		position: relative;
	}
	#record .record .txt .sanjiao{
		position: absolute;
		top: 29%;
		left: -0.9rem;
		/*width: 1.2rem;
		height: 1.2rem;*/
		border-top: solid white 0.32rem;
		border-bottom: solid white 0.32rem;
		border-left: solid white 0.46rem;
		border-right: solid 0.46rem rgba(238,238,238,1);
	}
	#record .record .txt p{
		width: 9.3rem;
		height: 1.33rem;
		line-height: 1.33rem;
		border-radius: 0.67rem;
		background-color: rgba(238,238,238,1);
		font-size:0.8rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		text-align: center;
	}
	#recorded .recorded{
		width: 21.7rem;
		overflow: hidden;
	}
	#recorded .recorded li{
		list-style: none;
	}
	#recorded .recorded .recorded_tit{
		display: flex;
		justify-content: flex-start;
	}
	#recorded .recorded .recorded_tit .p1{
		/*width: 1.8rem;
		text-align: center;*/
		height: 1.7rem;
		line-height: 1.7rem;
		font-size:1.9rem;
		font-family:PingFang SC;
		font-weight:800;
		color:rgba(51,51,51,1);
	}
	#recorded .recorded .recorded_tit .p2{
		/*width: 1.8rem;
		text-align: center;
		font-size:0.9rem;*/
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		margin-top: -0.1rem;
	}
	#recorded .recorded .recorded_tit_day{
		/*margin-left: 1.1rem;*/
	}
	#recorded .recorded .recorded_tit_moods{
		width: 18.2rem;
		margin-left: 1.1rem;
	}
	#recorded .recorded .moods{
		width: 2.67rem;
		height: 2.67rem;
		background:rgba(204,204,204,1);
		border-radius:50%;
		float: left;
		margin-right: 0.67rem;
	}
	#recorded .recorded #recorded_tit_txt{
		display: flex;
		justify-content: flex-end;
	}
	#recorded .recorded .recorded_tit_txt{
		margin-top: 0.67rem;
		/*float: right;*/
		margin-right: 0rem;
		width: 18.2rem;
	}
	#recorded .recorded .year{
		width: 21.7rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
	}
	#recorded .recorded .dec{
		width: 8.4rem;
		border-top: solid 1px rgba(204,204,204,1);
	}
	#recorded .recorded .year_time{
		font-size:1.25rem;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
</style>