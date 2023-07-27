import { useNavigate } from "react-router-dom";
import "./Item.css";

export const Item = ({ img, category, title, id, price }) => {
  const navigate = useNavigate();
  return (
    <div className="item" onClick={() => navigate(`/item/${id}`)}>
      <div className="item__img">
        <img src={img} />
      </div>
      <div className="item__content">
        <div className="item__content-info">
          <span className="item__content-category">{category}</span>
          <span className="item__content-title">{title}</span>
        </div>
        <span className="item__content-price">
          $
          {price.toLocaleString("es-CO", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          })}
        </span>
      </div>
    </div>
  );
};

export default Item;