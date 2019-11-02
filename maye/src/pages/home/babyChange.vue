<template>
	<div id="Change">
		<Headbar txt1="孕期变化" txt2="分享"></Headbar>
		
		<div id="babychange">
			<div class="babychange">
				<div class="change-nav">
					<ul>
						<li :id="index" class="nav-li" v-for="(item,index) in list" 
							:key="index" @click="tabClick(index)">
							{{item.name}}
							<div :class="{'navbar_slider':item.bol}"></div>
						</li>
						
					</ul>
					<!--<div class="navbar_slider" :class="navbarSliderClass"></div>-->
					<!--<div class="change-line"></div>-->
				</div>
			</div>
			<div class="change-txt">
				<ul>
					<li v-for="(item,index) in list" :hidden="activeIndex != index">
						<div v-for="items in item.data" id="yuer">
							<div class="yuer">
								<div class="icon"></div>
								<p class="yuer_tit">{{items.tit}}</p>
								<!--<span>{{items.txt}}</span>-->
							</div>
							<div class="txt">{{items.txt}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Headbar from "@/components/headbar/headbar"
	export default {
		name:"babychange",
		components:{
			Headbar
		},
		computed: {
//		    navbarSliderClass() {
//		      if (this.activeIndex == 0) {
//		        return "navbar_slider_0";
//		      }
//		      if (this.activeIndex == 1) {
//		        return "navbar_slider_1";
//		      }
//		      if (this.activeIndex == 2) {
//		        return "navbar_slider_2";
//		      }
//		    },
		},
		data(){
			
			return {
				list:[
					{
						name:"育1周",
						type:0,
						bol:true,
						data:[
							{
								tit:"宝宝发育",
								
								txt:"哭是宝宝天生的本领！TA通过哭闹，告诉妈妈自己的感受和需求。不同的哭声含义各异，妈妈要..."
							},
							{	
								tit:"宝宝发育",
								
								txt:"哭是宝宝天生的本领！TA通过哭闹，告诉妈妈自己的感受和需求。不同的哭声含义各异，妈妈要..."
							},
							{	
								tit:"宝宝发育",
								
								txt:"哭是宝宝天生的本领！TA通过哭闹，告诉妈妈自己的感受和需求。不同的哭声含义各异，妈妈要..."
							},
							{
								tit:"宝宝发育",
								txt:"哭是宝宝天生的本领！TA通过哭闹，告诉妈妈自己的感受和需求。不同的哭声含义各异，妈妈要..."
							}
						]
					},
					{name:"育2周",type:1,bol:false,data:[{tit:"",txt:""},{tit:"",txt:""}]},
					{name:"育3周",type:2,bol:false,data:[{tit:"",txt:""},{tit:"",txt:""}]},
					{name:"育4周",type:3,bol:false,data:[{tit:"",txt:""},{tit:"",txt:""}]},
					{name:"育5周",type:4,bol:false,data:[{tit:"",txt:""},{tit:"",txt:""}]},
					{name:"育6周",type:5,bol:false,data:[{tit:"",txt:""},{tit:"",txt:""}]},
					{name:"育7周",type:6,bol:false,data:[{tit:"",txt:""},{tit:"",txt:""}]}
				],
				activeIndex :0,
//				translateX :0//底部滑块的位置
//				bol:true//是否显示滑块
			}
		},
		methods: {
		    tabClick(e) {
		      this.activeIndex = e;
			  for(let i=0;i<this.list.length;i++){
			  	this.list[i].bol = false
			  }
			  this.list[e].bol = true
		}
  },
	}
</script>

<style lang="less">

	#babychange{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.babychange{
			width: 100%;
			height: 2.67rem;
			overflow: hidden;
			border-bottom: solid 1px rgba(238,238,238,1);
		}
		.change-nav{
			width: 100%;
			height: 2.67rem;
			overflow-x:scroll;
			position: relative;
			width:100%;
			
			&::-webkit-scrollbar{ 
				    display:none; 
				}
			ul{
				width: 200%;
				&:first-child{
					margin-left: 1rem;
				}
				.nav-li{
					position: relative;
					float: left;
					height: 2.67rem;
					line-height: 2.4rem;
					width: 5rem;
					list-style: none;
					
					.navbar_slider{
					  position: absolute;
					  content: " ";
					  left: 0;
					  top: 2.4rem;
					  width: 2.67rem;
					  height: 0.2rem;
					  background-color: black;
					  /*-webkit-transition: -webkit-transform 0.1s;
					  transition: -webkit-transform 0.1s;
					  transition: transform 0.1s;
					  transition: transform 0.1s, -webkit-transform 0.1s;
					  
					  &.navbar_slider_0 {
						  left: 1rem;
						  transform: translateX(0);
						}
						&.navbar_slider_1 {
						  left: 1rem;
						  transform: translateX(40px);
						}
						&.navbar_slider_2 {
						  left: 1rem;
						  transform: translateX(80px);
						}*/
					  /*&.navbar_slider_item{
					  	display: none;
					  }*/
					}
				}
			
			}
		}
		.change-txt{
			width: 21.7rem;
			/*margin-top: 1.67rem;*/
			ul{
				padding-top: 1px;
				li{
					list-style: none;
					
					#yuer{
					margin-top: 2.8rem;
					.yuer{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						.icon{
							width: 0.33rem;
							height: 1.33rem;
							border-radius: 0.2rem;
							background:rgba(255,119,184,1);
							}
							.yuer_tit{
								margin-left: 0.67rem;
								font-size:1rem;
								font-family:PingFang SC;
								font-weight:bold;
								color:rgba(51,51,51,1);
							}
						}
						.txt{
							margin-top: 1.2rem;
							font-size:14px;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(51,51,51,1);
							line-height:1.6rem;
						}
						&:first-child{
							margin-top: 1.67rem;
						}
					}
					
				}
				
			}
		}
	}
</style>