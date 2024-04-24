import { create } from "zustand"


const ValidationInlog = create(set => ({
	isLoggedIn:false,
	username: "",
    password: "",

	login:(username,password) => {
		if (username.includes("admin") && password==='password'){
			set({ isLoggedIn: true})
			return true
		}
		return false
	}
}))

export default ValidationInlog