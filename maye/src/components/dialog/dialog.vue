<template>
    <!-- 过渡动画 -->
    <transition name="modal-fade">
        <!-- 关闭模态框事件 和 控制模态框是否显示 -->
        <div class="modal-backdrop"  @click="$emit('closeModal')" v-show="show">
        	<div id="modal">
	            <div class="modal">
	                <div class="modal-body" id="modalDescription">
	                    <p class="p1">预产期计算</p>
	                    <p class="p2">请输入最后一次来月经的时间</p>
	                </div>
	                <Tpicker class="tpicker" @userChoose="getdata"></Tpicker>
	                <div class="modal-content" @click="count">开始计算</div>
	            </div>
            </div>
        </div>
    </transition>
</template>
<script>
import Tpicker from "@/components/picker/timepicker"
export default {
	
    name:'modal',
    // 通过 props 传值
    components:{
    	Tpicker
    },
    props: {
        
        
    },
    data(){
        return{
            closemodal:"close",
            lastDay:null,
        }
    },
    methods:{
        // 关闭模态框事件
        close(){
            this.$emit('close')
        },
        //接收timepicker组件的值计算并返回值
        getdata(y,m,d){
        	this.lastDay = `${y}${m}${d}`
        },
        count(){
        	//请求后台接口发送时间给后台并计算
        	//用户预产期时间的计算
//      	this.$emit('count',)
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
    .modal { 
        background-color: #fff; 
        overflow-x:auto; 
        display: flex; 
        flex-direction: column;
        align-items: center; 
        width: 19.7rem;
        height: 20rem;
        position: relative;
        border-radius: 0.67rem;
        margin-top: 8rem;
        .modal-header{ 
            padding: 0.6rem 4.1rem;
            width: 3.6rem;
            height: 3.6rem;
            box-sizing: border-box; 
            .img{
                width: 100%;
                height: 100%;
            }
            div{
                width: 100%;
                height: 100%;
                background: #000;
            }
        } 
        .modal-body{
            width: 100%;
            margin-top: 2.2rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column; 
            align-items: center; 
            .p1{
                font-size:1.1rem;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
            }
            .p2{
            	font-size:0.8rem;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(187,187,187,1);
				margin-top: 0.7rem;
            }
        }
        .tpicker{
        	width: 16.3rem;
        	font-size: 1rem;
        	margin-top: 2.5rem;
        }
        .modal-content{
            width:16.3rem;
			height:3rem;
			background:rgba(204,204,204,1);
			border-radius:1.5rem;
			color: white;
			font-size:1rem;
			font-family:PingFang SC;
			font-weight:bold;
			text-align: center;
			line-height: 3rem;
			margin-top: 2.6rem;
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