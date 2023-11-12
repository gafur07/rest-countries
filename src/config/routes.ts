import CountryInfo from "../screens/CountryInfo/CountryInfo";
import Home from "../screens/Home/Home";

export const OurRoutes = [
	{path: "/", element: Home},
	{path: "/:name", element: CountryInfo}
]