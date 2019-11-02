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
		name:"daypicker",
		props:["day","defaultIndex"],
		methods: {
		    onValueschange(picker,values){
		    	this.currentData = values[0];
		    	console.log(this.currentData)
	        	//获取最后选择的信息，并发送给后台,子组件给父组件传值
	        	this.$emit('userChoose',this.currentData)
	        },
	    },
		data() {
		    return {
		      slots: [
		        {
//		          flex: 1,
		          values: this.day,
		          defaultIndex: this.defaultIndex,
		          className: 'slot1',
		          textAlign: 'center',
		          
		        }
		      ],
		      num:1,
		      currentData:""
		    }
	    },
	    created(){
//	    	this.pushData()
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
	
</style>
<style>
	.picker-items{
		margin-top: 0.3rem;
	}
	.timepicker{
		width: 19.7rem;
		height: 3rem;
		/*line-height: 3rem;*/
		border: solid 1px rgba(238,238,238,1);
		border-radius:1.5rem;
	}
	.picker-item,.picker-slot{
		text-align: center;
		font-size: 1.1rem;
		color:rgba(102,102,102,1) !important;
	}
	.picker-item{
		/*padding: 0 3px;*/
	}
	.picker-center-highlight:before{
		display: none;
	}
	.picker-center-highlight:after{
		display: none;
	}
</style>