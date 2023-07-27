import { Item } from "../Item/Item";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products }) => {

  if (!Array.isArray(products) || products.length === 0) {
    return ;
  }
  
  return(
 <div className="item-list">
   {products.map((product) => (
     <Item
          key={product.id}
          id={product.id}
          img={product.img}
          category={product.category}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;