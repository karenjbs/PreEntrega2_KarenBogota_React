import { useEffect, useState } from "react";
import { ItemCount } from "../components/Itemcount/ItemCount";
import { getProduct } from "../lib/products.requests";
import { useParams } from "react-router-dom";
import "./Detail.css";

export const Detail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});


  useEffect(() => {
    getProduct(+id).then((res) => {
      setProduct(res);
    });
  }, []);

  if (!Object.keys(product).length) return

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={product.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{product.title} </span>

          <p className="detail__info-description">{product.description}</p>

          <span className="detail__info-price">
            $
            {(product.price || 0).toLocaleString("es-CO", {
              minimumFractionDigits: 3,
              maximumFractionDigits: 3,
            })}
          </span>

          <span className="detail__info-stock">¡Quedan solo {product.stock}!</span>

          <ItemCount stock={product.stock} onAdd={() => alert("Comprados")} />
        </div>
      </div>
    </div>
  );
};