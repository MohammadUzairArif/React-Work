import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style.css'
const Meals = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res=>{
            // console.log(res.data.meals);
            setItems(res.data.meals)
            
        }).catch(err => console.log(err))
    })
    const itemsList = items.map(({strMeal,strMealThumb,idMeal})=>{
        return(
            <section className='card'>
                <img src={strMealThumb} alt={strMeal} />
                <section className='content'>
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })
  return (
    <div className='items-container'>
      {itemsList}
    </div>
  )
}

export default Meals
