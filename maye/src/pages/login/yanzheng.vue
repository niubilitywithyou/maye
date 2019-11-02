<template>
	<div id="yanzh">
		<p class="p1">输入6位验证码</p>
		
		<ul class="numcode">
			<li v-for="(item,index) in inputList">
				<input type="tel" v-model="item.val" maxlength="1" ref="dom" @keyup="nextFocus($event,index)"
                   @keydown="changeValue(index)">
			</li>
		</ul>
		<button v-if="bol">重发送验证码{{computedTime}}s</button>
		<button v-else @click="resend()" class="timeOut">重发送验证码{{computedTime}}s</button>
		<p class="p2" v-show="!rightCode">请输入正确的验证码</p>
		<p class="p3" v-show="!resendCode">重发验证码失败</p>
	</div>
</template>

<script>
	import Data from "../../config/getData.js"
	export default {
		name:"yanzh",
		data(){
			return {
                phoneNumber: null, //电话号码
                mobileCode: 123456, //短信验证码
                validate_token: null, //获取短信时返回的验证值，登录时需要
                computedTime: 10, //倒数记时
                userInfo: null, //获取到的用户信息
                userAccount: null, //用户名
                captchaCodeImg: null, //验证码地址
                rightCode: true,
                resendCode: true,
                bol: true,
                //验证码
                inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
            }
		},
		created(){
			//获取短信接口
		},
		mounted(){
            this.timeOut()
//          this.write()
//          console.log(this.timeOut())
//          this.codeIsright()
        },
		methods:{
			//显示倒计时
			timeOut(){
				  	var timer = setInterval(() => {
                        this.computedTime --;
                        if (this.computedTime == 0) {
                        	this.bol = false
							console.log(this.bol)
							this.computedTime = 10;
                            clearInterval(timer)
                        }
                    }, 1000)
			},
//			write(){
//				console.log(this.timeOut())
//			},
			//重新获取短信验证码
			resend(){
				//清空验证码
				this.inputList.forEach(item=>{
					item.val = ""
				})
//				this.computedTime = 10;
				this.bol = true;
				this.timeOut();
			},
			/*对焦到下一个input框去*/
            nextFocus(el,index) {
//              var dom = document.getElementsByClassName("border-input")
				var dom = this.$refs.dom
                var currInput = dom[index];
                var nextInput = dom[index + 1];
                var lastInput = dom[index - 1];
                
                /*判断最后一位*/
	            if(index==5){
	               	var inputcode = [];
	               	var numcode = "";
					this.inputList.forEach(item=>{
						inputcode.push(item.val)
						numcode = inputcode.join("")
						console.log(numcode)
					})
					//判断输入的字段与返回的短信是否相同
					if(numcode!=this.mobileCode){
						this.rightCode = false
					}else{
						this.rightCode = true
						//当最后一个键按对了，直接跳转页面
						this.$router.push('/onload1')
					}
					console.log(this.rightCode)
	            }
	            
	            /*这里的keyCode 根据不同的平台或许不同,安卓就是不是8*/
                if (el.keyCode != 8) {
                    if (index < (this.inputList.length - 1)) {
                        nextInput.focus();
                    } else {
                        currInput.blur();
                    }
                }else{
                    if (index !=0) {
                        lastInput.focus();
                    }
                }
 
            },
            /*当键盘按下的时候清空原有的数*/
            changeValue(index) {
                this.inputList[index].val = "";
            }
			
			//获取短信验证码
//          async resend(){
//              if (this.rightPhoneNumber) {
//                  timeOut()
//                  //判读用户是否存在
//                  let exsis = await checkExsis(this.phoneNumber, 'mobile');
//                  if (exsis.message) {
//                      this.showAlert = true;
//                      this.alertText = exsis.message;
//                      return
//                  }else if(!exsis.is_exists) {
//                      this.showAlert = true;
//                      this.alertText = '您输入的手机号尚未绑定';
//                      return
//                  }
//                  //发送短信验证码
//                  let res = await mobileCode(this.phoneNumber);
//                  if (res.message) {
//                      this.showAlert = true;
//                      this.alertText = res.message;
//                      return
//                  }
//                  this.validate_token = res.validate_token;
//              }
//          }
		}
	}
	
</script>

<style scoped="scoped">
	html,body,#yanzh{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		margin: 0 auto;
		padding: 0;
		font-size: 15px;
		list-style: none;
	}
	#yanzh{
		display: flex;
		flex-direction: column;
		align-items: center;
		/*justify-content: center;*/
	}
	.p1{
		text-align: center;
		height:1rem;
		line-height: 1rem;
		font-size:15px;
		font-family:PingFang;
		font-weight:400;
		color:rgba(153,153,153,1);
		margin-top: 7.8rem;
	}
	#yanzh .numcode{
		width: 13.1rem;
		display: flex;
		justify-content: space-between;
		margin-top: 5rem;
	}
	#yanzh .numcode li{
		flex: 1;
		list-style: none;
		
	}
	#yanzh .numcode li input{
		width: 60%;
		border: none;
		border-bottom: solid 1px rgb(204,204,204);
		outline: none;
		font-size: 1.4rem;
		text-align: center;
		line-height: 3.4rem;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	#yanzh button{
		height: 2.8rem;
		width: 18rem;
		background:rgba(204,204,204,1);
		border-radius:1.4rem;
		border: none;
		margin-top: 2.1rem;
		color: white;
		outline: none;
	}
	#yanzh .timeOut{
		background:linear-gradient(90deg,rgba(255,88,167,1) 0%,rgba(255,128,187,1) 100%);
	}
	#yanzh .p2{
		margin-top: 1.1rem;
		height:0.9rem;
		font-size:0.9px;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(236,6,55,1);
	}
</style>