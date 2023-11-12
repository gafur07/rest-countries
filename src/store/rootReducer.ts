import getCountryReducer from "./GetCountry/getCountry.slice";
import themeReducer from "./theme.slice";

export const rootReducer = {
	theme: themeReducer,
	country: getCountryReducer
}