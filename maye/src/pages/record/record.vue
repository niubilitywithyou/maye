<template>
	<div id="record">
		<Headbar tit="症状记录" txt="保存"></Headbar>
		<div class="null"></div>
		<Staus tit="血量" :staus=staus1></Staus>
		<Staus tit="心情" :staus=staus2 class="cont2"></Staus>
		<Staus tit="症状" :staus=staus3 class="cont2"></Staus>
		<!--<Stausitem :staus=staus4 class="cont3"></Stausitem>
		<Stausitem :staus=staus5 class="cont3"></Stausitem>-->
		<div class="body">
			<div class="input1 input">
				<p>身高</p>
				<div class="input_cont">
					<input type="tel" placeholder="点击输入身高" /><span>mm</span>
				</div>
			</div>
			<div class="input2 input">
				<p>体温</p>
				<div class="input_cont" @click="showModeltemp">
					<input type="tel" placeholder="点击输入体温" /><span>℃</span>
				</div>
			</div>
			<div class="input3 input">
				<p>体重</p>
				<div class="input_cont" @click="showModelweight">
					<input  placeholder="点击输入体重"></input><span>kg</span>
				</div>
			</div>
		</div>
		<Modal
            ref="Modal"
            v-show="isModalVisible"
            :tit="modalTit"
            @closeModal="closeModal"
        >
            <!-- :payMoney="payMoney"
            yuan="元" -->
        </Modal>
	</div>
	
</template>

<script>
	import Modal from "@/components/dialog/dialogBottom"
	import Headbar from "@/components/headbar/headbar2"
	import Staus from "@/components/staus/staus"
//	import Stausitem from "@/components/staus/stausitem"
//	import navbottom from "@/components/navbottom/navbottom"
	export default {
		name:"record",
		components:{
			Headbar,
			Staus,
			Modal
		},
		
		data(){
			return{
				staus1:[{mood:"大量",bol:false},{mood:"偏多",bol:false},{mood:"中等",bol:false},{mood:"偏少",bol:false},{mood:"少量",bol:false}],
				staus2:[{mood:"沮丧",bol:false},{mood:"冷漠",bol:false},{mood:"我还好",bol:false},{mood:"开心",bol:false},{mood:"活力满满",bol:false}],
				staus3:[{mood:"都很好",bol:false},{mood:"胸部胀痛",bol:false},{mood:"头痛",bol:false},{mood:"发热",bol:false},{mood:"腹部坠痛",bol:false},
						{mood:"腰痛",bol:false},{mood:"皮肤不好",bol:false},{mood:"潮热",bol:false},{mood:"食欲大增",bol:false},{mood:"疲倦",bol:false},
						{mood:"失眠多梦",bol:false},{mood:"恶心",bol:false},{mood:"腹胀",bol:false},{mood:"腹泻",bol:false},{mood:"便秘",bol:false},
						],
//				staus4:["腰痛","皮肤不好","潮热","食欲大增","疲倦"],
//				staus5:["失眠多梦","恶心","腹胀","腹泻","便秘"],
//				pickerVisible:true
				isModalVisible:false,
	            show: false,
	            showToast: false,
	            thisIndex:0,
	            modalTit:"",
	        }
		},
		created(){
			
			
		},
		mounted(){
//			this.mintui()
		},	
		methods:{
			getstatus(){
				
			},
			
//			mintui(){
//				var MyComponent = Vue.extend({
//				    template: '<div id="picker-toolbar"><div class="picker-toolbar"><p class="cancel" @click="cancel">取消</p><p class="tit">体温</p><p class="certain" @click="certain">确定</p></div></div>'
//				})
//				new MyComponent().$mount('.picker-toolbar');//appendTo
//			},
			// 提示模态框
	        showModeltemp(){
	        	this.modalTit = "体温";
	            this.isModalVisible = true;
	            
	        },
	        showModelweight(){
	        	this.modalTit = "体重";
	            this.isModalVisible = true;
	        },
	        closeModal(){
	            this.isModalVisible = false
	        },
	        confirm(){
	            console.log(11111111111);
	        },
		}
	}
</script>

<style scoped="scoped">
	.body{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.null{
		width: 100%;
		height: 0.5rem;
	}
	.cont2{
		margin-top: 1.33rem;
	}
	.cont3{
		margin-top: 0rem;
	}
	.input{
		margin-top: 1.9rem;
		width: 21.7rem;
		display: flex;
		justify-content: space-between;
	}
	.input p{
		font-size:1.27rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.input .input_cont input{
		width:5.5rem;
		font-size:0.87rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		outline: none;
		border: none;
		/*padding-right: 0.33rem;*/
	}
	
	
	/*.temp .temp-tit{
		position: absolute;
		top: 1rem;
		font-size:1.2rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}*/
</style>
<style>
	.temp #picker-toolbar{
		height: 2.7rem;
		display: flex;
		justify-content: center;
	}
	.temp #picker-toolbar .picker-toolbar{
		height: 2.7rem;
		width: 21.7rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.temp .picker-toolbar .cancel{
		font-size:1.1rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.temp .picker-toolbar .certain{
		font-size:1.1rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.temp .picker-toolbar .tit{
		font-size:1.2rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
</style>