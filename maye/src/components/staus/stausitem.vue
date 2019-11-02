<template>
	<div id="staus">
		<div class="staus">
			<div class="cont">
				<ul>
					<li v-for="item in stausData" class="staus1" ref="box">
						<div class="cir">
							<div class="getit"></div>
						</div>
						<p class="txt">{{item}}</p>
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
			"staus"
		],
		data(){
			return{
				stausData:[],
				liLength:0
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
				this.stausData = this.staus
			},
//			li(){
//				this.liLength = this.$refs.box.length
//			}
			
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
		width: 21.7rem;
		height: 100%;
	}
	#staus>.staus>.cont{
		margin-top: 1rem;
		
	}
	#staus>.staus>.cont>ul{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	#staus>.staus>.cont .staus1{
		list-style: none;
	}
	#staus>.staus>.cont .cir{
		width: 3rem;
		height: 3rem;
		background:rgba(204,204,204,1);
		border-radius:50%;
	}
	#staus>.staus>.cont .txt{
		font-size:0.67rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		text-align: center;
		margin-top: 0.33rem;
	}
</style>