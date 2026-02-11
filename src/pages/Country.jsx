import {useEffect, useState} from "react";
import axios from "axios";
import CountryDetail from "../components/CountryDetail.jsx";

const Country = () => {
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(res => setCountries(res.data))
    }, [])

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
        setSelectedCountry(null) // si tu retapes, on “dé-sélectionne”
    }

    const filtered = countries.filter(c =>
        c.name.common.toLowerCase().includes(query.toLowerCase())
    )

    const countriesToShow = selectedCountry ? [selectedCountry] : filtered

    return (
        <div>
            find countries <input value={query} onChange={handleQueryChange} />

            {query === '' ? null : (
                <>
                    {countriesToShow.length > 10 && (
                        <p>Too many matches, specify another filter</p>
                    )}

                    {countriesToShow.length > 1 && countriesToShow.length <= 10 && (
                        <div>
                            {countriesToShow.map(country => (
                                <div key={country.cca3}>
                                    {country.name.common}{' '}
                                    <button onClick={() => setSelectedCountry(country)}>
                                        show
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {countriesToShow.length === 1 && (
                        <CountryDetail country={countriesToShow[0]} />
                    )}
                </>
            )}
        </div>
    )
}

export default Country

