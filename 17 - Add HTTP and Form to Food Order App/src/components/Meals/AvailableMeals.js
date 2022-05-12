import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState, useEffect } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const mealsDataHandler = async () => {
      const response = await fetch('https://react-http-d638f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      console.log(data);

      setMeals(data);
      setIsLoading(false);
    };

    mealsDataHandler()
      .then()
      .catch((err) => {
        setIsLoading(false);
        setHttpError(err.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.Loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.Error}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
