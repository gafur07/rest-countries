import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	theme: true,
	saveBg: localStorage.getItem("theme") || null
}

export const themeSlice = createSlice({
	name: "theme",
	initialState,

	reducers: {
		toggler: (state) => {
			state.theme = !state.theme
		},
		lightTheme: (state) => {
			state.theme = false
		},
		darkTheme: (state) => {
			state.theme = true
		},

		saveTheme: (state, action) => {
			state.saveBg = action.payload
		}
	}
})

export const { toggler, darkTheme, lightTheme, saveTheme } = themeSlice.actions
export default themeSlice.reducer