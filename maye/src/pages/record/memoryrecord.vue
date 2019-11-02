<template>
	<div id="memory">
		<Headbar txt1="日记记录" txt2="全部日记" id="headbar"></Headbar>
		<div class="mood">
			<p>心情</p>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div id="time">
			<div class="time">
				{{times}}&nbsp;&nbsp;{{weeks}}
			</div>
		</div>
		<div id="text">
			<div class="text">
				<textarea class="textarea" id="fit2" ref="fit2" placeholder="请输入日记内容"></textarea>
			</div>
		</div>
		<div id="fun">
			<div class="fun">
				<div class="fun_del">删除</div>
				<div class="fun_res">保存</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Headbar from "@/components/headbar/headbar"
	export default {
		name:"memory",
		components:{
			Headbar
		},
		data(){
			return{
				day:["","","",""],
				times:"",
				weeks:"",
				memory:""
			}
		},
		created(){
			this.time()
			
		},
		mounted(){
			this.makeExpandingArea()
		},
//		watch:{
//			memory:{
//				handler(){
//					if(this.memory){
//						
//					}
//				},
//				deep:true
//			}
//		},
		methods:{
			time(){
				var data = new Date();
				var week = ""
				this.day[0] = data.getFullYear()
				this.day[1] = data.getMonth() + 1
				this.day[2] = data.getDate()
				week += `${this.day[0]}-${this.day[1]}-${this.day[2]}`
				this.times += `${this.day[1]}月${this.day[2]}日`
//				this.times = this.day[0]+"年"
//				console.log(week)
				week = "天一二三四五六 ".charAt(new Date(week).getDay())
				this.weeks = "星期"+week
			},
			//自动撑开textarea
			makeExpandingArea() {
				var el = this.$refs.fit2
			    var timer = null;
			    //由于ie8有溢出堆栈问题，故调整了这里
			    var setStyle = function(el, auto) {
			        if (auto) el.style.height = 'auto';
			        el.style.height = el.scrollHeight + 'px';
			    }
			    var delayedResize = function(el) {
			        if (timer) {
			            clearTimeout(timer);
			            timer = null;
			        }
			        timer = setTimeout(function() {
			            setStyle(el)
			        }, 200);
			    }
			    if (el.addEventListener) {
			        el.addEventListener('input', function() {
			            setStyle(el, 1);
			        }, false);
			        setStyle(el)
			    } else if (el.attachEvent) {
			        el.attachEvent('onpropertychange', function() {
			            setStyle(el)
			        })
			        setStyle(el)
			    }
			    if (window.VBArray && window.addEventListener) { //IE9
			        el.attachEvent("onkeydown", function() {
			            var key = window.event.keyCode;
			            if (key == 8 || key == 46) delayedResize(el);
			
			        });
			        el.attachEvent("oncut", function() {
			            delayedResize(el);
			        }); //处理粘贴
			    }
			},
		}
		
	}
</script>

<style scoped="scoped">
	.mood{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		margin-top: 0.6rem;
	}
	#headbar{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.mood p{
		font-size:1.1rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-left: 1.6rem;
	}
	.mood ul{
		display: flex;
		justify-content: flex-start;
	}
	.mood ul li{
		margin-left: 1.13rem;
		width: 2.67rem;
		height: 2.67rem;
		border-radius: 50%;
		background:rgba(204,204,204,1);
		list-style: none;
	}
	#time,#text,#fun{
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.hide{
	    visibility: hidden;
	    position: absolute;
	    z-index: -100;
	  }
	.time{
		height: 3.4rem;
		margin-top: 0.67rem;
		width: 21.7rem;
		line-height: 3.4rem;
		border-top:solid 1px rgba(238,238,238,1);
		border-bottom:solid 1px rgba(238,238,238,1);
		font-size:1.27rem;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	
	#text .text{
		width: 21.7rem;
		/*height: 20rem;*/
		margin-top: 0.6rem;
	}
	#text .text input{
		border: none;
		outline: none;
	}
	#text .text .textarea{
		/*border: solid 1px saddlebrown;*/
		border: none;
		outline: none;
		width: 100%;
		/*height: 60rem;*/
		overflow: hidden;
		width:325px;
		font-size:0.9rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:1.4rem;
	}
	#fun{
		position: fixed;
		bottom: 2rem;
	}
	.fun{
		width: 21.7rem;
		display: flex;
		justify-content: space-between;
	}
	.fun div{
		width: 10rem;
		height: 2.3rem;
		line-height: 2.3rem;
		text-align: center;
		font-size:0.9rem;
		font-family:PingFang SC;
		font-weight:400;
		border-radius: 1.15rem;
	}
	.fun .fun_del{
		background:rgba(238,238,238,1);
		color: #333333;
	}
	.fun .fun_res{
		background:rgba(238,238,238,1);
		color: #333333;
	}
	
</style>