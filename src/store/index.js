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
		content : ""
	},
	mutations: {
		UPD_OBJ(state, payload){	state.obj = String(payload);},
		UPD_STATUS(state, payload){	state.pro = String(payload);},
		UPD_SOC(state, payload){	state.soc = String(payload);},
		UPD_NOM(state, payload){	state.nom = String(payload);},
		UPD_PRE(state, payload){	state.pren = String(payload);},
		UPD_TEL(state, payload){	state.tel = String(payload);},
		UPD_EMAIL(state, payload){	state.email = String(payload);},
		UPD_CONT(state, payload){	state.content = String(payload);}
	},
	actions: {
		updateRequest(context, payload){
			context.commit("UPD_OBJ", payload.obj);
			context.commit("UPD_STATUS", payload.status);
		}
	}
})
