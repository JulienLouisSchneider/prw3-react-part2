import Weather from "./Weather.jsx";

const CountryDetail = ({ country }) => {
    const languages = Object.values(country.languages ?? {})
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital?.[0]}</div>
            <div>area {country.area}</div>

            <h3>languages</h3>
            <ul>
                {languages.map(lang => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>

            <img
                src={country.flags.png}
                alt={`flag of ${country.name.common}`}
                width="150"
            />

            <div>
                <h2>{country.name.common}</h2>
                <div>capital {country.capital?.[0]}</div>
                <div>area {country.area}</div>

                {/* ...languages + flag... */}

                <Weather capital={country.capital?.[0]} />
            </div>
        </div>


    )
}

export default CountryDetail