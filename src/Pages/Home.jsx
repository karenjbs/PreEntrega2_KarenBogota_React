import { useState, useEffect } from "react";
import { getProducts } from "../lib/products.requests";
import { ItemListContainer } from "../components/Itemlistcontainer/ItemListContainer";

export const Home = () => {
  
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   getProducts()
    .then(res => {
      setIsLoading(false); 
      setProducts(res)}   
      ) 
  }, []);

  return (
    <div>
      <div className="container">
        <h5>{isLoading ? "Cargando ..." : ""}</h5>
        <ItemListContainer products={products} />
      </div>
    </div>
  );
};