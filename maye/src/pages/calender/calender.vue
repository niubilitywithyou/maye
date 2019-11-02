<template>
	<div id="calender">
		<Calender
			:dateToolsKey="2"
			:trainDateList="trainDateList2"
			:trainDateFullList="trainDateFullList"
			ref="topDateTools2"
			@topDateEvent2="topDateFun2"
		></Calender>
		<!--默认显示今天的状态-->
		<div class="txt">
			{{txt}}
		</div>
	</div>
</template>

<script>
//	import Calender from "@/components/picker/ModifyTime"
//	import Calender from "vue-calendar-component";
	import Calender from "@/components/picker/calender"
	export default {
		name:"calender",
		components:{
			Calender
		},
		data(){
			return {
				trainDateList2:[12,13],
				trainDateFullList:["20140202","20140205"],
				txt:"大姨妈走了"
			}
		},
		methods:{
			topDateFun2(){
				console.log(0)
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	#calender{
		display: flex;
		align-items: center;
		flex-direction: column;
		.txt{
			margin-top: 2.1rem;
			width:11.8rem;
			height:2.3rem;
			background:linear-gradient(90deg,rgba(255,88,167,1) 0%,rgba(255,128,187,1) 100%);
			border-radius:2.4rem;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height: 2.3rem;
			text-align: center;
		}
	}
	
</style>