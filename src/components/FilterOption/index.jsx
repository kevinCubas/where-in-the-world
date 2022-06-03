import { useState } from "react";
import { SelectFiltered } from "./style";

const options = [
  { value: 'All', label: 'All' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Antarctic', label: 'Antarctic' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }

]

export function FilterOption() {
  const [selectedRegion, setSelectedRegion] = useState("")
  return{ 
    selectedRegion,
    renderFilterByRegion:(
      <SelectFiltered classNamePrefix="Select" placeholder={"Filter by Region"} options={options} onChange={(e) => setSelectedRegion(e.value)}/>
    )
  }
}
