import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    price: 6,
    title: 'a Book',
    description: 'looong description'
  },
  {
    id: 'p2',
    price: 7,
    title: 'another Book',
    description: 'another looong description'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{DUMMY_DATA.map(x => (
        <ProductItem
          key={x.id}
          id={x.id}
          title={x.title}
          price={x.price}
          description={x.description}
        />
      ))}
      </ul>
    </section>
  );
};

export default Products;
