import React, { useEffect, useState } from 'react';

const MealFind = () => {
          const [search, setSearch] = useState('');
          const [meals, setMeals] = useState([]);
          const handleChange = event =>{
                    console.log(event.target.value)
                    setSearch(event.target.value);
          }
          useEffect(()=> {
                    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                    .then(res => res.json())
                    .then(data => setMeals(data.meals))
          },[search])
          return (
                    <div>
                              <h1>Search Food</h1>
                              <input onChange={handleChange} type="text" placeholder="search food items"/>
                              <p>Search : {search}</p>
                              <p>Total Meals : {meals?.length}</p>
                              <ul>
                                        {
                                                  meals?.map(meal => <li>{meal.strMeal}</li>)
                                        }
                              </ul>
                    </div>
          );
};

export default MealFind;