<template>
	<div id="timePicker">
		<mt-picker :slots="slots"  @change="onValueschange" :visibleItemCount="num" class="timepicker"></mt-picker>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Picker } from 'mint-ui';
	Vue.component(Picker.name, Picker);
	export default {
		name:"timepicker",
		methods: {
			//拼节时间
		        getYears(){
		        	var years = []
		        	for(let i=2010;i<=2035;i++){
		        		years.push(i)
		        	}
					return years;
		
		        },
		        getMouth(){
		        	var mouth = []
		        	for(let i=1;i<=12;i++){
		        		mouth.push(i)
		        	}
		        	return mouth;
		        },
		        getDays(){
		        	var days = []
		        	let untilDay = 31;
		        	let mouth30 = [4,6,9,11];
		        	if(this.currentMouth==2){
		        		if(this.currentYear%4==0){
		        			untilDay = 29
		        		}else{
		        			untilDay = 28
		        		}
		        	}else if(mouth30.includes(this.currentMouth)){
		        		untilDay = 30
		        	}
		        	for(let i=1;i<=untilDay;i++){
		        		days.push(i)
		        	}
//		        	console.log(untilDay)
		        	return days;
		        },
		        onValueschange(picker,values){
		        	this.currentYear = parseInt(values[0]);//自动截取数字
		        	this.currentMouth = parseInt(values[1]);
		        	this.currentDay = parseInt(values[2]);
		        	picker.setSlotValues(2,this.getDays())
		        	//获取最后选择的年龄，并发送给后台,子组件给父组件传值
		        	this.$emit('userChoose',this.currentYear,this.currentMouth,this.currentDay)
		        },
		        defaultDate(){
		        	var date = new Date()
		    		var y=date.getFullYear();
		    		var m=date.getMonth();
		    		var d=date.getDate()
	//	    		console.log(y,m,d)
					console.log(this.slots[0].values.indexOf(y))
		    	 	this.slots[0].defaultIndex = this.slots[0].values.indexOf(y)
			 		this.slots[2].defaultIndex = this.slots[2].values.indexOf(m)
			    	this.slots[4].defaultIndex = this.slots[4].values.indexOf(d)
			    }
	    },
	    created(){
	    	this.defaultDate()
	    },
	    mounted(){
	    		
	    },
		data() {
		    return {
		      slots: [
		        {
//		          flex: 1,
		          values: this.getYears(),
//		          defaultIndex: this.y,
		          className: 'slot1',
		          textAlign: 'right',
		          
		        }, {
		          divider: true,
		          content: '年',
		          className: 'slot2'
		        }, {
//		          flex: 1,
		          values: this.getMouth(),
//		          defaultIndex: this.m,
		          className: 'slot3',
		          textAlign: 'left'
		        }, {
		          divider: true,
		          content: '月',
		          className: 'slot4'
		        }, {
//		          flex: 1,
		          values: this.getDays(),
		          className: 'slot5',
		          textAlign: 'left'
		        }, {
		          divider: true,
//		          defaultIndex: this.d,
		          content: '日',
		          className: 'slot6'
		        }
		      ],
		      check:"",
		      num:1,
	      	  currentYear : 2019,
	      	  currentMouth : 0,
	      	  currentDay : 0
		    }
	    }
	    
	}
	 
	
</script>

<style scoped="scoped">
	#timePicker{
		display: flex;
		justify-content: center;
	}
	#timePicker .timepicker{
		width: 19.7rem;
		height: 3rem;
		/*line-height: 3rem;*/
		border: solid 1px rgba(238,238,238,1);
		border-radius:1.5rem;
	}
	/*.picker-items{
		margin-top: 0.3rem;
	}
	.picker-item,.picker-slot{
		text-align: center;
		font-size: 1.1rem;
		color:rgba(102,102,102,1) !important;
	}
	.picker-item{
		padding: 0 3px;
	}
	.picker-center-highlight:before{
		display: none;
	}
	.picker-center-highlight:after{
		display: none;
	}*/
</style>
<style>
	.picker-items{
		margin-top: 0.3rem;
	}
	.timepicker{
		width: 19.7rem;
		height: 3rem;
		border: solid 1px rgba(238,238,238,1);
		border-radius:1.5rem;
	}
	.picker-item,.picker-slot{
		text-align: center;
		font-size: 1.1rem;
		color:rgba(102,102,102,1) !important;
	}
	.picker-item{
		padding: 0 3px;
	}
	.picker-slot-divider{
		/*margin-top: -0.2rem;*/
	}
	.picker-center-highlight:before{
		display: none;
	}
	.picker-center-highlight:after{
		display: none;
	}
</style>