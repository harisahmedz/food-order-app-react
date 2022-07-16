import React,{useEffect, useState} from 'react';

import classes from './css/AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const AvailableMeals = ()=>{
  const [meals, setMeals] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[httperror, setHttpError] = useState(null);

  useEffect(() => {
    const MealData = async() => {
      const response = await fetch('https://react-app-38514-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok){
        throw new Error("Server Error!!!");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData){
        loadedMeals.push({
          id:key,
          name: responseData[key].name,
          description:responseData[key].description,
          price: responseData[key].price
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

      MealData().catch((error)=>{
        setIsLoading(false);
        setHttpError(error.message);
      });
    
  
   
  }, []);

    const mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
    if(httperror){
      return <Card>
        <p>{httperror}</p>
      </Card>
    }

    return(
        <section className={classes.meals}>
            <Card>
                <ul>
                    {!isLoading ? mealsList: <section><p>Loading...</p></section>}
                </ul>
            </Card>
        </section>
    )
};


export default AvailableMeals;