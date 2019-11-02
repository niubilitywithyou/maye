<template>
    <div class="date-tools">
        <div class="date-years">
            <div class="date-btn date-left"><button class="btn-left" @click="subMonth(panelYear,panelMonth)"><</button></div>
            <div class="date-middle">{{panelYear}}年{{panelMonth+1}}月</div>
            <div class="date-btn date-right"><button class="btn-right" @click="addMonth(panelYear,panelMonth)">></button></div>
        </div>
        <div class="date-weeks">
            <span>日</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
        </div>
        <div class="date-days">
            <template v-for="(day,index) in dayFullList">
            <button v-if="day!=0" :class="colorDay(day)">
                <a href="javascript:void(0);" v-if="(trainDateFullList.includes(day))" class="active" @click="getCurrentDay(day)">{{day | filterDay}} </a>
                <a href="javascript:void(0);" v-else>{{day | filterDay}} </a>
            </button>
            <button v-else>
                <a href="javascript:void(0);" style="opacity:0;">{{day}} </a>
            </button>
            </template>
        </div>
        <!-- 年月下拉框 -->
        <!--<div class="drop-down-ym" v-if="showDropDownYM">
            <div class="drop-down-y">
                <a href="javascript:void(0);" v-for="(item,index) in yearList" @click="selectY(item)">{{item}}</a>
            </div>
            <div class="drop-down-m">
                <a href="javascript:void(0);" v-for="(item,index) in monthList" @click="selectM(item-1)">{{item}}</a>
            </div>
        </div>-->
        <div class="date-staus">
        	<div class="staus-yima staus-item">
        		<div class="yima-color icon"></div>
        		<p><span>月经期</span></p>
        	</div>
        	<div class="staus-safe staus-item">
        		<div class="safe-color icon"></div>
        		<p>安全期</p>
        	</div>
        	<div class="staus-painuan staus-item">
        		<div class="painuan-color icon"></div>
        		<p>排暖期</p>
        	</div>
        	<div class="staus-theday staus-item">
        		<div class="day-color icon"></div>
        		<p>排暖日</p>
        	</div>
        </div>
    </div>
</template>

<script>
    export default ({
        props: ['dateToolsKey','trainDateList','trainDateFullList'],
        data(){
            return {
//              yearList:[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
//              monthList:[1,2,3,4,5,6,7,8,9,10,11,12],
                weekList:[],
                dayList:[],//所有的天数列表，前面空位补0
                dayFullList:[],//所有的天数列表，前面空位补0
                panelYear:'',//仪表盘显示的年
                panelMonth:'',//仪表盘显示的月（从0开始）
                panelDay:'',//仪表盘显示的天（从1开始）
                firstDay:'',//每月第一天
                lastDay:'',//每月最后一天也即每月多少天
                firstDayisWhat:'',//第一天星期几0-6（星期日到星期六）
                yimaFirstday:20191012,
                yimaLastday:20191017,
                yimaRecord:[20191012,20191013,20191014,20191015,20191016,20191017],//姨妈期
                safeRecord:[],//安全期
                painuanRecord:[20191021,20191022,20191023,20191024,20191025],//拍暖期
                painuanDay:''
                
            }
        },
        filters:{
            filterDay(value){
                return parseInt(value.slice(-2));
            }
        },
        methods:{
        	
        	//日历填充数据
            dateInit(year=(new Date()).getFullYear(),month=(new Date()).getMonth()){
                let self = this;
                let y = year;
                let m = month;
                self.panelYear = year;
                self.panelMonth = month;
                self.firstDay = (new Date(y,m,1)).getDate();//每月第一天
                self.lastDay = (new Date(y,m+1,0)).getDate();//每月最后一天也即每月多少天
                self.firstDayisWhat = (new Date(y,m,1)).getDay();//第一天星期几0-6（星期日到星期六）
                let beginTmp = new Array(self.firstDayisWhat).fill(0);//初始化长度为3的数组并填充0
                let lastTmp = [];//初始化长度为当月天数的数组并填充为0-30或0-31
                let lastFullTmp = [];//初始化完整的月的每天格式为年月日20180627
                for (let i=1;i<=self.lastDay;i++){
                    lastTmp.push(i);
                    lastFullTmp.push(''+self.panelYear+self.addPreZero(self.panelMonth+1)+self.addPreZero(i));
                }
                self.dayList=[...beginTmp,...lastTmp];//用结构的方式生成新日期数组
                self.dayFullList = [...beginTmp,...lastFullTmp];//用结构的方式生成年月日完整的新日期数组
            	
            },
            subMonth(remYear,remMonth){
                let self = this;
                if(self.panelMonth>0){
                    self.panelMonth--;
                }else if(self.panelMonth==0){
                	//跳转到上一年的12月
                	remYear --;
                	self.panelYear = remYear;
                	remMonth = 11
                	self.panelMonth = remMonth
                }
            },
            addMonth(addYear,addMouth){
                let self = this;
                if(self.panelMonth<11){
                    self.panelMonth++;
                }else if(self.panelMonth==11){
                	//跳转到下一年的一月份
                	addYear ++;
                	self.panelYear = addYear
                	addMouth = 0;
                	self.panelMonth = addMouth
                }
            },
            getCurrentDay(currentDay){
                this.panelDay = currentDay;
            },
            selectY(year){
                let self = this;
                self.panelYear = year;
            },
            selectM(month){
                let self = this;
                self.panelMonth = month;
                self.showDropDownYM=false;
            },
            addPreZero(num){//小于9的需要添加0前缀
                return (num>9) ? num:('0'+num);
            },
            removePreZero(num){//小于9的需要去除0前缀
                return parseInt(num);
            },
            //根据不同的状态渲染不同的日期
            colorDay(day){
            	console.log(typeof(day))
            	if(this.yimaRecord.includes(parseInt(day))){
            		if(this.yimaFirstday==day){
            			return "yimaFirst"
            		}else if(this.yimaLastday==day){
            			return "yimaLast"
            		}else{
            			return "yimaRecord"
            		}
            	}else if(this.painuanRecord.includes(parseInt(day))){
            		return "painuanRecord"
            	}else{
            		return "safeRecord"
            	}
            },
	    },
        watch: {
            panelMonth(newVal,oldVal){//检测月份变化
                this.dateInit(this.panelYear,this.panelMonth);
            },
            panelYear(newVal,oldVal){//检测年份变化
                this.dateInit(this.panelYear,this.panelMonth);
            },
            panelDay(newVal,oldVal){//检测具体日期变化
                this.$emit('topDateEvent'+this.dateToolsKey,newVal);
            }
        },
        created(){
            this.dateInit();
        }
    })
</script>

<style lang="less" scoped>
.date-tools{
	width: 23rem;
	.date-years{
		width: 100%;
		display: flex;
		justify-content: space-between;
		height: 3rem;
		div{
			flex: 1;
			height: 3rem;
			line-height: 3rem;
			border: none;
			&.date-left{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.btn-left{
					background-color: transparent;
					width: 2rem;
					height: 2rem;
					line-height: 2rem;
					text-align: center;
					border: none;
					/*border: solid 1px saddlebrown;*/
				}
			}
			&.date-middle{
				text-align: center;
				font-size: 1.1rem;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
			&.date-right{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.btn-right{
					width: 2rem;
					height: 2rem;
					background-color: transparent;
					line-height: 2rem;
					text-align: center;
					border: none;
					/*border: solid 1px saddlebrown;*/
				}
			}
		}
	}
	.date-weeks{
		display: flex;
    	justify-content:space-between;
    	height: 3rem;
    	width: 100%;
    	span{
    		display:inline-block;
    		font-size: 0.8rem;
    		font-weight: 800;
		    flex: 1;
		    height:3rem;
		    line-height:3rem;
		    text-align:center;
    	}
	}
	.date-days{
		width: 100%;
		button{
			display: inline-block;
			height: 2rem;
			width: 3.28rem;
			background-color: transparent;
			border: none;
			&.yimaFirst{
				background-color: #FF80BB;
				border-bottom-left-radius: 1rem;
				border-top-left-radius: 1rem;
				a{
					color: white;
				}
			}
			&.yimaLast{
				background-color: #FF80BB;
				border-bottom-right-radius: 1rem;
				border-top-right-radius: 1rem;
				a{
					color: white;
				}
			}
			&.yimaRecord{
				background-color: #FF80BB;
				a{
					color: white;
				}
			}
			&.painuanRecord{
				a{
					color: #A242D9;
				}
			}
			&.safeRecord{
				a{
					color: #2BCCC6;
				}
			}
			a{
				display: inline-block;
				height: 2rem;
				line-height: 2rem;
				width: 3.28rem;
				text-align: center;
				text-decoration: none;
				.activeToday{
					
				}
			}
		}
	}
	.date-staus{
		width: 23rem;
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
		.staus-item{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			&.staus-yima{
				.yima-color{
					width: 0.53rem;
					height: 0.53rem;
					border-radius: 50%;
					background:linear-gradient(90deg,rgba(255,88,167,1),rgba(255,128,187,1));
				}
				p{
					margin-left: 0.4rem;
					span{
						/*margin-left: 0.4rem;*/
						display: inline-block;
						/*font-size:1.47rem;*/
						font-size: 0.8rem;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(51,51,51,1);
						opacity:0.8;
					}
				}
			}
			&.staus-safe{
				.safe-color{
					width:8px;
					height:8px;
					background:linear-gradient(90deg,rgba(75,236,204,1),rgba(129,200,255,1));
					border-radius:50%;
				}
				p{
					margin-left: 0.4rem;
					display: inline-block;
					/*font-size:1.47rem;*/
					font-size: 0.8rem;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
					opacity:0.8;
				}
			}
			&.staus-painuan{
				.painuan-color{
					width:8px;
					height:8px;
					background:linear-gradient(90deg,rgba(206,126,252,1),rgba(255,152,210,1));
					border-radius:50%;
				}
				p{
					margin-left: 0.4rem;
					display: inline-block;
					/*font-size:1.47rem;*/
					font-size: 0.8rem;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
					opacity:0.8;
				}
			}
			&.staus-theday{
				.day-color{
					width:9px;
					height:8px;
					background:linear-gradient(90deg,rgba(247,30,76,1),rgba(255,196,82,1));
				}
				p{
					margin-left: 0.4rem;
					display: inline-block;
					/*font-size:1.47rem;*/
					font-size: 0.8rem;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
					opacity:0.8;
				}
			}
		}
	}
}
</style>