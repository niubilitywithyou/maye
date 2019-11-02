<template>
	<div id="onload2">
		<Headbar id="headbar" txt1="宝宝养育" txt2="保存" :tourl=tourl  :getdata="userData()"></Headbar>
		<!--<div class="sel1">-->
			
				<p class="p1">宝宝昵称</p>
				
				<!--<div class="choose1" v-if="bol1" @click="turn1">请输入宝宝名字</div>-->
				<div class="onload2">
					<div class="choose1">
						<input type="text" placeholder="请输入宝宝名字" v-model="babyName" />
					</div>
				</div>
				<p class="p2">宝宝生日</p>
				<div class="onload2">
					<div class="choose2" v-if="bol2" @click="turn2">请选择宝宝生日</div>
					<Tpicker class="picker" v-if="!bol2" @userChoose="getBabybirth"></Tpicker>
				</div>
				<p class="p2">宝宝性别</p>
				<div class="onload2">
					<div class="choose3" v-if="bol3" @click="turn3">请选择宝宝性别</div>
					<Dpicker class="picker" @userChoose="getBabysex" :day=day :defaultIndex=0 v-if="!bol3"></Dpicker>
				</div>
		<!--</div>-->
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
			Dpicker,
			
		},
		data(){
			return{
				day:["男","女"],
				tourl:"",
				bol2:true,
				bol3:true,
				babyName:"",
				babyBirth:"",
				babySex:""
			}
		},
		created(){
//			this.pushtime()
		},
		mounted(){
			this.babyNametest();
			this.userData()
		},
		methods:{
//			pushtime(){
//				for(let i=20;i<=60;i++){
//					this.yueTime.push(i)
//				}
//				for(let i=2;i<=10;i++){
//					this.yueTime2.push(i)
//				}
//				console.log(this.yueTime)
//			},
			turn1(){
				this.bol1=false
			},
			turn2(){
				this.bol2=false
			},
			turn3(){
				this.bol3=false
			},
			//验证宝宝昵称
			babyNametest(){
				if(this.babyName.length>=2 && this.babyName.length<=15){
					
				}else{
					
				}
			},
			getBabybirth(y,m,d){
				this.babyBirth =`${y}${m}${d}`;
//				console.log(this.bayBirth)
			},
			getBabysex(sex){
				this.babySex = sex
//				console.log(this.babySex)
			},
			userData(){
//				console.log(this.babyName,this.babyBirth,this.babySex)
				//保存并返回数据给后台
				if(this.babyBirth!=null && this.getBabysex!=null && this.babyName){
					this.tourl = "/homehasbaby"
					return `{${this.babyName},${this.babyBirth},${this.babySex}}`
				}
			}
			
		}
	}
</script>

<style scoped="scoped">
	/*html,body{
		width: 100%;
		height: 100%;
		background:rgba(255,255,255,1);
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
	/*#onload2{
		display: flex;
		flex-direction: column;
		align-items: center;
	}*/
	/*.sel1{
		margin-top: 2.5rem;
	}*/
	#onload2 p{
		font-size: 1.1rem;
		text-align: center;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-top: 2.4rem;
	}
	#onload2 .onload2{
		display: flex;
		justify-content: center;
	}
	.picker{
		margin-top: 2rem;
	}
	#onload2 .p2{
		margin-top: 4.4rem;
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
	input::-webkit-input-placeholder{
	  color: rgb(204,204,204)
	}
	input:-moz-placeholder{
	  color: rgb(204,204,204)
	}
	
	input::-moz-placeholder{
	  color: rgb(204,204,204)
	}
	
	input:-ms-input-placeholder{
	  color: rgb(204,204,204)
	}
	.choose1>input{
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		text-align: center;
		font-size: 1rem;
		border-radius:1.75rem;
	}
</style>