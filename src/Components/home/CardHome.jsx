import axios from "axios";
import { useNavigate } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const CardHome = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => () => {
    navigate(`/store/product/${product.id}`);
  };

  return (
    <article onClick={handleClick()} className="card-home">
      <div className="card-home_body">
        <h3 className="card-home_name">{product.title}</h3>
        <h3 className="card-home_name">
          {product.completed === false ? "To do" : "work done"}
        </h3>
      </div>
    </article>
  );
};

export default CardHome;
