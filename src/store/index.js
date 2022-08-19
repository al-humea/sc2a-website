import { createStore } from 'vuex'

export default createStore({
	state: {
		pro : "Particulier",
		soc : "",
		nom : "",
		pren : "",
		tel : "",
		email : "",
		obj : "",
		content : "",
		transition : "",
		curPageNum : 1
	},
	mutations: {
		UPD_OBJ(state, payload){	state.obj = String(payload);},
		UPD_STATUS(state, payload){	state.pro = String(payload);},
		UPD_SOC(state, payload){	state.soc = String(payload);},
		UPD_NOM(state, payload){	state.nom = String(payload);},
		UPD_PRE(state, payload){	state.pren = String(payload);},
		UPD_TEL(state, payload){	state.tel = String(payload);},
		UPD_EMAIL(state, payload){	state.email = String(payload);},
		UPD_CONT(state, payload){	state.content = String(payload);},
		UPD_TRAN(state, payload){	state.transition = String(payload);},
		UPD_CURPAGE(state, payload){	state.curPageNum = Number(payload)}
	},
	actions: {
		updateRequest(context, payload){
			context.commit("UPD_OBJ", payload.obj);
			context.commit("UPD_STATUS", payload.status);
		}
	}
})
