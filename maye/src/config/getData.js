import axios from 'axios'
import Vue from "vue"
import qs from "qs"
Vue.use(axios)
//const getCart = ()=>{
//	return axios.get("../../static/goods.json").then((res)=>res);
//}
//const goodsList = ()=>{
//	return axios.get("../../static/json/goods.json").then(res=>res)
//}
//1.get
const get = ()=>{
	return axios.get("").then(res =>res.data)
}
//2.post
const post = (params)=>{
	return axios.post("../../static/json/code.json",qs.stringify(params)).then(res =>res.data)
}
//3.获取短信验证码
const messageCode = (params)=>{
	return axios.post("",qs.stringfy(params)).then(res =>res.data)
}
export default {
//	getCart,
//	indexpic,
	get,
	post,
	messageCode
	
}

