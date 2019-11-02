<template>
	<div id="action">
		<Headbar tit="行为记录" txt="保存"></Headbar>
		<div class="none"></div>
		<Staus tit="爱爱" :staus=staus1></Staus>
		<Staus tit="饮食" :staus=staus2 class="cont2"></Staus>
		<Staus tit="生活" :staus=staus3 class="cont2"></Staus>
		<!--<Stausitem :staus=staus4 class="cont3"></Stausitem>-->
	</div>
</template>

<script>
	import Headbar from "@/components/headbar/headbar2"
	import Staus from "@/components/staus/staus"
//	import Stausitem from "@/components/staus/stausitem"
	import Stausitem from "@/components/staus/stausright"
	export default{
		name:"record",
		components:{
			Headbar,
			Staus,
			Stausitem
		},
		
		data(){
			return{
				staus1:["无性行为","安全性爱","无保护性爱","性欲强"],
				staus2:["早餐","热水","水果","喝酒","冷饮冰棍"],
				staus3:["有氧运动","无氧运动","负重运动","逛街","休闲","蹦迪","聚会","遛宠物"],
			}
		},
		created(){
//			this.getstatus()
		},
		methods:{
//			getstatus(){
//				//遍历数组的对象,添加到子组件中
//				for(let i=0;i<staus1.length;i++){
//					
//				}
//			}
		}
	}
</script>

<style>
	#action .cont2{
		margin-top: 1.4rem;
	}
	.none{
		width: 100%;
		height: 0.5rem;
	}
</style>