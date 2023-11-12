import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getRegion } from "../../store/GetCountry/getCountry.action";

const FilterArea = () => {

	const { theme } = useTypedSelector(store => store.theme)
	const dispatch = useAppDispatch()


	function selectRegion(e: any) {
		const regionName = e.target.value
		dispatch(getRegion(regionName))
	}

  return (
    <>
      <select
			onChange={selectRegion}
        className={`px-4 py-3 filter rounded-md ${
          theme
            ? "text-white bg-[#2b3945]"
            : "text-[#111517] bg-white shadow-md"
        } outline-none cursor-pointer`}
      >
        <option hidden disabled selected>
          Filter by Region
        </option>
        <option className="cursor-pointer" value="Asia">
          Asia
        </option>
        <option className="cursor-pointer" value="America">
          America
        </option>
        <option className="cursor-pointer" value="Africa">
          Africa
        </option>
        <option className="cursor-pointer" value="Europe">
          Europe
        </option>
        <option className="cursor-pointer" value="Oceania">
          Oceania
        </option>
      </select>
    </>
  );
};

export default FilterArea;
