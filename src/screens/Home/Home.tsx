import { useTypedSelector } from "../../hooks/useTypedSelector"
import "./Home.scss"
import Search from "../../components/Search/Search";
import FilterArea from "../../components/FilterArea/FilterArea";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { getAllCountry } from "../../store/GetCountry/getCountry.action";
import loadingGif from "../../images/loading.gif"
import { Link } from "react-router-dom";

const Home = () => {
	
	const { theme } = useTypedSelector(store => store.theme)
	const { data, loading } = useTypedSelector(store => store.country)
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(getAllCountry())
	},[])

	console.log(data);
	
	return (
		<>
			<div className={`home ${theme ? "active" : ""} py-10`}>
				<div className="container">
					<div className="home-nav flex items-center gap-4 justify-between">
						<Search />
						<FilterArea />
					</div>

					{/* Area */}
				{
					loading ? 
					(
						<img className="m-auto w-[100px] h-full" src={loadingGif} />
					) : (

						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 my-[50px]">
						{
							data.map((item: any) => (
								<div key={item.cioc} className={`rounded-md shadow-md ${theme ? "text-white bg-[#2b3945]" : "text-[#111517] bg-white"}`}>
									<Link to={`${item.name.common}`}>
										<img className="flag object-cover rounded-t-md" src={item.flags.svg} alt="" />
									</Link>
									<div className={`px-[5%] my-6`}>
										<h1 className="font-medium text-[18px]">{item.name.common}</h1>
										<span className="flex gap-2">
											<b>Population: </b>
											<p>{item.population}</p>
										</span>
										<span className="flex gap-2">
											<b>Region: </b>
											<p>{item.region}</p>
										</span>
										<span className="flex gap-2">
											<b>Capital: </b>
											<p>{item.capital}</p>
										</span>
									</div>
								</div>
							))
						}
					</div>
				)
			}
				</div>
			</div>
		</>
	)
}

export default Home