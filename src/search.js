import React from 'react'
import './App.css'

export default function search() {
    return (
        <div>
         <div class="search">
                <input
                    placeholder=""
                    type="text"
                    className="searchTerm"
                    id="input_text"
                ></input>
                <button type="submit" className="searchButton">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}
