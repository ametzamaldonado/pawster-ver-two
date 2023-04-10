import React from 'react';
import "./MessageSearch.scss";

function MessageSearch({ searchInput, setSearchInput }) {

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput);
        // console.log('clicked search btn', e.target.value)
    }

    return (
        <>
            <div className="navBar-searchForm center-items ">
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        className="subtle_searchInput"
                        value={searchInput}
                        onChange={handleChange}
                    />
                    {/* <button type='submit' className='no_buttonStyling round_styling'>
                        <i className="bi bi-search" ></i>
                    </button> */}
                </form>
            </div>
        </>
    )
}

export default MessageSearch