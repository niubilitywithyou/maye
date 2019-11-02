<template>
	<div>
		<div class="yuyuetitle">
			<!--<img src="../../assets/nav_fanhui.png" onclick="window.history.go(-1)"> 美年好医生体检预约-->
		</div>

		<div id="calendar">
			<div class="choose">
				<font style="color: #666666;">{{word}}</font>
				<font style="color: #E40065;">{{timeyear}}</font>
				<font style="color: #E40065;">{{timemonth}}</font>
				<font style="color: #E40065;">{{timeday}}</font>
			</div>
			<div class="year">
				<div class="yeardisplay">
					<span :class="isnowyear? '' : 'newcolor' " class="nowyear" @click="getClickYear(new Date().getFullYear(),true)">{{new Date().getFullYear()}}年</span>&nbsp;
					<span :class="isnextyear? '' : 'newcolor' " class="nowyear" v-if="new Date().getMonth()+1===11" @click="getClickYear(new Date().getFullYear()+1,true)">{{new Date().getFullYear()+1}}年</span>
				</div>
				<div class="monthdisplay">
					<span :class="isnowmonth? '' : 'newcolor' " @click="getClickMonth(new Date().getFullYear(),nowMonth,true)">{{nowMonth}}月</span>
					<span :class="ismiddlemonth? '' : 'newcolor' " @click="getClickMonth(new Date().getFullYear(),middleMonth,true)">{{middleMonth}}月</span>
					<span :class="isnextmonth?'' : 'newcolor' " style="border: none;" @click="getClickMonth(new Date().getFullYear(),nextMonth,true)">{{nextMonth}}月</span>
				</div>
			</div>
			<ul class="weekdays">
				<li>周一</li>
				<li>周二</li>
				<li>周三</li>
				<li>周四</li>
				<li>周五</li>
				<li>周六</li>
				<li>周日</li>
			</ul>
			<!-- 日期 -->
			<ul class="days">
				<!-- v-for循环 每一次循环用<li>标签创建一天 -->
				<li v-for="(dayobject,index) in days" :class="dayobject.isSelection? 'newcolor' : '' ">
					<!-- 当前日期 -->
					<span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()" class="active" style="border-bottom: 2px solid #E40065;">{{ dayobject.day.getDate()}}</span>
					<!-- 当前月份 可预约的日期 -->
					<span v-else-if="currentMonth==nowMonth&&dayobject.day.getMonth()+1==nowMonth&&dayobject.check" @click="getClickDay(dayobject.day.getDate(),new Date().getDate())">{{ dayobject.day.getDate() }}</span>
					<!-- 当前月的下一个月可预约日期 -->
					<span v-else-if="currentMonth==nowMonth&&dayobject.day.getMonth()+1==middleMonth&&dayobject.check" @click="getOtnerMonth(dayobject.day.getDate(),new Date().getDate(),new Date().getFullYear(),middleMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 当前月的下一个月不可预约日期 -->
					<span v-else-if="currentMonth==nowMonth&&dayobject.day.getMonth()+1==middleMonth&&!dayobject.check" class="other-month" @click="getClickMonth(new Date().getFullYear(),middleMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 中间月份的上一个月可预约日期-->
					<span v-else-if="currentMonth==middleMonth&&dayobject.day.getMonth()+1==nowMonth&&dayobject.check" @click="getOtnerMonth(dayobject.day.getDate(),new Date().getDate(),new Date().getFullYear(),nowMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 中间月份的上一个月不可预约日期-->
					<span v-else-if="currentMonth==middleMonth&&dayobject.day.getMonth()+1==nowMonth&&!dayobject.check" class="other-month" @click="getClickMonth(new Date().getFullYear(),nowMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 中间月份的可预约日期-->
					<span v-else-if="currentMonth==middleMonth&&dayobject.day.getMonth()+1==currentMonth&&dayobject.check" @click="getClickDay(dayobject.day.getDate(),new Date().getDate())">{{ dayobject.day.getDate() }}</span>
					<!-- 中间月的下一个月可预约日期 -->
					<span v-else-if="currentMonth==middleMonth&&dayobject.day.getMonth()+1==nextMonth&&dayobject.check" @click="getOtnerMonth(dayobject.day.getDate(),new Date().getDate(),new Date().getFullYear(),nextMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 中间月的下一个月不可预约日期 -->
					<span v-else-if="currentMonth==middleMonth&&dayobject.day.getMonth()+1==nextMonth&&!dayobject.check" class="other-month" @click="getClickMonth(new Date().getFullYear(),nextMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 显示月份的上一个月可预约日期-->
					<span v-else-if="currentMonth==nextMonth&&dayobject.day.getMonth()+1==middleMonth&&dayobject.check" @click="getOtnerMonth(dayobject.day.getDate(),new Date().getDate(),new Date().getFullYear(),middleMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 显示月份的上一个月不可预约日期-->
					<span v-else-if="currentMonth==nextMonth&&dayobject.day.getMonth()+1==middleMonth&&!dayobject.check" class="other-month" @click="getClickMonth(new Date().getFullYear(),middleMonth,true)">{{ dayobject.day.getDate() }}</span>
					<!-- 显示月份的可预约日期-->
					<span v-else-if="currentMonth==nextMonth&&dayobject.day.getMonth()+1==currentMonth&&dayobject.check" @click="getClickDay(dayobject.day.getDate(),new Date().getDate())">{{ dayobject.day.getDate() }}</span>
					<span v-else class="other-month">{{ dayobject.day.getDate()}}</span>
				</li>
			</ul>
		</div>

		<div class="world">说明：黑色为可预约日期，灰色为不可预约日期。</div>
		<div class="bottombar">
			<!-- <div class="laststep" onclick="window.history.go(-1)">上一步</div> -->
			<div class="nextstep" @click="gotoNext()">
				下一步
				<!--<router-link class="nextstepbtn" to="/Affirm"></router-link>-->
			</div>
		</div>
		<div class="modal-mask" v-if="isShow==true"></div>
		<div class="modal-dialog" v-if="isShow==true">
			<div class="modal-title">提示</div>
			<div class="modal-cont">确定选择预约时间吗？</div>
			<div class="modal-cancel" @click="cancel">取消</div>
			<div class="modal-true" @click="ok">确定</div>
		</div>
		<div class="modal-toast" v-if="isToast==true">请选择预约日期</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
//	import postapi from "../../modeule/postapi.js";
//	import apiPost from '../../modeule/postapi.js';
//	import meinianMd5 from '../../modeule/meinianMd5.js';
//	import storage from "good-storage";
//	 var mya = apiPost
	export default {
		data() {
			return {
				uid: '',
				token: '',
				serviceNumber: '',
				newToken: '',
				OrderCode: '',
				CheckPackageCode: '',

				isToast: false,
				isShow: false,
				isnowmonth: true,
				ismiddlemonth: true,
				isnextmonth: true,
				isnowyear: true,
				isnextyear: true,
				canYYday: '',
				nowMonthMax: '',
				nextMonthMax: '',
				nowMonth: "",
				middleMonth: '',
				nextMonth: '',
				beginDate: '',
				word: "请选择预约日期",
				timeyear: "",
				timemonth: "",
				timeday: "",
				index: 0,
				currentDay: 1,
				currentMonth: 1,
				currentYear: 1970,
				currentWeek: 1,
				days: [],
				isNowMonth: true,
				checkUnitCode: '',
				clients: ''
			}
		},
		mounted() {
			this.$parent.isTabbar = false;
			this.clients = this.$route.query.clients;
			//this.clients = JSON.parse(clientsString);
			//console.log(clientsJason);
			console.log(this.clients);
			console.log(this.$route.query.data)
			this.checkUnitCode = this.$route.query.data;
			console.log(this.checkUnitCode)
			document.body.style.backgroundColor = "#f2f2f2";
			this.uid = storage.get("uid");
			this.token = storage.get("token");
			this.serviceNumber = storage.get("serviceNumber");
			this.newToken = storage.get("newToken");
			this.OrderCode = storage.get("OrderCode");
			this.CheckPackageCode = storage.get("CheckPackageCode")
			console.log(this.CheckPackageCode);
			console.log(this.serviceNumber);
			console.log(this.newToken);
			console.log(this.OrderCode);
			
			
			this.getmonthMaxDay();
			var that = this;
			if(that.nextMonthMax) {
				that.getServer(that.nextMonthMax, null)
//				that.initData(null)
			}
			// var body={
			// 	appKey:"yjk"
			// }
			// var data=meinianMd5("http://test.health-100.cn:32000/Api/EnterPriseOrder/GetEnterprise",body)
			// data.then(function(data){
			// 	console.log(data)
			// })

			// var body={
			//   appKey:"yjk",
			//   // idCard:"421181199607060872",
			//   // name:"任无",
			//   serviceNumber:"89999201703000128",
			//   loginType:0,
			//   enterpriseCode:'hz_yjk',
			//   password:"888888"
			// }
			// var data=meinianMd5("http://test.health-100.cn:32000/Api/Account/Login",body)
			// data.then(function(data){
			// 	console.log(data)
			// })
		},
		created: function() { //在vue初始化时调用
			

		},
		methods: {
			initData: function(cur) {
				this.currentYear = new Date().getFullYear()
				console.log(this.currentYear)
				var leftcount = 0; //存放剩余数量
				var date;
				if(cur) {
					date = new Date(cur);
					console.log(date)
				} else {
					var now = new Date();
					console.log(now.getFullYear())
					var d = new Date(this.formatDate(new Date().getFullYear(), new Date().getMonth(), 1));
					console.log(d)
					d.setDate(42);
					console.log(d.getFullYear())
					date = new Date(this.formatDate(new Date().getFullYear(), new Date().getMonth() + 1, 1));
					console.log(date)
				}
				this.currentDay = date.getDate();
				this.currentYear = date.getFullYear();
				this.currentMonth = date.getMonth() + 1;
				this.currentWeek = date.getDay(); // 1...6,0
				if(this.currentWeek == 0) {
					this.currentWeek = 7;
				}
				console.log(this.currentYear)
				var str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
				console.log(str)
				this.days.length = 0;
				for(var i = this.currentWeek - 1; i >= 0; i--) {
					var d = new Date(str);
					d.setDate(d.getDate() - i);
					var dayobject = {};
					dayobject.day = d;
					dayobject.check = false;
					dayobject.isSelection = false;
					var ymdDate = this.formatDate(dayobject.day.getFullYear(), dayobject.day.getMonth() + 1, dayobject.day.getDate()).replace(/-/g, "");
					//					console.log(ymdDate)
					dayobject.check = false;
					dayobject.isSelection = false;
					 if(this.canYYday.length > 0) {
					 	for(var j = 0; j < this.canYYday.length; j++) {
					 		if(ymdDate == this.canYYday[j].scheduleDate && this.canYYday[j].personCount > 0) {
					 			console.log(ymdDate)
					 			dayobject.check = true;
					 			break;
					 		}
					 	}
					 }
					var now = new Date();
					this.days.push(dayobject);
					if(dayobject.day.getDate() == 1) {
						console.log(dayobject)
					}
					//					console.log(this.days[this.days.length - 1].day.getDate())
				}
				//其他周
				for(var i = 1; i <= 42 - this.currentWeek; i++) {
					var d = new Date(str);
					d.setDate(d.getDate() + i);
					var dayobject = {};
					dayobject.day = d;
					console.log(dayobject.day.getFullYear())
					var ymdDate = this.formatDate(dayobject.day.getFullYear(), dayobject.day.getMonth() + 1, dayobject.day.getDate()).replace(/-/g, "");
					//					console.log(ymdDate)
					dayobject.check = false;
					dayobject.isSelection = false;
					 if(this.canYYday.length > 0) {
					 	for(var j = 0; j < this.canYYday.length; j++) {
					 		//							console.log(ymdDate)
					 		if(ymdDate == this.canYYday[j].scheduleDate && this.canYYday[j].personCount > 0) {
					 			//								console.log(ymdDate)
					 			dayobject.check = true;
					 			break;
					 		}
					 	}
					 }
					this.days.push(dayobject);
					if(dayobject.day.getDate() == 1) {
						console.log(dayobject)
					}
					//					console.log(dayobject)
					//					console.log(this.days[this.days.length - 1].isSelection)
				}
				console.log(this.currentMonth)
				console.log(this.nowMonth)
			},
			pickPre: function(year, month) {
				var d = new Date(this.formatDate(year, month, 1));
				d.setDate(0);
				this.index = 0;
				this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
			},
			pickNext: function(year, month) {
				var d = new Date(this.formatDate(year, month, 1));
				d.setDate(42);
				this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
			},
			pickYear: function(year, month) {
				alert(year + "," + month);
			},

			// 返回 类似 2016-01-02 格式的字符串
			formatDate: function(year, month, day) {
				var y = year;
				var m = month;
				if(m < 10) m = "0" + m;
				var d = day;
				if(d < 10) d = "0" + d;
				return y + "-" + m + "-" + d
			},
			getClickDay: function(day, nowday) {
				this.timeday = day + "日"
				this.word = "已选择：";
				if(day > nowday) {
					this.time = day;
				} else {
					this.time = ""
				}
				for(var i = 0; i < this.days.length; i++) {
					this.$set(this.days[i], 'isSelection');
					if(i == day - 1 + this.currentWeek - 1) {
						this.days[i].isSelection = !this.days[i].isSelection;
						if(this.currentMonth == this.nextMonth && this.nextMonth == 1) {
							this.getClickMonth(this.currentYear - 1, this.currentMonth, false)
						} else {
							this.getClickMonth(this.currentYear, this.currentMonth, false)
						}

					}
				}
			},
			getOtnerMonth: function(day, nowday, year, month, isclick) {
				this.getClickMonth(year, month, isclick),
					this.getClickDay(day, nowday)
			},
			getClickMonth: function(year, month, isclick) {
				console.log(year)
				console.log(month)
				this.timemonth = month + "月"
				this.word = "已选择：";
				if(month == this.nowMonth) {
					console.log("***********")
					this.isnowmonth = false;
					this.ismiddlemonth = true
					this.isnextmonth = true;
					this.getClickYear(year, false);

				} else if(month == this.middleMonth) {
					console.log("***********2222")
					this.isnowmonth = true;
					this.ismiddlemonth = false
					this.isnextmonth = true;
					if(month == 1) {

						this.getClickYear(year + 1, false);
					} else {
						this.getClickYear(year, false);
					}
				} else {
					console.log("***********2222")
					this.isnowmonth = true;
					this.ismiddlemonth = true
					this.isnextmonth = false;
					if(month == 1 || month == 2) {
						this.getClickYear(year + 1, false);
					} else {
						this.getClickYear(year, false);
					}

				}
				if(isclick) {
					console.log(year)
					console.log(month - 1)
					if(month == 1 && month == this.nextMonth) {
						this.pickNext(year, 12)
						this.timeday = ''
					} else if(month == 1 && month == this.nowMonth) {
						this.pickNext(year - 1, 12)
						this.timeday = ''
					} else {
						this.pickNext(year, month - 1)
						this.timeday = ''
					}

				}

			},
			getClickYear: function(year, isclick) {
				this.timeyear = year + "年"
				this.word = "已选择：";
				if(year == new Date().getFullYear()) {
					this.isnowyear = false;
					this.isnextyear = true;
					if(this.nowMonth == 12 && isclick) {
						this.getClickMonth(year, 12, isclick)
					}
				} else {
					this.timeyear = year + "年"
					this.isnowyear = true;
					this.isnextyear = false;
					if(this.nextMonth == 1 && isclick) {
						this.getClickMonth(year - 1, 1, isclick)
					}
				}
			},
			toast: function() {
				this.isToast = true
				setTimeout(this.B, 3000)
			},

			B: function() {
				console.log("898989898")
				this.isToast = false
			},
			getmonthMaxDay: function() {
				this.nowMonth = new Date().getMonth() + 1;
				console.log(this.nowMonth)
				if(this.nowMonth == 11) {
					this.middleMonth = 12
					this.nextMonth = 1
					this.nowMonthMax = new Date(new Date().getFullYear(), this.nowMonth, 0).getDate();
					this.nowMonthMax = this.formatDate(new Date().getFullYear(), this.nowMonth, this.nowMonthMax);
					this.nextMonthMax = new Date(new Date().getFullYear() + 1, this.nextMonth, 0).getDate();
					this.nextMonthMax = this.formatDate(new Date().getFullYear() + 1, this.nextMonth, this.nextMonthMax);
				} else if(this.nowMonth == 12) {
					this.nextMonth = 2
					this.middleMonth = 1
					this.nowMonthMax = new Date(new Date().getFullYear(), this.nowMonth, 0).getDate();
					this.nowMonthMax = this.formatDate(new Date().getFullYear(), this.nowMonth, this.nowMonthMax);
					this.nextMonthMax = new Date(new Date().getFullYear() + 1, this.nextMonth, 0).getDate();
					this.nextMonthMax = this.formatDate(new Date().getFullYear() + 1, this.nextMonth, this.nextMonthMax);
				} else {
					this.middleMonth = this.nowMonth + 1
					this.nextMonth = this.nowMonth + 2
					this.nowMonthMax = new Date(new Date().getFullYear(), this.nowMonth, 0).getDate();
					this.nowMonthMax = this.formatDate(new Date().getFullYear(), this.nowMonth, this.nowMonthMax);
					this.nextMonthMax = new Date(new Date().getFullYear(), this.nextMonth, 0).getDate();
					this.nextMonthMax = this.formatDate(new Date().getFullYear(), this.nextMonth, this.nextMonthMax);
					console.log(this.middleMonth)
					console.log(this.nextMonth)
					console.log(this.nextMonthMax)
				}
				this.beginDate = this.formatDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
				console.log(this.beginDate)
				console.log(this.nextMonthMax)
			},
			//			getOtherMonth:function(){
			//				
			//			}
			getServer: function(maxday, cur) {
				var that = this;
				
				console.log(that.checkUnitCode)
				var body = {
					beginDate: that.beginDate + " 00:00:00",
					checkUnitCode: that.checkUnitCode,
					endDate: maxday + " 00:00:00",
					orderCode: that.OrderCode,
					uid: storage.get("uid"),
					token: storage.get("token"),
					newtoken: "25246FE4B2E839D82B99DEB9423F49C06560791545AE0DEFD603CD00ECE69463414DED9798E0D569"
				}
				var data = apiPost(that.$parent.$data.website + '/mnMall/api/getSchedule', body);
				data.then(function(data) {
					console.log(data)
					if(data.state == 200) {
						console.log(data.data)
						that.canYYday = data.result
						that.initData(cur);
					} else {
						that.$parent.Toast(data.message, "middle", 1500);
						//that.$router.push("/yuyue");
//					  storage.remove("OrderCode");
//			          storage.remove("CheckPackageCode")
//					  storage.remove("newToken");
						
//						Toast({
//							message: data.msg,
//							position: 'middle',
//							duration: 3000
//						});
					}
				})
			},
			ok: function() {
				this.isShow = false

			},
			cancel: function() {
				this.isShow = false

			},

			gotoNext: function() {
				var that = this
				 //console.log(that.cityCode)
                    console.log(that.clients)
                    console.log(that.OrderCode)
                    //console.log(that.cityCode)
				if(this.timeyear && this.timemonth && this.timeday) {
					//					this.isShow = true
					
//					var gender;
//					var MedicalStatus;
 					var yyday = that.formatDate(parseInt(that.timeyear), parseInt(that.timemonth), parseInt(that.timeday)).replace(/-/g, "");
 					that.$parent.$data.checkDate = yyday
 					console.log(yyday)
//					//      that.$router.push('/Information')
//					
					that.clients = JSON.parse(that.clients);
					console.log(that.clients)
					 that.clients.yyday=yyday
					console.log(that.clients)
//					
					var newClients= JSON.stringify(that.clients);
					
					that.$router.push('/Information?data='+newClients)
 

				} else {
					Toast({
						message: '请选择体检日期！',
						position: 'middle',
						duration: 3000
					});

				}
			}

		}
	}
</script>

<style scoped="scoped">
	ul {
		list-style-type: none;
	}
	
	.box {
		width: 300px;
		height: 200px;
		margin: 0 auto;
		boxder: 1px solid #ccc;
		background: #000;
		/* filter: alpha(opacity: 30);
  opacity: 0.3;
  -moz-opacity: 0.3;
  -khtml-opacity: 0.3; */
	}
	
	.yuyuetitle {
		width: 100%;
		height: 43.5px;
		background-color: #ffffff;
		line-height: 43.5px;
		font-size: 18px;
		color: #333333;
		text-align: center;
		position: relative;
		box-shadow: 0px 0.5px 6px rgba(0, 0, 0, 0.1);
	}
	
	.yuyuetitle img {
		width: 9px;
		position: absolute;
		left: 5%;
		top: 50%;
		margin-top: -8px;
	}
	
	.t .toptitle {
		margin-top: 0%;
		width: 100%;
		height: 2.054054rem;
		background-color: #ffffff;
		font-size: 0.972972rem;
		line-height: 2.351351rem;
		border: 1px solid red;
	}
	
	.toptitlemsg {
		margin-left: 29%;
		width: 100%;
		height: 2.054054rem;
		font-size: 0.972972rem;
		color: #666666;
		text-align: center;
		line-height: 2.351351rem;
	}
	
	.year {
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #ffffff;
	}
	
	.yeardisplay {
		position: absolute;
		width: 50%;
		margin-top: 10px;
		line-height: 30px;
		text-align: left;
		display: inline;
		font-size: 16px;
		color: #666666;
		border-right: 1px solid #cccccc;
	}
	
	.nowyear {
		margin-left: 12px;
		border: none;
	}
	
	.yeardisplay span:hover {
		background: #3551a1;
		color: #ffffff;
	}
	
	.monthdisplay {
		margin-left: 50%;
		line-height: 50px;
		position: absolute;
		width: 50%;
		line-height: 50px;
		text-align: center;
		display: inline;
		font-size: 16px;
		color: #666666;
		border: none;
	}
	
	.newcolor {
		background: #e40065;
		color: #ffffff;
	}
	
	.left {
		margin-left: 40%;
		margin-top: -10%;
	}
	
	.right {
		position: absolute;
		margin-left: 65%;
		line-height: 4.054054rem;
	}
	
	.month {
		width: 100%;
		margin-top: 1%;
		/*background: #00B8EC;*/
		height: 4.054054rem;
		background: red;
		line-height: 4.054054rem;
		/*position: relative;*/
	}
	
	.month ul {
		position: absolute;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}
	
	.month ul li {
		/*float:left;*/
		color: white;
		font-size: 13px;
		display: inline-block;
		/*text-transform: uppercase;*/
		letter-spacing: 3px;
	}
	
	.weekdays {
		height: 50px;
		padding-left: 1%;
		line-height: 50px;
		background-color: #ffffff;
		display: flex;
		margin: 0%;
		font-size: 13px;
		color: #666666;
		border-top: 1px solid #cccccc;
	}
	
	.weekdays li {
		display: inline-block;
		width: 14.1%;
		text-align: center;
	}
	
	.days {
		/* color: #3551A1; */
		margin: 0%;
		padding-left: 0;
		background: #ffffff;
		background-color: #ffffff;
	}
	
	.days li {
		display: inline-block;
		height: 50px;
		line-height: 50px;
		width: 14.1%;
		text-align: center;
		font-size: 16px;
	}
	
	.days li .active {
		width: 100%;
		font-size: 16px;
		color: #000000;
	}
	
	.days li .other-month {
		color: gainsboro;
	}
	/*.days li:hover {
		background: #3551A1;
		color: #FFFFFF;
	}*/
	
	.world {
		padding-top: 10px;
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #aaaaaa;
	}
	
	.bottombtn {
		width: 100%;
		position: relative;
	}
	
	.upbtn {
		width: 30%;
		margin-left: 5%;
		margin-top: 3%;
		position: absolute;
	}
	
	.nextbtn {
		width: 30%;
		margin-left: 50%;
		margin-top: 3%;
		position: absolute;
	}
	
	.choose {
		text-align: center;
		padding: 10px;
		font-size: 16px;
	}
	
	.bottombar {
		width: 100%;
		height: 62px;
		position: fixed;
		bottom: 0;
		background-color: #ffffff;
	}
	
	.laststep {
		width: 44.8%;
		height: 42px;
		position: absolute;
		top: 50%;
		margin-top: -21px;
		left: 4%;
		background: #ffffff;
		border: 1px solid #dddddd;
		border-radius: 4px;
		font-size: 16px;
		color: #333333;
		text-align: center;
		line-height: 42px;
	}
	
	.nextstep {
		width: 92%;
		height: 42px;
		position: absolute;
		top: 50%;
		margin-top: -21px;
		right: 4%;
		background: #e40065;
		border-radius: 4px;
		font-size: 16px;
		color: #ffffff;
		text-align: center;
		line-height: 42px;
	}
	
	.nextstepbtn {
		width: 100%;
		height: 42px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.modal-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0%;
		/*background: #E2E7E8;*/
		opacity: 0.5;
		background: #000000;
		/* background-color: white; */
		opacity: 0.5;
		overflow: hidden;
		z-index: 9000;
		color: #fff;
	}
	
	.modal-dialog {
		width: 270px;
		height: 162px;
		border-radius: 5px;
		overflow: hidden;
		position: fixed;
		z-index: 9999;
		background: #ffffff;
		text-align: center;
		/*left: 15%;*/
		/*left: 55px;*/
		/*left: center;
		  bottom:37%;*/
		top: 35%;
		left: 55px;
	}
	
	.modal-title {
		font-family: PingFangSC-Medium;
		margin-top: 20px;
		font-size: 16px;
		color: #353b38;
		letter-spacing: 0.44px;
	}
	
	.modal-cont {
		margin-top: 20px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #353b38;
		letter-spacing: 0;
		text-align: center;
		line-height: 39px;
		padding-bottom: 5px;
		border-bottom: 1px solid #e2e7e8;
	}
	
	.modal-cancel {
		height: 78px;
		margin-top: 0px;
		padding: 5px 50px 0 50px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #353b38;
		letter-spacing: 0;
		text-align: center;
		line-height: 39px;
		float: left;
		border-right: 1px solid #e2e7e8;
	}
	
	.modal-true {
		height: 78px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #3551a1;
		letter-spacing: 0;
		text-align: center;
		line-height: 39px;
		padding: 5px 50px 0 50px;
		float: left;
	}
	
	.modal-toast {
		width: 30%;
		height: 55px;
		position: fixed;
		border-radius: 5px;
		line-height: 55px;
		text-align: center;
		top: 30;
		left: 35%;
		/*background: #E2E7E8;*/
		opacity: 0.5;
		background: #000000;
		/* background-color: white; */
		opacity: 0.5;
		overflow: hidden;
		z-index: 9000;
		color: #fff;
		font-size: 14px;
	}
</style>