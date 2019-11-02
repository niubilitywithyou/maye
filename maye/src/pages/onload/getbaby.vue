<template>
	<div id="onload4">
		<div class="onload4">
			<Headbar id="headbar" txt1="怀孕阶段" txt2="保存" :getdata="userData()" :tourl="tourl"></Headbar>
			<p class="p1">预产期</p>
			<div class="cho">
				<div class="choose" v-if="bol" @click="turn">选择日期</div>
			</div>
			
			<Tpicker class="picker" v-if="!bol"></Tpicker>
			<div class="cho">
				<div class="count" @click="showModel">计算预产期</div>
			</div>
		</div>
		<Modal
            ref="Modal"
            v-show="isModalVisible"
            statusText="提交成功"
            @closeModal="closeModal"
        >
            <!-- :payMoney="payMoney"
            yuan="元" -->
        </Modal>
	</div>
</template>

<script>
	import Headbar from "@/components/headbar/headbar"
	import Tpicker from "@/components/picker/timepicker"
	import Modal from "@/components/dialog/dialog"
	export default{
		name:'onload4',
		components:{
			Headbar,
			Tpicker,
			Modal
			
		},
		data(){
			return{
				tourl:"",
				bol:true,
				isModalVisible:false,
	            show: false,
	            showToast: false,
	            thisIndex:0
	       }
	            
		},
		created(){
//			this.pushtime()
		},
		
		methods:{
//			
			turn(){
				this.bol=false
			},
			// 提示模态框
	        showModel(){
	            this.isModalVisible = true;
	            
	        },
	        closeModal(){
	            this.isModalVisible = false
	        },
	        confirm(){
	            console.log(11111111111);
	        },
	        userData(){
	        	//请求后台的数据（预产期）然后再进行页面的跳转
	        	this.$store.state.userYuchanqi = 60;//60数据从后台获取
	        	if(this.$store.state.userYuchanqi){
	        		this.tourl = "/homegetbaby"
	        	}
	        }
		}
	}
</script>

<style lang="less" scoped="scoped">
	#onload4{
		width: 100%;
		height: 100%;
		.onload4{
			#headbar{
				display: flex;
				width: 100%;
				justify-content: center;
			}
			.p1{
				font-size: 1.1rem;
				text-align: center;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
				margin-top: 2.4rem;
			}
			.picker{
				margin-top: 2rem;
			}
			.cho{
				display: flex;
				justify-content: center;
				.choose{
					width: 19.7rem;
					height: 3rem;
					line-height: 3rem;
					border: solid 1px rgba(238,238,238,1);
					border-radius:1.5rem;
					margin-top: 2rem;
					text-align: center;
					color:rgba(187,187,187,1);
				}
				.count{
					width: 19.7rem;
					height: 3rem;
					line-height: 3rem;
					background:rgba(204,204,204,1);
					border-radius:1.4rem;
					font-size:1rem;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(254,254,254,1);
					text-align: center;
					margin-top: 2.5rem;
				}
			}
		}
	}
	
	
	/*.alert .active{
		background-color: bisque;
		display: block;
	}*/
</style>