import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
      Indulge in a delightful meal from our extensive menu selection, delivered straight to your doorstep.
      </p>
      <p>
      Our top-quality meals are expertly prepared by seasoned chefs, ensuring your 
      lunch or dinner is always fresh and flavorful.
      </p>
    </section>
  );
};

export default MealsSummary;