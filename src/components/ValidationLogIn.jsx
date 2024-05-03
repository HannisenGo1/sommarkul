
import { create } from "zustand"

const ValidationInlog = create(set => ({
	isLoggedIn:false,
	email: "",
    password: "",

	login:(email,password) => {
		if (email.includes("admin") && password==='password'){
			set({ isLoggedIn: true})
			return true
		}
		return false
	}
}))

export default ValidationInlog

