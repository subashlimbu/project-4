// Using Hooks Method
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const DjangoCocktail = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/cocktails/')
      .then((resp) => {
        setData(resp.data)
      })
  }, [])
  console.log(data)
  return <div>
    {data.map(cocktail => {
      // console.log(cocktail)
      return <div key={cocktail.id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by4">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </figure>
          </div>
          <div className="card-content has-text-centered">
            <Link className="has-text-grey-darker" to={`/api/cocktails/${cocktail.id}`}>{cocktail.strDrink}</Link>
          </div>
        </div>
      </div>
    })}
  </div>
}
export default DjangoCocktail

