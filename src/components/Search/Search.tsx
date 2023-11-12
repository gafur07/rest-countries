import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getOneCountry } from "../../store/GetCountry/getCountry.action";

const Search = () => {
	const { theme } = useTypedSelector(store => store.theme)
	const dispatch = useAppDispatch()
	const [name, setName] = useState("")

	function submit (e: any) {
		e.preventDefault()
		dispatch(getOneCountry(name))
	}
  return (
    <>
      <form onSubmit={submit} className="w-[30%] form">
        <span
          className={`search px-8 py-3 flex items-center gap-4 text-[#111517]  ${
            theme ? "bg-[#2b3945] text-white" : "text-[#858585] bg-white shadow-md"
          } rounded-md`}
        >
          <i className="bx bx-search"></i>
          <input
            className="bg-transparent outline-none w-full"
            placeholder="Search for a country...."
            type="search"
						value={name}
						required
						onChange={e => {setName(e.target.value)}}
          />
        </span>
      </form>
    </>
  );
};

export default Search;
