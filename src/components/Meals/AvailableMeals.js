import React,{useEffect,useState} from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
 const[meals,setMeals] =  useState([]);
 const[isLoading,setIsLoading] = useState(true);
 const[error,setError] = useState(null);

  useEffect(()=>{
      const fetchMeals = async ()=>{
        const response = await fetch("https://react-http-72362-default-rtdb.firebaseio.com/meals.json")

        if(!response.ok){
          throw new Error("Something went wrong"+response.status);
        }

        const responseData = await response.json();
          
        const loadedMeals = [];
  
        for(const key in responseData){
            loadedMeals.push({
              id:key,
              name:responseData[key].name,
              description:responseData[key].description,
              price:responseData[key].price
            });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      }
    
      fetchMeals().catch((error)=>{
        setIsLoading(false);
        setError(error.message);
      });

  },[])
   
if(isLoading){
  return <section className={classes.mealsLoading}>
    <h3>Loading...</h3>
  </section>
}
 
if(error){
  return <section className={classes.mealsError}>
  <h3>{error}</h3>
</section>
}

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {isLoading && <p>Loading...</p>}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
