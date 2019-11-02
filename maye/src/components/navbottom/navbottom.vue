<!--底部导航组件-->
<template>
	<div id="bottom">
		<ul>
			<li v-for="(item,index) in list" @click="but(index)">
				<router-link :to="item.tourl" >
					<img :src="item.img1" alt=""  v-show="!item.bol"/>
					<img :src="item.img2" alt=""  v-show="item.bol"/>
					<p :class="{nam:item.bol}">{{item.name}}</p>
				</router-link>
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default {
		name:"navbottom",
		data(){
			return{
				//根据不同的用户状态跳转不同的用户页面需求
				userInfo:{
					urlitem:''
				},
				list:[
					{name:"首页",img1:"/static/img/咖啡.png",img2:"/static/img/咖啡1.png",bol:true,tourl:"/home",redBoll:false},
					{name:"健康",img1:"/static/img/胶囊.png",img2:"/static/img/胶囊1.png",bol:false,tourl:"/calender",redBoll:false},
					{name:"我的",img1:"/static/img/女性用户.png",img2:"/static/img/女性用户1.png",bol:false,tourl:"/my",redBoll:false}
				]
			}
			
		},
		methods:{
			but:function(index){
				for(let i = 0 ; i<this.list.length; i++){
					this.list[i].bol = false
				}
				this.list[index].bol = true
			}
		},
		created(){
			//配置主页面的路由信息
			let geturl = ""
			geturl = this.$store.state.userStaus;
			if(this.$store.state.userStaus=='readybaby'){
				geturl = 'jingqi'
			}
			console.log(geturl)
//			this.urlitem = geturl
			this.list[0].tourl = this.list[0].tourl+geturl
		}
		
	}
</script>

<style scoped="scoped">
	#bottom{
		width: 100%;
		height: 5rem;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	ul{
		display: flex;
		justify-content: space-between;
		list-style: none;
		border-top: 0.12rem solid grey;
		height: 90%;
	}
	li{
		padding-top: 0.1rem;
		height: 100%;
		width: 20%;
		text-align: center;	
		position: relative;
		flex:1;
	}
	img{
		height: 3rem;
	}
	.redBoll{
		position: absolute;
		padding-left: 5px;
		padding-right: 5px;
		height: 20px;
		background-color: red;
		text-align: center;
		line-height: 20px;
		top: 6px;
		left: 62px;
		color: white;
		border-radius: 50%;
	}
	
	
	.nam{
		color: rgb(253,65,77) ;
	}
	a{
		text-decoration: none;
		color: gray;
	}
</style>