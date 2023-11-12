import { createSlice } from "@reduxjs/toolkit"
import { getAllCountry, getOneCountry, getRegion } from "./getCountry.action"


export const getCountrySlice = createSlice({
	name: "getCountry",
	initialState: {
		data: [],
		loading: false
	},
	
	reducers: {},

	extraReducers: builder => {
		builder
			.addCase(getAllCountry.pending, state => {
				state.loading = true
			})
			.addCase(getAllCountry.fulfilled, (state, action) => {
				state.data = action.payload,
				state.loading = false
			})
			.addCase(getAllCountry.rejected, state => {
				state.loading = false
			})

			.addCase(getRegion.pending, state => {
				state.loading = true
			})
			.addCase(getRegion.fulfilled, (state, action) => {
				state.data = action.payload,
				state.loading = false
			})
			.addCase(getRegion.rejected, state => {
				state.loading = false
			})

			.addCase(getOneCountry.pending, state => {
				state.loading = true
			})
			.addCase(getOneCountry.fulfilled, (state, action) => {
				state.data = action.payload,
				state.loading = false
			})
			.addCase(getOneCountry.rejected, state => {
				state.loading = false
			})
	}
})

export default getCountrySlice.reducer