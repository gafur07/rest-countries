import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/API";

export const getAllCountry = createAsyncThunk(
	"getArea",
	async(_, thunkApi) => {
		try {
			const response = await axios.get(`${apiUrl}/all`)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)


export const getRegion= createAsyncThunk(
	"getRegion",
	async(region, thunkApi) => {
		try {
			const response = await axios.get(`${apiUrl}/region/${region}`)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const getOneCountry= createAsyncThunk(
	"getOneCountry",
	async(country, thunkApi) => {
		try {
			const response = await axios.get(`${apiUrl}/name/${country}`)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)