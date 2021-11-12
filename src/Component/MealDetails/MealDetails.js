import React, { useEffect, useState } from 'react';

const MealDetails = () => {
          const [meals, setMeals] = useState({});
          useEffect(() => {
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
                    .then(res => res.json())
                    .then(data => setMeals(data?.meals[0]));
          },[])
          console.log(meals);
          return (
                    <div>
                              <h1>This is Meals Details</h1>
                              <h2>Name : {meals?.strMeal}</h2>
                    </div>
          );
};

export default MealDetails;