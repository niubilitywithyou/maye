<template>
	<div id="login">
		<div class="icon">
			<img src="../../../static/img/maye.png" />
		</div>
		
		<p class="tit">hi,欢迎来到maye</p>
		<div class="input">
			<form class="loginForm" v-if="loginWay">
	            <section class="input_container phone_number">
	                <input type="text" placeholder="点击输入手机号码" name="phone" maxlength="11" v-model="phoneNumber">
	                <div class="next">
	                	<button @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}">下一步</button>
	                </div>
	                
	                <!--<button  @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>-->
	            </section>
	            <!--<section class="input_container">
	                <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
	            </section>-->
	        </form>
		</div>
		<p class="p1">首次登录自动注册账号</p>
		<p class="p2">点击下一步即表示同意<a href="javascript:void(0)" @click="toXieyi">《用户协议》</a></p>
		<div class="foot">
			<p class="p3">第三方登录</p>
			<div class="weixin" @click="toWeixin">
				<img src="../../../static/img/微信.png" />
			</div>
			<p class="p4">微信</p>
		</div>
	</div>
</template>

<script>
	
	export default {
		name:"login",
		data(){
			return {
                loginWay: true, //登录方式，默认短信登录
                showPassword: false, // 是否显示密码
                phoneNumber: null, //电话号码
                mobileCode: null, //短信验证码
                validate_token: null, //获取短信时返回的验证值，登录时需要
                computedTime: 0, //倒数记时
                userInfo: null, //获取到的用户信息
                userAccount: null, //用户名
                passWord: null, //密码
                captchaCodeImg: null, //验证码地址
                codeNumber: null, //验证码
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
            }
		},
		computed: {
            //判断手机号码
            rightPhoneNumber: function (){
                return /^1\d{10}$/gi.test(this.phoneNumber)
            }
        },
        methods:{
        	//获取短信验证码
            async getVerifyCode(){
//          	this.$router.push('/yanzheng')
                if (this.rightPhoneNumber) {
                	this.$router.push('/yanzheng')
//                  this.computedTime = 60;
//                  this.timer = setInterval(() => {
//                      this.computedTime --;
//                      if (this.computedTime == 0) {
//                          clearInterval(this.timer)
//                      }
//                  }, 1000)
                    
                    //判读用户是否存在
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
                }
           },
            //跳转微信接口
            toWeixin(){
            	//获取后台接口
            	this.$router.push("/wxlogin")
            },
            toXieyi(){
            	this.$router.push("/xieyi")
            }
        }
	}
</script>

<style scoped="scoped">
	/*html,body,#login{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		margin: 0 auto;
		padding: 0;
		font-size: 12px;
	}*/
	#login{
		display: flex;
		flex-direction: column;
		/*justify-content: center;*/
	}
	#login .icon{
		width: 100%;
		text-align: center;
		margin-top: 6.9rem;
	}
	#login p{
		width: 100%;
		text-align: center;
	}
	.input{
		width: 100%;
		margin-top: 2rem;
	}
	.input_container{
		text-align: center;
	}
	input::-webkit-input-placeholder{
	  color: rgb(204,204,204)
	}
	input:-moz-placeholder{
	  color: rgb(204,204,204)
	}
	
	input::-moz-placeholder{
	  color: rgb(204,204,204)
	}
	
	input:-ms-input-placeholder{
	  color: rgb(204,204,204)
	}
	.input_container input{
		width: 19.7rem;
		border: none;
		outline: none;
		border-bottom: solid 0.5px rgb(204,204,204);
		font-size: 1.1rem;
		text-align: center;
		color: rgb(204,204,204);
		height: 3.4rem;
		line-height: 3.4rem;
	}
	.next{
		width: 100%;
		margin-top: 3rem;
	}
	.next button{
		width: 19.7rem;
		height: 3rem;
		background-color: rgb(204,204,204);
		color: white;
		border: none;
		outline: none;
		background:linear-gradient(-90deg,rgba(255,88,167,1) 0%,rgba(255,128,187,1) 100%);
		border-radius: 1.53rem;
	}
	.tit{
		font-size:0.91rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
		/*margin-top: 1rem;*/
	}
	.p1,.p2{
		color: rgb(204,204,204);
		-webkit-transform: scale(0.5);
		font-size: 1.46rem;
		
	}
	.p2{
		margin-top: -0.8rem;
	}
	.p2 a{
		text-decoration: none;
		font-weight: 500;
		color: #999999;
	}
	.foot{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 4.6rem;
		margin-top: 6rem;
	}
	.weixin{
		text-align: center;
		width: 3.6rem;
		height: 3.6rem;
		margin-top: 1rem;
		/*border: solid 1px saddlebrown;*/
	}
	.p3{
		font-size:0.92rem;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.p4{
		color: rgb(153,153,153,1);
		-webkit-transform: scale(0.5);
		font-size: 1.46rem;
		margin-top: -0.5rem;
	}
	.weixin img{
		width: 100%;
	}
</style>