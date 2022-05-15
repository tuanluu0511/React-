import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Su',
    description: 'Finest fish and veggies',
    price: 6,
  },
  {
    id: 'm2',
    name: 'SuSu',
    description: 'A german specialty!',
    price: 7,
  },
];

const Products = (props) => {
  const itemsList = DUMMY_MEALS.map((item) => {
    return <ProductItem key={item.id} id={item.id} title={item.name} price={item.price} description={item.description} />;
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{itemsList}</ul>
    </section>
  );
};

export default Products;
