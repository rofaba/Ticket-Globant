import './FilterBar.css'
import { useState } from 'react'

function FilterBar({onFiltrer}) {
    const[place, setPlace] = useState('')
    const[date, setDate] = useState('')
    const[minPrice, setMinPrice] = useState('')
    const[maxPrice, setMaxPrice] = useState('')

    const handlePlaceChange =(e)=> setPlace(e.target.value)
    const handleDateChange =(e)=> setDate(e.target.value)
    const handleMinPriceChange =(e)=> setMinPrice(e.target.value)
    const handleMaxPriceChange =(e)=> setMaxPrice(e.target.value)

    const handleFiltrer =()=>{
        onFiltrer({place, date, minPrice, maxPrice})
    } 


    return(
    <div className="filterbar">
        <input type="text" 
        placeholder="Ciudad..."
        value={city}
        onChange={handlePlaceChange}
        />

        <input type="date" 
        placeholder="Fecha..."
        value={date}
        onChange={handleDateChange}
        />

        <input type="number"
        placeholder="Precio mínimo..."
        value={minPrice}
        onChange={handleMinPriceChange}
        />

        <input type="number"
        placeholder="Precio máximo..."
        value={maxPrice}
        onChange={handleMaxPriceChange}
        />

        <button onClick={handleFiltrer}>Aplicarf filtros</button>
    </div>
    )
}

export default FilterBar;
