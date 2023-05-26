import {useState, useEffect} from 'react';
import {Link} from "react-router-dom"

function CountryList(props) {

    let {countries} = props

  return (
    <div>
        <h2>Countries</h2>
        {countries.map((country) => {
            return (
                <div key={country._id} className="country">
                     <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=""></img>
                        <Link to={`countries/${country._id}`}>
                        <h3>{country.name.common}</h3>
                        </Link>
                </div>
            )
        })}
    </div>
  )
}

export default CountryList