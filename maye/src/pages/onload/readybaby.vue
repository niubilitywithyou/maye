<template>
	<div id="onload2">
		<Headbar id="headbar" txt1="备孕阶段" txt2="保存" :tourl=tourl :getdata="userData()"></Headbar>
		<!--<div class="sel1">-->
			
			<p class="p1">最近一次的月经开始时间</p>
			<div class="choose">
				<div class="choose1" v-if="bol1" @click="turn1">选择日历</div>
				<Tpicker class="picker" v-if="!bol1" @userChoose="getNearday"></Tpicker>
			</div>
			<p class="p2">月经周期</p>
			<div class="choose">
				<div class="choose2" v-if="bol2" @click="turn2">选择天数</div>
				<Dpicker class="picker" :day=yueTime :defaultIndex=8 v-if="!bol2" @userChoose="getRecord"></Dpicker>
			</div>
			
			<p class="p2">月经天数</p>
			<div class="choose">
				<div class="choose3" v-if="bol3" @click="turn3">选择天数</div>
				<Dpicker class="picker" :day=yueTime2 :defaultIndex=3 v-if="!bol3" @userChoose="getDay"></Dpicker>
			</div>
	</div>
</template>

<script>
	import Headbar from "@/components/headbar/headbar"
	import Tpicker from "@/components/picker/timepicker"
	import Dpicker from "@/components/picker/daypicker"
	export default{
		name:'onload2',
		components:{
			Headbar,
			Tpicker,
			Dpicker
		},
		data(){
			return{
				tourl:"",
				yueTime:[],
				yueTime2:[],
				bol1:true,
				bol2:true,
				bol3:true,
				nearDay:null,//最近的姨妈天数
				recordDay:null,//姨妈周期
				yuejingDay:null,//月经的周期
			}
		},
		created(){
			this.pushtime()
		},
		mounted(){
//			this.userData()
		},
		methods:{
			pushtime(){
				for(let i=20;i<=60;i++){
					this.yueTime.push(i)
				}
				for(let i=2;i<=10;i++){
					this.yueTime2.push(i)
				}
				console.log(this.yueTime)
			},
			turn1(){
				this.bol1=false
			},
			turn2(){
				this.bol2=false
			},
			turn3(){
				this.bol3=false
			},
			getNearday(y,m,d){
				this.nearDay = `${y}${m}${d}`
//				console.log(this.nearDay)
			},
			getRecord(num){
				this.recordDay = num;
//				console.log(this.recordDay)
			},
			getDay(num){
				this.yuejingDay = num
//				console.log(this.yuejingDay)
			},
			userData(){
				console.log(this.nearDay)
				if(this.nearDay !=null && this.recordDay !=null && this.yuejingDay !=null){
					this.tourl = "/homejingqi"
					return `{${this.nearDay},${this.recordDay},${this.yuejingDay}}`
				}
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
	}*/
	#onload2{
		width: 100%;
		height: 100%;
	}
	#headbar{
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.choose{
		display: flex;
		justify-content: center;
	}
	/*.sel1{
		margin-top: 2.5rem;
	}*/
	#onload2 p{
		font-size: 1.1rem;
		text-align: center;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-top: 2.1rem;
	}
	.picker{
		margin-top: 2rem;
	}
	#onload2 .p2{
		margin-top: 3.7rem;
	}
	.choose1,.choose2,.choose3{
		width: 19.7rem;
		height: 3rem;
		line-height: 3rem;
		border: solid 1px rgba(238,238,238,1);
		border-radius:1.5rem;
		margin-top: 2rem;
		text-align: center;
		color:rgba(187,187,187,1);
	}
	
</style>