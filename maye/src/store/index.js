import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	userInfo:[],//用户信息
	userStaus:null,//用户状态
	userBirth:null,//用户生日
	userYuchanqi:60,//预产期时间
	userRecord:[],//症状记录
	
}
const getters = {//用于计算
	
}
const actions = {//异步请求
	
}
const mutations = {
	
}
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})