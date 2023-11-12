import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useEffect } from "react"
import { toggler } from "../../store/theme.slice"
import "./Header.scss"

const Header = () => {

	const { theme } = useTypedSelector((store) => store.theme)
	const dispatch = useAppDispatch()

	useEffect(() => {
		saveTheme
	},[theme])

	function saveTheme(color: any) {
		localStorage.setItem("theme", color)
	}

	return (
		<>
			<header className={`header ${theme ? "active" : ""}`}>
				<div className="container">
					<h1>Where in the world?</h1>
					<div>
						<button onClick={() => {
							dispatch(toggler())
							saveTheme(theme)
						}
							}>
							<i className={`bx bxs-${theme ? "sun" : "moon"}`}></i>
						</button>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header