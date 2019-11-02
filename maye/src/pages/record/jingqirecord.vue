<template>
	<div id="history">
		<Headbar txt1="经期周期" id="headbar"></Headbar>
		<div id="jingqi">
			<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange"
                         :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"
                         :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" class="jingqi">
				<ul>
					<li class="jingqi-item" v-for="(item,index) in recordItem" :key='index'>
						<div class="top">
							<div class="top-lef">
								<!--
                                	作者：861687628@qq.com
                                	时间：2019-11-01
                                	描述：根据后台返回的实时数据经行渲染
                                -->
								<div class="icon1" v-if="index == 0">当前</div>
								<div class="icon" v-else></div>
								<div class="time">{{item.day}}</div>
							</div>
							<div class="top-rig">
								<div class="recordtime">周期{{item.record}}天</div>
								<div class="rewrite1" @click="popup(item)" v-if="index == 0"></div>
								<div class="rewrite" @click="popup1(item)" v-else></div>
							</div>
						</div>
						<div class="bottom">
							<div class="jingqidays">经期{{item.record}}天</div>
							<div class="yichang" v-if="item.orright"><p>周期天数异常,请检查</p></div>
						</div>
					</li>
				</ul>
				<div slot="top" class="mint-loadmore-top">
				    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
				    <span v-show="topStatus === 'loading'">Loading...</span>
				</div>
				<div slot="bottom" class="mint-loadmore-bottom">
				    <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">上划查看更多↑</span>
				    <span v-show="bottomStatus === 'loading'">Loading...</span>
				</div>
			</mt-loadmore>
		</div>
		<mt-popup
		  v-model="popupVisible"
		  position="bottom"
		  class="popup"
		  >
		  <div class="popup-item popup-item1" @click="popupJing">
		  	修改当前经期
		  	
		  </div>
		  <div class="popup-item popup-item2" @click="popupRecord">
		  	修改周期
		  	
		  </div>
		  <div class="popup-item popup-item3" @click="popupDel">
		  	删除记录
		  	
		  </div>
		  <div class="popup-item">取消</div>
		</mt-popup>
		
		<!--调整经期的时间控件-->
		<!--<mt-datetime-picker
		  class="datetime"
		  
		  type="date"
		  year-format="{value} 年"
		  month-format="{value} 月"
		  date-format="{value} 日"
		  rotate-effect>
		</mt-datetime-picker>-->


		<mt-popup
		  v-model="popupVisible2"
		  position="bottom"
		  class="popup2"
		  ></mt-popup>
		<mt-popup
		  v-model="popupVisible3"
		  position="bottom"
		  class="popup3"
		  >
		  <div>删除记录</div>
		  <div>取消</div>
		</mt-popup>
		<!--经期的模板-->
		<dialogJingqi :tit="delData" v-show="jingqiVisible" @closeModal="closeJingqi"></dialogJingqi>
		<!--取消及确认弹出框的模板-->
		<dialogconfirm :tit="delData" v-show="confirmVisible" @closeModal="closeConfirm"></dialogconfirm>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Loadmore } from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);
	import { Spinner } from 'mint-ui';
	Vue.component(Spinner.name, Spinner);
	import { Popup } from 'mint-ui';
	Vue.component(Popup.name, Popup);
	import { DatetimePicker } from 'mint-ui';
	Vue.component(DatetimePicker.name, DatetimePicker);
	import dialogJingqi from "@/components/dialog/dialogBottom1"
	import dialogconfirm from "@/components/dialog/dialogconfirm"
	
//	import BScroll from 'better-scroll'
//	import {mapState,mapGetters,mapActions} from "vuex"
	import Headbar from "@/components/headbar/headbar"
	export default{
		name:'history',
		components:{
			Headbar,
			dialogJingqi,
			dialogconfirm
		},
		data(){
			
            return {
                recordItem : [
                	{day:"2019-10-29",days:5,record:28,orright:false},
                	{day:"2019-10-27",days:5,record:28,orright:true},
                	{day:"2019-10-28",days:5,record:28,orright:false},
                	{day:"2019-10-28",days:5,record:28,orright:false},
                	{day:"2019-10-28",days:5,record:28,orright:false},
                	{day:"2019-10-28",days:5,record:28,orright:false},
                	{day:"2019-10-28",days:5,record:28,orright:false},
                	{day:"2019-10-28",days:5,record:28,orright:false},
                ],
                pageNum: 1,//页码
                InitialLoading: true,//初始加载
                allLoaded: false,//数据是否加载完毕
                bottomStatus: '',//底部上拉加载状态
                wrapperHeight: 0,//容器高度
                topStatus: '',//顶部下拉加载状态
				popupVisible:false,//底部弹出框
				popupVisible1:false,
				popupVisible2:false,
				popupVisible3:false,
				confirmVisible:false,
				jingqiVisible:false,
				delData:""//要删除的信息
            }
        },
        created(){
        	this.isToday()
        	
        },
        mounted() {
//      	this.pickCss()
			// 父控件要加上高度，否则会出现上拉不动的情况
//		    this.wrapperHeight =
//		      document.documentElement.clientHeight -
//		      this.$refs.wrapper.getBoundingClientRect().top;
//          let windowWidth = document.documentElement.clientWidth;//获取屏幕宽度
//          if (windowWidth >= 40) {//这里根据自己的实际情况设置容器的高度
//              this.wrapperHeight = document.documentElement.clientHeight - 7;
//          } else {
//              this.wrapperHeight = document.documentElement.clientHeight - 5.3;
//          }
//          setTimeout(() => {//页面挂载完毕 模拟数据请求 这里为了方便使用一次性定时器
//              this.list = 12;
//          }, 1500)
        },
        methods:{
//      	...mapActions(['getMorehistory']),
            //判断是不是今天
            isToday(){
            	var date,y,m,d,time;
            	date=new Date;
				y = date.getFullYear()
				m = date.getMonth() + 1
				d = date.getDate()
				time = y+"-"+m+"-"+d;
				return time
			},
			handleBottomChange(status) {
                this.bottomStatus = status;
            },
            loadBottom() {
            	this.handleBottomChange("loading");//下拉时 改变状态码
//              this.pageNum = 1;
                this.allLoaded = false;//下拉刷新时解除上拉加载的禁用
                setTimeout(() => {
//                  this.list = 12;//下拉刷新 数据初始化
                    this.handleBottomChange("loadingEnd")//数据加载完毕 修改状态码
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
//              this.handleBottomChange("loading");//上拉时 改变状态码
//              this.pageNum += 1;
//              setTimeout(() => {//上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
//                  if (this.pageNum <= 3) {//最多下拉三次
//                      this.list += 12;//上拉加载 每次数值加12
//                  } else {
//                      this.allLoaded = true;//模拟数据加载完毕 禁用上拉加载
//                  }
//                  this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
//                  this.$refs.loadmore.onBottomLoaded();
//              }, 150000);
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadTop() {//下拉刷新 模拟数据请求这里为了方便使用一次性定时器
                this.handleTopChange("loading");//下拉时 改变状态码
                this.pageNum = 1;
                this.allLoaded = false;//下拉刷新时解除上拉加载的禁用
                setTimeout(() => {
//                  this.list = 12;//下拉刷新 数据初始化
                    this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
                    this.$refs.loadmore.onTopLoaded();
                }, 1500);
            },
            popup(e){
            	this.popupVisible = !this.popupVisible;
            	console.log(e.day)
            	console.log(this.isToday())
            },
            popup1(e){
            	this.confirmVisible = !this.confirmVisible;
            	this.delData = e.day;
            	console.log(e.day)
            	console.log(this.isToday())
            },
            popupJing(){
            	this.popupVisible = !this.popupVisible
            	this.jingqiVisible = !this.jingqiVisible;
            	console.log(this.popupVisible1)
//     			this.$refs.picker.open();
            },
            popupRecord(){
            	
            },
            popupDel(){
            	this.popupVisible = !this.popupVisible
            	this.popupVisible3 = !this.popupVisible3
            },
            closeConfirm(){
            	this.confirmVisible = !this.confirmVisible;
            },
            closeJingqi(){
            	this.jingqiVisible = !this.jingqiVisible;
            }
            //修改timepicker的样式
//          pickCss(){
//          	var myAfter = Vue.extend({
//				   template:'<div class="pickertime"><p class="pickertime-cancel">取消</p><p class="pickertime-tit">修改当前经期</p><p class="pickertime-certain">确定</p></div>'
//				})
//          	new myAfter().$mount('.picker-toolbar')//替换dom节点
//          }
        }
		
	}
</script>

<style lang="less" rel="stylesheet/less">
	#headbar{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	#jingqi{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		overflow: scroll;
		.jingqi{
			width: 22.3rem;
			height: 100%;
			/*height: 34rem;*/
			ul{
				margin-top: 0.3rem;
				.jingqi-item{
					height: 4.1rem;
					list-style: none;
					.top{
						display: flex;
						justify-content: space-between;
						align-items: center;
						/*background-color: saddlebrown;*/
						.top-lef{
							flex: 1;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							.icon1{
								width:2rem;
								height:1.33rem;
								background:-webkit-gradient(linear, 0 100%, 0 0, from(rgba(255,88,167,1)), to(rgba(255,128,187,1)));
								background:-webkit-linear-gradient(90deg, rgba(255,88,167,1), rgba(255,128,187,1));
								background:-moz-linear-gradient(90deg, rgba(255,88,167,1), rgba(255,128,187,1));
								background:-o-linear-gradient(90deg, rgba(255,88,167,1), rgba(255,128,187,1));
								background:linear-gradient(90deg, rgba(255,88,167,1), rgba(255,128,187,1));
								/*opacity:0.3;*/
								border-radius:0.33rem;
								font-size:0.75rem;
								text-align: center;
								line-height: 1.33rem;
								font-family:PingFang SC;
								font-weight:400;
								color:rgb(255,255,255);/*字体颜色无效*/
							}
							.icon{
								width: 1rem;
								height: 1rem;
								border: solid 0.2rem rgba(196,196,196,1);
								box-sizing: border-box;
								border-radius:50%;
							}
							.time{
								font-size:0.9rem;
								font-family:PingFang SC;
								font-weight:bold;
								padding-left: 0.67rem;
							}
						}
						.top-rig{
							flex: 1;
							display: flex;
							justify-content: flex-end;
							align-items: center;
							.recordtime{
								font-size:0.9rem;
								font-family:PingFang SC;
								font-weight:bold;
								color:rgba(0,0,0,1);
								margin-right: 0.67rem;
							}
							.rewrite{
								/*margin-left: 0.9rem;*/
								width: 1rem;
								height: 1rem;
								border: solid 1px saddlebrown;
							}
							.rewrite1{
								width: 1rem;
								height: 1rem;
								border: solid 1px seagreen;
							}
						}
					}
					.bottom{
						display: flex;
						justify-content: space-between;
						align-items: center;
						/*margin-top: 0.2rem;*/
						.jingqidays{
							font-size:0.8rem;
							height: 2rem;
							line-height: 2rem;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(0,0,0,1);
							margin-left: 2.67rem;
						}
						.yichang{
							height: 1.33rem;
							width: 7.7rem;
							border-radius: 0.34rem;
							background-color: rgb(255,226,238);
							
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(234,56,102,1);
							text-align: center;
							margin-right: 1.73rem;
							p{	
								height: 2.67rem;
								width: 15.4rem;
								line-height: 2.67rem;
								font-size:1.46rem;
								-webkit-transform: scale(0.5);
								-webkit-transform-origin-X: left;
								-webkit-transform-origin-Y: top;
							}
							
						}
					}
				}
			}
		}
	}
	.popup{
		background-color: transparent;
		.popup-item{
			width: 24.3rem;
			height: 3.33rem;
			text-align: center;
			line-height: 3.33rem;
			background:rgba(255,255,255,1);
			opacity:0.95;
			border-radius:0.2rem;
			margin-top: 1px;
			font-size:16px;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(91,147,255,1);
			&:nth-child(4){
				margin-top: 0.67rem;
				color:rgba(254,37,37,1);
			}
		}
	}
	.popup3{
		background-color: transparent;
		div{
			width: 24.3rem;
			height: 3.33rem;
			text-align: center;
			line-height: 3.33rem;
			background:rgba(255,255,255,1);
			opacity:0.95;
			border-radius:0.2rem;
			font-size:16px;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(91,147,255,1);
			&:last-child{
				margin-top: 0.67rem;
				color:rgba(254,37,37,1);
				margin-bottom: 0.33rem;
			}
		}
	}
	
</style>
<style lang="less">
	.datetime{
		display: block !important;
		height: 17.2rem;
		.picker{
			width: 100%;
			height: 100%;
			.pickertime{
				margin-left: 1.4rem;
				margin-right: 1.4rem;
				height: 2.8rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.pickertime-cancel{
					text-align: left;
					font-size:1.1rem;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
				}
				.pickertime-tit{
					text-align: center;
					font-size:16px;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}
				.pickertime-certain{
					text-align: right;
					font-size:1.1rem;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,115,184,1);
				}
			}
		}
	}
</style>