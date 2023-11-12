import {Route, Routes} from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { OurRoutes } from "./config/routes"


const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					{
						OurRoutes.map((item: any) => (
							<Route 
								key={item.path}
								path={item.path}
								element={<item.element />}
							/>
						))
					}
				</Route>
			</Routes>
		</div>
	)
}

export default App