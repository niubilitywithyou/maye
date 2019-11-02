<template>
    <!-- 过渡动画 -->
    <transition name="modal-fade">
        <!-- 关闭模态框事件 和 控制模态框是否显示 -->
        <div class="modal-backdrop"  @click="$emit('closeModal')">
        	<div id="modal">
	            <div class="modal">
	                <div class="modal-tit" id="modalDescription">
	                    <p class="p1">取消</p>
	                    <p class="p2">{{tit}}</p>
	                    <p class="p3">确定</p>
	                </div>
	                
	                <mt-picker :slots="slots" rotate-effect @change="onValuechange"></mt-picker>
	            </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { Picker } from 'mint-ui';
import Vue from 'vue'
Vue.component(Picker.name, Picker);
export default {
	
    name:'modal',
    props:['tit'],
    components:{
//  	Tpicker
    },
    data(){
        return{
            closemodal:"close",
            slots: [
		        {
		          flex: 1,
		          values: this.getYears(),
		          className: 'temp-slot',
		          textAlign: 'center'
		        },{
		          flex: 1,
		          values: this.getMouth(),
		          className: 'temp-slot',
		          textAlign: 'center'
		        },{
		          flex: 1,
		          values: this.getDays(),
		          className: 'temp-slot',
		          textAlign: 'center'
		        }
      		],
      		check:"",
      		currentYear : 2019,
      		currentMouth : 0,
      		currentDay : 0
      		
        }
    },
    created(){
//  	this.time();
    },
    methods:{
        // 关闭模态框事件
        close(){
            this.$emit('close')
        },
        //拼节时间
        getYears(){
        	var years = []
        	for(let i=2010;i<=2035;i++){
        		years.push(i+"年")
        	}
			return years;
//  		this.slots[0].defaultIndex = this.slots[0].values.indexOf(this.currentY)
//  		this.slots[1].defaultIndex = this.slots[1].values.indexOf(this.currentM)
//  		this.slots[2].defaultIndex = this.slots[2].values.indexOf(this.currentD)
        },
        getMouth(){
        	var mouth = []
        	for(let i=1;i<=12;i++){
        		mouth.push(i+"月")
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
        		days.push(i+"日")
        	}
        	console.log(untilDay)
        	return days;
        },
        onValuechange(picker,values){
        	this.currentYear = parseInt(values[0]);//自动截取数字
        	this.currentMouth = parseInt(values[1]);
        	this.currentDay = parseInt(values[2]);
        	picker.setSlotValues(2,this.getDays())
        	console.log(this.getDays())
        	console.log(values)
        }
    }
}
</script>

<style lang="less" scoped> 
.modal-backdrop {
    position: fixed; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    background-color: rgba(0,0,0,.3); 
    display: flex; 
    justify-content: center; 
    /*align-items: center;*/
    z-index: 99;
    #modal{
    	position: relative;
    	width: 100%;
    	height: 100%;
	    .modal { 
	        background-color: #fff; 
	        overflow-x:auto; 
	        display: flex; 
	        flex-direction: column;
	        align-items: center;
	        width: 100%;
	        height: 17.3rem;
	        position: absolute;
	        bottom: 0;
	        .modal-tit{
	        	height: 2.7rem;
				width: 21.7rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.p1,.p3{
					font-size:1.1rem;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(153,153,153,1);
				}
				.p2{
					font-size:1.2rem;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}	
	        }
	        .picker{
	        	width: 21.67rem;
	        	.picker-items{
	        		width: 21.67rem;
	        	}
	        }
	        
	    }
    } 
}
/* 动画 */
.modal-fade-enter,.modal-fade-leave-active{
    opacity: 0;
}
.modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity 0.5s ease;
}
</style>
<style>
	.picker-items{
		width: 21.67rem;
	}
	.temp-slot .picker-selected{
		font-size: 1.67rem;
	}
	
</style>