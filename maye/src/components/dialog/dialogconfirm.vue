<template>
    <!-- 过渡动画 -->
    <transition name="modal-fade">
        <!-- 关闭模态框事件 和 控制模态框是否显示 -->
        <div class="modal-backdrop"  @click="$emit('closeModal')">
        	<div id="modal">
	            <div class="modal">
	                <div class="tit">是否要删除{{tit}}记录</div>
	                <div class="bot">
	                	<p class="cancel">取消</p>
	                	<p class="confirm">删除</p>
	                </div>
	            </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
	
    name:'modal',
    props: ['tit'],
    data(){
        return{
            closemodal:"close",
        }
    },
    methods:{
        // 关闭模态框事件
        close(){
            this.$emit('close')
        },
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
        width: 18rem;
        height: 7rem;
        position: relative;
        border-radius: 0.67rem;
        margin-top: 14.1rem;
        .tit{
        	height: 4rem;
        	width: 100%;
        	text-align: center;
        	line-height: 4rem;
        	font-size:0.83rem;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(69,69,69,1);
			border-bottom: solid 1px rgba(238,238,238,1);
        }
        .bot{
        	height: 3rem;
        	width: 100%;
        	display: flex;
        	p{
        		text-align: center;
        		height: 3rem;
        		line-height: 3rem;
        		flex: 1;
        		&.cancel{
        			font-size:1.1rem;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(153,153,153,1);
					border-right: solid 1px rgba(238,238,238,1);
        		}
        		&.confirm{
        			font-size:1.1rem;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(246,49,49,1);
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