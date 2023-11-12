import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { apiUrl } from "../../utils/API"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const CountryInfo = () => {
	const params = useParams()
	const [country, setCountry] = useState([])
	const { theme } = useTypedSelector(store => store.theme)
	
	useEffect(() => {
		axios
			.get(`${apiUrl}/name/${params.name}`)
			.then(res => {
				setCountry(res.data)
			})
	},[])
	return (
		<>
		<div className={`info py-[80px] ${theme ? "bg-[#202c37]" : "bg-[#fafafa]"}`}>

		<div className="container">
			<button className={`${ theme ? "bg-[#2b3945] text-white active:opacity-90" : "" } mb-[80px] px-4 py-2 shadow-md rounded-md`}>
				<Link className="flex gap-2 items-center" to={"/"}>
					<i className='bx bx-arrow-back'></i>
					<span>Back</span>
				</Link>
			</button>
			<div>
			{
				country.map((item: any) => (
					<div className="flag-info flex items-center gap-[80px]">
						<img className="h-[370px] w-[40%]" src={item?.flags?.svg} alt="" />
						<div className="country_info">
							<h1 className={`${theme ? "text-white" : ""} text-[1.3rem] mb-4 font-semibold`}>{item.name.common}</h1>
							<div className={`${theme ? "text-white": ""} `}>
								<h1>
									Population: {""}
									<span>{new Intl.NumberFormat().format(item?.population)}</span>
								</h1>
								<h1>
									Region: <span>{item?.region}</span>
								</h1>
								<h1>
                Sub Region: <span>{item.subregion}</span>
              </h1>
              <h1>
                Capital: <span>{item.capital}</span>
              </h1>
							</div>
						</div>
					</div>
					))
				}
				</div>
			</div>
		</div>
		</>
	)
}

export default CountryInfo