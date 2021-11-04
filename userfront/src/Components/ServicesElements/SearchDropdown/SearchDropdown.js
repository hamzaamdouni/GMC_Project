import React from 'react'
import { useSelector } from 'react-redux'
import './SearchDropdown.css'


const SearchDropdown = ({setService}) => {
    
    const isload = useSelector(state => state.visiteurReducer.isload)
    const services = useSelector(state => state.visiteurReducer.services)
    const categorys = useSelector(state => state.visiteurReducer.categorys)

    const handleService = (e) =>{ 
        setService(e.target.value)
    }
    console.log(setService)
    return (
        <div  className='SearchDropdownContainer'>
            <button className='SearchDropdownBtn'> Tout les Service </button>
            <div className="inputfieldSearch">
                <div className="custom_selectSearch">
                    <select name = 'service' onInput ={handleService} >
                        <option value="Client">Services</option>
                        { isload ? null : (services.map((el)=> (<option value={el.nom}>{el.nom}</option>)))}
                    </select>
                </div>
            </div>

            <div className="inputfieldSearch">
                <div className="custom_selectSearch">
                    <select name = 'role'>fzefzef
                        <option value="Client">Categorys</option>
                        { isload ? null : (categorys.map((el)=> (<option value={el.nom}>{el.nom}</option>)))}
                    </select>
                </div>
            </div>


        </div>
    )
}

export default SearchDropdown