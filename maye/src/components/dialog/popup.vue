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
	                
	                <mt-picker :slots="slots" rotate-effect></mt-picker>
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
		          flex: 2,
		          values: [],
		          className: 'temp-slot',
		          textAlign: 'center'
		        },{
		        	flex: 1
		        },{
		          flex: 2,
		          values: [],
		          className: 'temp-slot',
		          textAlign: 'center'
		        }
      		],
      		check:""
        }
    },
    created(){
//  	this.whichslots();
    },
    watch:{
    	tit:{
    		handler(){
				if(this.tit=='体温'){
        		this.temp()
	        	}else if(this.tit=='体重'){
	        		this.weight()
	        	}
	        },
	        deep:true
	    }
    },
    methods:{
        // 关闭模态框事件
        close(){
            this.$emit('close')
        },
        //拼接温度
        temp(){
        	this.slots[0].values=[];
        	this.slots[2].values=[];
        	for(let i=35;i<43;i++){
        		this.slots[0].values.push(i.toString())
        	}
        	for(let i=0;i<100;i++){
        		let temp = "";
        		let count = "";
        		if(i>=0&&i<10){
        			temp += '.0'+i+"℃";	
        		}else{
        			temp += '.'+i+"℃";
        		}
        		this.slots[2].values.push(temp)
        	}
        	console.log(this.slots[2])
        },
        //拼接体重
        weight(){
        	this.slots[0].values=[];
        	this.slots[2].values=[];
        	for(let i=0;i<199;i++){
        		this.slots[0].values.push(i.toString())
        	}
        	for(let i=0;i<10;i++){
        		let weight = "";
        		weight += '.'+i+'kg'
        		this.slots[2].values.push(weight)
        	}
        },
        //获取到所有vaule值
        getValues(){
        	
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