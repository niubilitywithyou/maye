<template>
	<div id="staus">
		<div class="staus">
			<div class="tit">{{tit}}</div>
			<div class="cont">
				<ul>
					<li v-for="(item,index) in stausData" class="staus1" ref="box">
						<div class="box">
							<div class="cir" @click="selected(item)">
								<div class="getit" :class="{'select':!item.bol}"></div>
								<!--<div class="getit"></div>-->
							</div>
							<p class="txt">{{item.mood}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"staus",
		props:[
			"tit","staus"
		],
		data(){
			return{
				stausData:[],
			}
			
		},
//		watch:{
//			liLength:{
//				handler(){
//              	
//              },
//              deep:true
//			}
//		}
		created(){
			this.getstaus()
		},
		methods:{
			getstaus(){
//				this.staus = this.stausData
				this.stausData = this.staus
//				var arra = []
////				var arra = this.staus
//				//给stausData添加name以及select属性
//				arra.map(((item,index)=>{
//
//				    this.stausData.push(Object.assign({},item,{name:"",sel:false}))
//				
//				}))
//				this.staus = this.stausData
			},
			selected(e){
				e.bol = !e.bol
				
			}
			
		}
	}
</script>

<style scoped="scoped">
	#staus{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#staus>.staus{
		width: 100%;
		height: 100%;
	}
	#staus>.staus>.tit{
		margin-left: 1.67rem;
		text-align: left;
		font-size:1.2rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	#staus>.staus>.cont{
		margin-top: 1.2rem;
		display: flex;
		justify-content: center;
		
	}
	#staus>.staus>.cont ul{
		width: 21.7rem;
		overflow: hidden;
		/*display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;*/
	}
	#staus>.staus>.cont .staus1{
		list-style: none;
		margin-left: none;
		/*width: 5rem;*/
		float: left;
		height: 4.4rem;
	}
	#staus>.staus>.cont .staus1:nth-child(n+6){
		margin-top: 0.6rem;
	}
	#staus>.staus>.cont .staus1{
		margin-left: 1.67rem;
	}
	#staus>.staus>.cont .staus1:nth-child(5n+1){
		margin-left: 0;
	}
	#staus>.staus>.cont .staus1 .box{
		position: relative;
	}
	#staus>.staus>.cont .cir{
		width: 3rem;
		height: 3rem;
		background:rgba(204,204,204,1);
		border-radius:50%;
		position: relative;
	}
	#staus>.staus>.cont .cir .getit{
		position: absolute;
		left: 2rem;
		top: 2rem;
		width: 1rem;
		height: 1rem;
		background:rgba(255,255,255,1);
		border:1px solid rgba(238,238,238,1);
		border-radius:50%;
		box-sizing: border-box;
	}
	.select{
		display: none;
	}
	#staus>.staus>.cont .txt{
		position: absolute;
		width: 4rem;
		left: 50%;
		margin-left: -2rem;
		-webkit-transform: scale(0.8);
		font-size:0.67rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		text-align: center;
	}
</style>