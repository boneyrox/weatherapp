import React from 'react'
import '../Style.css'


export default function CitySearch(props) {
    const [searchInputValue, setSearchInputValue] = React.useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSearchSubmit(searchInputValue)
    }

    React.useEffect(() => {
        // console.log(props.searchInputValue)


    }, [props.searchInputValue]);

    return (
        <form className="search-loaction" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="city"
                placeholder="Enter City Name"
                onChange={(event) => setSearchInputValue(event.target.value)}
                className="form-control text-muted form-rounded p-4 shadow-sm" />
        </form>
    )
}