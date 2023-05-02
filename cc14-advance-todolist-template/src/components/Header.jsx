import { FaHome,FaSearch } from 'react-icons/fa';
import { useState } from 'react';
export function Header({onChangeSearch}) {

    const [searchValue,setSearchValue] = useState('')

    const handleChange = (e) =>{
        setSearchValue(e.target.value)
        onChangeSearch(e.target.value)
    }
    return (
        <header className='header'>
            
            <span className='header__icon'>
                <FaHome size={25} color='white' />
            </span>
            <h1>Todoist-Tan</h1>
            <div className='header__search__container'>
                <span className='header__search__icon'>
                    <FaSearch/>
                </span>
                <input 
                type='text' 
                className='header__search__input' 
                placeholder='search' 
                onChange={handleChange}
                value={searchValue}
                />
            </div>
        </header>
    );
}
