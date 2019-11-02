<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <navbottom v-if="bol"></navbottom>
  </div>
</template>

<script>
import navbottom from "@/components/navbottom/navbottom"

export default {
  name: 'App',
  data(){
  	return{bol:false}
  },
  components:{
  	navbottom
  },
  created(){
  	
  },
  watch:{
		"$route.path":function(msg){
			console.log(msg)
	//		this.bol = false
	
			if(msg=="/homejingqi"||msg=="/my"||msg=="/calender"||msg=="/homehasbaby"){
				this.bol = true
			}else{
				this.bol = false
			}
		}
  },
  methods:{
  	
  }
}
</script>

<style>
@import "../static/iconfont/iconfont.css";

*{
	margin: 0;
	padding: 0;
}
html,
body,
#app{
	height: 100%;
	width: 100%;
	background:rgba(255,255,255,1);
}

/*@media only screen and (max-width:400px) and (min-width: 320px){html,body{font-size: 11.25px;}}
@media only screen and (max-width:470px) and (min-width: 400px){html,body{font-size: 12.5px;}} 
@media only screen and (max-width:480px) and (min-width: 470px){html,body{font-size: 14.68px;}} 
@media only screen and (max-width:540px) and (min-width: 480px){html,body{font-size: 15px;}} 
@media only screen and (max-width:560px) and (min-width: 540px){html,body{font-size: 16.875px;}} 
@media only screen and (max-width:570px) and (min-width: 560px){html,body{font-size: 17.5px;}}  
@media only screen and  (min-width: 640px){html,body{font-size: 25px;}}*/
</style>
