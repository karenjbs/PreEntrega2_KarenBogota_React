import { RiShoppingCart2Fill} from "react-icons/ri";
import "./CartWidget.css";

export const CartWidget = () => (
    <div >
      <RiShoppingCart2Fill /> <span className="number">(3)</span>
    </div>
  );