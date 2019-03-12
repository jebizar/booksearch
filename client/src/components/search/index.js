import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <label for="search">Search</label>
                <input type="text " className="form-control" id="search" placeholder="Search query" onChange={props.handleInputChange} value = {props.value}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick = {props.handleFormSubmit}>Submit</button>
        </form>
    )
}

export default Search;